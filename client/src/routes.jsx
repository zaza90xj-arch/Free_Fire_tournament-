import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TournamentPage from './pages/TournamentPage'
import RankingPage from './pages/RankingPage'
import AdminPage from './pages/AdminPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tournament/:id" element={<TournamentPage />} />
      <Route path="/ranking" element={<RankingPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  )
}

export default AppRoutes