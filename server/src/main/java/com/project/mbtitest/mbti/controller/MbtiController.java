package com.project.mbtitest.mbti.controller;

import com.project.mbtitest.mbti.dto.MbtiRequestDto;
import com.project.mbtitest.mbti.dto.MbtiResponseDto;
import com.project.mbtitest.mbti.service.MbtiService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/cafe-mbti")
public class MbtiController {

    private final MbtiService mbtiService;


    @PostMapping("/result")
    public MbtiResponseDto processForm(@RequestBody MbtiRequestDto requestDto) {
        String mbtiType = mbtiService.calculateMbti(requestDto);
        return new MbtiResponseDto(mbtiType);
    }

}
