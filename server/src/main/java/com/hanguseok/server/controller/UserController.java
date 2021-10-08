package com.hanguseok.server.controller;

import com.hanguseok.server.dto.UserDto;
import com.hanguseok.server.entity.User;
import com.hanguseok.server.service.TokenService;
import com.hanguseok.server.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity<?> Login(@RequestBody UserDto dto, HttpServletResponse response) {
        try {
            User user = userService.FindUser();
            String accessToken = tokenService.CreateJwtToken(user, 3000L);
            String refreshToken = tokenService.CreateJwtToken(user, 6000L);
            Cookie cookie = new Cookie("refreshToken", refreshToken);
            response.addCookie(cookie);

            return ResponseEntity.ok().body(new HashMap<>() {
                {
                    put("accessToken", accessToken);
                    put("refreshToken", refreshToken);
                }
            });
        } catch (Exception e) {
            log.error("Login Exception Error : " + e);
            return ResponseEntity.badRequest().body(new HashMap<>() {
                {
                    put("message", "Email이나 비밀번호가 틀렸습니다.");
                }
            });
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<?> Logout(@RequestBody Map<String, String> map) {
        String email = null;
        String accessToken = map.get("accessToken");



        return null;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> Signup() {
        return null;
    }

}
