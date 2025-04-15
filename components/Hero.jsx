import React from 'react'
import Image from 'next/image'
import HeroImage from '../assets/hero.jpg'

const Hero = () => {
  return (
    <div className='w-full px-10 md:px-32 flex  items-center h-screen gap-16 text-white ' id='hero'>
      <div className='flex flex-col gap-8 '>
        <h2 className='text-4xl md:text-6xl font-bold leading-tight'>Impulsione seu negócio com <span className='text-green-500'>tráfego pago</span> de qualidade</h2>
        <p className='text-lg text-gray-400'>Estratégias personalizadas para aumentar sua visibilidade online e converter visitantes em clientes.</p>
        <div className='flex gap-4 flex-col md:flex-row'>
          <a href='https://wa.me/556696989663' className='bg-green-500 px-12 py-2 hover:bg-green-800 transition ease-in-out cursor-pointer rounded'>Fale Conosco</a>
          <a href='#Services' className='border text-green-500 hover:bg-green-500 hover:text-white transition ease-in-out cursor-pointer border-green-500 px-12 py-2 rounded'>Nossos Serviços</a>
        </div>
      </div>
      <Image
        src={HeroImage}
        alt="Hero Image"
        className="hidden lg:block w-1/2 h-auto rounded-s-[48rem]"
        />
    </div>
  )
}

export default Hero
