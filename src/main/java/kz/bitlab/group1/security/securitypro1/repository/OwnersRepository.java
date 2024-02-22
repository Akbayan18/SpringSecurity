package kz.bitlab.group1.security.securitypro1.repository;

import kz.bitlab.group1.security.securitypro1.model.Owners;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Repository
public interface OwnersRepository extends JpaRepository<Owners, Long> {
    Owners findByEmail(String email);
}
