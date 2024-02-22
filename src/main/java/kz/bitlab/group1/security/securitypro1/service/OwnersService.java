package kz.bitlab.group1.security.securitypro1.service;

import kz.bitlab.group1.security.securitypro1.model.Owners;
import kz.bitlab.group1.security.securitypro1.repository.OwnersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OwnersService implements UserDetailsService {

    private final OwnersRepository ownersRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Owners owners=ownersRepository.findByEmail(username);
        if (owners!=null) return owners;
        throw new UsernameNotFoundException("User not found!");
    }

    public Owners getCurrentUsers(){
        Authentication authentication= SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)){
            Owners owners= (Owners) authentication.getPrincipal();
            return owners;
        }
        return null;
    }

}
