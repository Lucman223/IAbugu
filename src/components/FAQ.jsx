import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: '¿Cuánto tiempo toma desarrollar un proyecto a medida?',
      answer: 'Depende de la complejidad, pero trabajamos con sprints ágiles que permiten entregas parciales cada 2 semanas. Un MVP típico suele estar listo entre 6 y 10 semanas.'
    },
    {
      question: '¿Ofrecen mantenimiento post-lanzamiento?',
      answer: 'Sí, garantizamos la estabilidad de todos nuestros proyectos. Ofrecemos planes integrales de mantenimiento, seguridad y escalabilidad continua.'
    },
    {
      question: '¿Trabajan con empresas de cualquier tamaño?',
      answer: 'Nos adaptamos tanto a startups en fase de crecimiento como a PYMES que buscan digitalizar procesos críticos con arquitectura de gran empresa.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Preguntas Frecuentes
          </h2>
          <div className="w-12 h-1 bg-cyan-600 mt-6 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/20 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-slate-900/40 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-8">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`text-slate-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-cyan-500' : ''}`} 
                  size={20} 
                />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-slate-400 leading-relaxed font-light">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
