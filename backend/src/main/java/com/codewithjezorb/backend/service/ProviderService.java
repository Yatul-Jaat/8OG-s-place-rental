package com.codewithjezorb.backend.service;

import com.codewithjezorb.backend.model.Provider;
import com.codewithjezorb.backend.repo.ProviderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ProviderService {

    @Autowired
    private ProviderRepo repository;

    public Provider findProvider(String number) {
        if(repository.findById(number).isPresent()) {
            return repository.findById(number).get();
        }
        else  {
            return null;
        }
    }

    public Provider createProvider(Provider provider) {
        if(repository.findById(provider.getNumber()).isEmpty()) {
            return repository.save(provider);
        }
        else{
            return null;
        }
    }

    public Provider updateProduct(String number, int id) {
        Provider provider = findProvider(number);

        if(provider == null) {
            return null;
        }

        if(!provider.getProductList().contains(id)) {
            provider.getProductList().add(id);
            return repository.save(provider);
        }

        return  provider;
    }

    public Provider removeProduct(String number, int id) {
        Provider provider = findProvider(number);

        if(provider == null) {
            return null;
        }

        if(!provider.getProductList().contains(id)) {
            provider.getProductList().remove(Integer.valueOf(id));
            return repository.save(provider);
        }

        return   provider;
    }
}

