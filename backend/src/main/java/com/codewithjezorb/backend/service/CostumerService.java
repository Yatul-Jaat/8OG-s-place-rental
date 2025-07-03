package com.codewithjezorb.backend.service;

import com.codewithjezorb.backend.model.Costumer;
import com.codewithjezorb.backend.repo.CostumerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CostumerService {

    @Autowired
    private CostumerRepo repository;

    public Costumer findCustomer(String id) {
        System.out.println(id);
        Costumer costumer =repository.findById(id).orElse(null);
        System.out.println(costumer);
        return costumer;
    }

    public Costumer createCustomer(Costumer customer) {
        if (repository.findById(customer.getEmail()).isEmpty()) {
            return repository.save(customer);
        }
        return null; // Customer already exists
    }

    public Costumer addToCart(String number, int productId) {
        Costumer customer = findCustomer(number);
        if (customer == null) {
            return null; // Customer not found
        }

        // Check if product is already in cart to avoid duplicates
        if (!customer.getCartList().contains(productId)) {
            customer.getCartList().add(productId);
            return repository.save(customer);
        }
        return customer; // Product already in cart
    }

    public Costumer removeFromCart(String number, int productId) {
        Costumer customer = findCustomer(number);
        if (customer == null) {
            return null; // Customer not found
        }

        // Remove by value, not by index
        if(!customer.getCartList().contains(productId)) {
            customer.getCartList().remove(Integer.valueOf(productId));
            return repository.save(customer);
        }
        return customer;
    }
}