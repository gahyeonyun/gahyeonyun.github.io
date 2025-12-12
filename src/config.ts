export const siteConfig = {
  name: "윤가현",
  title: "한경국립대학교 컴퓨터공학 재학생",
  description: "한경국립대학교 컴퓨터공학 재학생 윤가현의 학습 및 프로젝트 포트폴리오입니다.",
  accentColor: "#1d4ed8",
  social: {
    email: "gahyeonyun97@gmail.com",
    linkedin: "https://linkedin.com/in/yourprofile", 
    twitter: "https://x.com/rfitzio",
    github: "https://github.com/gahyeonyun",
  },
  aboutMe:
    "안녕하세요, 한경국립대학교 컴퓨터공학과에 재학 중인 윤가현입니다. 저는 웹 개발 및 데이터 처리 기술에 깊은 관심을 가지고 있으며, 특히 Javascript, C++, Python을 활용한 실습 프로젝트를 통해 문제 해결 능력을 키우고 있습니다. 학교 교육과정과 Mashup 프로젝트 경험을 바탕으로 실무에 기여할 수 있는 개발자로 성장하는 것이 목표입니다.",
  
  skills: ["Javascript", "C++", "Python"],
  
  projects: [
    {
      name: "Air Pollution Inquiry Mashup",
      description:
        "카카오 맵을 이용하여 지도를 표시하고 현재 위치 추적, 지역 선택 시 지도 이동, 대기오염 데이터 API 호출 및 테이블 자동 업데이트 기능을 수행하여 사용자에게 실시간 정보를 제공하는 Mashup 서비스입니다.",
      link: "https://maps-netlify.netlify.app/",
      skills: ["HTML", "Javascript", "CSS"],
    },
    {
      name: "서울시문화행사알리미PWA",
      description:
        "사용자가 선택한 공연 분야에 따라 서울시 문화행사 API의 전체 데이터를 표시하며, 설치 가능한 PWA(Progressive Web App) 아이콘을 제공하여 모바일 접근성을 높인 프로젝트입니다.",
      link: "https://seoul-pwa-netlify.netlify.app/", 
      skills: ["HTML", "CSS", "JS", "JSON"],
    },
    {
      name: "Kakao Map을 이용한 서울시 공공도서관 검색 Mashup",
      description:
        "공공 도서관 API와 카카오 맵을 결합하여 서울시 내 도서관의 위치, 운영 시간, 장소 정보를 한눈에 제공하는 검색 서비스입니다.",
      link: "https://seoul-library-netlify.netlify.app/",
      skills: ["HTML", "Javascript", "CSS"],
    },
  ],
  
  experience: [
    {
      company: "문제해결프로젝트1",
      title: "팀원",
      dateRange: "2025년 3월 - 2025년 6월 (총 4개월)",
      bullets: [
        "팀 프로젝트로 영화관 예매 시스템 사이트 제작",
        "로그인 기능, 영화 예매 기능, 좌석 선택 기능 등을 구현하여 실제 서비스와 유사한 환경을 구축",
      ],
    },
  ],
  
  education: [
    {
      school: "한경국립대학교",
      degree: "컴퓨터공학과 재학", 
      dateRange: "2023년 ~ 현재 재학 중", 
      achievements: [
        "주요 학습 내용: 자료구조, 알고리즘, 웹 프로그래밍 등 이수",
      ], 
    },
  ],
};