# OAuth 로그인 테스트 - 프론트엔드

- node : v14.21.3

- 프론트엔드 포트 : 3000

- 실행시키기

  ```
  node app.js
  ```

## 설명

1. 카카오 로그인 버튼을 누르면 `http://localhost:8080/oauth/kakao`로 리다이렉트 (index.html, script.js)
2. 카카오 서비스에서 `http://localhost:3000/oauth/kakao/redirect`로 인가 코드와 함께 리다이렉트되면, 인가 코드를 꺼내어 `http://localhost:8080/oauth/kakao/login?code=${code}`로 요청 (app.js)
