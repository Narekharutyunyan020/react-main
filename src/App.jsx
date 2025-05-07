
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Clock from 'react-clock'

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Content />
       <Footer /> 
    </>
  )
}

export default App
