
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Services from './components/Services/Services'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
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
        <Route path='/home'element={<Home/>}/>
        <Route path='/contact'element={<Contact/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
