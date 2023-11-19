import React from 'react'
import Header from './Header'
import Menu from './Menu'

export default function Main() {
  return (
    <div>
      <Header />

      <section className='py-[13%]'>
        <Menu />
      </section>
    </div>
  )
}
