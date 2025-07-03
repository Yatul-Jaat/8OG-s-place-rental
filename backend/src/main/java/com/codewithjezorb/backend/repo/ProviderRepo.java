package com.codewithjezorb.backend.repo;

import com.codewithjezorb.backend.model.Provider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProviderRepo extends JpaRepository<Provider,String> {
}
