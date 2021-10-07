package com.hanguseok.server.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping
    public String Homepage() { return "Welcome to HanGuSeok!"; }

}
