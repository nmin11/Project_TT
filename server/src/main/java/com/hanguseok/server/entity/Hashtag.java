package com.hanguseok.server.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
public class Hashtag {

    @Id @GeneratedValue
    @Column(name = "hashtag_id")
    private Long id;

    @NotEmpty
    private String name;

    @OneToMany(mappedBy = "hashtag")
    private List<BoardHash> reviews = new ArrayList<>();

}
