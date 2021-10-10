package com.hanguseok.server.service;

import com.hanguseok.server.dto.ReviewDto;
import com.hanguseok.server.entity.BoardHash;
import com.hanguseok.server.entity.Hashtag;
import com.hanguseok.server.entity.ReviewBoard;
import com.hanguseok.server.entity.User;
import com.hanguseok.server.repository.BoardHashRepository;
import com.hanguseok.server.repository.HashtagRepository;
import com.hanguseok.server.repository.ReviewBoardRepository;
import com.hanguseok.server.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class ReviewBoardService {

    private final ReviewBoardRepository reviewBoardRepository;
    private final UserRepository userRepository;
    private final HashtagRepository hashtagRepository;
    private final BoardHashRepository boardHashRepository;

    public List<ReviewBoard> findAllReviews() {
        return reviewBoardRepository.findAll();
    }

    /*
    public ReviewBoard postReview(ReviewDto dto) {
        List<Hashtag> hashtags = new ArrayList<>();
        for (String el : dto.getHashtags()) {
            Hashtag hashtag = Hashtag.builder()
                    .name(el)
                    .build();
            hashtagRepository.save(hashtag);
            hashtags.add(hashtag);
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
        for (Hashtag hashtag : hashtags) {
            BoardHash boardHash = BoardHash.builder()
                    .review(review)
                    .hashtag(hashtag)
                    .build();
            boardHashRepository.save(boardHash);
        }
        return review;
    }
     */

    public void deletePost(Long id) {
        reviewBoardRepository.deleteById(id);
    }

    public ReviewBoard findReviewById(Long id) {
        return reviewBoardRepository.findById(id).get();
    }

    public ReviewBoard saveReview(User user, List<Hashtag> hashtags, ReviewDto dto) {
        try {
            System.out.println("--- 리뷰 서비스 연결 확인 ---");
            ReviewBoard review = ReviewBoard.builder()
                    .user(user)
                    .title(dto.getTitle())
                    .content(dto.getContent())
                    .region(dto.getRegion())
                    .view(0)
                    .recommended(0)
                    .build();
            System.out.println("--- 리뷰 저장 직전 확인 ---");
            reviewBoardRepository.save(review);
            return review;
        } catch (Exception e) {
            log.error("Review post error : " + e);
            return null;
        }
    }
}
