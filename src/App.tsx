import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Navigator from './pages/Navigator';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/navigator" element={<Navigator />} />
    </Routes>
  )
}

export default App