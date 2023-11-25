import React from 'react'
import Header from './Header'
import Menu from './Menu'
import Testimonials from './Testimonials'
import About from './About'

export default function Main() {
  return (
    <div>
      <Header />

      <section className='py-[13%]'>
        <Menu />
      </section>

      <section>
        <Testimonials />
      </section>

      <section>
        <About />
      </section>
    </div>
  )
}
