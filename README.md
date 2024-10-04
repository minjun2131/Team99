# 🕊 CH-1. 미니 프로젝트
## ✨ 0단계 : 목표 정하기
- **웹 개발** 전반의 **흐름**과 **팀과의 작업**이 어떤 흐름으로 흘러가는지 이해할 수 있습니다.
- **Modal**을 이용하여 팀원들의 정보를 화면에 구현하였습니다.
- **오픈API**를 활용해 사용자의 **날짜 및 날씨정보**를 구현할 수 있습니다.
- **CRUD**를 활용하고 구현할 수 있습니다.

- 🔭[배포용 링크]작성예정
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

<br>

  ## 🎥기능 구현
  1. 오픈API 활용
     오픈API 전용 JS 파일을 따로 생성해 날씨에 관한 오픈API를 받아오고,<br/>
     사용자가 위치를 제공하지 않으면 => 위치를 찾을 수 없다는 알람과 제공된 정보만 출력됩니다.
  2. 모달기능 구현
     배열변수를 제작해서 담아주고, 팀원들 소개만 하는 페이지기 때문에<br/>
     for문으로 화면에 출력되게 제작한 후 클릭했을 때 하나씩 뿌려주는 모달입니다.
  3. 체스판 클릭하는 모달
     배열에 정보를 더한 값을 변수에 저장을 하고, 
     만약에 이름값이 팀원들의 실명과 같다면 해당하는 인원의 정보만 배열에서 출력되게 만드는 모달입니다.
  4. 체스판 리펙토링<br/>
  5. CRUD 구현
     firebase 초기 세팅을 가져와주고, import하여 몇가지 필요한 함수를 불러왔다.<br/>
     그리고 클릭했을 때 비동기 함수로 아이디값의 value에 접근해 doc이라는 배열로 정보를 저장하고<br/>
     그 다음 조건문으로 값이 없다면 값을 입력하세요 알림창 출력, 만약 값이 있다면<br/>
     addDoc db에 입력한 정보를 테이블 생성하여 저장하고 리로드를 시켜줍니다.

     그 다음 반복문을 사용해서 doc 라는 db에 저장된 data를 하나씩 저장하여 불러옵니다.<br/>
     중간에 dataset 속성을 부여합니다. 부여하는 이유는 추후에 삭제와 수정 로직을 제작하는데 제어문에 필요한 속성이기 때문입니다.<br/>
     그런 다음 li에 하나씩 자식으로 붙여주고 난 후,

     class들을 js에서 사용하기 위해 querySelector , ALL을 사용해 불러오고<br/>
     연필버튼을 눌렀을 때 모달이 생성될 때, 클릭한 연필에 담겨있는 dataset이<br/>
     내장되어있는 id 값과 일치하다면? 그 id값을 input값에 넣어서 모달에다가도 dataset 값을 동일하게 가져갑니다.

     그런 다음 수정과 삭제의 로직은 거의 동일한데<br/>
     동일되는 부분은 이제 addEventListener가 발생했을 때, <br/>
     내가 input에 부여한 dataset id의 값이랑 기존 db에 있는 값과 작성한 비밀번호로 비교하는 조건문으로<br/>
     id값과 비밀번호가 동일하면 삭제완료 값이 없으면? 입력해주세요 , 비밀번호가 다르다면 비밀번호가 다르다는 문구

     수정역시 로직은 그대로고 updateDoc을 통해서 id값과 비밀번호가 일치할시 comment 테이블에 접근하여<br/>
     새로 작성한 글로 업데이트 되게끔 로직을 구성했습니다.

     공통적으로 문제였던 부분은<br/>
     처음에 생성된 dataset id값을 클릭해서 모달로도 옮겨올 수 있는지에 대한 문제를 마주했고,<br/>
     두번째로는 비밀번호만 똑같으면 다른 게시글이 똑같은 비밀번호가 있을 때<br/>
     삭제를 눌렀을 때 같은 비밀번호인 게시글이 모두 사라지는 문제가 있었습니다.

     이 두번째 문제를 해결하기 위해 1번을 해결해서 dataset id가 정확히 맞아야지만<br/>
     비밀번호는 같아도 속성 id값이 같은 값만 삭제되게 해결하였습니다.
     
