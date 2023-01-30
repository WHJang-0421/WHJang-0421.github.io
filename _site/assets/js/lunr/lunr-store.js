var store = [{
        "title": "github.io 블로그 시작하기",
        "excerpt":"GitHub Blog 서비스인 github.io 블로그 시작하기로 했다. GitHub Blog 서비스의 이름은 Pages이다. Pages가 다른 블로그 플랫폼 보다 편한 것 같아서 마음에 든다. 다른 사람들도 같이 많이 사용했으면 좋겠다는 생각이 든다. YFM에서 정의한 제목을 이중 괄호 구문으로 본문에 추가할 수 있다. 이 글의 제목은 github.io 블로그 시작하기이고 마지막으로 수정된 시간은 이다....","categories": ["general"],
        "tags": ["Blog"],
        "url": "/general/first-post/",
        "teaser": null
      },{
        "title": "minimal mistakes theme 정리",
        "excerpt":"앞으로의 블로그 작성법 블로그 글 작성 _posts 폴더에 yyyy-mm-dd-title.md 형식으로 저장 로컬 컴퓨터에서 확인 (선택) bundle exec jekyll serve 블로그 포스팅 3-1) Ctrl+Shift+` (VSCode에서 Terminal을 여는 단축키) 3-2) git add . 3-3) git commit -m \"commit message\" 3-4) git push -u origin master _config.yml 파일을 수정한 경우: 다시 빌드 필요...","categories": ["general"],
        "tags": ["Blog"],
        "url": "/general/mmistakes-study/",
        "teaser": null
      },{
        "title": "앞으로의 개발 계획",
        "excerpt":"1. Python   학습 대상     Machine Learning &amp; Data Science   전략     일단 무언가를 만들어본다.   자료     Fast AI   유튜브: 빵형의 개발도상국   2. Regular Expressions     배운다.   3. Java   학습 대상     syntax (대략적으로 감만)   전략     codecademy 강좌를 들으며 일단은 문법을 배운다.   자료     Codecademy - learn java  ","categories": ["general","plan"],
        "tags": ["Plans"],
        "url": "/general/plan/development-plans/",
        "teaser": null
      },{
        "title": "Fast AI - Lesson 1",
        "excerpt":"1. 딥러닝의 간략한 역사 퍼셉트론의 탄생 마빈 민스키 &amp; 인공지능의 첫번째 겨울 마빈 민스키는 자신의 책에서 단일 퍼셉트론은 XOR 문제를 해결할 수 없으며, 다층 퍼셉트론으로 이를 해결할 수 있다고 했다. 그러나 사람들은 단일 퍼셉트론이 해결할 수 없다는 것을 듣고 인공지능을 버려서 인공지능의 첫번째 겨울이 찾아왔다. ㅋㅋ 인공지능의 부흥기 이론적으로 2개의...","categories": ["ai","fastai"],
        "tags": ["AI"],
        "url": "/ai/fastai/fastai-start/",
        "teaser": null
      },{
        "title": "Fast AI - Lesson 2",
        "excerpt":"Fast AI 2강에서 이론적인 부분을 정리한 것이다. ** 책을 보고 좀 더 자세히 정리한 내용을 https://whjang-0421.github.io/ai/fastai-second-revised/에 정리해두었다. 3강부터는 책 내용을 보고 정리한 내용과 동영상 강의를 본 내용을 함께 정리해 두려고 한다. 1. The State of Machine Learning State of Machine Learning 흥미로운 점은 머신러닝이 대화에는 별로 성능이 좋지 않다는 것이다....","categories": ["ai","fastai"],
        "tags": ["AI"],
        "url": "/ai/fastai/fastai-second/",
        "teaser": null
      },{
        "title": "Fast AI - Simple Cat Classifier",
        "excerpt":"지금까지 이해한 것을 가지고 간단한 CNN 모델 (고양이 분류기)를 만들어보았다. 5가지 고양이 종류 중에서 구분할 수 있는 모델이다. 구현 소스 및 웹사이트 소스코드: https://github.com/WHJang-0421/cat_classification_model/tree/master prototyping된 웹서비스: https://mybinder.org/v2/gh/WHJang-0421/cat_classification_model/HEAD?urlpath=voila%2Frender%2Fcat-classifier.ipynb 기술적인 구현 관련 큰 그림 bing image downloader을 이용하여 이미지 다운로드 Dataloaders 객체를 이용하여 전처리 Learner 이용 CNN 모델 모델을 만든 후 ImageClassifierCleaner로...","categories": ["ai","fastai"],
        "tags": ["AI"],
        "url": "/ai/fastai/fastai-1stdeployment/",
        "teaser": null
      },{
        "title": "Fast AI - Lesson 2 Revised",
        "excerpt":"A. The practice of deep learning 딥러닝의 한계와 가능성을 모두 염두에 두고 있어라. (지나친 낙관/비관 x) 1) Starting your project 프로젝트 접근 방법: 완벽주의 X, 일단 간단하게 만들고 나중에 발전시켜라 end-to-end, 즉 데이터 수집부터 서비스(GUI/앱)을 만들기까지의 과정을 대충 끝내고, 그 다음에 추가 학습/발전하는 과정을 여러번 반복하기. 특히 데이터셋의 접근성에 유의...","categories": ["ai","fastai"],
        "tags": ["AI"],
        "url": "/ai/fastai/fastai-second-revised/",
        "teaser": null
      },{
        "title": "Fast AI - Lesson 3: The Basics",
        "excerpt":"블로그 포스트 다시 정리해서 써보기. 이번 레슨은 머신러닝에서의 가장 기초적인 개념들에 대해 학습한다고 한다. 1. 키워드 arrays, tensors, broadcasting SGD (stochastic gradient descent) loss function mini batch 2. 머신러닝의 기초적인 개념 Array &amp; Tensor 다차원으로 쌓은 상자들?의 이미지를 생각하면 될듯 rank: 몇개의 축을 가진 데이터인지 말해준다. 예를 들어 rank가 2이면...","categories": ["ai","fastai"],
        "tags": ["AI"],
        "url": "/ai/fastai/fastai-third/",
        "teaser": null
      },{
        "title": "개발자들을 위한 블로그 글쓰기",
        "excerpt":"** 이 글은 언어와 매체 수행평가 겸으로 해서 쓴 글로 블로그에 올렸다. 수많은 좋은 개발자들의 공통점은 무엇일까? 바로 블로그 쓰기이다. 정말 많은 사람들이 추천하는 블로그 글쓰기. 블로그 글 쓰기의 필요성 일종의 이력서가 된다. 개발 블로그 때문에 취업 제안을 받은 사람들이 이쪽 분야에서는 꽤 있다. 지식이 확실하게 정리된다. 남에게 설명하기 위해...","categories": ["general"],
        "tags": ["general","advice"],
        "url": "/general/blogwriting/",
        "teaser": null
      },{
        "title": "2021.06 3주차 TIL",
        "excerpt":"06월 3주차 (2021.06.12 ~ 2021.06.19) TIL 2021.06.12부터 TIL 포스팅을 시작해보려고 한다. 이 TIL 포스팅에는 오늘 무엇을 배웠는지 쓸 것이다. 배운 내용을 정리하는 것은 다른 포스팅에서 할 일이고, 여기서는 무엇을 배웠는지 대략적으로 확인할 수 있도록 하는 것이 목표다. 06월 12일 오늘은 fastai 05, 06 notebook을 복습했다. 이 두 notebook은 multi category...","categories": ["TIL"],
        "tags": ["TIL","fastai"],
        "url": "/til/TIL/",
        "teaser": null
      },{
        "title": "파이썬: 데코레이터",
        "excerpt":"1. 데코레이터의 소개 def bad_func_1(): print(\"중복되는 기능\") print(\"func_1만의 기능\") def bad_func_2(): print(\"중복되는 기능\") print(\"func_2만의 기능\") 다음과 같은 코드는 무엇이 문제일까? 가장 큰 문제는 코드가 불필요하게 반복되고 있다는 것이다. 이런 식으로 코드를 짜면 재사용도 잘 안되고 func_1만 고치고 func_2는 고치는 것을 잊을 수도 있다. 그러면 다음과 같이 코드를 짜면 좋을 것이다....","categories": ["python"],
        "tags": ["TIL","fastai"],
        "url": "/python/python-decorator/",
        "teaser": null
      },{
        "title": "개발 관련 할 일",
        "excerpt":"여기는 개발 관련해서 해야 할 일들을 가볍게 정리하는 페이지이다.     개발 관련 대회/공모전 알아보기  ","categories": ["general"],
        "tags": ["todo"],
        "url": "/general/ideas/",
        "teaser": null
      },{
        "title": "VSCode 유용한 작업 및 단축키 정리",
        "excerpt":"시험 끝나고 다시 돌아와서 기쁘다. 오늘은 가볍게 VSCode 단축키를 정리해볼 예정이다. 1. Peek F12: 해당 클래스/함수가 있는 파일로 이동 F12 + Alt: 파일을 이동하지 않고 peek 2. Renaming 코드를 짜다 보면 클래스나 함수 이름을 바꿔야 할 때가 있다. 이때 함수가 어디에 사용되었는지 일일히 보면 당연히 비효율적이다. Ctrl + f: Find...","categories": ["vscode"],
        "tags": ["vscode","shortcuts","단축키"],
        "url": "/vscode/vscodeshortcuts/",
        "teaser": null
      },{
        "title": "2021.07.06 TIL",
        "excerpt":"오늘은 블로그 정리를 주로 했다.     블로그에 트리 구조를 구현하면서 파이썬에서 클래스를 이용하여 트리 구조를 구현하는 방법을 익히게 되었다.   Jekyll 에서 Page를 등록하고 메뉴를 만드는 방법을 알게 되었다.  ","categories": ["TIL"],
        "tags": ["TIL","blog"],
        "url": "/til/TIL/",
        "teaser": null
      },{
        "title": "2021.07.10 TIL",
        "excerpt":"좀 쓰기 그렇지만 오늘은 아무것도 안했다. 이 포스트는 그냥 친구가 준 자동 블로그 업로더를 시험해보기 위한 것이다. 구현해줘서 고맙다  ","categories": ["TIL"],
        "tags": ["TIL","blog"],
        "url": "/til/TIL/",
        "teaser": null
      },{
        "title": "2021.07.16 TIL",
        "excerpt":"오랜만에 돌아왔다. 그 이유는 최근에 한 권으로 읽는 컴퓨터 구조와 프로그래밍이라는 책을 읽었기 때문이다. 오늘은 그 책을 다 읽고 독서록을 쓰고 관련해서 배울 점 등을 정리해보았다. 독서록 링크   그 외에도 C 프로그래밍 공부를 시작했다. 오늘 공부한 C 링크  ","categories": ["TIL"],
        "tags": ["TIL","blog"],
        "url": "/til/TIL/",
        "teaser": null
      },{
        "title": "C 프로그래밍 시작",
        "excerpt":"Tutorialspoint의 강의로 C를 배우려고 한다. 오늘은 Hello World 출력하고 기본적인 개념을 배웠다.   개념 정리     ;: statement terminator   /* */: comments   identifiers: name of variable/function etc.   identifier naming rule: python과 동일. 처음에는 문자 + _, 그 다음에는 문자 + _ + 숫자   keywords  ","categories": ["C"],
        "tags": ["C"],
        "url": "/c/c-start/",
        "teaser": null
      },{
        "title": "한 권으로 읽는 컴퓨터 구조와 프로그래밍",
        "excerpt":"한 권으로 읽는 컴퓨터 구조와 프로그래밍 The Secret Life of Programs: Understand Computers – Craft Better Code 저자: 조너선 스타인하트 (Jonathan E. Steinhart) 읽게 된 계기 학교 세특에 쓸 개발 관련 책을 찾아보다가 백과사전식으로 컴퓨터 과학 전반을 훑는 책이 있어서 한번 읽어보았다. 이 책은 시스템 프로그래밍 (비트, 전자 회로, 메모리...","categories": ["books"],
        "tags": ["books","system programing"],
        "url": "/books/the-secret-life-of-programs/",
        "teaser": null
      },{
        "title": "2022.04.30 TIL",
        "excerpt":"정말 오랜만이다!! 바쁜 대학 생활중에 돌아왔다. ㅎ 이제 대학 생활도 어느정도 틀이 잡힌 것 같으니 꾸준히 개발 블로그를 다시 운영하려 한다. 어제, 오늘 한 것은 다음과 같다. 실용주의 프로그래머 정독 및 내용 실천 방안 새 노트북에 WLS2, git, VSCode 설치 앞으로는 이런 것들을 해야 하겠다. 우선 순위는 향후 정하는 걸로....","categories": ["TIL"],
        "tags": ["TIL","blog"],
        "url": "/til/TIL/",
        "teaser": null
      },{
        "title": "WSL2 and Linux",
        "excerpt":"1. WSL2 링크 WSL2는 Windows 환경에서 Linux를 가상머신 없이 사용할 수 있도록 한다. (나의 얄팍한 지식…) 사용해보니 정말 가상머신과는 비교가 안 되는 성능을 가지고 있다. 설명 대신 WSL2와 관련하여 내가 유용하게 찾은 링크들을 걸어놓겠다. WSL2 설치: Microsoft 공식문서 WSL2에 대한 lesstif님의 글 2. WSL 관련 (Linux) 명령어 정리 아무래도 Linux...","categories": ["links"],
        "tags": ["wsl","wsl2"],
        "url": "/links/WSL2/",
        "teaser": null
      },{
        "title": "2022.05.01 TIL",
        "excerpt":"오늘 한 것은 다음과 같다.     실용주의 프로그래머 1장 5절 ‘지식 포트폴리오’ 정독   Linux에서 C 언어 개발에 필요한 패키지 설치  ","categories": ["TIL"],
        "tags": ["TIL","blog"],
        "url": "/til/TIL/",
        "teaser": null
      },{
        "title": "C의 기초",
        "excerpt":"오늘은 Linux 환경에서 C 프로그램을 작성하면서, C의 기초 구문에 대해 공부할 것이다. 코딩 도장을 기준으로 진행할 예정이다. 1. Linux 환경에서 C 프로그램 작성 및 실행 [1] 1) $ sudo apt-get install build-essential를 작성하여 필수적인 패키지를 다운로드 받는다. 2) 적당한 C 프로그램을 만들어서 .c 확장자로 저장한다. 3) gcc [programName].c -o programName을...","categories": ["C"],
        "tags": ["C","linux"],
        "url": "/c/cbasics/",
        "teaser": null
      }]
