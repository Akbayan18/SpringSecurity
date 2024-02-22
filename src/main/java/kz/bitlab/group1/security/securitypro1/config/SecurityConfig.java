package kz.bitlab.group1.security.securitypro1.config;

import kz.bitlab.group1.security.securitypro1.service.OwnersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableMethodSecurity
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private OwnersService ownersService;

    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        AuthenticationManagerBuilder builder =
                http.getSharedObject(AuthenticationManagerBuilder.class);

        builder.userDetailsService(ownersService)
                .passwordEncoder(passwordEncoder());

        http.exceptionHandling().accessDeniedPage("/forbidden");

        http.formLogin()
                .loginPage("/index")
                .loginProcessingUrl("/authentication")
                .defaultSuccessUrl("/profile")
                .failureUrl("/index?error")
                .usernameParameter("owner_email")
                .passwordParameter("owner_password");

        http.logout()
                .logoutUrl("/logout")
                .logoutSuccessUrl("/index");

        http.csrf().disable();

        return http.build();
    }
}
