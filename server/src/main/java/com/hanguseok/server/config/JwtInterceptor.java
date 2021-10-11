package com.hanguseok.server.config;

import com.hanguseok.server.service.TokenService;
import org.apache.commons.codec.binary.StringUtils;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class JwtInterceptor extends HandlerInterceptorAdapter {

    private static final String TOKEN = "JWT";

    private TokenService tokenService;

    public JwtInterceptor(TokenService tokenService) {
        this.tokenService = tokenService;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {
        final String token = request.getHeader(TOKEN);

        if (StringUtils.equals(request.getMethod(), "OPTIONS")) {
            return true;
        }

        if(token != null && tokenService.checkJwtToken(token).get("message") == null){
            return true;
        } else {
            return false;
        }
    }

}