package com.hanguseok.server.controller;

import com.hanguseok.server.service.ReviewBoardService;
import com.hanguseok.server.service.S3Uploader;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/review")
@RequiredArgsConstructor
public class ReviewBoardController {

    private final ReviewBoardService reviewBoardService;
    private final S3Uploader s3Uploader;

    @PostMapping
    @ResponseBody
    public ResponseEntity<?> reviewUpload(@RequestParam("data")MultipartFile multipartFile) throws IOException {
        String uploadUrl = s3Uploader.upload(multipartFile, "static");
        return null;
    }

}
