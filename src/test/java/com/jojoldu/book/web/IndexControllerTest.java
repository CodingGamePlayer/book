package com.jojoldu.book.web;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;

import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT;

@SpringBootTest(webEnvironment = RANDOM_PORT)
class IndexControllerTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void 메인페이지_로딩 () {
        //given
        //when
        String body = restTemplate.getForObject("/", String.class);

        //then
        Assertions.assertThat(body).contains("스프링 부트로 시작하는 웹 서비스");
    }
}