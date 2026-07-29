const worlds = [
  { name: "Reino das Cores Kids", desc: "Embarque na maior aventura da Bíblia, colorir a Arca de Noé com todos os seus animais favoritos.", emoji: "🎨", grad: "from-pink-500 via-rose-400 to-orange-400" },
  { name: "Roblox", desc: "Aventuras em blocos com seus personagens favoritos do jogo.", emoji: "🎮", grad: "from-red-500 via-rose-500 to-red-600" },
  { name: "Dragon Ball Z", desc: "Guerreiros Z, energia e batalhas épicas para colorir.", emoji: "🐉", grad: "from-orange-500 via-amber-400 to-yellow-400" },
  { name: "Cavaleiros do Zodíaco", desc: "Armaduras sagradas e heróis lendários dos doze signos.", emoji: "⚔️", grad: "from-yellow-400 via-amber-500 to-orange-500" },
  { name: "Minecraft", desc: "Mundos em blocos, criaturas e construções infinitas.", emoji: "⛏️", grad: "from-emerald-500 via-green-500 to-lime-500" },
  { name: "Copa do Mundo", desc: "Craques, estádios e a magia do futebol para pintar.", emoji: "⚽", grad: "from-green-500 via-teal-500 to-blue-600" },
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