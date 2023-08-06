import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DataProvider from './utils/context'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import LandingPage from './pages/landingPage/landingPage'
import Housing from './pages/housing/housing'
import About from './pages/about/about'
import Error from './pages/error/error'
import './index.scss'

const root = createRoot(document.getElementById('root'));


root.render(
<React.StrictMode>
  <Router>
    <DataProvider >
      <Header />
      <main className='globalStyle'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/housing/:id' element={<Housing />} />
          <Route path='/:about' element={<About />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </DataProvider>
  </Router>
</React.StrictMode>
);
