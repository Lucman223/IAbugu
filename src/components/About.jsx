import { CheckCircle, Gem, Zap, UserCheck } from 'lucide-react';

const About = () => {
  const boutiqueValues = [
    {
      title: 'Especialización Profunda',
      desc: 'No buscamos hacerlo todo, sino ser los mejores en lo que importa: React, Node.js e IA.',
      icon: <Zap className="text-cyan-500 w-5 h-5" />
    },
    {
      title: 'Calidad sobre Cantidad',
      desc: 'Seleccionamos pocos proyectos al año para garantizar una ejecución técnica impecable.',
      icon: <Gem className="text-cyan-500 w-5 h-5" />
    },
    {
      title: 'Trato Directo',
      desc: 'Sin intermediarios. Hablas directamente con el arquitecto de tu software.',
      icon: <UserCheck className="text-cyan-500 w-5 h-5" />
    }
  ];

  const standards = [
    'Código Limpio',
    'Arquitectura Escalable',
    'Transparencia Total',
    'Entrega Ágil'
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            IABugu: Tu <span className="text-cyan-500">Boutique</span> Tecnológica
          </h2>
          <div className="w-12 h-1 bg-cyan-600 mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Columna Izquierda: El Enfoque Boutique */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xl text-slate-300 leading-relaxed font-light">
                Nos alejamos de las "fábricas de software" impersonales. Como boutique técnica, nuestro propósito es la <span className="text-white font-medium">artesanía digital de alto rendimiento.</span>
              </p>
              <p className="text-lg text-slate-400 leading-relaxed font-light">
                Combinamos la agilidad de una estructura ligera con la potencia de las tecnologías más punteras, eliminando vicios de código heredado y burocracia innecesaria.
              </p>
            </div>

            {/* Grid de Valores Boutique */}
            <div className="grid grid-cols-1 gap-6 pt-6">
              {boutiqueValues.map((val, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800/50 hover:border-cyan-500/30 transition-colors">
                  <div className="mt-1">{val.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{val.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna Derecha: El Fundador y Estándares */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-transparent blur-2xl opacity-50"></div>
            <div className="relative bg-slate-900/50 border border-slate-800 rounded-2xl p-8 lg:p-12 backdrop-blur-sm">
              <div className="mb-10">
                <p className="text-lg text-slate-200 leading-relaxed font-light italic mb-4">
                  "Soy Lucman Sidibe, Lead Developer. En IABugu, cada línea de código tiene un propósito: la excelencia técnica sin compromisos."
                </p>
                <p className="text-sm text-slate-500">— Graduado en Ilaria Digital School</p>
              </div>

              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">Estándares de Calidad</h4>
              <ul className="space-y-4">
                {standards.map((value, index) => (
                  <li key={index} className="flex items-center gap-3 text-white font-medium group text-lg">
                    <CheckCircle className="text-cyan-500 w-5 h-5 group-hover:scale-110 transition-transform" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
