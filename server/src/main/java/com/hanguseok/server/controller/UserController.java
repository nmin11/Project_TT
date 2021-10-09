package com.hanguseok.server.controller;

import com.hanguseok.server.dto.LoginDto;
import com.hanguseok.server.dto.RegisterDto;
import com.hanguseok.server.entity.User;
import com.hanguseok.server.service.TokenService;
import com.hanguseok.server.service.UserService;
import com.hanguseok.server.valid.AccountValidator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
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
    public ResponseEntity<?> login(@RequestBody LoginDto dto, HttpServletResponse response) {
        try {
            User user = userService.findUser(dto);
            String accessToken = tokenService.createJwtToken(user, 3000L);
            String refreshToken = tokenService.createJwtToken(user, 6000L);
            Cookie cookie = new Cookie("refreshToken", refreshToken);
            response.addCookie(cookie);

            return ResponseEntity.ok().body(new HashMap<>() {
                {
                    put("accessToken", accessToken);
                    put("refreshToken", refreshToken);
                    put("message", null);
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

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody RegisterDto dto) {
        try {
            User user = userService.join(dto);
            return ResponseEntity.ok().body(new HashMap<>() {
                {
                    put("id", user.getId());
                    put("email", user.getEmail());
                    put("nickname", user.getNickname());
                    put("message", null);
                }
            });
        } catch (Exception e) {
            log.error("Signup Exception : " + e);
            return ResponseEntity.badRequest().body(new HashMap<>() {
                {
                    put("message", "회원가입에 실패했습니다.");
                }
            });
        }
    }

    @GetMapping("/duplication-check")
    public ResponseEntity<?> formValidation(@RequestBody RegisterDto dto) {
        if (userService.existEmail(dto.getEmail())) {
            return ResponseEntity.badRequest().body(new HashMap<>() {
                {
                    put("message", "중복되는 이메일이 존재합니다!");
                }
            });
        } else if (userService.existNickname(dto.getNickname())) {
            return ResponseEntity.badRequest().body(new HashMap<>() {
                {
                    put("message", "중복되는 닉네임이 존재합니다!");
                }
            });
        }

        return ResponseEntity.ok().body(new HashMap<>() {
            {
                put("message", "회원가입이 가능합니다.");
            }
        });
    }

    @GetMapping("/token-valid-check")
    public ResponseEntity<?> tokenValidCheck(@RequestHeader Map<String, String> header) {
        tokenService.isValidAuthHeader(header.get("authorization"));
        String key = tokenService.extractToken(header.get("authorization"));

        Map<String, String> checkResult = tokenService.checkJwtToken(key);
        if (checkResult.get("id") != null) {
            User user = userService.findUserByEmail(checkResult.get("email"));

            return ResponseEntity.ok().body(new HashMap<>() {
                {
                    put("message", checkResult.get("message"));
                }
            });
        } else {
            return ResponseEntity.badRequest().body(new HashMap<>() {
                {
                    put("message", checkResult.get("message"));
                }
            });
        }
    }

    @GetMapping("/renewal-token")
    public ResponseEntity<?> renewalToken(HttpServletRequest request) {
        String cookiesResult = "";
        Cookie[] cookies = request.getCookies();
        for (Cookie cookie : cookies) {
            if (cookie.getName().equals("refreshToken")) {
                cookiesResult = cookie.getValue();
            }
        }

        if (cookiesResult.equals("")) {
            return ResponseEntity.badRequest().body(new HashMap<>() {
                {
                    put("data", null);
                    put("message", "refresh token 이 존재하지 않습니다.");
                }
            });
        }

        Map<String, String> checkResult = tokenService.checkJwtToken(cookiesResult);
        if (checkResult.get("email") != null) {
            User user = userService.findUserByEmail(checkResult.get("email"));
            String finalCookiesResult = cookiesResult;
            return ResponseEntity.ok().body(new HashMap<>() {
                {
                    put("data", new HashMap<>() {
                        {
                            put("accessToken", tokenService.createJwtToken(user, 3000L));
                        }
                    });
                }
            });
        } else {
            return ResponseEntity.badRequest().body(new HashMap<>() {
                {
                    put("message", checkResult.get("message"));
                }
            });
        }
    }

}
