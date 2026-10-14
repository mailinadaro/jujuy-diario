
import { MainContainer } from '@/components/layout/MainContainer';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

interface PricingProps {
  whatsappNumber: string;
}

export const PricingSection: React.FC<PricingProps> = ({ whatsappNumber }) => {
  const getWhatsAppUrl = (plan: string) => {
    const text = encodeURIComponent(`Hola, quiero consultar la tarifa para el ${plan}. Mi barrio es: `);
    return `https://wa.me/${whatsappNumber}?text=${text}`;
  };

  const plans = [
    {
      title: 'Plan 2 viajes diarios',
      subtitle: 'Ida y vuelta',
      priceRange: 'De $[X] a $[X]',
      period: 'por semana, según tu zona',
      desc: 'Ideal para la rutina de lunes a viernes con horario fijo de entrada y salida al centro.',
      popular: false
    },
    {
      title: 'Plan 4 viajes diarios',
      subtitle: 'Horario cortado',
      priceRange: 'De $[X] a $[X]',
      period: 'por semana, según tu zona',
      desc: 'Ida y vuelta a la mañana e ida y vuelta a la tarde para comer en casa al mediodía.',
      popular: true
    },
    {
      title: 'Otro traslado fijo',
      subtitle: 'Recorridos especiales',
      priceRange: 'A consultar',
      period: 'según disponibilidad y tramo',
      desc: 'Para recorridos recurrentes que no encajan en los planes estándar de horario laboral.',
      popular: false
    }
  ];

  return (
    <section id="precio" className="py-24 bg-white">
      <MainContainer>
        <ScrollReveal>
          <SectionHeader 
            eyebrow="Tarifa clara" 
            title="Cuánto cuesta."
            description="Cobramos por semana, según el plan que elijas. Valores actualizados. El monto exacto te lo confirmamos por WhatsApp antes de empezar, sin cargos ocultos."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.15}>
              <div className={`bg-slate-50 border ${p.popular ? 'border-amber-500 shadow-md ring-1 ring-amber-500' : 'border-slate-200'} p-8 rounded-2xl flex flex-col justify-between h-full relative`}>
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 font-bold text-[10px] tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
                    Más consultado
                  </span>
                )}
                <div>
                  <span className="text-xs uppercase tracking-wider text-amber-600 font-semibold block mb-1">{p.subtitle}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{p.title}</h3>
                  <div className="mb-4">
                    <span className="text-2xl font-light text-slate-900 block">{p.priceRange}</span>
                    <span className="text-xs text-slate-500">{p.period}</span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8">{p.desc}</p>
                </div>
                <a
                  href={getWhatsAppUrl(p.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all shadow-sm cursor-pointer ${
                    p.popular 
                      ? 'bg-amber-500 hover:bg-amber-400 text-slate-950' 
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  Quiero mi tarifa
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </MainContainer>
    </section>
  );
};
