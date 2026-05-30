import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navabr from './Componants/Navabr'
import Footer from './Componants/Footer'

const App = () => {
  return (
    <div>
      <Navabr />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
