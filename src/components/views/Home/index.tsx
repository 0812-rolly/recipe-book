import React from 'react'
import { Link } from 'react-router-dom'

const HomeView: React.FC = () => {
  return (
    <div>
      <h1 className="font-semibold text-32 md:text-40">Home page</h1>
      <Link to="/recipes">Recipes list</Link>
    </div>
  )
}

export default HomeView
