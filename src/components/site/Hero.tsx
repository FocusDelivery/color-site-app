import heroKids from "@/assets/hero-kids.png";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-28">
      <div className="stars" />
      <div className="absolute -top-20 -right-20 w-[520px] h-[520px] rounded-full bg-violet-600/30 blur-3xl" />
      <div className="absolute top-40 -left-40 w-[420px] h-[420px] rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 reveal">
          <div className="chip inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs md:text-sm mb-6">
            <span className="text-yellow-300">★</span> App infantil seguro, criativo e divertido
          </div>
          <h1 className="font-display font-bold leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight">
            <span className="block text-white">O APP DE</span>
            <span className="block text-white">COLORIR</span>
            <span className="block rainbow-text">MAIS DIVERTIDO</span>
            <span className="block text-white">PARA</span>
            <span className="block text-white">CRIANÇAS!</span>
          </h1>
          <p className="mt-6 text-white/70 text-base md:text-lg max-w-xl leading-relaxed">
            A criança pinta online, assina com o próprio nome, baixa, imprime e ainda pode
            transformar suas artes em um ebook especial — tudo em um só lugar, sem anúncios
            e com conteúdo 100% seguro.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a 
              href="https://go.perfectpay.com.br/PPU38CQESG3" 
              className="btn-primary rounded-full px-7 py-4 text-base inline-flex items-center gap-2 pulse-glow"
              target="_blank"
              rel="noopener noreferrer"
            >
              COMECE AGORA <span aria-hidden>→</span>
            </a>
            <a href="#recursos" className="btn-ghost rounded-full px-7 py-4 text-base font-semibold inline-flex items-center gap-2">
              Ver benefícios
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/70">
            <span className="inline-flex items-center gap-2"><Check /> Sem anúncios</span>
            <span className="inline-flex items-center gap-2"><Check /> Conteúdo seguro</span>
            <span className="inline-flex items-center gap-2"><Check /> Novos desenhos toda semana</span>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-2">
              {["👧","🧒","👦","👶","🧒"].map((e, i) => (
                <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 border-2 border-[#0b0420] flex items-center justify-center text-base">{e}</div>
              ))}
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-yellow-300">★★★★★ <span className="text-white font-bold">4.9</span></div>
              <div className="text-white/60">+12.000 famílias já assinam</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative reveal">
          <div className="relative">
            <div className="absolute inset-0 -z-10 blur-3xl bg-gradient-to-tr from-violet-600/40 via-pink-500/30 to-yellow-400/20 rounded-full scale-110" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_40px_120px_-20px_rgba(139,92,246,0.55)] tilt">
              <img
                src={heroKids}
                alt="Criança colorindo com personagens divertidos no PatolinoPlay"
                width={1200}
                height={900}
                className="w-full h-auto block"
              />
            </div>

            <div className="absolute -left-4 top-10 md:-left-10 float bg-white text-[#2a1500] rounded-2xl px-4 py-3 shadow-xl">
              <div className="text-[10px] uppercase tracking-widest text-neutral-500">Seguro</div>
              <div className="font-display font-bold text-lg leading-none">100% kids</div>
            </div>
            <div className="absolute -right-3 bottom-14 md:-right-8 float-delay bg-yellow-300 text-[#2a1500] rounded-2xl px-4 py-3 shadow-xl">
              <div className="text-[10px] uppercase tracking-widest text-neutral-700">Novos</div>
              <div className="font-display font-bold text-lg leading-none">+500 desenhos</div>
            </div>
            <div className="absolute right-8 -top-4 float-slow bg-violet-600 text-white rounded-2xl px-3 py-2 shadow-xl text-sm font-bold">🎨 Imprima & cole!</div>
          </div>
        </div>
      </div>

      <div className="relative mt-16 md:mt-24 border-y border-white/5 bg-white/[0.02] overflow-hidden">
        <div className="flex marquee-track whitespace-nowrap py-5 text-white/60 text-sm md:text-base">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-10 px-6">
              {["🛡️ Ambiente 100% seguro","🎨 Pinte online","🖨️ Imprima em casa","📥 Baixe para usar offline","📚 Crie ebooks","✍️ Assine com o próprio nome","🌈 Mundos criativos","👨‍👩‍ Feito para famílias"].map((t,i)=>(
                <span key={i} className="inline-flex items-center gap-2 font-medium">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Check() {
  return (
    <span className="inline-flex items-center justify-center w-5 h-5 rounded-md bg-emerald-400/20 text-emerald-300 text-xs font-bold">✓</span>
  );
}