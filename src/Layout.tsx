import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeView from './components/views/Home'
import RecipesView from './components/views/Recipes'

const Layout: React.FC = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomeView />} />
      </Route>
      <Route path="/recipes" element={<RecipesView />} />
    </Routes>
  )
}

export default Layout
