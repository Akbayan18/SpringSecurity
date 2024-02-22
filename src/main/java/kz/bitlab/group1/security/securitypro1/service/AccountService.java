package kz.bitlab.group1.security.securitypro1.service;



import kz.bitlab.group1.security.securitypro1.model.Owners;
import kz.bitlab.group1.security.securitypro1.model.Roles;
import kz.bitlab.group1.security.securitypro1.repository.OwnersRepository;
import kz.bitlab.group1.security.securitypro1.repository.RolesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AccountService {

    private final OwnersRepository ownersRepository;

    private final RolesRepository rolesRepository;

    private final PasswordEncoder passwordEncoder;

    private final OwnersService ownersService;




    public Owners registerOwner(String fullName ,String email, String gender, String age, String description, String password, String rePassword){
       Owners checkOwner=ownersRepository.findByEmail(email);
        if (checkOwner==null){
            if (password.equals(rePassword)){
                List<Roles> role=new ArrayList<>();
                Roles ownerRole=rolesRepository.findByRole("ROLE_USER");
                role.add(ownerRole);
                Owners owners=Owners
                        .builder()
                        .fullName(fullName)
                        .email(email)
                        .gender(gender)
                        .age(age)
                        .description(description)
                        .password(passwordEncoder.encode(password))
                        .roles(role)
                        .build();
                return ownersRepository.save(owners);
            }
        }
        return null;
    }
//
//    public Usser updatePassword(String oldPassword, String newPassword, String repeatPassword){
//        Usser currentUser=usserService.getCurrentUsers();
//        if (currentUser!=null){
//            if (newPassword.equals(repeatPassword)&&
//                    passwordEncoder.matches(oldPassword, currentUser.getPassword())){
//                currentUser.setPassword(passwordEncoder.encode(newPassword));
//                return usserRepository.save(currentUser);
//            }
//        }
//        return null;
//    }


}
