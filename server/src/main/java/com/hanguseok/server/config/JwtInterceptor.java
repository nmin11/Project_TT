package com.hanguseok.server.config;

import com.hanguseok.server.service.TokenService;
import org.apache.commons.codec.binary.StringUtils;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.logging.Logger;

public class JwtInterceptor extends HandlerInterceptorAdapter {

    Logger logger = (Logger) LoggerFactory.getLogger("io.ojw.mall.interceptor.JwtInterceptor");

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
        }else{
            return false;
        }
    }

}
