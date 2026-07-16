export default function Premium() {
  const features = [
    { icon: "🎨", title: "Pinte online", text: "Desenhos prontos para colorir no celular, tablet ou computador.", grad: "from-violet-500 to-fuchsia-500" },
    { icon: "✍️", title: "Assine a arte", text: "A criança coloca seu nome e deixa cada criação única.", grad: "from-pink-500 to-rose-500" },
    { icon: "📥", title: "Baixe", text: "Salve a arte finalizada para usar quando quiser, mesmo offline.", grad: "from-cyan-400 to-blue-500" },
    { icon: "🖨️", title: "Imprima", text: "Imprima as criações e monte uma coleção física.", grad: "from-emerald-400 to-teal-500" },
    { icon: "📚", title: "Crie ebooks", text: "Transforme desenhos favoritos em um livrinho especial.", grad: "from-amber-400 to-orange-500" },
  ];

  return (
    <section id="recursos" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-3xl mx-auto reveal">
          <div className="inline-block chip rounded-full px-3 py-1 text-xs mb-4 tracking-widest uppercase">Experiência Premium</div>
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-tight">
            UMA EXPERIÊNCIA DE COLORIR{" "}
            <span className="gold">PREMIUM</span>
          </h2>
          <p className="mt-5 text-white/65 text-base md:text-lg">
            Mais do que desenhos soltos: uma plataforma infantil com mundos criativos,
            pintura online, download e impressão. Tudo para estimular a imaginação com segurança.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {features.map((f, i) => (
            <div key={i} className="card-dark rounded-3xl p-5 md:p-6 reveal group" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.grad} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                {f.icon}
              </div>
              <h3 className="font-display font-bold text-lg mt-5 text-white">{f.title}</h3>
              <p className="text-white/60 text-sm mt-2 leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}