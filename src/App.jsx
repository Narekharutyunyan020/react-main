
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Services from './components/Services/Services'
import Clock from 'react-clock'

import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
