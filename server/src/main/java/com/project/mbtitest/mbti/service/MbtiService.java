package com.project.mbtitest.mbti.service;

import com.project.mbtitest.mbti.dto.MbtiRequestDto;
import org.springframework.stereotype.Service;

@Service
public class MbtiService {

    public String calculateMbti(MbtiRequestDto requestDto) {
        int E = countE(requestDto);
        int I = 3 - E;
        int N = countN(requestDto);
        int S = 3 - N;
        int T = countT(requestDto);
        int F = 3 - T;
        int P = countP(requestDto);
        int J = 3 - P;

        StringBuilder sb = new StringBuilder();
        sb.append(E > I ? "E" : "I");
        sb.append(N > S ? "N" : "S");
        sb.append(T > F ? "T" : "F");
        sb.append(P > J ? "P" : "J");

        return sb.toString();
    }

    private int countE(MbtiRequestDto requestDto){
        int count = 0;
        if("E".equalsIgnoreCase(requestDto.getQuestion1())) count++;
        if("E".equalsIgnoreCase(requestDto.getQuestion2())) count++;
        if("E".equalsIgnoreCase(requestDto.getQuestion3())) count++;

        return count;
    }

    private int countN(MbtiRequestDto requestDto){
        int count = 0;
        if("N".equalsIgnoreCase(requestDto.getQuestion4())) count++;
        if("N".equalsIgnoreCase(requestDto.getQuestion5())) count++;
        if("N".equalsIgnoreCase(requestDto.getQuestion6())) count++;

        return count;
    }

    private int countT(MbtiRequestDto requestDto){
        int count = 0;
        if("T".equalsIgnoreCase(requestDto.getQuestion7())) count++;
        if("T".equalsIgnoreCase(requestDto.getQuestion8())) count++;
        if("T".equalsIgnoreCase(requestDto.getQuestion9())) count++;

        return count;
    }

    private int countP(MbtiRequestDto requestDto){
        int count = 0;
        if("P".equalsIgnoreCase(requestDto.getQuestion10())) count++;
        if("P".equalsIgnoreCase(requestDto.getQuestion11())) count++;
        if("P".equalsIgnoreCase(requestDto.getQuestion12())) count++;

        return count;
    }
}
