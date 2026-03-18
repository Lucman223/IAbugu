import { Mail, MapPin, MessageSquare } from 'lucide-react';

const FORMSPREE_URL = 'https://formspree.io/f/mjgajrab';

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        alert('¡Solicitud enviada! Te responderemos en menos de 24 horas.');
        form.reset();
      } else {
        alert('Hubo un error al enviar. Por favor, inténtalo de nuevo.');
      }
    } catch {
      alert('Error de red. Revisa tu conexión e inténtalo de nuevo.');
    }
  };

  return (
    <section id="contacto" className="py-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Hablemos de tu proyecto
          </h2>
          <div className="w-12 h-1 bg-cyan-600 mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Formulario (Izquierda) */}
          <div className="bg-slate-900/30 border border-slate-800 p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Nombre / Empresa</label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    placeholder="Escribe tu nombre o el de tu empresa"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-2">Email profesional</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Tu correo corporativo"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Presupuesto estimado</label>
                <select name="presupuesto" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors">
                  <option value="">Selecciona un rango</option>
                  <option value="menos-5k">Menos de 5.000€</option>
                  <option value="5k-15k">5.000€ - 15.000€</option>
                  <option value="15k-50k">15.000€ - 50.000€</option>
                  <option value="mas-50k">Más de 50.000€</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Detalles del proyecto</label>
                <textarea
                  name="detalles"
                  rows="4"
                  placeholder="Cuéntanos brevemente qué necesitas construir"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-slate-950 font-bold py-4 rounded-lg hover:bg-slate-200 transition-all shadow-lg shadow-white/5 active:scale-[0.98]"
              >
                Enviar Solicitud
              </button>
            </form>
          </div>

          {/* Info de contacto (Derecha) */}
          <div className="flex flex-col justify-center space-y-12">
            <div>
              <p className="text-xl text-slate-300 font-light leading-relaxed">
                "Te responderemos en menos de 24 horas con una propuesta de consultoría gratuita."
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Operaciones</p>
                  <p className="text-lg text-white font-medium">Bajo demanda global | Madrid & Bamako</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Operaciones</p>
                  <p className="text-lg text-white font-medium">Bajo demanda global | Madrid & Bamako</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-800">
              <div className="flex items-center gap-3 text-slate-500 text-sm">
                <MessageSquare size={16} className="text-cyan-600" />
                <span>Disponible para consultoría técnica inmediata.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
