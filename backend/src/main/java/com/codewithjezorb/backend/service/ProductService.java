package com.codewithjezorb.backend.service;


import com.codewithjezorb.backend.model.Product;
import com.codewithjezorb.backend.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Component
public class ProductService {


    @Autowired
    private ProductRepo repository;


    public Product addProduct(Product product, MultipartFile file) throws IOException {
        product.setImageName(file.getOriginalFilename());
        product.setImageType(file.getContentType());
        product.setImageData(file.getBytes());
        return repository.save(product) ;
    }

    public List<Product> getProducts() {

        return repository.findAll();
    }

    public Product updateProduct(Product product, MultipartFile file) throws IOException {
        if(repository.findById(product.getId()).isPresent()) {
            product.setImageName(file.getOriginalFilename());
            product.setImageType(file.getContentType());
            product.setImageData(file.getBytes());
            return  repository.save(product) ;
        }
        else {
            return  null;
        }

    }

    public void deleteProduct(int id) {
        if(repository.findById(id).isPresent()) {
            repository.deleteById(id);
        }
        return;
    }

    public Product ProductById(Product  product) {
        if(repository.findById(product.getId()).isPresent()) {
            return repository.findById(product.getId()).get();
        }
        return null;
    }
}
