// let produtos = [
//     {
//         "img":"img/ca-604w5.jpg",
//         "description":"Gabinete Gamer Redragon Wideload Lite, Mid-Tower, Lateral de Vidro, Branco, CA-604W",
//         "valor":"R$ 494,00",
//         "aVista":"R$ 389,90",
//         "comDesconto":"R$ 458,71",
//         "parcela":"R$ 38,23"
//     },
//     {
//         "img":"img/ca-604w5.jpg",
//         "description":"Gabinete Gamer Redragon Wideload Lite, Mid-Tower, Lateral de Vidro, Branco, CA-604W",
//         "valor":"R$ 494,00",
//         "aVista":"R$ 389,90",
//         "comDesconto":"R$ 458,71",
//         "parcela":"R$ 38,23"
//     }
// ];

let url = "http://localhost:8080/";

function getDadosJson(){
    fetch(url)
    .then(resposta => resposta.json())
    .then(produtos => listarProdutos(produtos))
    .catch(erro => console.log("Ocorreu um erro: " + erro));
}


function listarProdutos(produtos){
    produtos.forEach(p => {
       document.getElementById("prod-lan").appendChild(inserirProduto(p));
       document.getElementById("prod-ofertas").appendChild(inserirProduto(p));
    })
}

function inserirProduto(p){
    var cardProduto = document.createElement("div");
    cardProduto.classList.add("card-produto");
    
    var img = document.createElement("img");
    img.src = 'data:img.jpg;base64,' + p.img;
    img.alt = p.img;
    cardProduto.appendChild(img);
    
    var infoProduto = document.createElement("div");
    infoProduto.classList.add("info-produto");
    
    var textDescription = document.createElement("div");
    textDescription.classList.add("text-description");
    textDescription.innerText = p.description;
    infoProduto.appendChild(textDescription);
    
    var text1 = document.createElement("div");
    text1.classList.add("vermelho", "pequeno");
    text1.innerHTML = 'de <s>R$ ' + (p.preco).toFixed(2) + '</s> por:';
    infoProduto.appendChild(text1);
    
    var text2 = document.createElement("div");
    text2.classList.add("verde", "pequeno");
    text2.innerText = "à vista";
    infoProduto.appendChild(text2);

    var text3 = document.createElement("div");
    text3.classList.add("verde", "grande");
    text3.innerText = "R$" + ((p.preco * 0.90) * 0.85).toFixed(2);
    infoProduto.appendChild(text3);

    var text4 = document.createElement("div");
    text4.classList.add("branco", "pequeno");
    text4.innerText = "no PIX com 15% desconto";
    infoProduto.appendChild(text4);

    var tracinho = document.createElement("div");
    tracinho.classList.add("tracinho");
    infoProduto.appendChild(tracinho);

    var text5 = document.createElement("div");
    text5.classList.add("vermelho", "medio");
    text5.innerText = (p.preco * 0.90).toFixed(2);
    infoProduto.appendChild(text5);

    var text6 = document.createElement("div");
    text6.classList.add("branco", "pequeno");
    text6.innerHTML = 'em até 12x de <span class="vermelho">' + (p.preco / 12).toFixed
    (2) + '</span>';
    infoProduto.appendChild(text6);

    var text7 = document.createElement("div");
    text7.classList.add("branco", "pequeno");
    text7.innerText = "sem juros no cartão";
    infoProduto.appendChild(text7);

    cardProduto.appendChild(infoProduto);
    return cardProduto;
}




getDadosJson();