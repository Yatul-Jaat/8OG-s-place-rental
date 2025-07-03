package com.codewithjezorb.backend.repo;

import com.codewithjezorb.backend.model.Costumer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CostumerRepo extends JpaRepository<Costumer,String> {
}
