const worlds = [
  { name: "Mundo dos Blocos", desc: "Construções, aventuras e personagens quadradinhos.", emoji: "🧱", grad: "from-blue-500 via-sky-400 to-cyan-400" },
  { name: "Reino Encantado", desc: "Castelos, dragões, fadas e criaturas mágicas.", emoji: "🏰", grad: "from-pink-500 via-rose-500 to-orange-400" },
  { name: "Ilha dos Inventores", desc: "Robôs, máquinas, laboratórios e invenções criativas.", emoji: "🤖", grad: "from-emerald-400 via-teal-400 to-cyan-500" },
  { name: "Dino Aventura", desc: "Dinossauros fofos e exploradores mirins.", emoji: "🦖", grad: "from-orange-400 via-amber-400 to-fuchsia-500" },
  { name: "Histórias Sagradas", desc: "Bíblia, parábolas e valores cristãos para colorir.", emoji: "✝️", grad: "from-violet-500 via-purple-500 to-indigo-500" },
  { name: "Fundo do Mar", desc: "Peixes, corais e criaturas marinhas coloridas.", emoji: "🐠", grad: "from-cyan-400 via-blue-500 to-indigo-600" },
];

export default function Worlds() {
  return (
    <section id="mundos" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-violet-700/20 blur-3xl" />
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
        <div className="text-center max-w-3xl mx-auto reveal">
          <div className="chip inline-block rounded-full px-3 py-1 text-xs mb-4 tracking-widest uppercase">Conteúdo autoral</div>
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-tight">
            EXPLORE <span className="gold">MUNDOS INCRÍVEIS</span>
          </h2>
          <p className="mt-5 text-white/65 text-base md:text-lg">
            Universos próprios, seguros e autorais para construir uma marca forte
            sem depender de personagens protegidos.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {worlds.map((w, i) => (
            <div
              key={i}
              className={`reveal group relative rounded-3xl p-6 md:p-7 min-h-[220px] overflow-hidden bg-gradient-to-br ${w.grad} shadow-lg cursor-pointer`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-white/30 via-transparent to-transparent" />
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px)",
                backgroundSize: "40px 40px, 60px 60px"
              }} />
              <div className="relative">
                <div className="text-5xl mb-4 transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-12 inline-block">{w.emoji}</div>
                <h3 className="font-display font-bold text-2xl text-white drop-shadow">{w.name}</h3>
                <p className="mt-2 text-white/90 text-sm leading-relaxed drop-shadow">{w.desc}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  Explorar <span aria-hidden>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}