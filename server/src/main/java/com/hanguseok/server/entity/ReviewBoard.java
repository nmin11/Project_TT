package com.hanguseok.server.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class ReviewBoard extends BaseEntity implements Serializable {

    @Id @GeneratedValue
    @Column(name = "review_id")
    private Long id;

    @NotEmpty
    private String title;

    private int view;

    private int recommended;

    private String image;

    @NotEmpty
    private String content;

    @NotEmpty
    private String region;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "review", cascade = CascadeType.REMOVE)
    private List<Comment> comments = new ArrayList<>();

    @OneToMany(mappedBy = "review")
    private List<BoardHash> hashtags = new ArrayList<>();

}
