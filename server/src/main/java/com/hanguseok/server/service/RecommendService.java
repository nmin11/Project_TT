package com.hanguseok.server.service;

import com.hanguseok.server.entity.Recommend;
import com.hanguseok.server.entity.ReviewBoard;
import com.hanguseok.server.entity.User;
import com.hanguseok.server.repository.RecommendRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class RecommendService {

    private final RecommendRepository recommendRepository;

    public boolean alreadyRecommend(User user) {
        Optional<Recommend> recommend = recommendRepository.findByUser(user);
        return recommend.isPresent();
    }

    public void deleteRecommend(User user, ReviewBoard review) {
        Recommend recommend = recommendRepository.findByUserAndReview(user, review).get();
        recommendRepository.deleteById(recommend.getId());
    }

    public List<Recommend> findByReview(ReviewBoard review) {
        return recommendRepository.findByReview(review);
    }

    public void createRecommend(User user, ReviewBoard review) {
        Recommend recommend = Recommend.builder()
                .user(user)
                .review(review)
                .build();

        recommendRepository.save(recommend);
    }

}
