document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const dadosFormulario = new FormData(this);
    fetch("http://localhost:8080/", {

        method: "POST",
        body: dadosFormulario
    })
        .then(resposta => resposta.json())
        .then(produto => inserirProduto(produto))
        .catch(erro => console.log("Ocorreu um erro ao Cadastrar o produto:" + erro));
});

