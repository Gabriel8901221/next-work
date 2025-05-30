import About from '@/components/About'
import Cta from '@/components/Cta'
import Pricing from '@/components/Ctlg'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-10'>
      <Header />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Cta />
      <Footer />
    </div>
  )
}

export default page
