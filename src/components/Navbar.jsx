import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Metodología', href: '#metodologia' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0B1120]/80 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-3 group">
              <img src={logo} alt="IABugu Logo" className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
              <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                IABUGU
              </h1>
            </a>
          </div>

          {/* Enlaces Centrales (Desktop) */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-[#00E5FF] text-sm font-medium tracking-wide transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Botón CTA (Desktop) */}
          <div className="hidden md:block">
            <a
              href="#contacto"
              className="bg-white text-slate-950 text-sm font-medium px-5 py-2.5 rounded-md hover:bg-slate-200 transition-colors shadow-sm"
            >
              Iniciar Proyecto
            </a>
          </div>

          {/* Botón Menú Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Menú Mobile Desplegable */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-[#0B1120]/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-slate-300 hover:text-cyan-400 text-sm font-medium tracking-wide transition-colors rounded-lg hover:bg-slate-800/50"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="block mt-3 px-4 py-3 bg-white text-slate-950 text-sm font-medium rounded-md hover:bg-slate-200 transition-colors text-center"
            >
              Iniciar Proyecto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
