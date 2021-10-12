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
import org.springframework.web.multipart.MultipartFile;

import javax.transaction.Transactional;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class ReviewBoardService {

    private final ReviewBoardRepository reviewBoardRepository;
    private final S3Uploader s3Uploader;
    private final HashtagService hashtagService;
    private final BoardHashService boardHashService;

    public List<ReviewBoard> findAllReviews() {
        return reviewBoardRepository.findAll();
    }

    public void deletePost(Long id) {
        reviewBoardRepository.deleteById(id);
    }

    public ReviewBoard findReviewById(Long id) {
        return reviewBoardRepository.findById(id).get();
    }

    public ReviewBoard initReview(User user, ReviewDto dto) {
        try {
            System.out.println("--- 리뷰 서비스 연결 확인 ---");
            ReviewBoard review = ReviewBoard.builder()
                    .user(user)
                    .title(dto.getTitle())
                    .content(dto.getContent())
                    .region(dto.getRegion())
                    .view(0)
                    .image(dto.getImage())
                    .build();
            System.out.println("--- 리뷰 저장 직전 확인 ---");
            reviewBoardRepository.save(review);
            return review;
        } catch (Exception e) {
            log.error("Review post error : " + e);
            return null;
        }
    }

    public ReviewBoard editReview(Long id, ReviewDto dto) {
        ReviewBoard review = reviewBoardRepository.findById(id).get();

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

        ReviewBoard updatedReview = ReviewBoard.builder()
                .id(review.getId())
                .user(review.getUser())
                .title(dto.getTitle())
                .view(review.getView())
                .content(dto.getContent())
                .image(dto.getImage())
                .comments(review.getComments())
                .region(dto.getRegion())
                .build();

        for (Hashtag hashtag : hashtags) {
            BoardHash boardHash = BoardHash.builder()
                    .hashtag(hashtag)
                    .review(updatedReview)
                    .build();

            boardHashService.connectTag(boardHash);
        }

        reviewBoardRepository.save(updatedReview);
        return updatedReview;
    }

    public void saveReview(ReviewBoard review) {
        reviewBoardRepository.save(review);
    }

}
