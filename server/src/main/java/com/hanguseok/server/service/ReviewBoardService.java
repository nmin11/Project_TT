package com.hanguseok.server.service;

import com.hanguseok.server.dto.ReviewDto;
import com.hanguseok.server.entity.Hashtag;
import com.hanguseok.server.entity.ReviewBoard;
import com.hanguseok.server.repository.BoardHashRepository;
import com.hanguseok.server.repository.HashtagRepository;
import com.hanguseok.server.repository.ReviewBoardRepository;
import com.hanguseok.server.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewBoardService {

    private final ReviewBoardRepository reviewBoardRepository;
    private final UserRepository userRepository;
    private final HashtagRepository hashtagRepository;
    private final BoardHashRepository boardHashRepository;

    public List<ReviewBoard> findAllReviews() {
        return reviewBoardRepository.findAll();
    }

    public ReviewBoard postReview(ReviewDto dto) {
        List<Hashtag> hashtags = new ArrayList<>();
        for (String el : dto.getHashtags()) {
            Hashtag hashtag = Hashtag.builder()
                    .name(el)
                    .build();
        }
        ReviewBoard review = ReviewBoard.builder()
                .title(dto.getTitle())
                .view(0)
                .recommended(0)
                .content(dto.getContent())
                .region(dto.getRegion())
                .user(userRepository.findById(dto.getUserId()).get())
                .build();
        reviewBoardRepository.save(review);
        return review;
    }

}
