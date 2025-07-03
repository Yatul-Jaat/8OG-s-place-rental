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
public class Provider {
    @Id()
    private String number;
    private String name;
    private String email;
    @Lob
    private List<Integer> productList =new ArrayList<>();
}
