package com.jojoldu.book.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@Configuration
@EnableJpaAuditing
public class JpaConfig {
    // test code에서 @SpringBootTest를 사용하지 않는 경우 오류가 발생함.
    // JpaAuditiong은 별도의 config 파일에서 설정해야함.
}
