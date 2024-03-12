package com.project.mbtitest.mbti.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;


@Entity
public class MbtiResult {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ResultId;

    private String question1;
    private String question2;
    private String question3;
    private String question4;
    private String question5;
    private String question6;
    private String question7;
    private String question8;
    private String question9;
    private String question10;
    private String question11;
    private String question12;

    @Column
    private String result;

    @Column
    private LocalDateTime createdAt;
}
