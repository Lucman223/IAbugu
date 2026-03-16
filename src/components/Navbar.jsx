import logo from '../assets/logo.png';
import { Menu } from 'lucide-react';

const Navbar = () => {
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
            <a href="/" className="block">
              <img 
                src={logo} 
                alt="IABUGU - Agencia AI" 
                className="h-auto max-h-[40px] md:max-h-[55px] w-auto mix-blend-screen brightness-110 transition-all"
              />
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
            <button className="text-slate-300 hover:text-white p-2">
              <Menu size={24} />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
