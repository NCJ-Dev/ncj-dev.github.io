# Next.js와 GitHub Pages를 이용한 개발자 포트폴리오 제작

- 프로젝트 경로 : C:\Users\huiji\github\portfolio
- **목표:** 남철진님의 이력서와 제공된 디자인 시스템을 기반으로 Next.js를 사용하여 전문적인 개발자 포트폴리오 웹사이트를 구축하고 GitHub Pages에 배포합니다.
- **주요 기술:** Next.js, React, TypeScript, GitHub Pages

---

### **Phase 1: 프로젝트 초기 설정 및 기본 구조**

1. **Next.js 프로젝트 생성:**
    - `npx create-next-app@latest portfolio --typescript --eslint --app` 명령어로 프로젝트를 생성합니다.
2. **Git 저장소 설정:**
    - GitHub에 새로운 저장소를 생성합니다.
    - 로컬 프로젝트를 생성된 GitHub 저장소와 연결하고 초기 코드를 푸시합니다.
3. **GitHub Pages 배포 설정:**
    - `package.json`에 배포 스크립트를 추가합니다.
    - GitHub Actions 워크플로우(`.github/workflows/deploy.yml`)를 설정하여 `main` 브랜치에 푸시될 때마다 자동으로 빌드 및 GitHub Pages에 배포되도록
      구성합니다.
4. **프로젝트 구조화:**
    - `/app`: 페이지 라우팅 및 레이아웃
    - `/components`: 재사용 가능한 UI 컴포넌트 (버튼, 카드 등)
    - `/styles`: 전역 CSS 및 스타일 관련 파일
    - `/public`: 이미지, 폰트 등 정적 에셋
5. **기본 레이아웃 및 글로벌 스타일 적용:**
    - `app/layout.tsx` 파일에 기본 HTML 구조(헤더, 푸터 포함)를 정의합니다.
    - `styles/globals.css`에 `@Frame.png` 디자인 시스템에 명시된 색상 팔레트, 타이포그래피, 스페이싱 시스템을 전역 변수(CSS Variables)로 설정하여 일관성 있는 디자인을
      유지합니다.

---

### **Phase 2: 핵심 UI 컴포넌트 개발**

- `@Frame.png` 디자인 시스템을 기반으로 재사용 가능한 React 컴포넌트를 개발합니다.

1. **타이포그래피 컴포넌트:**
    - `<h1>`, `<h2>`, `<h4>`, `Body Text`, `Label` 등 텍스트 스타일을 컴포넌트로 만듭니다.
2. **버튼 (Button) 컴포넌트:**
    - `Primary`, `Secondary`, `Outline`, `Disabled` 상태를 `props`로 제어할 수 있는 버튼 컴포넌트를 구현합니다.
3. **카드 (Card) 컴포넌트:**
    - `Basic Card`, `Gradient Card` 등 프로젝트나 경력을 표시하는 데 사용할 카드 컴понен트를 구현합니다.
4. **아이콘 (Icon) 컴포넌트:**
    - SVG 아이콘을 쉽게 사용할 수 있는 아이콘 시스템을 구축합니다.
5. **네비게이션/헤더 (Navigation/Header) 컴포넌트:**
    - 각 페이지로 이동할 수 있는 링크가 포함된 헤더를 만듭니다.

---

### **Phase 3: 페이지별 컨텐츠 구현**

- 이력서(`resume_남철진_260125-0840.pdf`) 내용을 바탕으로 각 페이지를 채웁니다.

1. **메인 (Home) 페이지 (`/`)**
    - 자신을 간결하게 소개하는 Hero 섹션.
    - "Full-stack Developer 남철진"과 같은 핵심 문구와 함께 자신의 강점을 요약하여 보여줍니다.
2. **소개 (About Me) 섹션**
    - 이력서의 "안녕하세요..."로 시작하는 자기소개 내용을 바탕으로 자신의 개발 철학과 성장 과정을 상세히 기술합니다.
    - 협업을 중시하는 태도, 구조적 사고, 꾸준한 학습 의지(Docker, Kubernetes, AI) 등을 강조합니다.
3. **기술 스택 (Skills) 섹션**
    - 이력서의 "전문 분야 스킬"을 시각적으로 보기 좋게 나열합니다.
    - (예: `Backend`, `Frontend`, `DevOps/Infra`, `Databases` 등으로 카테고리화)
4. **경력 (Work Experience) 섹션**
    - **오큐브주식회사**와 **주식회사먹깨비**에서의 경력을 시간순으로 보여주는 타임라인 UI를 구현합니다.
    - 각 경력별로 수행한 역할(PL 등), 주요 업무, 사용 기술 스택을 명확히 기재합니다.
5. **프로젝트 (Projects) 섹션**
    - 경력 사항에 포함된 주요 프로젝트(AWS 기반 서비스, 금융권 연동, ETL, Android 앱 등)를 카드 형태로 보여줍니다.
    - 이력서에 있는 Notion 포트폴리오 링크(`https://www.notion.so/...`)로 연결되는 "자세히 보기" 버튼을 추가합니다.
6. **연락처 (Contact) 섹션**
    - 이메일(`chuljin92.nam@gmail.com`), GitHub, Notion 링크를 포함하여 연락할 수 있는 방법을 안내합니다.

---

### **Phase 4: 최종 작업 및 배포**

1. **반응형 디자인 (Responsive Design):**
    - PC, 태블릿, 모바일 등 다양한 화면 크기에서 웹사이트가 깨짐 없이 자연스럽게 보이도록 CSS Media Query를 사용하여 최적화합니다. (`@MacBook Pro...`, `@iPhone...`
      이미지를 참고하여 디자인 감각을 적용)
2. **검색 엔진 최적화 (SEO):**
    - 각 페이지에 맞는 `title`과 `description` 메타 태그를 `app/layout.tsx`와 각 페이지 파일에 추가하여 검색 결과에 잘 노출되도록 합니다.
3. **최종 검토:**
    - 모든 링크가 정상적으로 작동하는지 확인합니다.
    - 오탈자나 어색한 문장이 없는지 검토합니다.
4. **배포:**
    - `main` 브랜치에 최종 코드를 푸시하여 GitHub Actions가 자동으로 사이트를 빌드하고 GitHub Pages에 배포하도록 합니다.
    - 배포된 포트폴리오 주소(`https://<username>.github.io/<repository-name>/`)를 확인합니다.
