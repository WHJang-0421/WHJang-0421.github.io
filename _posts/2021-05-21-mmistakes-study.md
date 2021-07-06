---
title:  "minimal mistakes theme 정리"
excerpt: "jekyll theme 인 minimal mistakes로 블로그 글쓰는 법 정리."

categories:
  - general
tags:
  - Blog
last_modified_at: 2019-04-13T08:06:00-05:00
---

Github Blog Pages를 앞으로도 자주 쓸텐데 사용하는 방법을 정리해두려고 한다.

1. 블로그 글 작성   
`_posts` 파일에 `yy-mm-dd-title.md` 형식으로 저장해둔다.

2. 로컬 컴퓨터에서 확인   
Start Command Prompt with Ruby --> `bundle exec jekyll serve`

3. 블로그 포스팅   
vscode 에서 cmd --> `git add .` --> `git commit -m (커밋 메시지)` --> `git push -u origin master`