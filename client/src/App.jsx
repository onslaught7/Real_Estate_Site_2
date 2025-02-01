import React, { useState } from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import Navbar from './components/ui/Navbar'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
