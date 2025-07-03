package com.codewithjezorb.backend.controller;

import com.codewithjezorb.backend.model.Provider;
import com.codewithjezorb.backend.model.UserInputHandle;
import com.codewithjezorb.backend.service.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/provider")
@CrossOrigin
public class ProviderController {

    @Autowired
    private ProviderService service;
    private UserInputHandle handle;

    @PostMapping ("/login")
    public ResponseEntity<?> login(@RequestBody Provider pro1) {
        Provider provider=service.findProvider(pro1.getNumber());
        if(provider==null){
            return new ResponseEntity<>("the user don't exists",HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(provider,HttpStatus.FOUND);

    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody Provider pro1) {
        Provider provider1=service.createProvider(pro1);
        if(provider1==null){
        return new ResponseEntity<>("the user already exists",HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(provider1,HttpStatus.CREATED);
    }

    @PutMapping("/addProduct")
    public ResponseEntity<?> addProduct(@RequestBody UserInputHandle handle) {
        Provider provider=service.updateProduct(handle.getNumber(),handle.getProductId());
        if (provider != null) {
            return new ResponseEntity<>(provider,HttpStatus.OK);
        }
        return new ResponseEntity<>("error...",HttpStatus.NOT_FOUND);

    }

    @DeleteMapping("/removeProduct")
    public ResponseEntity<?> removeProduct(@RequestBody UserInputHandle handle) {
        Provider provider=service.removeProduct(handle.getNumber(),handle.getProductId());
        if (provider != null) {
            return new ResponseEntity<>(provider,HttpStatus.OK);
        }
        return new ResponseEntity<>("error...",HttpStatus.NOT_FOUND);
    }

}
