package click.bcyeon.back01.restapi.admin.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @GetMapping("/check")
    public Map<String, Boolean> checkLogin(Authentication authentication) {
        boolean isAdmin = authentication != null && authentication.isAuthenticated();
        return Map.of("isAdmin", isAdmin);
    }
}
