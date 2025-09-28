# 🚀 오세진 포트폴리오

> 프론트엔드 개발자 오세진의 개인 포트폴리오 웹사이트

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📋 프로젝트 소개

이 포트폴리오는 프론트엔드 개발자 오세진의 개인 웹사이트입니다. 사용자 경험을 중시하며, 현대적이고 반응형인 웹 인터페이스를 제공합니다.

### ✨ 주요 특징

- 🎨 **모던 디자인**: 글래스모피즘과 그라데이션을 활용한 세련된 UI
- 📱 **완전 반응형**: 모든 디바이스에서 최적화된 사용자 경험
- ⚡ **부드러운 애니메이션**: CSS와 JavaScript를 활용한 인터랙티브 요소
- 🎯 **접근성 고려**: 웹 접근성 가이드라인을 준수한 설계
- 🔗 **직관적 네비게이션**: 부드러운 스크롤과 스크롤 스파이 기능

## 🛠️ 기술 스택

### Frontend
- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, 애니메이션, 반응형 디자인
- **JavaScript (ES6+)**: DOM 조작, 이벤트 처리, 스크롤 효과

### 디자인 & UI/UX
- **Font Awesome**: 아이콘 라이브러리
- **Google Fonts**: Noto Sans KR 폰트
- **CSS Variables**: 일관된 디자인 시스템

## 📁 프로젝트 구조

```
my_portfolio/
├── index.html          # 메인 HTML 파일
├── styles.css          # CSS 스타일시트
├── script.js           # JavaScript 기능
├── html.jpg           # 프로필 이미지
├── ohsejin.pdf        # 이력서 파일
└── README.md          # 프로젝트 문서
```

## 🚀 시작하기

### 설치 및 실행

1. **저장소 클론**
   ```bash
   git clone https://github.com/os160960-crypto/my_portfolio.git
   cd my_portfolio
   ```

2. **브라우저에서 실행**
   ```bash
   # 간단한 HTTP 서버 실행 (Python 3)
   python -m http.server 8000
   
   # 또는 Node.js http-server 사용
   npx http-server
   ```

3. **브라우저에서 확인**
   ```
   http://localhost:8000
   ```

### 로컬 개발

포터블한 개발 환경을 위해 Live Server 확장 프로그램을 사용하는 것을 권장합니다.

## 📄 페이지 구성

### 🏠 홈 (Home)
- 개발자 소개 및 주요 키워드
- 프로필 사진과 개인 브랜딩
- 주요 액션 버튼 (프로젝트 보기, 연락하기, 이력서 다운로드)

### 👨‍💻 소개 (About)
- 개발 철학과 목표
- 학력 정보 및 교육 배경
- 개발 경험 통계

### 💼 프로젝트 (Projects)
- 주요 프로젝트 포트폴리오
- 기술 스택 및 프로젝트 설명
- GitHub 및 데모 링크

### 🛠️ 기술 스택 (Skills)
- 탭 기반 기술 분류
- Frontend, Deployment, Design 카테고리
- 아이콘과 함께 시각적 표현

### 📞 연락처 (Contact)
- 연락처 정보 (이메일, 전화, 위치)
- 소셜 미디어 링크
- 연락 폼 (이름, 이메일, 메시지)

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary**: `#3b82f6` (Blue)
- **Secondary**: `#8b5cf6` (Purple)
- **Accent**: `#ec4899` (Pink)
- **Background**: Dark gradient with glassmorphism

### 타이포그래피
- **Primary Font**: Noto Sans KR
- **Weights**: 300, 400, 500, 700, 900

### 컴포넌트
- **Buttons**: Rounded corners, hover effects, gradient backgrounds
- **Cards**: Glassmorphism effect, subtle shadows
- **Navigation**: Fixed header with smooth scroll

## 📱 반응형 디자인

### 브레이크포인트
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

### 모바일 최적화
- 햄버거 메뉴 네비게이션
- 터치 친화적 버튼 크기
- 최적화된 폰트 크기 및 간격

## 🔧 주요 기능

### JavaScript 기능
- **스무스 스크롤**: 앵커 링크 클릭 시 부드러운 스크롤
- **스크롤 스파이**: 현재 보고 있는 섹션 하이라이트
- **모바일 메뉴**: 햄버거 메뉴 토글 기능
- **폼 검증**: 연락 폼 입력값 유효성 검사
- **알림 시스템**: 성공/에러 메시지 토스트 알림
- **스크롤 애니메이션**: 요소가 화면에 나타날 때 페이드인 효과

### CSS 애니메이션
- **키프레임 애니메이션**: 배경, 버튼, 타이틀 효과
- **호버 효과**: 카드, 버튼, 링크 인터랙션
- **트랜지션**: 모든 인터랙티브 요소에 부드러운 전환

## 🌐 배포

### Netlify 배포 (권장)
1. GitHub 저장소와 연결
2. 빌드 명령어: 없음 (정적 사이트)
3. 배포 디렉토리: `/` (루트)



## 📞 연락처

- **이메일**: os160960@gmali.com
- **전화**: 010-2423-6697
- **위치**: 안양시, 대한민국
- **GitHub**: [os160960-crypto](https://github.com/os160960-crypto)
- **Instagram**: [@sejin_elel07](https://instagram.com/sejin_elel07)

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 목적으로 제작되었습니다.

---

**Made with ❤️ by 오세진**

> "사용자 경험을 중시하며, 아름답고 기능적인 웹 애플리케이션을 만드는 것을 좋아합니다."
