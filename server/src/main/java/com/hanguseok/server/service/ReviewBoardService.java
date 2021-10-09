package com.hanguseok.server.service;

import com.hanguseok.server.dto.ReviewDto;
import com.hanguseok.server.entity.ReviewBoard;
import com.hanguseok.server.repository.ReviewBoardRepository;
import com.hanguseok.server.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ReviewBoardService {

    private final ReviewBoardRepository reviewBoardRepository;
    private final UserRepository userRepository;

    public List<ReviewBoard> findAllReviews() {
        return reviewBoardRepository.findAll();
    }

    public ReviewBoard postReview(ReviewDto dto) {
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
