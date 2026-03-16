const Projects = () => {
  const projects = [
    {
      title: 'NexGen ERP System',
      description: 'Reconstrucción total de la infraestructura de datos para optimizar la gestión logística.',
      tags: ['React', 'Node.js', 'PostgreSQL'],
    },
    {
      title: 'Zenit E-Commerce',
      description: 'Plataforma de venta online de alto rendimiento con integración de pagos globales.',
      tags: ['Next.js', 'Tailwind CSS', 'Stripe'],
    },
    {
      title: 'Innova CRM',
      description: 'Herramienta personalizada de gestión de clientes enfocada en la automatización de ventas.',
      tags: ['Python', 'FastAPI', 'React'],
    }
  ];

  return (
    <section id="proyectos" className="py-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Casos de Éxito
          </h2>
          <div className="w-12 h-1 bg-cyan-600 mt-6 rounded-full"></div>
        </div>

        {/* Listado de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col bg-slate-900/30 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300">
              
              {/* Placeholder de Imagen (Espacio Gris) */}
              <div className="aspect-[16/10] bg-slate-800/50 flex items-center justify-center border-b border-slate-800 relative group-hover:bg-slate-800 transition-colors">
                <span className="text-slate-600 font-mono text-sm tracking-widest uppercase mb-2">IABugu Case Study</span>
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950/20 to-transparent"></div>
              </div>

              {/* Contenido */}
              <div className="p-8 flex flex-col flex-1">
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-400 leading-relaxed font-light mb-6 flex-1">
                  {project.description}
                </p>
                
                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIndex) => (
                    <span 
                      key={tIndex} 
                      className="text-[10px] font-bold text-slate-500 bg-slate-800/50 px-2.5 py-1 rounded border border-slate-700 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
