package kz.bitlab.group1.security.securitypro1.repository;

import kz.bitlab.group1.security.securitypro1.model.Roles;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Repository
public interface RolesRepository extends JpaRepository<Roles, Long> {
    Roles findByRole(String role);
}
