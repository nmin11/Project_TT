package com.hanguseok.server.controller;

import com.hanguseok.server.dto.ReviewDto;
import com.hanguseok.server.entity.BoardHash;
import com.hanguseok.server.entity.ReviewBoard;
import com.hanguseok.server.service.ReviewBoardService;
import com.hanguseok.server.service.S3Uploader;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/review")
@RequiredArgsConstructor
public class ReviewBoardController {

    private final ReviewBoardService reviewBoardService;
    private final S3Uploader s3Uploader;

    @GetMapping
    public ResponseEntity<?> allReview() {
        try {
            List<ReviewBoard> reviews = reviewBoardService.findAllReviews();
            return ResponseEntity.ok().body(new HashMap<>() {
                {
                    for (ReviewBoard review : reviews) {
                        put(review.getId(), new HashMap<>() {
                            {
                                put("title", review.getTitle());
                                put("view", review.getView());
                                put("recommend", review.getRecommended());
                                put("image", review.getImage());
                                put("content", review.getContent());
                                put("region", review.getRegion());
                                put("author", review.getUser().getNickname());
                                put("comments", review.getComments());
                                List<String> hashtags = new ArrayList<>();
                                for (BoardHash boardHash : review.getHashtags()) {
                                    hashtags.add(boardHash.getHashtag().getName());
                                }
                                put("hashtags", hashtags);
                            }
                        });
                    }
                }
            });
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new HashMap<>() {
                {
                    put("message", "리뷰 게시글 데이터를 받아올 수 없습니다!");
                }
            });
        }
    }

    @PostMapping
    @ResponseBody
    public ResponseEntity<?> reviewUpload(ReviewDto dto, @RequestParam("data")MultipartFile multipartFile) throws IOException {
        ReviewBoard review = reviewBoardService.postReview(dto);
        String uploadUrl = s3Uploader.upload(multipartFile, "static");
        return null;
    }

}
