package com.hanguseok.server.controller;

import com.hanguseok.server.dto.RecommendDto;
import com.hanguseok.server.dto.ReviewDto;
import com.hanguseok.server.entity.*;
import com.hanguseok.server.service.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/review")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://projecttt-client-bucket.s3-website.ap-northeast-2.amazonaws.com", allowedHeaders = "*", allowCredentials = "true")
public class ReviewBoardController {

    private final ReviewBoardService reviewBoardService;
    private final HashtagService hashtagService;
    private final UserService userService;
    private final BoardHashService boardHashService;
    private final RecommendService recommendService;

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
                                put("recommend", review.getRecommends().size());
                                put("image", review.getImage());
                                put("content", review.getContent());
                                put("region", review.getRegion());
                                put("author", review.getUser().getNickname());
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
                    put("message", "?????? ????????? ???????????? ????????? ??? ????????????!");
                }
            });
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findReviewById(@PathVariable("id") Long id) {
        try {
            ReviewBoard review = reviewBoardService.findReviewById(id);
            review.setView(review.getView() + 1);
            reviewBoardService.saveReview(review);
            return ResponseEntity.ok().body(new HashMap<>() {
                {
                    put("id", review.getId());
                    put("title", review.getTitle());
                    put("image", review.getImage());
                    put("content", review.getContent());
                    put("comments", new HashMap<>() {
                        {
                            List<Comment> comments = review.getComments();
                            for (Comment comment : comments) {
                                put(comment.getId(), new HashMap<>() {
                                    {
                                        put("comment-writer", comment.getUser().getNickname());
                                        put("comment-content", comment.getContent());
                                    }
                                });
                            }
                        }
                    });
                    List<String> hashtags = new ArrayList<>();
                    for (BoardHash boardHash : review.getHashtags()) {
                        hashtags.add(boardHash.getHashtag().getName());
                    }
                    put("hashtags", hashtags);
                    put("author", review.getUser().getNickname());
                    put("view", review.getView());
                    put("recommend", review.getRecommends().size());
                    put("region", review.getRegion());
                    put("message", "?????? ????????? ????????? ??????????????????.");
                }
            });
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new HashMap<>() {
                {
                    put("message", "????????? ?????? ???????????????!");
                }
            });
        }
    }

    @PostMapping
    public ResponseEntity<?> uploadReview(@RequestBody ReviewDto dto) {
        try {
            List<Hashtag> hashtags = new ArrayList<>();
            for (String el : dto.getHashtags()) {
                Hashtag hashtag;
                if (!hashtagService.alreadyExist(el)) {
                    hashtag = hashtagService.saveHashtag(el);
                } else {
                    hashtag = hashtagService.findHashtagByName(el);
                }
                hashtags.add(hashtag);
            }

            User user = userService.findUserById(dto.getUserId());

            ReviewBoard review = reviewBoardService.initReview(user, dto);

            for (Hashtag hashtag : hashtags) {
                BoardHash boardHash = BoardHash.builder()
                        .hashtag(hashtag)
                        .review(review)
                        .build();

                boardHashService.connectTag(boardHash);
            }

            return ResponseEntity.ok().body(new HashMap<>() {
                {
                    put("id", review.getId());
                    put("title", review.getTitle());
                    put("image", review.getImage());
                    put("content", review.getContent());
                    put("region", review.getRegion());
                    put("author", review.getUser().getNickname());
                }
            });
        } catch (Exception e) {
            log.error("?????? ?????? ?????? : " + e);
            return ResponseEntity.badRequest().body(new HashMap<>() {
                {
                    put("message", "????????? ?????? ???????????????!");
                }
            });
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteReview(@PathVariable("id") Long id) {
        try {
            reviewBoardService.deletePost(id);
            return ResponseEntity.ok().body(new HashMap<>() {
                {
                    put("message", "????????? ??????????????? ?????????????????????.");
                }
            });
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new HashMap<>() {
                {
                    put("message", "????????? ???????????? ???????????????.");
                }
            });
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> editReview(@PathVariable("id") Long id, @RequestBody ReviewDto dto) {
        try {
            ReviewBoard review = reviewBoardService.editReview(id, dto);
            return ResponseEntity.ok().body(new HashMap<>() {
                {
                    put("id", review.getId());
                    put("title", review.getTitle());
                    put("content", review.getContent());
                    put("image", review.getImage());
                    put("message", "??????????????? ?????????????????????.");
                }
            });
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new HashMap<>() {
                {
                    put("message", "?????? ????????? ??????????????????.");
                }
            });
        }
    }

    @PostMapping("/recommend")
    public ResponseEntity<?> reviewRecommend(@RequestBody RecommendDto dto) {
        try {
            User user = userService.findUserById(dto.getUserId());
            ReviewBoard review = reviewBoardService.findReviewById(dto.getReviewId());
            int len;
            if (recommendService.alreadyRecommend(user, review)) {
                recommendService.deleteRecommend(user, review);
                len = recommendService.findByReview(review).size();

                return ResponseEntity.ok().body(new HashMap<>() {
                    {
                        put("message", "?????? ??????????????????.");
                        put("?????? ???", len);
                    }
                });
            } else {
                recommendService.createRecommend(user, review);
                len = recommendService.findByReview(review).size();

                return ResponseEntity.ok().body(new HashMap<>() {
                    {
                        put("message", "???????????? ??????????????????.");
                        put("?????? ???", len);
                    }
                });
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(new HashMap<>() {
                {
                    put("message", "????????? ????????? ??????????????????!");
                }
            });
        }
    }

}
