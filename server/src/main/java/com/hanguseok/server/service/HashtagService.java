package com.hanguseok.server.service;

import com.hanguseok.server.entity.Hashtag;
import com.hanguseok.server.repository.HashtagRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class HashtagService {

    private final HashtagRepository hashtagRepository;

    public boolean alreadyExist(String name) {
        Optional<Hashtag> hashtag = hashtagRepository.findByName(name);
        if (hashtag.isPresent()) return true;
        else return false;
    }

    public Hashtag saveHashtag(String name) {
        Hashtag hashtag = Hashtag.builder()
                .name(name)
                .build();
        hashtagRepository.save(hashtag);
        return hashtag;
    }
}
