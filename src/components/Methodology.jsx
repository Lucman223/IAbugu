import { Search, Layout, Code2, Rocket } from 'lucide-react';

const Methodology = () => {
  const steps = [
    {
      title: 'Descubrimiento',
      description: 'Análisis detallado de necesidades y objetivos de negocio para trazar el camino más eficiente.',
      icon: <Search className="w-6 h-6" />,
    },
    {
      title: 'Arquitectura',
      description: 'Diseño de la estructura técnica y de experiencia de usuario para garantizar escalabilidad.',
      icon: <Layout className="w-6 h-6" />,
    },
    {
      title: 'Desarrollo Ágil',
      description: 'Construcción modular con estándares modernos y feedback constante durante el proceso.',
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      title: 'Despliegue',
      description: 'Lanzamiento optimizado y monitorización inicial para asegurar un rendimiento impecable.',
      icon: <Rocket className="w-6 h-6" />,
    }
  ];

  return (
    <section id="metodologia" className="py-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Nuestro Proceso
          </h2>
          <div className="w-12 h-1 bg-cyan-600 mx-auto rounded-full"></div>
        </div>

        {/* Pasos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-500 mx-auto mb-6 group-hover:border-cyan-500/50 group-hover:bg-slate-800 transition-all duration-300 shadow-xl shadow-black/50">
                {step.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {step.title}
              </h4>
              <p className="text-slate-400 leading-relaxed font-light text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Methodology;
