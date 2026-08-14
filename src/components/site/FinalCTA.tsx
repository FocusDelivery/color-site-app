import finalScene from "@/assets/final-scene.jpg";

export default function FinalCTA() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5 md:px-8 reveal">
        <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-[0_60px_140px_-30px_rgba(255,79,163,0.45)]">
          <img src={finalScene} alt="Liberte um mundo de cores e imaginação" width={1600} height={700} loading="lazy" className="w-full h-auto block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0420] via-[#0b0420]/40 to-transparent" />
          <div className="absolute inset-x-0 top-0 pt-10 md:pt-16 text-center px-5">
            <h2 className="font-display font-bold text-3xl md:text-6xl leading-tight max-w-4xl mx-auto">
              <span className="text-white">LIBERTE UM MUNDO DE CORES E</span>
              <br />
              <span className="rainbow-text">IMAGINAÇÃO</span>
            </h2>
            <p className="mt-4 text-white/80 max-w-xl mx-auto">
              Uma experiência visual premium para crianças criarem, pintarem e se divertirem com segurança.
            </p>
            <a 
              href="https://go.perfectpay.com.br/PPU38CQESG3" 
              className="btn-primary mt-6 inline-flex items-center gap-2 rounded-full px-8 py-4 text-base pulse-glow"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://go.perfectpay.com.br/PPU38CQESG3";
              }}
            >
              COMEÇAR AGORA <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}