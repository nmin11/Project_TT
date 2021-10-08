package com.hanguseok.server.service;

import com.hanguseok.server.entity.User;
import io.jsonwebtoken.Header;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.util.Date;

@Service
public class TokenService {

    private final static String KEY = "hanguseokkey";

    public String CreateJwtToken(User user, Long time) {
        Date expireDate = new Date(new Date().getTime() + time);
        Date now = new Date();

        return Jwts.builder()
                .setHeaderParam(Header.TYPE, Header.JWT_TYPE)
                .setIssuer("fresh")
                .setIssuedAt(now)
                .setExpiration(new Date(now.getTime() + Duration.ofSeconds(time).toMillis()))
                .claim("email", user.getEmail())
                .claim("password", user.getPassword())
                .signWith(SignatureAlgorithm.HS256, KEY)
                .compact();
    }
}
