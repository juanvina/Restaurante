"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Flame, Sprout, Soup } from "lucide-react";
import Photo from "@/components/Photo";

const NARRATIVE = [
  "Todo empieza en la plaza de mercado: tomates de temporada, cilantro recién cortado, panela de trapiche. Ingredientes que cualquier cocina tolimense reconocería como propios.",
  "Pero en nuestra cocina, esos ingredientes se encuentran con un baúl de especias que cruzó medio mundo: garam masala, cardamomo, comino tostado, cúrcuma. Recetas de familia, reinterpretadas.",
  "El resultado no es fusión por moda, es memoria: la de quienes llegaron a Ibagué trayendo el curry en la maleta y lo dejaron enraizar junto al Combeima.",
];

const PHOTO_STACK = [
  {
    icon: Flame,
    rotate: "-rotate-6",
    offset: 0,
    image: "/story/travesia-1.jpg",
    alt: "Especias tostadas en la cocina de Origen",
    gradient: "linear-gradient(135deg, var(--color-origen-teal), var(--color-origen-caramel))",
  },
  {
    icon: Sprout,
    rotate: "rotate-3",
    offset: 40,
    image: "/story/travesia-2.jpg",
    alt: "Ingredientes frescos de la plaza de mercado",
    gradient: "linear-gradient(135deg, var(--color-origen-coffee), var(--color-origen-teal-dark))",
  },
  {
    icon: Soup,
    rotate: "-rotate-2",
    offset: 80,
    image: "/story/travesia-3.jpg",
    alt: "Curry recién preparado en la cocina de Origen",
    gradient: "linear-gradient(135deg, var(--color-origen-caramel), var(--color-origen-coffee))",
  },
];

export default function StorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y0 = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const y1 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-90, 90]);
  const parallaxY = [y0, y1, y2];

  return (
    <section id="nuestra-esencia" ref={sectionRef} className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-origen-teal">
          Capítulo I
        </p>
        <h2 className="mt-2 font-display text-4xl text-origen-ink sm:text-5xl">La Travesía</h2>
      </motion.div>

      <div className="grid gap-16 md:grid-cols-[0.85fr_1.15fr] md:items-start">
        <div className="md:sticky md:top-28 md:self-start">
          <div className="relative mx-auto h-80 w-full max-w-sm sm:h-96">
            {PHOTO_STACK.map((photo, index) => (
              <motion.div
                key={index}
                style={{ y: parallaxY[index], top: photo.offset }}
                className={`paper-shadow absolute left-1/2 h-56 w-64 -translate-x-1/2 rounded-sm border-[10px] border-origen-paper ${photo.rotate}`}
              >
                <Photo
                  src={photo.image}
                  alt={photo.alt}
                  gradient={photo.gradient}
                  icon={photo.icon}
                  className="absolute inset-0"
                  sizes="256px"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-6">
            {NARRATIVE.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="text-lg leading-relaxed text-origen-ink/75"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="relative mt-12 border-y-2 border-origen-ink/15 py-8"
          >
            <span className="pointer-events-none absolute -left-2 -top-6 font-display text-8xl text-origen-teal/20">
              &ldquo;
            </span>
            <p className="relative font-display text-2xl italic leading-snug text-origen-ink sm:text-3xl">
              Cada plato cuenta el viaje de una semilla que cruzó océanos para
              echar raíces en nuestra tierra.
            </p>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
}
