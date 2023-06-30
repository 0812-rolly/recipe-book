import React from 'react'
import { HashRouter } from 'react-router-dom'
import Layout from './Layout'
import GlobalStyles from './style/Global'

import '@shoelace-style/shoelace/dist/themes/light.css'
import './style/tailwind.css'
import './style/themes/light.css'

const App: React.FC = () => {
  return (
    <HashRouter basename="/">
      <GlobalStyles />
      <Layout />
    </HashRouter>
  )
}

export default App
