package kz.bitlab.group1.security.securitypro1.controller;

import kz.bitlab.group1.security.securitypro1.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequiredArgsConstructor
public class HomeController {

    private final AccountService accountService;

    @GetMapping(value = "/index")
    public String index(){
        return "index";
    }

    @GetMapping(value = "/registration")
    public String registration(){
        return "registration";
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/profile")
    public String prof(){return "profile";}


    @PostMapping(value = "/register")
    public String register(@RequestParam(name = "owner_full_name") String owner_full_name,
                           @RequestParam(name = "owner_email") String owner_email,
                           @RequestParam(name = "owner_gender") String owner_gender,
                           @RequestParam(name = "owner_age") String owner_age,
                           @RequestParam(name = "owner_description") String owner_description,
                           @RequestParam(name = "owner_password") String owner_password,
                           @RequestParam(name = "owner_re_password") String owner_re_password
                           ){
        if (accountService.registerOwner(owner_full_name, owner_email, owner_gender, owner_age, owner_description, owner_password, owner_re_password)!=null){
            return "redirect:/registration?success";
        } else {
            return "redirect:/registration?error";
        }
    }


    @GetMapping(value = "/forbidden")
    public String forbidden(){
        return "forbidden";
    }


}
