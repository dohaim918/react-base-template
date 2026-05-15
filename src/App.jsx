import { Route, Routes } from "react-router-dom"

export default function App() {
  return (
    <Routes>
      {/* 라우트를 여기에 추가하세요 */}
      {/* <Route path="/" element={<MainPage />} /> */}

      {/* 404 */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}

      <Route path="*" element={<div style={{ padding: "2rem", color: "#f0eeff" }}>준비 중</div>} />
    </Routes>
  )
}
