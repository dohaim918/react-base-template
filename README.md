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
| `src/styles/theme.js` | 색상, 폰트, 레이아웃 값 |
| `src/styles/GlobalStyles.jsx` | 폰트 import, 배경 그라디언트 |
| `src/styles/keyframes.js` | 프로젝트에 맞는 키프레임 추가/제거 |
| `src/App.jsx` | 라우트 추가 |
| `src/pages/` | 기존 페이지 삭제 후 새 페이지 작성 |

---

## 포함된 것들

### `src/styles/theme.js` — 디자인 토큰
색상, 폰트, 간격, 트랜지션, 반응형 기준값을 한 곳에서 관리합니다.

```js
import { T, alpha, textGrad, NIGHT_STYLE } from '@/styles/theme'

// 색상
T.bgCard / T.main / T.sub / T.muted

// 반응형 기준 (mini 추가 — 480px 이하 소형 모바일)
T.bp.mini / T.bp.mobile / T.bp.tablet / T.bp.desktop

// 간격 (px 값이 곧 키 — T.spacing[16] → "16px")
T.spacing[4]   // "4px"
T.spacing[8]   // "8px"
T.spacing[12]  // "12px"
T.spacing[16]  // "16px"
T.spacing[20]  // "20px"
T.spacing[24]  // "24px"
T.spacing[32]  // "32px"
T.spacing[36]  // "36px"
T.spacing[42]  // "42px"
T.spacing[48]  // "48px"

// 폰트 사이즈
T.fontSize.xxs  // "12px"
T.fontSize.xs   // "14px"
T.fontSize.sm   // "16px"
T.fontSize.hero // "clamp(52px, 10vw, 110px)"

// 레이아웃
T.pagePad    // clamp 기반 반응형 패딩 (480px 이하 24px 고정)
T.navHeight  // "100px"

// 트랜지션
T.transition.fast / T.transition.mid / T.transition.slow / T.transition.spring

// 헬퍼 함수
alpha(T.pink, 0.3)          // rgba 변환
textGrad(T.pink, T.amber)   // 2색 텍스트 그라디언트
textGradStops([...], 135)   // 다중 컬러스톱 텍스트 그라디언트
```

### `src/styles/keyframes.js` — 키프레임 애니메이션
GlobalStyles에서 import해 전역 주입합니다. 새 키프레임은 여기에 추가합니다.

| 키프레임 | 용도 |
|---|---|
| `fadeUp` | 아래에서 위로 등장 |
| `fadeIn` | 서서히 나타남 |
| `modalIn` | 모달 등장 |
| `tabIn` | 탭 전환 |
| `carouselFade` | 갤러리 캐러셀 |
| `orbFloat` | 배경 오브 부유 |
| `scrollBounce` | 스크롤 인디케이터 라인 |
| `scrollChevBounce` | 스크롤 인디케이터 쉐브론 |

### `src/styles/GlobalStyles.jsx` — 글로벌 CSS
CSS 리셋, 폰트, 키프레임을 전역으로 적용합니다.

```jsx
// main.jsx에서 한 번만 선언
<GlobalStyles />
<App />
```

### `src/hooks/useResponsive.js` — 반응형 훅
JS 로직이 화면 크기에 따라 달라질 때 사용합니다.

```jsx
const { isMini, isMobile, isTablet, isDesktop, isMobileOrSmaller } = useResponsive()

// 컴포넌트 교체
return isMobile ? <MobileNav /> : <DesktopNav />

// 데이터 교체
const count = isMini ? 1 : isMobile ? 2 : isTablet ? 3 : 4

// 조건부 렌더링
{isDesktop && <SidePanel />}
{isMobileOrSmaller && <CompactView />}
```

> CSS만 바뀌는 경우는 `@media (max-width: ${T.bp.mobile})` 사용

### `src/components/ui/ScrollIndicator.jsx` — 스크롤 인디케이터
히어로 섹션 하단 스크롤 유도 UI입니다. `scrollBounce` / `scrollChevBounce` 키프레임을 사용합니다.

```jsx
import ScrollIndicator from '@/components/ui/ScrollIndicator'

<ScrollIndicator color={T.pink} />
```

---

## 폴더 구조

```
src/
  styles/
    theme.js          ← 디자인 토큰 (색상·폰트·간격·트랜지션)
    GlobalStyles.jsx  ← 글로벌 CSS (리셋·폰트·키프레임 주입)
    keyframes.js      ← CSS 키프레임 모음
  hooks/
    useResponsive.js  ← 반응형 브레이크포인트 훅
  components/
    ui/
      ScrollIndicator.jsx  ← 스크롤 유도 인디케이터
  pages/
    main/
      sections/       ← 섹션별 컴포넌트
      MainPage.jsx
  data/               ← 정적 데이터
  assets/             ← 이미지·폰트
  App.jsx             ← 라우터
  main.jsx            ← 진입점
```

---

## 약어 규칙 (theme.js)

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
