import { MainContainer } from '@/components/layout/MainContainer';
import { Navigation } from '@/components/sections/globales/Navigation';
import { Footer } from '@/components/sections/globales/Footer';
import data from '@/data/chofer-privado.json';

const sections = [
  'Cancelaciones',
  'Ausencias y viajes no utilizados',
  'Cambios de horario o de recorrido',
  'Pagos',
  'Clima, tránsito o imprevistos',
  'Horario de atención y alcance del servicio',
  'Contacto',
];

export default function CancellationPoliciesPage() {
  return (
    <main className="bg-slate-50 text-slate-800 antialiased selection:bg-amber-500 selection:text-slate-950 font-sans min-h-screen flex flex-col justify-between">
      <Navigation whatsappNumber={data.whatsapp} />

      <div className="py-20 px-6 flex-grow">
        <MainContainer className="max-w-4xl bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="space-y-10 text-slate-700 font-light text-sm leading-relaxed">
            {sections.map((section) => (
              <section key={section} className="space-y-3">
                <h1 className="text-lg font-medium text-slate-900 border-l-2 border-amber-500 pl-3">
                  {section}
                </h1>
                {/* TODO: agregar el contenido de esta sección. */}
              </section>
            ))}
          </div>
        </MainContainer>
      </div>

      <Footer />
    </main>
  );
}
