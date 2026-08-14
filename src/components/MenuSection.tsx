"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { CATEGORIES, DISHES, STAMP_LABELS, type Category, type Dish, type Tag } from "@/data/origenData";
import { formatCOP } from "@/lib/whatsapp";
import { categoryVisual } from "@/lib/categoryVisuals";
import { useUI } from "@/components/UIProvider";
import StampBadge from "@/components/StampBadge";
import Photo from "@/components/Photo";

type DietFilter = "todo" | "veg" | "picante" | "recomendados";

const DIET_FILTERS: { id: DietFilter; label: string }[] = [
  { id: "todo", label: "Todo" },
  { id: "veg", label: "🌱 Vegetariano / Vegano" },
  { id: "picante", label: "🌶️ Picante" },
  { id: "recomendados", label: "⭐ Recomendados" },
];

const TAG_TONE: Record<Tag, "ink" | "teal" | "caramel" | "chili"> = {
  Vegano: "teal",
  Vegetariano: "teal",
  Picante: "chili",
  "Gluten Free": "ink",
  "Recomendado del Chef": "caramel",
};

const DIACRITICS_PATTERN = /[̀-ͯ]/g;

function normalize(value: string): string {
  return value.normalize("NFD").replace(DIACRITICS_PATTERN, "").toLowerCase();
}

function matchesDiet(dish: Dish, filter: DietFilter): boolean {
  if (filter === "todo") return true;
  if (filter === "veg") return dish.tags.includes("Vegano") || dish.tags.includes("Vegetariano");
  if (filter === "picante") return dish.tags.includes("Picante");
  return dish.tags.includes("Recomendado del Chef");
}

function DishCard({ dish, index }: { dish: Dish; index: number }) {
  const { openDish } = useUI();
  const visual = categoryVisual(dish.category);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.06 }}
      whileHover={{ x: -2, y: -2 }}
      className="shadow-print flex flex-col overflow-hidden rounded-sm border border-origen-ink bg-origen-paper transition-shadow hover:shadow-[5px_5px_0_0_rgb(36_26_19_/_0.85)]"
    >
      <div className="relative h-36 border-b-4 border-double border-origen-ink">
        <Photo
          src={dish.image}
          alt={dish.name}
          gradient={visual.gradient}
          icon={visual.icon}
          className="absolute inset-0"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />

        {dish.isPopular && (
          <StampBadge tone="ink" rotate="right" className="absolute left-3 top-3 px-2.5 py-1 text-[9px]">
            Popular
          </StampBadge>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        {dish.tags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1.5">
            {dish.tags.map((tag, tagIndex) => (
              <StampBadge
                key={tag}
                tone={TAG_TONE[tag]}
                rotate={tagIndex % 2 === 0 ? "left" : "right"}
                className="px-2 py-0.5 text-[9px]"
              >
                {STAMP_LABELS[tag]}
              </StampBadge>
            ))}
          </div>
        )}

        <h3 className="font-display text-xl font-bold text-origen-ink">{dish.name}</h3>
        <p className="mt-1.5 flex-1 text-sm text-origen-ink/65">{dish.description}</p>

        <div className="mt-4 flex items-center justify-between border-t border-dashed border-origen-ink/20 pt-4">
          <span className="font-mono text-lg font-bold text-origen-caramel">
            {formatCOP(dish.price)}
          </span>
          <button
            type="button"
            onClick={() => openDish(dish)}
            className="rounded-sm bg-origen-ink px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-wide text-origen-paper transition-colors hover:bg-origen-teal"
          >
            Ver Detalles
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category | "Todas">("Todas");
  const [activeDiet, setActiveDiet] = useState<DietFilter>("todo");
  const [search, setSearch] = useState("");

  const filteredDishes = useMemo(() => {
    const query = normalize(search.trim());
    return DISHES.filter((dish) => {
      if (activeCategory !== "Todas" && dish.category !== activeCategory) return false;
      if (!matchesDiet(dish, activeDiet)) return false;
      if (!query) return true;
      const haystack = normalize(`${dish.name} ${dish.description} ${dish.ingredients.join(" ")}`);
      return haystack.includes(query);
    });
  }, [activeCategory, activeDiet, search]);

  return (
    <section id="menu" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-origen-teal">
          Capítulo II
        </p>
        <h2 className="mt-2 font-display text-4xl text-origen-ink sm:text-5xl">La Carta Impresa</h2>
        <p className="mx-auto mt-3 max-w-md text-origen-ink/60">
          Filtra por categoría, preferencia o busca directamente en el archivo.
        </p>
      </motion.div>

      <div className="sticky top-[74px] z-20 -mx-6 mb-8 border-b border-origen-ink/10 bg-origen-paper/95 px-6 py-4 backdrop-blur-sm">
        <div className="fade-edge-right">
          <div className="no-scrollbar flex space-x-3 overflow-x-auto pb-2 md:justify-center">
            {(["Todas", ...CATEGORIES] as const).map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-sm border-4 border-double px-5 py-2.5 font-mono text-sm font-bold uppercase tracking-wide transition-colors ${
                  activeCategory === category
                    ? "border-origen-ink bg-origen-teal text-origen-paper"
                    : "border-origen-ink/25 text-origen-ink/70 hover:border-origen-ink/60"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-4 max-w-md overflow-hidden rounded-sm border-2 border-origen-ink/20 bg-origen-paper">
          <div className="relative border-b border-dashed border-origen-ink/15">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-origen-ink/40" />
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar por nombre o ingrediente..."
              className="w-full bg-transparent py-2.5 pl-11 pr-4 font-mono text-sm text-origen-ink placeholder:text-origen-ink/35 focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap items-center gap-1.5 px-3 py-2">
            {DIET_FILTERS.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveDiet(filter.id)}
                className={`whitespace-nowrap rounded-full border px-2.5 py-1 font-mono text-[10px] font-medium transition-colors ${
                  activeDiet === filter.id
                    ? "border-origen-teal bg-origen-teal/10 text-origen-teal"
                    : "border-origen-ink/15 text-origen-ink/55 hover:text-origen-ink"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredDishes.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredDishes.map((dish, index) => (
            <DishCard key={dish.id} dish={dish} index={index} />
          ))}
        </div>
      ) : (
        <p className="rounded-sm border-2 border-dashed border-origen-ink/20 px-6 py-10 text-center text-origen-ink/60">
          No encontramos platos con esos filtros. Prueba con otra búsqueda.
        </p>
      )}
    </section>
  );
}
