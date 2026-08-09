import { useEffect, useState } from "react";
import { Wordmark } from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#0b0420]/70 border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        <Wordmark />
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#recursos" className="hover:text-white transition">Recursos</a>
          <a href="#mundos" className="hover:text-white transition">Mundos</a>
          <a href="#pais" className="hover:text-white transition">Para os pais</a>
          <a href="#faq" className="hover:text-white transition">Dúvidas</a>
        </nav>
        <a
          href="https://go.perfectpay.com.br/PPU38CQESG3"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary rounded-full px-5 py-2.5 text-sm inline-flex items-center gap-2"
        >
          Começar Agora
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}