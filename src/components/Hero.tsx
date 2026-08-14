"use client";

import { motion, type Variants } from "framer-motion";
import { Star, ChevronDown } from "lucide-react";
import { useUI } from "@/components/UIProvider";
import StampBadge from "@/components/StampBadge";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const { openReservation } = useUI();

  return (
    <section id="inicio" className="relative overflow-hidden px-6 pb-20 pt-10">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-4xl text-center"
      >
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-3 border-y-4 border-double border-origen-ink py-3 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-origen-ink/70 sm:text-xs"
        >
          Edición Ibagué • La Samaria &amp; Centro • Cocina Artesanal
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-10 font-display text-5xl leading-[1.08] text-origen-ink sm:text-6xl md:text-7xl"
        >
          Sabores con Raíz,
          <br />
          <span className="italic text-origen-teal">Historias de Fuego y Especias.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-7 max-w-xl text-base text-origen-ink/70 sm:text-lg"
        >
          Una travesía gastronómica donde la calidez del Tolima se encuentra
          con la riqueza del curry, los bowls frescos y la cocina de origen.
        </motion.p>

        <motion.div variants={item} className="relative mt-10 flex items-center justify-center">
          <div id="resenas" className="scroll-mt-28">
            <StampBadge tone="teal" rotate="left" className="px-4 py-1.5 text-xs">
              <Star className="h-3.5 w-3.5 fill-current" />
              4.6 ★ Google Reviews • Cocina Lenta
            </StampBadge>
          </div>
        </motion.div>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#menu"
            className="rounded-sm bg-origen-teal px-8 py-3.5 font-mono text-sm font-bold uppercase tracking-wide text-origen-paper shadow-lg shadow-origen-ink/10 transition-transform hover:-translate-y-0.5 hover:bg-origen-teal-dark"
          >
            Explorar la Carta
          </a>
          <button
            type="button"
            onClick={openReservation}
            className="rounded-sm border-2 border-origen-ink px-8 py-3.5 font-mono text-sm font-bold uppercase tracking-wide text-origen-ink transition-colors hover:bg-origen-ink hover:text-origen-paper"
          >
            Reservar Mesa
          </button>
        </motion.div>

        <motion.a
          variants={item}
          href="#nuestra-esencia"
          className="mt-14 inline-flex flex-col items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-origen-ink/50 transition-colors hover:text-origen-teal"
        >
          Desliza para leer el Capítulo I
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-4 w-4" />
          </motion.span>
        </motion.a>
      </motion.div>

      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        className="mx-auto mt-10 max-w-6xl border-t-4 border-double border-origen-ink"
      />
    </section>
  );
}
