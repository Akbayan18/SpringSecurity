package kz.bitlab.group1.security.securitypro1.model;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

@Getter
@Setter
@Entity
public class Roles extends BaseEntity implements GrantedAuthority {

    private String role;

    @Override
    public String getAuthority() {
        return role;
    }
}
