import React from 'react';
import Header from '../secondaryComponents/header';
import Footer from '../secondaryComponents/footer'
import './layout.scss'

function Layout({ children }) {

  return (
    <div className='layout'>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout;