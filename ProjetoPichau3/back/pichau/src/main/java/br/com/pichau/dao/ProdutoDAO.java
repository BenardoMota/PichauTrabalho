package br.com.pichau.dao;

import org.springframework.data.repository.CrudRepository;

import br.com.pichau.model.ProdutoModel;

public interface ProdutoDAO extends CrudRepository<ProdutoModel, Integer>{
    
}
