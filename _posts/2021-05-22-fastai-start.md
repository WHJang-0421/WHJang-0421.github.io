---
title:  "Fast AI - Lesson 1"
excerpt: "소개 및 세팅, 첫번째 모델 제작"

categories:
  - AI
tags:
  - AI

toc: true

---
 
## 1. 딥러닝의 간략한 역사
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

- Universal Approximation Theorem
뉴럴 네트워크들은 어떤 수학적인 문제도 주어진 수준의 정확도로 해결할 수 있다.

## 2. Fast.ai 에서의 학습 전략
- Top-down approach (큰 그림을 먼저 그린다)
- 소프트웨어: 파이썬 + 파이토치 + fastai (파이토치 위에 있는 layered api). 그러나 소프트웨어 그 자체는 그렇게 중요하지 않음. 개념을 학습하면 소프트웨어는 언제든지 바꿀 수 있음.
- 하드웨어: 머신러닝 라이브러리가 지원하는 nvidia GPU가 있는 컴퓨터를 구매해야 함. 사지 말고 클라우드 이용. 셋업은 사이트에서 하면 됨. 선택지가 여러가지 있는데 나는 Paperspace gradient에서 시작했다. 무료 GPU 지원도 되고 셋업도 간단하다.
- **주의사항: 깃허브 conflict를 일으키지 않도록 파일을 복사해서 사용한다.** 

## 3. 주피터 노트북 정리
뭐 이미 잘 알지만 그래도 몇개 유용한 정보는 정리해두자.

1. edit mode 단축키
    * `ctrl` + `/`: 주석 처리 / 해제

2. command mode 단축키
    * `h`: 단축키 목록
    * `(숫자)`: 헤딩
    * `00`: 커널 재시작
    * `o`: 출력 보이기/숨기기
    * `shift` + `(위아래 방향키)`: 셀 여러개 선택
    * `shift` + `m`: 선택한 셀들을 병합

3. 유용한 커맨드
    * `?(함수이름)`: 실행하면 docstring을 보여준다
    * `shift` + `tab`: 바로 함수의 docstring을 보여준다
    * `%`: inline commands
    * `%matplotlib inline`: matplotlib 출력결과가 출력 셀 내에 있고 노트북에 저장된다.
    * `%timeit`: 1000번 실행하고 평균 실행에 걸리는 시간 출력
    * `%debug`: 디버깅

4. [markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## 4. 머신러닝 이론 개관

1. 기존의 프로그래밍: 주어진 입력에 대해 출력을 하는 프로그램을 개발자가 직접 작성.
2. 머신러닝:
  - 주어진 입력에 대해 출력하는 프로그램을 작성하는 것은 똑같음
  - 개발자가 프로그램의 세부사항을 아주 자세하게 알 수 없음 --> Parameter 값에 따라 여러 가지 일을 할 수 있는 아주 일반적인 형태의 아키텍쳐을 만든 다음 주어진 일을 잘 할 수 있도록 parameter 값을 정함
  - 즉, 결과 값을 바탕으로 parameter를 업데이트
  - 이러한 parameter 값을 정한 다음에는 그냥 그 parameter 값을 가지고 일반 컴퓨터 프로그램처럼 쓰면 됨     
3. 머신러닝 용어 정리
  - **아키텍쳐(Architecture)**: parameter만 잘 정해지면 우리가 만드려는 프로그램이 되는 것. 그러나 이런 의미로 모델이라는 단어를 사용하는 사람도 많음.
  - **파라미터(Parameter)**: 아키텍쳐에서 우리가 변형이 가능한 부분. ex) weight는 파라미터의 한 종류라고 한다.
  - **손실함수 (Loss)**: performance의 측정. 얼마나 수행해야 할 일을 잘 하는지
  - **데이터(Data), 레이블(Label)**: 여기서만 이러는 건지는 모르겠는데, 여기서는 머신러닝 트레이닝에서 들어가는 입력을 데이터와 레이블로 나눴다. 데이터는 과학에서의 독립변수 (이용하여 레이블을 예측), 레이블은 과학에서의 종속 변수 (예측할 것. 모델을 만든다는 것은 독립변수로 설명된다고 가정하는 것임)로 생각하면 될 듯 하다.
  ![machine_learning](/assets/images/machine_learning.PNG)

4. 머신러닝의 한계
  - 앞에서 설명한 기본적인 이야기를 통해, 머신러닝의 한계를 정리할 수 있다.
      
  1) 데이터가 필요하다. 데이터에 나타난 규칙성만을 학습할 수 있다.
  2) 그냥 데이터가 아니라 레이블링된 데이터가 필요하다. (물론 unsupervised learning이 있기는 하지만, 일단 위에서 이야기한 이야기를 바탕으로 하면)
  3) 어떻게 행동할지 알려주지 않고, 예측을 할 뿐이다. 예를 들어 추천 시스템을 만든다고 하면 무엇을 추천할지 알려준다기 보다는 무언가를 추천하면 어떤 반응을 보이면 예측할 수 있는 모델을 만든다고 하는 것이 더 정확하다는 것이다. (그러면 RL은 어떻게 되는건지 사실 잘 모르겠다)
5. 주의사항
  - 모델이 그 주변 환경과 어떻게 상호작용하는지를 고려해야 한다. (PDP 소개하면서도 한 이야기)
  - 주변 환경과 positive feedback loop에 빠질 수 있음 (예: 경찰력을 AI 이용 할당)
  - 실제로 알아보고자 하는 값 대신에 proxy를 이용하는 경우가 많은데, proxy와 실제 목표 사이의 괴리가 중요할 가능성이 높음 (예: 범죄 발생 대신에 체포를 proxy로 이용)

6. 머신러닝의 응용 분야
다음은 머신러닝이 현재까지 최고의 접근 방법 중 하나를 차지하고 널리 이용되는 분야들이다.
  - NLP
  - Image Recognition
  - Image Generation
  - Medicine & Biology
  - Recommendation Systems
  - Robotics
  - Playing Games
  - Forecasting, t2s 등

## 5. Training, Validation, and Test Sets

  1) 과적합(Overfitting)의 문제: 주어진 데이터에만 맞고 일반적인 상황에 맞지 않을 수 있음
  - 흥미롭게도, 흄의 문제와 관련이 있음
  - 과적합의 문제를 해결하기 위해서는 따로 데이터를 두어야 함

  2) Validation & Test Sets
  - validation set: 트레이닝 과정에서 loss를 계산하는데에 사용
  - test set: 트레이닝이 다 끝나고 나서 최종 loss를 계산하는데에 사용.