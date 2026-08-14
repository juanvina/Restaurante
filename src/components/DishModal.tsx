"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, MessageCircle, GlassWater } from "lucide-react";
import { useUI } from "@/components/UIProvider";
import { LOCATIONS, STAMP_LABELS, type Tag } from "@/data/origenData";
import { buildWhatsAppLink, formatCOP } from "@/lib/whatsapp";
import { categoryVisual } from "@/lib/categoryVisuals";
import StampBadge from "@/components/StampBadge";
import Photo from "@/components/Photo";

const TAG_TONE: Record<Tag, "ink" | "teal" | "caramel" | "chili"> = {
  Vegano: "teal",
  Vegetariano: "teal",
  Picante: "chili",
  "Gluten Free": "ink",
  "Recomendado del Chef": "caramel",
};

export default function DishModal() {
  const { selectedDish, closeDish, selectedLocationId } = useUI();
  const activeLocation =
    LOCATIONS.find((location) => location.id === selectedLocationId) ?? LOCATIONS[0];

  const dish = selectedDish;
  const visual = dish ? categoryVisual(dish.category) : null;

  const whatsappHref = dish
    ? buildWhatsAppLink(
        activeLocation.whatsappPhone,
        `Hola Origen! Quiero pedir "${dish.name}" (${formatCOP(dish.price)}) en la ${activeLocation.name}.`
      )
    : "#";

  return (
    <AnimatePresence>
      {dish && visual && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-end justify-center bg-origen-ink/60 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={closeDish}
        >
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
            className="paper-shadow relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-sm border-2 border-origen-ink bg-origen-paper sm:rounded-sm"
          >
            <button
              type="button"
              aria-label="Cerrar"
              onClick={closeDish}
              className="absolute right-4 top-4 z-10 rounded-full border-2 border-origen-ink bg-origen-paper p-1.5 text-origen-ink"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative h-44 border-b-4 border-double border-origen-ink">
              <Photo
                src={dish.image}
                alt={dish.name}
                gradient={visual.gradient}
                icon={visual.icon}
                className="absolute inset-0"
                sizes="(min-width: 640px) 512px, 100vw"
              />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap gap-2">
                {dish.tags.map((tag, tagIndex) => (
                  <StampBadge
                    key={tag}
                    tone={TAG_TONE[tag]}
                    rotate={tagIndex % 2 === 0 ? "left" : "right"}
                    className="px-2.5 py-1 text-[10px]"
                  >
                    {STAMP_LABELS[tag]}
                  </StampBadge>
                ))}
              </div>

              <h3 className="mt-4 font-display text-3xl font-bold text-origen-ink">{dish.name}</h3>
              <p className="mt-2 text-origen-ink/70">{dish.description}</p>

              <div className="mt-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-origen-ink/50">
                  Ingredientes
                </p>
                <p className="mt-1.5 text-sm text-origen-ink/70">{dish.ingredients.join(" · ")}</p>
              </div>

              <div className="mt-4 flex items-start gap-2 border-2 border-dashed border-origen-teal/40 bg-origen-teal/5 px-4 py-3">
                <GlassWater className="mt-0.5 h-4 w-4 shrink-0 text-origen-teal" />
                <p className="text-sm text-origen-ink/70">
                  <span className="font-mono text-xs font-bold uppercase tracking-wide text-origen-teal">
                    Maridaje sugerido:{" "}
                  </span>
                  {dish.pairing}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between gap-4 border-t border-dashed border-origen-ink/20 pt-5">
                <span className="font-mono text-2xl font-bold text-origen-caramel">
                  {formatCOP(dish.price)}
                </span>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-sm bg-origen-teal px-5 py-3 font-mono text-xs font-bold uppercase tracking-wide text-origen-paper transition-colors hover:bg-origen-teal-dark"
                >
                  <MessageCircle className="h-4 w-4" />
                  Pedir por WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
