import { useState } from 'react'

import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'


function App() {
  
  return (
    <div className='container'>
        <Header />
        <div className='divider' />
        <Hero />
        <div className='divider' />
        <Main />
        <div className='divider' />
        <Contact />
        <div className='divider' />
        <Footer />
      
      
    </div>
  )
}

export default App
