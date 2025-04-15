import { ArrowRight } from 'lucide-react'
import React from 'react'

const Cta = () => {
  return (
    <section className="py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="rounded-2xl bg-gradient-to-r from-green-500/20 to-green-500/5 p-8 md:p-12">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold md:text-4xl">Pronto para impulsionar seu negócio?</h2>
                <p className="mt-4 text-gray-300">
                  Entre em contato conosco hoje mesmo e descubra como podemos ajudar a aumentar suas conversões com
                  tráfego pago de qualidade.
                </p>
                <button className="mt-8 cursor-pointer px-10 py-2 rounded mx-auto bg-green-500 hover:bg-green-600">
                  <a className='w-full h-full flex items-center' href="https://wa.me/556696989663">Solicitar Proposta<ArrowRight className="ml-2 h-4 w-4" /></a> 
                </button>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Cta
