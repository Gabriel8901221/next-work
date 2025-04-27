import React from 'react';

const plans = [
  {
    name: 'Basic',
    highlight: 'bg-[#1a2a32] text-green-400',
    label: 'Basic',
    labelClass: 'bg-[#1a2a32] text-green-400',
    title: 'Marketing Digital',
    services: [
      'Orçamento da Campanha: Personalizado',
    ],
    description: 'Ideal para quem quer começar com estratégia, investindo conforme sua necessidade',
    price: 'Personalizado',
    button: 'Get Started',
    buttonClass: 'bg-[#1a2a32] text-white',
    main: false,
  },
  {
    name: 'Premium',
    highlight: 'bg-[#1a2a32] text-yellow-400',
    label: 'Premium',
    labelClass: 'bg-yellow-300 text-[#1a2a32] font-bold',
    title: 'Marketing Digital Profissional',
    services: [
      'Orçamento da Campanha: Personalizado',
      'Roteiro: R$ 56',
      'Filmmaker: R$ 70',
      'Edição: R$ 84',
      'Produção de vídeo: R$ 140',
      'Criação de site: R$ 210',
    ],
    description: 'Custo total: R$ 550 + Orçamento da campanha',
    price: 'R$560',
    button: 'Upgrade Now',
    buttonClass: 'bg-green-500 text-white font-bold',
    main: true,
  },
  {
    name: 'Pro',
    highlight: 'bg-[#1a2a32] text-blue-400',
    label: 'Pro',
    labelClass: 'bg-[#1a2a32] text-blue-400',
    title: 'Marketing Digital + Criativo',
    services: [
      'Orçamento da Campanha: Personalizado',
      'Roteiro: R$ 56',
      'Filmmaker: R$ 70',
      'Edição: R$ 84',
    ],
    description: 'Custo total: R$ 210 + Orçamento da campanha',
    price: 'R$210',
    button: 'Choose Plan',
    buttonClass: 'bg-[#1a2a32] text-white',
    main: false,
  },
];

const Pricing = () => {
  return (
    <section className="w-full py-16 flex flex-col items-center bg-[#fafbfc]" id="pricing">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Nossos Planos</h2>
      <div className="flex flex-col md:flex-row gap-8 md:gap-4 w-full max-w-6xl justify-center px-4">
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className={`flex flex-col rounded-3xl border ${plan.main ? 'bg-[#1a2a32] text-white border-none shadow-2xl scale-105 z-10' : 'bg-white text-black border-gray-200'} p-8 flex-1 min-w-[280px] max-w-[350px] relative transition-all duration-300`}
          >
            {/* Label */}
            <span className={`absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-1 rounded-t-2xl text-lg font-semibold shadow ${plan.labelClass}`}>{plan.label}{plan.main && <span className="ml-2">★</span>}</span>
            {/* Title */}
            <h3 className="text-2xl font-bold mt-6 mb-2 text-center">{plan.title}</h3>
            <hr className="my-4 border-gray-300 opacity-50" />
            {/* Services */}
            <div className="mb-4">
              <h4 className="font-semibold mb-2">Services</h4>
              <ul className="space-y-2">
                {plan.services.map((service, i) => (
                  <li key={i} className="flex items-center gap-2 text-base">
                    <span className="text-green-500">✔</span> {service}
                  </li>
                ))}
              </ul>
            </div>
            {/* Description */}
            <p className={`text-sm mt-auto mb-4 ${plan.main ? 'text-gray-200' : 'text-gray-700'} text-center font-medium`}>{plan.description}</p>
            {/* Price */}
            <div className="text-center mb-4">
              <span className="block text-lg font-semibold">Preço</span>
              <span className="block text-3xl md:text-4xl font-bold mt-1">{plan.price}</span>
            </div>
            {/* Button */}
            <button className={`w-full py-3 rounded-xl mt-auto ${plan.buttonClass} hover:opacity-90 transition font-semibold text-lg`}>{plan.button}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing; 