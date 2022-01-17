import React from 'react'
import { Routes, Route  } from 'react-router-dom'

import Notes from './pages/Notes'
import Products from './pages/Products'
import Settings from './pages/Settings'
import Login from './pages/Login'
import Gallery from './pages/Gallery'
import Learn from './pages/Learn'


export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route path="/" exact element={<Login />}></Route>
        <Route path="/notes" element={<Notes />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/learn" element={<Learn />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
      </Routes>
    )
  }

  return (
    <Routes >
      <Route path="/" element={<Login />}></Route>
    </Routes>
  )
}