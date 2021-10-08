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
public class User extends BaseEntity {

    @Id @GeneratedValue
    @Column(name = "user_id")
    private Long id;

    @NotEmpty
    private String email;

    @NotEmpty
    private String nickname;

    @NotEmpty
    private String password;

    @NotEmpty
    private String phone_number;

    @OneToMany(mappedBy = "user")
    private List<ReviewBoard> reviews = new ArrayList<>();

}
