package com.codewithjezorb.backend.controller;

import com.codewithjezorb.backend.model.Product;
import com.codewithjezorb.backend.model.UserInputHandle;
import com.codewithjezorb.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController()
@RequestMapping("/product")
@CrossOrigin
public class ProductController {

    @Autowired
    ProductService service;

    @PostMapping("/add")
    public ResponseEntity<?> addProduct(
            @RequestPart("product") Product product,
            @RequestPart("file") MultipartFile file) throws IOException {

        try {
            Product p1 = service.addProduct(product, file);

            if (p1 == null) {
                throw new Exception("error occured");
            }
            return new ResponseEntity<>(p1, HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/")
    public ResponseEntity<?> getProduct()  {
        List<Product> p1 = service.getProducts();
        if (p1 == null) {
            return new ResponseEntity<>("Products not found", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(p1, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<?> updateProduct(
            @RequestPart("product") Product product,
            @RequestPart("newFile")  MultipartFile Newfile) throws IOException
    {
        Product p1 = service.updateProduct(product,Newfile);
        if (p1 == null) {
            return new ResponseEntity<>("Product not found", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(p1, HttpStatus.OK);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteProduct(@RequestBody Product product) {
        service.deleteProduct(product.getId());
        return new ResponseEntity<>("Product deleted", HttpStatus.OK);
    }

    @GetMapping("/single")
    public ResponseEntity<?> getProductById(@RequestBody Product product) {
        Product product1 =service.ProductById(product);
        if (product1 == null) {
            return new ResponseEntity<>("Product not found", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(product, HttpStatus.OK);
    }
}
