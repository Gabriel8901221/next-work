import { Globe, Target, Zap } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div className="w-full px-10 md:px-32  items-center   text-white" id="about">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl text-white font-bold md:text-4xl">
          Sobre a <span className="text-green-500">NextWork</span>
        </h2>
        <p className="mt-4 text-gray-400">
          Somos especialistas em tráfego pago, focados em criar estratégias
          personalizadas que geram resultados reais para o seu negócio. Fundada
          por <span className="text-green-500">Icaro Bruno Borges Palu</span>,
          nossa empresa está localizada em{" "}
          <span className="text-green-500">Primavera do Leste - MT</span>.
        </p>
      </div>

      <div className="mt-26 grid gap-10 md:grid-cols-3 mb-20">
        <div className="rounded-lg border border-gray-800 bg-gray-900 p-6 transition-all hover:border-green-500/50">
          <div className="mb-4 inline-flex rounded-full">
            <Target className="text-green-500 w-10 h-10 mb-4" />
          </div>

          <h3 className="text-xl text-white font-bold">Missão</h3>
          <p className="text-gray-400">
            Impulsionar o crescimento dos nossos clientes através de estratégias
            de tráfego pago eficientes e inovadoras
          </p>
        </div>
        <div className="rounded-lg border border-gray-800 bg-gray-900 p-6 transition-all hover:border-green-500/50">
          <div className="mb-4 inline-flex rounded-full">
            <Globe className="text-green-500 w-10 h-10 mb-4" />
          </div>

          <h3 className="text-xl text-white font-bold">Visão</h3>
          <p className="text-gray-400">
          Ser referência nacional em soluções de marketing digital, reconhecida pela excelência e resultados.
          </p>
        </div>
        <div className="rounded-lg border border-gray-800 bg-gray-900 p-6 transition-all hover:border-green-500/50">
          <div className="mb-4 inline-flex rounded-full">
            <Zap className="text-green-500 w-10 h-10 mb-4" />
          </div>

          <h3 className="text-xl text-white font-bold">Valores</h3>
          <p className="text-gray-400">
          Transparência, inovação, compromisso com resultados e relacionamento de longo prazo com nossos clientes.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default About;
