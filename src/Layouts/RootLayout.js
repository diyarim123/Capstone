import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

export default function RootLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>


      <main className='flex flex-col justify-around'>
        <Outlet />
      </main>


      <footer>
        <Footer />
      </footer>
    </div>
  )
}
