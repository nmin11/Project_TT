package com.hanguseok.server.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

import static javax.persistence.FetchType.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
public class Comment {

    @Id @GeneratedValue
    private Long id;

    @NotEmpty
    private String content;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "review_id")
    private ReviewBoard review;

}
