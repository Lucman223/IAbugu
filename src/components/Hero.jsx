import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Elementos de fondo ultra-minimalistas (gradiente difuso) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-slate-900/50 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Pill / Badge Superior */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-800 bg-slate-900/40 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
          <span className="text-xs font-medium tracking-wide text-slate-300 uppercase">Soluciones Tecnológicas a Medida</span>
        </div>

        {/* Título Principal */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
          Transformamos tu visión en plataformas digitales de <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">alto rendimiento.</span>
        </h1>

        {/* Subtítulo */}
        <p className="max-w-3xl text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed font-light">
          IABugu diseña, desarrolla y escala software para empresas que buscan resultados reales. Código limpio, arquitectura moderna y trato directo.
        </p>

        {/* Botones de Acción */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto">
          <a 
            href="#contacto" 
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-cyan-700 hover:bg-cyan-600 text-white font-medium transition-all shadow-lg shadow-cyan-900/20 hover:shadow-cyan-900/40"
          >
            Solicitar Presupuesto
            <ArrowRight size={18} />
          </a>
          <a 
            href="#casos-de-exito" 
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-md bg-transparent border border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 text-slate-200 font-medium transition-all"
          >
            Ver casos de éxito
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
