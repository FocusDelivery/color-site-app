import bibleWorlds from "@/assets/bible-worlds.png";

export default function BibleBanner() {
  return (
    <section className="relative py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-5 md:px-8 reveal">
        <div className="relative rounded-[28px] overflow-hidden border border-white/10 shadow-[0_40px_100px_-30px_rgba(139,92,246,0.6)] group min-h-[450px] md:min-h-0">
          <img
            src={bibleWorlds}
            alt="Desenhos da Bíblia e muitos outros mundos no PatolinoPlay"
            width={1600}
            height={640}
            loading="lazy"
            className="w-full h-full md:h-auto object-cover md:object-contain block transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0420]/85 via-[#0b0420]/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col md:flex-row items-center md:items-center justify-between gap-6 p-6 md:p-10 overflow-y-auto md:overflow-visible">
            <div className="max-w-xl text-center md:text-left">
              <div className="text-xs tracking-[0.3em] uppercase text-yellow-300 font-bold">Desenhos exclusivos</div>
              <h3 className="font-display font-bold text-3xl md:text-5xl mt-2 leading-tight">
                <span className="text-white">Histórias da </span>
                <span className="gold">BÍBLIA</span>
                <br />
                <span className="text-white/90 text-xl md:text-2xl">e muitos outros mundos!</span>
              </h3>
              <ul className="mt-4 flex flex-wrap justify-center md:justify-start gap-2 text-[10px] md:text-xs">
                {["Seguro 100% kids","Centenas de desenhos","Baixe e imprima","Ebooks exclusivos","Acesso imediato"].map((t,i)=>(
                  <li key={i} className="chip rounded-full px-3 py-1">{t}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white/95 backdrop-blur rounded-2xl p-4 md:p-6 shadow-xl max-w-xs w-full flex-shrink-0">
              <div className="text-[11px] uppercase tracking-widest text-neutral-500">Pagamento Mensal</div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-neutral-500 line-through text-sm">R$ 37,90</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-neutral-500 text-lg">R$</span>
                <span className="font-display font-bold text-5xl text-[#6d28d9] leading-none">12</span>
                <span className="font-display font-bold text-2xl text-[#6d28d9]">,90</span>
              </div>
              <div className="text-xs text-neutral-500 mt-1">Acesso imediato</div>
              <a href="https://go.perfectpay.com.br/PPU38CQESG3" target="_self" rel="noopener noreferrer" className="btn-primary w-full mt-4 rounded-xl py-3 text-sm inline-flex items-center justify-center gap-2">
                🔒 COMEÇAR AGORA!
              </a>
              <div className="mt-3 flex items-center justify-between text-[10px] text-neutral-600">
                <span>✓ 100% seguro</span>
                <span>✓ Qualquer aparelho</span>
                <span>✓ Toda a família</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}