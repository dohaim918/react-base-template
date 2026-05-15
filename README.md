# React Base Template

Vite + React + Emotion 기반 프로젝트 스타터킷.
새 프로젝트마다 처음부터 세팅하지 않고 이 레포를 복제해서 시작합니다.

---

## 시작하기

### 1. 이 레포를 복제
GitHub 페이지 상단 `Use this template` → `Create a new repository`

```bash
git clone https://github.com/[유저명]/[새-레포-이름].git
cd [새-레포-이름]
npm install
npm run dev
```

### 2. 새 프로젝트에 맞게 수정

| 파일 | 수정 항목 |
|---|---|
| `src/styles/Theme.js` | 색상, 폰트, 레이아웃 값 |
| `src/styles/GlobalStyles.jsx` | 폰트 import URL, 배경 그라디언트 |
| `src/App.jsx` | 라우트 추가 |
| `src/pages/` | 기존 페이지 삭제 후 새 페이지 작성 |

---

## 포함된 것들

### `src/styles/Theme.js` — 디자인 토큰
색상, 폰트, 간격, 트랜지션, 반응형 기준값을 한 곳에서 관리합니다.

```js
import { T, alpha, textGrad, NIGHT_STYLE } from '@/styles/Theme'

// 색상
T.bgCard / T.white / T.sub / T.muted

// 반응형 기준
T.bp.mobile / T.bp.tablet / T.bp.desktop

// 간격
T.spacing[4]  // 12px
T.cardGap     // clamp(10px, 1.5vw, 20px)
T.pagePad     // clamp(24px, calc(12.5vw - 80px), 160px)

// 트랜지션
T.transition.fast / T.transition.mid / T.transition.slow

// 헬퍼 함수
alpha(T.pink, 0.3)          // rgba 변환
textGrad(T.pink, T.amber)   // 텍스트 그라디언트
```

### `src/styles/GlobalStyles.jsx` — 글로벌 CSS
CSS 리셋, 폰트, 키프레임 애니메이션을 전역으로 적용합니다.

```jsx
// main.jsx에서 한 번만 선언
<GlobalStyles />
<App />
```

포함된 키프레임: `fadeUp` `fadeIn` `modalIn` `tabIn` `carouselFade` `orbFloat` `scrollBounce`

### `src/hooks/useResponsive.js` — 반응형 훅
JS 로직이 화면 크기에 따라 달라질 때 사용합니다.

```jsx
const { isMobile, isTablet, isDesktop, current } = useResponsive()

// 컴포넌트 교체
return isMobile ? <MobileNav /> : <DesktopNav />

// 데이터 교체
const count = isMobile ? 2 : isTablet ? 3 : 4

// 조건부 렌더링
{isDesktop && <SidePanel />}
```

> CSS만 바뀌는 경우는 `@media (max-width: ${T.bp.mobile})` 사용

---

## 폴더 구조

```
src/
  styles/
    Theme.js          ← 디자인 토큰 (색상·폰트·간격·트랜지션)
    GlobalStyles.jsx  ← 글로벌 CSS (리셋·폰트·키프레임)
  hooks/
    useResponsive.js  ← 반응형 브레이크포인트 훅
  pages/
    main/
      sections/       ← 섹션별 컴포넌트
      MainPage.jsx
  components/         ← 공통 컴포넌트
  data/               ← 정적 데이터
  assets/             ← 이미지·폰트
  App.jsx             ← 라우터
  main.jsx            ← 진입점
```

---

## 약어 규칙 (Theme.js)

| 약어 | 원어 |
|---|---|
| `Pad` | Padding |
| `sec` | section |
| `rsv` | reservation (집중형 레이아웃) |
| `grad` | gradient |

---

## 기술 스택

- Vite
- React 18
- Emotion (styled + Global)
- React Router v6
- @ 경로 alias (`@/` → `src/`)

---

## 설치 패키지

```bash
npm install
# 포함: @emotion/react @emotion/styled react-router-dom
```
