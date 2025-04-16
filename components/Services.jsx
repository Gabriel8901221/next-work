import {
  ArrowRight,
  BarChart2,
  Globe,
  MessageSquare,
  Target,
  Zap,
} from "lucide-react";
import React from "react";

const Services = () => {
  return (
    <div className="w-full px-10 md:px-32  items-center  bg-gray-900 text-white" id="Services"> 
      <div className="mx-auto mt-12 max-w-3xl text-center">
        <h2 className="text-3xl text-white font-bold md:text-4xl">
          Nossos <span className="text-green-500">Serviços</span>
        </h2>
        <p className="mt-4 text-gray-400">
          Oferecemos soluções completas de tráfego pago para aumentar sua
          visibilidade online e gerar mais conversões.
        </p>
      </div>

      <div className="mt-26 grid gap-10 md:grid-cols-3 mb-20">
        <div className="rounded-lg border border-gray-800 bg-gray-950 p-6 transition-all hover:border-green-500/50">
          <div className="mb-4 inline-flex rounded-full">
            <Target className="text-green-500 w-10 h-10 mb-4" />
          </div>

          <h3 className="text-xl text-white font-bold">Google Ads</h3>
          <p className="text-gray-400">
            Campanhas otimizadas para aparecer no momento certo para as pessoas
            certas, maximizando seu ROI.
          </p>
          <a href="https://wa.me/556696989663" className="flex items-center mt-4 cursor-pointer px-0 text-green-500 hover:text-green-400">
            Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
        <div className="rounded-lg border border-gray-800 bg-gray-950 p-6 transition-all hover:border-green-500/50">
          <div className="mb-4 inline-flex rounded-full">
            <MessageSquare className="text-green-500 w-10 h-10 mb-4" />
          </div>

          <h3 className="text-xl text-white font-bold">Meta Ads</h3>
          <p className="text-gray-400">
            Anúncios no Facebook e Instagram com segmentação precisa para
            atingir seu público-alvo ideal.
          </p>
          <a href="https://wa.me/556696989663" className="flex items-center mt-4 cursor-pointer px-0 text-green-500 hover:text-green-400">
            Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>       

        <div className="rounded-lg border border-gray-800 bg-gray-950 p-6 transition-all hover:border-green-500/50">
          <div className="mb-4 inline-flex rounded-full">
            <Zap className="text-green-500 w-10 h-10 mb-4" />
          </div>

          <h3 className="text-xl text-white font-bold">Análise & Otimização</h3>
          <p className="text-gray-400">
            Monitoramento constante e ajustes estratégicos para maximizar o
            desempenho das suas campanhas.
          </p>
          <a href="https://wa.me/556696989663" className="flex items-center mt-4 cursor-pointer px-0 text-green-500 hover:text-green-400">
            Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
