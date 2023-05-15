package com.jojoldu.book.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
public class HelloResponseDto {
    private String name;
    private int amount;
}
