:: CopyRights 2021 DH&WH Collaboration
@echo off
@title "�������� Life Story"
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
	echo %target% ������ �����Ƿ� ���ε��մϴ�!
	:: �� ���� ��ɾ�� �ϰ� �����Ѱ�, ���� ��δ� %target%���� ����
	git add %target%
	git commit -m "Add TIL post for today"
	git push -u origin master
	::
	move %target% %afterUpload%
	echo ���� �̵����� ����. ���α׷��� �����մϴ�.
	echo ==============================
	pause
) else (
	color 0c
	echo ==============================
	echo ���� ã�� ����:( ���α׷��� �����մϴ�.
	echo ==============================
	pause
)