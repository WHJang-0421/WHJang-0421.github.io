:: CopyRights 2021 DH&WH Collaboration
@echo off
@title "우혁이의 Life Story"
@color 06

:: yy-mm-dd
set todaydate=%date%
set path=C:\code_temp\WHJang-0421.github.io
set target=%path%\_posts\%todaydate%-TIL.md
set afterUpload=%path%\Uploaded\%todaydate%-TIL.md
echo %target%

if exist %target% (
	color 0a
	echo ==============================
	echo %target% 파일이 있으므로 업로드합니다!
	:: 이 구역 명령어는 니가 설정한거, 파일 경로는 %target%으로 통일
	git add %target%
	git commit -m "Add TIL post for today"
	git push -u origin master
	::
	move %target% %afterUpload%
	echo 파일 이동까지 성공. 프로그램을 종료합니다.
	echo ==============================
	pause
) else (
	color 0c
	echo ==============================
	echo 파일 찾기 실패:( 프로그램을 종료합니다.
	echo ==============================
	pause
)