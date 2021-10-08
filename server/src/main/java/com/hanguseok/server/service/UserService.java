package com.hanguseok.server.service;

import com.hanguseok.server.dto.LoginDto;
import com.hanguseok.server.dto.RegisterDto;
import com.hanguseok.server.entity.User;
import com.hanguseok.server.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User findUser(LoginDto dto) {
        return userRepository.findByEmail(dto.getEmail()).get();
    }

    public User findUserByEmail(String email) {
        return userRepository.findByEmail(email).get();
    }

    public User join(RegisterDto dto) {
        User user = User.builder()
                .email(dto.getEmail())
                .nickname(dto.getNickname())
                .password(dto.getPassword())
                .build();
        userRepository.save(user);
        return user;
    }

    public boolean existEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent()) {
            return true;
        } else {
            return false;
        }
    }

    public boolean existNickname(String nickname) {
        Optional<User> user = userRepository.findByNickname(nickname);
        if (user.isPresent()) {
            return true;
        } else {
            return false;
        }
    }

}
