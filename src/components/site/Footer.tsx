import { Wordmark } from "./Logo";

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 border-t border-white/5 bg-[#07021a]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Wordmark />
            <p className="mt-4 text-white/60 text-sm max-w-md leading-relaxed">
              O Universo das Cores é um app infantil seguro, criativo e divertido.
              Feito com carinho para famílias que acreditam que colorir é também aprender,
              imaginar e criar memórias.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {["🌈","🎨","🖨️","📚","🛡️"].map((e,i)=>(
                <div key={i} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 grid place-items-center text-lg">{e}</div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-white">Navegar</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li><a href="#recursos" className="hover:text-white">Recursos</a></li>
              <li><a href="#mundos" className="hover:text-white">Mundos</a></li>
              <li><a href="#pais" className="hover:text-white">Para os pais</a></li>
              <li><a href="#faq" className="hover:text-white">Dúvidas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-white">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/60">
              <li><a href="#" className="hover:text-white">Termos de uso</a></li>
              <li><a href="#" className="hover:text-white">Política de privacidade</a></li>
              <li><a href="#" className="hover:text-white">Contato</a></li>
              <li><a href="#" className="hover:text-white">Suporte</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} Universo das Cores — Todos os direitos reservados.</div>
          <div>Soluções digitais práticas para evolução pessoal e profissional.</div>
        </div>
      </div>
    </footer>
  );
}