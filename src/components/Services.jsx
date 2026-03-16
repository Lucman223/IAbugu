import { MonitorSmartphone, BrainCircuit, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Desarrollo Web y Apps',
      description: 'Plataformas Full-Stack robustas y escalables.',
      icon: <MonitorSmartphone className="w-8 h-8 text-cyan-500 mb-6" />,
    },
    {
      title: 'Integración de IA',
      description: 'Automatización y soluciones inteligentes para optimizar tus procesos.',
      icon: <BrainCircuit className="w-8 h-8 text-cyan-500 mb-6" />,
    },
    {
      title: 'Consultoría Técnica',
      description: 'Auditoría y arquitectura para asentar bases sólidas en tu proyecto.',
      icon: <Wrench className="w-8 h-8 text-cyan-500 mb-6" />,
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Strip (Franja de confianza minimalista) */}
        <div className="border-b border-slate-800/50 pb-12 mb-20 text-center">
          <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-6">
            Tecnologías base y certificación:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-slate-400 font-semibold text-lg tracking-wide">
            <span className="hover:text-cyan-400 transition-colors cursor-default">React</span>
            <span className="hover:text-green-500 transition-colors cursor-default">Node.js</span>
            <span className="hover:text-blue-500 transition-colors cursor-default">Python</span>
            <span className="hover:text-cyan-300 transition-colors cursor-default">Tailwind CSS</span>
            <span className="text-slate-300 italic opacity-80 cursor-default">Ilaria Digital School</span>
          </div>
        </div>

        {/* Título de Sección */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Soluciones Tecnológicas
          </h2>
          <div className="w-12 h-1 bg-cyan-600 mt-6 rounded-full"></div>
        </div>

        {/* Grid de Tarjetas de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-slate-900 border border-slate-800 rounded-xl p-8 hover:border-slate-700 hover:bg-slate-800/80 transition-all duration-300 group"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed font-light">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
