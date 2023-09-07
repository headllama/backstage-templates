import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import { PageNotFound } from './pages/PageNotFound'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/404" element={<PageNotFound />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  )
}
