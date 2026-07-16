import { useState } from "react";

const items = [
  { q: "O app tem vídeos?", a: "Não. A proposta principal é colorir online, assinar, baixar, imprimir e criar ebooks. Tudo focado em criatividade ativa, sem vídeos passivos." },
  { q: "Funciona no celular?", a: "Sim. O PatolinoPlay funciona em qualquer aparelho com navegador moderno: celular, tablet ou computador, sem precisar instalar nada." },
  { q: "A criança pode imprimir?", a: "Sim! Todas as artes podem ser baixadas em alta qualidade para impressão em casa, montando um caderno físico de obras de arte." },
  { q: "Como acesso após comprar?", a: "Após a assinatura, você recebe imediatamente o acesso por e-mail. É só entrar na plataforma pelo navegador e começar a colorir." },
  { q: "O conteúdo é realmente seguro?", a: "Sim. Não há anúncios, links externos nem redes sociais. Todo o conteúdo é autoral, revisado e pensado para o público infantil." },
  { q: "Posso cancelar a qualquer momento?", a: "Sim. A assinatura é sem fidelidade. Você cancela com um clique, quando quiser, direto pela sua conta." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <div className="text-center reveal">
          <h2 className="font-display font-bold text-4xl md:text-6xl leading-tight">
            PERGUNTAS <span className="gold">FREQUENTES</span>
          </h2>
          <p className="mt-4 text-white/60">Tudo o que você precisa saber antes de começar.</p>
        </div>
        <div className="mt-12 space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                data-open={isOpen}
                className="faq-item card-dark rounded-2xl overflow-hidden reveal"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-5 md:px-6 py-4 md:py-5 flex items-center justify-between gap-4 font-semibold text-white hover:bg-white/5 transition"
                >
                  <span>{it.q}</span>
                  <span className="faq-chevron text-yellow-300 text-xl">▾</span>
                </button>
                <div className="faq-body px-5 md:px-6 text-white/70 leading-relaxed">
                  <div className="pb-5">{it.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}