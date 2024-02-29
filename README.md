![image](https://github.com/1cheol-and-team3-taskify/taskify/assets/148832727/502643ec-30b5-4cfb-90d5-e02a4729eab9)


[🔗Link](https://taskify-team3.vercel.app/)

# Taskify 


## Project Intro

일의 _생산성_ 을 높이고, _스마트_ 하게 관리할 수 있는 서비스입니다.

#### 주요 기능

   - 일의 우선순위를 정할 수 있습니다.
   - 구성원을 초대하여 공동으로 관리 가능합니다.
   - 모달 기능을 통해 할 일을 수정하고, 원하는 색의 칩으로 설정 가능합니다.
   - 태그를 입력하여 일의 난이도, 구분 등 가능합니다.
   - 마감일을 통해 일의 기간 설정 가능합니다.


#### 팀원

  * **박준성(팀장)**
    * 로그인 회원가입 페이지 개발
    * 대시보드의 사이드바 & GNB 개발 및 데이터 연동, GNB 드롭다운 기능 개발
    * 대시보드 페이지 개발 및 데이터 연동
    * 할 일 카드 모달 기능 개발 및 데이터 연동
    * color 믹스인 초기 세팅
  * **이윤경**
    * 랜딩 페이지 개발
    * 대시보드 수정(이름 변경, 구성원 관리, 초대하기)기능 개발 및 데이터 연동
    * 할일 생성 모달, 할일 수정 모달 개발 및 데이터 연동
    * 기본 경고 모달(에러메세지) 컴포넌트 통일
    * 사진(프로필 사진, 카드 사진) 추가 기능 개발
    * 대시보드 색상 커스텀 기능 개발
    * Input Dropdown 기능 개발 및 데이터 연동
    * date picker 라이브러리 사용 및 스타일 커스텀
  * **전소은**
    * 마이페이지 개발 및 데이터 연동
    * 기본 버튼 컴포넌트
    * 대시보드 버튼 컴포넌트
    * 마이페이지 모달
    * 비브리지 버튼 컴포넌트
    * text, flex 믹스인 초기 세팅
  * **김성연**
    * 초대받은 대시보드 테이블 컴포넌트
    * 대시보드 생성 모달
    * 할일 카드 컴포넌트 
  * **김민희**
    * 로그인/ 회원가입 페이지 스타일
    * 할일 모달, 컬럼 모달 스타일


  

## Tech 🛠️
<p>
  <img src="https://img.shields.io/badge/HTML-E34F26?style=flat&logo=HTML5&logoColor=white" />
  <img src="https://img.shields.io/badge/SCSS-CC6699?style=flat&logo=Sass&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white" /> 
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white" /> 
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=Next.js&logoColor=white" /> 
</p>

#### Deployment
 <img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=Vercel&logoColor=white" /> 

#### Version Control & Collab.
<p>
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white" /> 
<img src="https://img.shields.io/badge/Github-181717?style=flat&logo=Github&logoColor=white" /> 
</p>

## Commit

- repository를 git clone해와서 작업
- 각 기능 개발 브랜치 명은 "feature-기능-담당자"
- main브랜치 외에 dev 브랜치를 만들어 dev에 커밋
1. feature 브랜치에서 작업 후 구현이 다 끝나면 커밋
2. dev 브랜치로 이동 (git checkout dev)
3. dev branch pull and merge (git pull origin dev)
   - git rebase 하기 (git rebase dev feature)<br>
     => 각 브랜치에서 기능 개발 도중, 다른 브랜치에서 merge했을 때 rebase를 해서 충돌을 방지
4. origin feature 브랜치로 push (git push origin feature)
5. gitHub 페이지에서 PR요청 (branch < feature)
6. PR Squash and merge
7. feature branch 삭제



