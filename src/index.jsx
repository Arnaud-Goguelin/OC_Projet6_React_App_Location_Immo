import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import LandingPage from './pages/landingPage'
// import Housing from './pages/housing'
// import About from './pages/about'
import Error from './pages/error'

const root = createRoot(document.getElementById('root'));

root.render(
<React.StrictMode>
  <Router>
    <Layout>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      {/* <Route path='/housing' element={<Housing />} />
      <Route path='/about' element={<About />} /> */}
      <Route path='*' element={<Error />} />
    </Routes>
    </Layout>
  </Router>
</React.StrictMode>
);
