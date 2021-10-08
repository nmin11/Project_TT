package com.hanguseok.server.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
public class ReviewBoard {

    @Id @GeneratedValue
    @Column(name = "review_id")
    private Long id;

    @NotEmpty
    private String title;

    private int view;

    private int recommended;

    @NotEmpty
    private int image;

    @NotEmpty
    private String content;

    @NotEmpty
    private String region;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "review")
    private List<Comment> comments = new ArrayList<>();

    @OneToMany(mappedBy = "review")
    private List<BoardHash> hashtags = new ArrayList<>();

}
