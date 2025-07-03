package com.codewithjezorb.backend.model;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
public class Costumer {
    @Id()
    private String email;
    private String name;
    @Lob
    public List<Integer> cartList=new ArrayList<>();

}
