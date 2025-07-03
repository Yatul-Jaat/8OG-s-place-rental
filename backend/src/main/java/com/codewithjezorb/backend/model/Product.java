package com.codewithjezorb.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {
    @Id()
    @GeneratedValue(strategy = GenerationType.IDENTITY )
    private int  id;
    private String name;
    private String location;
    private double price;
    private String description;
    private double rating;
    private String imageName;
    private String imageType;
    @Lob
    private byte[] imageData;
}

