# 🕊 CH-0. 미니 프로젝트
## ✨ 목표 정하기
- **웹 개발** 전반의 **흐름**과 **팀과의 작업**이 어떤 흐름으로 흘러가는지 이해할 수 있습니다.
- **Modal**을 이용하여 팀원들의 정보를 화면에 구현하였습니다.
- **오픈API**를 활용해 사용자의 **날짜 및 날씨정보**를 구현할 수 있습니다.
- **CRUD**를 활용하고 구현할 수 있습니다.

- 🔭[배포용 링크] https://minjun2131.github.io/Team99/
<br>

## 💻기술 스택
<div style="display:flex; justify-contents: center;">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
  <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jQuery&logoColor=white">
  <img src="https://img.shields.io/badge/git-orange?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/firebase-DD2C00?style=for-the-badge&logo=firebase&logoColor=white">

  
</div>
<br>

## ✔필수 요구사항

 - ✅ 팀 노션 작성하기
 - ✅ S.A 작성 및 피드백 받기
 - ✅ 팀 소개 웹페이지 만들기
 - ✅ 개발 진행에 따른 기록 작성 후 TIL 제출
<br>

## 👍선택 요구사항

 - ✅ firebase는 상황에 따라서 사용
 - ✅ 패스워드가 맞을 때 변경되거나 삭제되는 기능

## 🥇팀원 소개
| 팀장 김호준  | 팀원 안현희  | 팀원 강민정  | 팀원 정종하 |
| :-------------: | :-------------: |:-------------: | :-------------: |
| INTJ  | ENFJ  | INTJ  | ISTP  |
| 🤖 |✝️  | 🐸  | 🔅🍺 |
|  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">  | 검암동 안 집사  | <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">   | <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">  |
| [ <img src="https://img.shields.io/badge/github-323330?style=for-the-badge&logo=github&logoColor=white">](https://github.com/minjun2131) [ <img src="https://img.shields.io/badge/velog-323330?style=for-the-badge&logo=velog&logoColor=white">](https://velog.io/@minjun23221/posts) |[ <img src="https://img.shields.io/badge/github-323330?style=for-the-badge&logo=github&logoColor=white">](https://github.com/ahh0619) [ <img src="https://img.shields.io/badge/velog-323330?style=for-the-badge&logo=velog&logoColor=white">](https://velog.io/@hhyun19/posts)  | [ <img src="https://img.shields.io/badge/github-323330?style=for-the-badge&logo=github&logoColor=white">](https://github.com/cara656513) [ <img src="https://img.shields.io/badge/velog-323330?style=for-the-badge&logo=velog&logoColor=white">](https://velog.io/@kang1129/posts)  | [ <img src="https://img.shields.io/badge/github-323330?style=for-the-badge&logo=github&logoColor=white">](https://github.com/Jongha56) [ <img src="https://img.shields.io/badge/titstory-323330?style=for-the-badge&logo=titstory&logoColor=white">](https://jjh0506.tistory.com/) |



---

  ## 🎥기능 구현
  ### - 오픈API 활용
    
 ![Header](https://github.com/user-attachments/assets/e5c357f0-e0e9-472d-8f02-5eb4697f65bb)<br/>
 
      오픈API 전용 JS 파일을 따로 생성해 날씨에 관한 오픈API를 받아오고,
      사용자가 위치를 제공하지 않으면 => 위치를 찾을 수 없다는 알람과 제공된 정보만 출력됩니다.

  ### - 스크롤 활용
    
![bandicam 2024-10-07 09-37-24-963](https://github.com/user-attachments/assets/6f57c9ae-f8bd-4f01-92a8-b8a40548201f)<br/>
 
       특정 스크롤 구간을 내려가면 아래에서 하나씩
       밑에서 위로 올라올 때 fadeIn되어 올라오게 제작하였습니다.
       
 ### -  모달기능 구현
 ![Members](https://github.com/user-attachments/assets/7ee31445-6720-4d1b-90c0-9fd79c1fc8d8)<br/>
 
      클릭이 가능한 모달은 사용자가 알아볼 수 있게 체스판이 회전하게 애니메이션을 추가했습니다.
      그런 다음 돌아가는 체스말을 클릭하면 팀원의 모달이 출력되고, 닫기 버튼을 모달이 사라지게 제작하였습니다.
### -  체스판 리펙토링
     반복문을 사용해 체스판을 자동으로 완성시켜주도록 코드를 작성했습니다.
     추가적으로 체스판이 구현되면 지정된 위치에 말을 생성해주도록 구현했습니다.
### -  CRUD 구현

#### 저장 및 출력
![create](https://github.com/user-attachments/assets/311f4178-e49f-49c2-9ea7-b1f671af22bb)

     방명록에 아이디, 비밀번호, 작성할 내용을 받을 수 있는 칸에 내용을 작성하면
     저장버튼을 통해 사용자가 입력한 아이디, 비밀번호, 내용을 저장합니다.
     저장하고 나면 밑에서부터 최신순으로 출력된다.
     => 수정 : 밑에서가 아닌 위에서부터 최신순으로 출력됩니다.
#### 삭제
![delete](https://github.com/user-attachments/assets/ef13e5de-270e-4f6b-bee3-a3c02df88cdf)

      작성된 글에서 연필 버튼을 누르면 모달창이 화면에 나옵니다.
      그런 다음 pw 칸 안에 비밀번호를 입력할 수 있고,
      만약 작성한 비밀번호가 저장했을 때의 비밀번호와 다르다면 알림창을 띄우고
      같았을 때는 해당 게시글을 삭제합니다.
#### 수정
![modify](https://github.com/user-attachments/assets/4f62c92e-501c-483c-8fd5-3e43dc7af7aa)

      작성된 글에서 연필 버튼을 누르면 모달창이 화면에 나옵니다.
      수정할 내용을 작성하고 pw 칸 안에 비밀번호를 입력하면
      비밀번호가 다르다면 똑같이 알림창을 띄우고,
      같다면 해당 게시글의 내용을 수정합니다.
      
      
     
