import parentChild from "@/assets/parent-child.jpg";

export default function ParentsSection() {
  const bullets = [
    { title: "Ambiente seguro", text: "experiência infantil sem anúncios, sem links externos e sem surpresas." },
    { title: "Criatividade", text: "estimula imaginação, foco e coordenação motora da criança." },
    { title: "Praticidade", text: "funciona no celular, tablet ou computador, sem instalação." },
    { title: "Valor percebido", text: "a criança cria, salva, imprime e coleciona suas obras." },
    { title: "Economia real", text: "menos tempo de tela passiva, mais tempo de criação ativa." },
  ];

  return (
    <section id="pais" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-violet-700/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-pink-500/20 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 reveal">
          <div className="chip inline-block rounded-full px-3 py-1 text-xs mb-4 tracking-widest uppercase">Para pais e responsáveis</div>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            <span className="text-white">FEITO PARA CRIANÇAS.</span>
            <br />
            <span className="rainbow-text">PENSADO PARA OS PAIS.</span>
          </h2>
          <ul className="mt-8 space-y-4">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-emerald-400/20 text-emerald-300 grid place-items-center font-bold">✓</span>
                <div>
                  <span className="font-bold text-white">{b.title}:</span>{" "}
                  <span className="text-white/70">{b.text}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-2xl overflow-hidden border border-white/10">
            <img src={parentChild} alt="Mãe e filha pintando juntas" width={800} height={500} loading="lazy" className="w-full h-48 object-cover" />
          </div>
        </div>

        <div className="lg:col-span-6 reveal" id="comecar">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-tr from-yellow-400/30 via-pink-500/30 to-violet-500/40 blur-2xl" />
            <div className="relative rounded-[28px] border border-white/15 bg-gradient-to-b from-[#1a0a3d] to-[#0b0420] p-6 md:p-8 shadow-[0_40px_120px_-20px_rgba(255,79,163,0.5)]">
              <div className="flex items-center justify-between">
                <div className="text-xs uppercase tracking-widest text-yellow-300 font-bold">Promoção de lançamento</div>
                <div className="text-xs chip rounded-full px-2 py-1">-83%</div>
              </div>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-white/70 text-xl">R$</span>
                <span className="font-display font-bold text-7xl text-white leading-none drop-shadow-[0_6px_20px_rgba(255,204,51,0.35)]">19</span>
                <span className="font-display font-bold text-3xl text-white">,90</span>
                <span className="text-white/60 text-sm mb-2">/ano</span>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                {[
                  { icon: "🚀", label: "Acesso imediato" },
                  { icon: "👑", label: "Assinatura anual" },
                  { icon: "🎁", label: "Novos desenhos toda semana" },
                ].map((p,i)=>(
                  <div key={i} className="rounded-xl bg-white/5 border border-white/10 p-2">
                    <div className="text-xl">{p.icon}</div>
                    <div className="text-[10px] text-white/70 mt-1 leading-tight">{p.label}</div>
                  </div>
                ))}
              </div>

              <a href="#comecar" className="btn-primary w-full mt-6 rounded-2xl py-4 text-base inline-flex items-center justify-center gap-2 pulse-glow">
                ASSINAR AGORA <span>→</span>
              </a>

              <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] text-white/70">
                <div className="inline-flex items-center gap-2"><span className="text-emerald-300">✓</span> Ambiente 100% seguro</div>
                <div className="inline-flex items-center gap-2"><span className="text-emerald-300">✓</span> Cancele quando quiser</div>
                <div className="inline-flex items-center gap-2"><span className="text-emerald-300">✓</span> Pagamento seguro</div>
                <div className="inline-flex items-center gap-2"><span className="text-emerald-300">✓</span> Para toda a família</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 rotate-12 bg-pink-500 text-white rounded-xl px-3 py-2 text-xs font-bold shadow-xl">
              Conteúdo Premium Exclusivo ★
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}