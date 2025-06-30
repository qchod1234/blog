package click.bcyeon.back01.restapi.admin.service;

import click.bcyeon.back01.restapi.admin.dto.Admin;
import click.bcyeon.back01.restapi.admin.mapper.AdminMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AdminService implements UserDetailsService {

    @Autowired
    private AdminMapper adminMapper;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Admin admin = adminMapper.findById(username);
        if (admin == null) {
            throw new UsernameNotFoundException("관리자를 찾을 수 없음");
        }

        return User.builder()
                .username(admin.getId())
                .password(admin.getPassword())
                .roles("ADMIN")
                .build();
    }
}