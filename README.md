README
- 프로젝트 실행 방법
1. 코드 내려받기
Bash
git clone https://github.com/kanavi-cloud/CareerLens-Frontend
cd CareerLens-Frontend
2. 라이브러리 설치
Bash
npm install
3. 로컬 서버 실행
Bash
npm run dev
접속 주소: http://localhost:3000

- 프로젝트 파일 구조 가이드

Plaintext
src/
├── app/            # Next.js App Router (페이지 경로 및 전역 설정)
│   ├── layout.tsx  # 최상위 레이아웃 (폰트, 전역 스타일 연결)
│   ├── page.tsx    # 메인 랜딩 페이지
│   └── globals.css # Tailwind CSS 및 테마 변수 설정
├── components/     # UI 구성 요소
│   ├── ui/         # shadcn/ui 컴포넌트 (수정 없이 혹은 스타일만 수정해서 사용)
│   ├── common/     # 프로젝트 전역에서 공통으로 쓰는 작은 단위 (Custom Button, Input 등)
│   ├── layout/     # 페이지의 틀을 잡는 큰 단위 (Navbar, Footer, Sidebar 등)
│   └── feature/    # 특정 기능 단위의 복합 컴포넌트 (LoginCard, RecommendList 등)
├── hooks/          # 재사용되는 상태 로직 및 이벤트 핸들러
├── lib/            # 외부 라이브러리 설정 및 공통 유틸 함수
└── types/          # TypeScript 인터페이스 및 타입 정의
- shadcn/ui 협업 및 사용 가이드
1. 기본 개념
복사 방식: 라이브러리 전체를 설치하는 것이 아니라, 필요한 컴포넌트 소스코드를 src/components/ui에 직접 내려받아 사용합니다.

커스텀 가능: 우리 프로젝트 디자인에 맞춰 ui 폴더 내의 소스코드를 직접 수정해도 됩니다.

2. 컴포넌트 제어 (Props)
variant: 디자인 유형 결정 (예: default, outline, ghost)

size: 크기 결정 (예: sm, default, lg, icon)

asChild: 버튼 내부에 Link 태그 등을 넣을 때 스타일 깨짐 방지를 위해 사용합니다.

3. 레이아웃 및 간격 조절
너비 제어: 컴포넌트 자체를 수정하지 말고, 사용하는 곳에서 부모 요소(div, Card)의 너비를 제한하여 조절하십시오.

간격 유지: 개별 요소에 className="mb-4"를 추가하거나 부모 요소에 gap을 주어 조절하십시오.

4. 주요 컴포넌트 구성
Card: Card > CardHeader > CardContent > CardFooter 순서로 조립합니다.

Input: max-w-sm 등으로 너비를 제한해서 사용해야 화면에 꽉 차지 않습니다.

Badge: 상태 표시용 태그입니다. (default, secondary, outline 등)

5. 환경 설정 (테마)
전체 색상: src/app/globals.css 내 :root의 --primary 값을 변경하면 전체 메인 컬러가 바뀝니다.

다크모드: globals.css 내의 .dark 클래스 변수로 제어합니다.

- 협업 주의사항
새로운 라이브러리 설치 시 반드시 팀원들에게 공지하십시오.

환경 변수는 공유되지 않으므로 .env.example을 참고하여 로컬에 .env.local을 생성하십시오.

파일 및 폴더 생성 시 대소문자 구분에 주의하십시오. (Windows/Mac 환경 차이 방지)
