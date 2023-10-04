package br.com.pichau.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import br.com.pichau.dao.ProdutoDAO;
import br.com.pichau.model.ProdutoModel;

@RestController
@CrossOrigin("*")
public class ProdutoControle {

    @Autowired
    ProdutoDAO dao;

    @GetMapping
    public Iterable<ProdutoModel> listar() {
        return dao.findAll();
    }

    @PostMapping
    public ResponseEntity<ProdutoModel> cadastrar(@RequestParam("img") MultipartFile 
    img, @RequestParam("description") String description, @RequestParam("preco") Double preco) {
        try{
            byte[] imgBytes = img.getBytes();
            ProdutoModel model = new ProdutoModel();
            model.setDescription(description);
            model.setImg(imgBytes);
            model.setPreco(preco);
            return new ResponseEntity<ProdutoModel>(dao.save(model), HttpStatus.CREATED);
        }catch (Exception e){
            return null;
        }
    }

    @PutMapping
    public ResponseEntity<ProdutoModel> alterar(@RequestBody ProdutoModel model) {
        return new ResponseEntity<ProdutoModel>(dao.save(model), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public void excluir(@PathVariable Integer id) {
        dao.deleteById(id);
    }
}
