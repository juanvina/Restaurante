"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin, MessageCircle } from "lucide-react";
import { LOCATIONS, BRAND } from "@/data/origenData";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { useUI } from "@/components/UIProvider";

const LINKS = [
  { label: "Menú", href: "#menu" },
  { label: "Nuestra Esencia", href: "#nuestra-esencia" },
  { label: "Sedes", href: "#sedes" },
  { label: "Reseñas", href: "#resenas" },
];

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { openReservation, selectedLocationId, setSelectedLocationId } = useUI();

  const activeLocation =
    LOCATIONS.find((location) => location.id === selectedLocationId) ?? LOCATIONS[0];

  const whatsappHref = buildWhatsAppLink(
    activeLocation.whatsappPhone,
    `Hola Origen! Quiero hacer un pedido en la ${activeLocation.name}.`
  );

  return (
    <header className="sticky top-0 z-50 border-b-4 border-double border-origen-ink bg-origen-paper">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3.5">
        <a href="#inicio" className="flex flex-col leading-none">
          <span className="font-display text-2xl font-bold tracking-wide text-origen-teal">
            {BRAND.name}
          </span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-origen-ink/50">
            {BRAND.edition}
          </span>
        </a>

        <ul className="hidden gap-7 font-mono text-xs font-semibold uppercase tracking-wide lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-origen-ink/70 transition-colors hover:text-origen-teal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex items-center gap-1 rounded-full border-2 border-origen-ink/15 p-1 font-mono text-[11px] font-bold uppercase">
            {LOCATIONS.map((location) => (
              <button
                key={location.id}
                type="button"
                onClick={() => setSelectedLocationId(location.id)}
                className={`flex items-center gap-1 rounded-full px-3 py-1.5 transition-colors ${
                  location.id === selectedLocationId
                    ? "bg-origen-teal text-origen-paper"
                    : "text-origen-ink/60 hover:text-origen-ink"
                }`}
              >
                <MapPin className="h-3.5 w-3.5" />
                {location.name.replace("Sede ", "")}
              </button>
            ))}
          </div>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-sm bg-origen-teal px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide text-origen-paper transition-colors hover:bg-origen-teal-dark"
          >
            <MessageCircle className="h-4 w-4" />
            Pedir
          </a>
          <button
            type="button"
            onClick={openReservation}
            className="rounded-sm border-2 border-origen-ink px-4 py-2 font-mono text-xs font-bold uppercase tracking-wide text-origen-ink transition-colors hover:bg-origen-ink hover:text-origen-paper"
          >
            Reservar Mesa
          </button>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-sm border-2 border-origen-ink p-2 text-origen-ink lg:hidden"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t-2 border-origen-ink/15 bg-origen-paper lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-sm px-2 py-2.5 font-mono text-sm font-semibold uppercase tracking-wide text-origen-ink/80 hover:bg-origen-surface"
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-2 flex items-center gap-1 rounded-full border-2 border-origen-ink/15 p-1 font-mono text-xs font-bold uppercase">
                {LOCATIONS.map((location) => (
                  <button
                    key={location.id}
                    type="button"
                    onClick={() => setSelectedLocationId(location.id)}
                    className={`flex flex-1 items-center justify-center gap-1 rounded-full px-3 py-2 transition-colors ${
                      location.id === selectedLocationId
                        ? "bg-origen-teal text-origen-paper"
                        : "text-origen-ink/60"
                    }`}
                  >
                    <MapPin className="h-3.5 w-3.5" />
                    {location.name.replace("Sede ", "")}
                  </button>
                ))}
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-1.5 rounded-sm bg-origen-teal px-4 py-2.5 font-mono text-sm font-bold uppercase tracking-wide text-origen-paper"
              >
                <MessageCircle className="h-4 w-4" />
                Pedir por WhatsApp
              </a>
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  openReservation();
                }}
                className="mt-2 rounded-sm border-2 border-origen-ink px-4 py-2.5 font-mono text-sm font-bold uppercase tracking-wide text-origen-ink"
              >
                Reservar Mesa
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
