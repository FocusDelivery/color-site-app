const testimonials = [
  { name: "Camila R.", role: "Mãe da Laura, 5 anos", text: "Minha filha pede para 'pintar no app' todo dia. Imprimimos as obras e montamos um caderno que ela leva para a escola. Lindo demais!", avatar: "👩" },
  { name: "Rodrigo M.", role: "Pai do Theo, 7 anos", text: "Troquei a televisão pelo Universo das Cores e a diferença na criatividade dele é enorme. Vale cada centavo.", avatar: "👨🏽" },
  { name: "Juliana S.", role: "Mãe da Alice e do Bento", text: "Dois filhos, um só acesso. Os desenhos da Bíblia são os favoritos aqui em casa. Conteúdo seguro e sem anúncios. Nota 10!", avatar: "👩🏽" },
  { name: "Patrícia L.", role: "Professora de Ed. Infantil", text: "Uso como atividade complementar na turma. As crianças amam os mundos e eu amo a facilidade de imprimir.", avatar: "👩🏻‍🏫" },
  { name: "Fernanda O.", role: "Mãe da Helena, 4 anos", text: "O ebook personalizado com o nome dela virou presente de aniversário. Chorei de emoção.", avatar: "👩🏾" },
  { name: "Bruno C.", role: "Pai de gêmeos, 6 anos", text: "Sem anúncios, sem sustos. Deixo o tablet na mão deles com tranquilidade. Recomendo demais.", avatar: "👨🏻" },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto reveal">
          <div className="chip inline-block rounded-full px-3 py-1 text-xs mb-4 tracking-widest uppercase">Famílias reais</div>
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-tight">
            QUEM ASSINA, <span className="gold">AMA.</span>
          </h2>
          <p className="mt-5 text-white/65">
            Mais de 12 mil famílias já transformaram o tempo de tela em tempo de criação.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="card-dark rounded-3xl p-6 reveal relative"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute top-5 right-6 text-5xl text-yellow-300/20 font-display leading-none">”</div>
              <div className="flex items-center gap-1 text-yellow-300 text-sm">★★★★★</div>
              <blockquote className="mt-3 text-white/85 text-[15px] leading-relaxed">
                {t.text}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 grid place-items-center text-lg">{t.avatar}</div>
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-white/60 text-xs">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}