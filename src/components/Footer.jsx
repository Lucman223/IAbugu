import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="py-12 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
          
          {/* Logo y Info (Izquierda) */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logo} alt="IABugu" className="h-6 w-auto mix-blend-lighten opacity-80" />
            <p className="text-slate-600 text-xs font-medium tracking-wider">
              © 2026 IABugu. Todos los derechos reservados.
            </p>
          </div>

          {/* Navegación Rápida (Centro) */}
          <div className="flex justify-center gap-8">
            <a href="#servicios" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">Servicios</a>
            <a href="#proyectos" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">Proyectos</a>
            <a href="#faq" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">FAQ</a>
          </div>

          {/* Enlaces Legales (Derecha) */}
          <div className="flex flex-col md:flex-row justify-center md:justify-end gap-6 text-xs text-slate-600 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-cyan-500 transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-cyan-500 transition-colors">Política de Privacidad</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
