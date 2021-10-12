package com.hanguseok.server.service;

import com.hanguseok.server.entity.BoardHash;
import com.hanguseok.server.repository.BoardHashRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class BoardHashService {

    private final BoardHashRepository boardHashRepository;

    public void connectTag(BoardHash boardHash) {
        System.out.println("리뷰-해시태그 다대다 연결 작업");
        boardHashRepository.save(boardHash);
        System.out.println("리뷰-해시태그 연동 저장 완료");
    }

}
