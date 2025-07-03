package com.codewithjezorb.backend.controller;

import com.codewithjezorb.backend.model.Costumer;
import com.codewithjezorb.backend.model.UserInputHandle;
import com.codewithjezorb.backend.service.CostumerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/customer")
@CrossOrigin
public class ConsumerController {

    @Autowired
    private CostumerService service;
    private UserInputHandle handle;


    @PostMapping ("/login")
    public ResponseEntity<?> login(@RequestBody Costumer com1) {
        System.out.println(com1.getEmail());
        Costumer customer = service.findCustomer(com1.getEmail());
        if (customer == null) {
            return new ResponseEntity<>("User does not exist", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody Costumer com1) {
        Costumer savedCustomer = service.createCustomer(com1);
        if (savedCustomer == null) {
            return new ResponseEntity<>("User already exists", HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(savedCustomer, HttpStatus.CREATED);
    }

    @PutMapping("/cart/add")
    public ResponseEntity<?> addToCart(@RequestBody UserInputHandle handle ) {
        System.out.println( handle );
        Costumer customer = service.addToCart(handle.getNumber(), handle.getProductId());
        if (customer == null) {
            return new ResponseEntity<>("Customer not found", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }

    @DeleteMapping("/cart/remove")
    public ResponseEntity<?> removeFromCart(@RequestBody UserInputHandle handle) {

        Costumer customer = service.removeFromCart(handle.getNumber(), handle.getProductId());
        if (customer == null) {
            return new ResponseEntity<>("Customer not found", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }
}

