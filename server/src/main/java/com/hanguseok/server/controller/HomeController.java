package com.hanguseok.server.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://projecttt-client-bucket.s3-website.ap-northeast-2.amazonaws.com", allowedHeaders = "*", allowCredentials = "true")
public class HomeController {

    @GetMapping
    public String Homepage() { return "Welcome to HanGuSeok!"; }

}
