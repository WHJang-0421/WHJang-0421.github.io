---
title:  "Fast AI - Lesson 1"
excerpt: "소개 및 세팅"

categories:
  - AI
tags:
  - AI
---
 
### 1. 딥러닝의 간략한 역사
- 퍼셉트론의 탄생

- 마빈 민스키 & 인공지능의 첫번째 겨울   
마빈 민스키는 자신의 책에서 단일 퍼셉트론은 XOR 문제를 해결할 수 없으며, 다층 퍼셉트론으로 이를 해결할 수 있다고 했다. 그러나 사람들은 단일 퍼셉트론이 해결할 수 없다는 것을 듣고 인공지능을 버려서 인공지능의 첫번째 겨울이 찾아왔다. ㅋㅋ   

- 인공지능의 부흥기    
이론적으로 2개의 layer만 있으면 모든 수학적 모델링을 퍼셉트론을 이용하여 할 수 있음이 드러났다. 그러나 여러개의 layer가 있으면 현실적으로 더 높은 성능이 나온다.       

- Parallel Distributed Processing (PDP): 1986
아래의 조건들을 만족시키는 모델은 엄청나게 많은 일들을 할 수 있음.
processing units      
state of activation      
output function       
pattern of connectivity          
propagation rule        
activation rule        
learning rule       
environment       

### 2. Fast.ai 에서의 학습 전략
- Top-down approach (큰 그림을 먼저 그린다)
- 소프트웨어: 파이썬 + 파이토치 + fastai (파이토치 위에 있는 layered api). 그러나 소프트웨어 그 자체는 그렇게 중요하지 않음. 개념을 학습하면 소프트웨어는 언제든지 바꿀 수 있음.
- 하드웨어: 머신러닝 라이브러리가 지원하는 nvidia GPU가 있는 컴퓨터를 구매해야 함. 사지 말고 클라우드 이용. 셋업은 사이트에서 하면 됨. 선택지가 여러가지 있는데 나는 Paperspace gradient에서 시작했다. 무료 GPU 지원도 되고 셋업도 간단하다.
- **주의사항: 깃허브 conflict를 일으키지 않도록 파일을 복사해서 사용한다.** 

### 3. 주피터 노트북 소개
뭐 이미 잘 알지만 그래도 몇개 유용한 정보는 정리해두자.

1. edit mode 단축키
    * `ctrl` + `/`: 주석 처리 / 해제

2. command mode 단축키
    * `h`: 단축키 목록
    * `(숫자)`: 헤딩
    * `00`: 커널 재시작
    * `o`: 출력 보이기/숨기기
    * `shift` + 위아래: 셀 여러개 선택
    * `shift` + `m`: 선택한 셀들을 병합

3. 유용한 커맨드
    * `?(함수이름)`: 실행하면 docstring을 보여준다
    * `shift` + `tab`: 바로 함수의 docstring을 보여준다
    * `%`: inline commands
    * `%matplotlib inline`: matplotlib 출력결과가 출력 셀 내에 있고 노트북에 저장된다.
    * `%timeit`: 1000번 실행하고 평균 실행에 걸리는 시간 출력
    * `%debug`: 디버깅

4. [markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)