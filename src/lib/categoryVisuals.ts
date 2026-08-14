import { Soup, ChefHat, UtensilsCrossed, Leaf, GlassWater, type LucideIcon } from "lucide-react";
import type { Category } from "@/data/origenData";

type CategoryVisual = {
  icon: LucideIcon;
  gradient: string;
};

export const CATEGORY_VISUALS: Record<Category, CategoryVisual> = {
  "Currys de Autor": {
    icon: Soup,
    gradient: "linear-gradient(135deg, var(--color-origen-teal), var(--color-origen-caramel))",
  },
  "Bowls & Wok": {
    icon: ChefHat,
    gradient: "linear-gradient(135deg, var(--color-origen-coffee), var(--color-origen-teal-dark))",
  },
  "Entradas & Parathas": {
    icon: UtensilsCrossed,
    gradient: "linear-gradient(135deg, var(--color-origen-caramel), var(--color-origen-coffee))",
  },
  "Cocina Vegetariana": {
    icon: Leaf,
    gradient: "linear-gradient(135deg, var(--color-origen-teal), var(--color-origen-teal-dark))",
  },
  "Bebidas Naturales": {
    icon: GlassWater,
    gradient: "linear-gradient(135deg, var(--color-origen-caramel), var(--color-origen-teal))",
  },
};

export function categoryVisual(category: Category): CategoryVisual {
  return CATEGORY_VISUALS[category];
}
