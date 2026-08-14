"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Clock, Navigation, ParkingSquare, MapPin } from "lucide-react";
import { LOCATIONS } from "@/data/origenData";

export default function LocationsSection() {
  const [activeId, setActiveId] = useState(LOCATIONS[0].id);
  const activeLocation = LOCATIONS.find((location) => location.id === activeId) ?? LOCATIONS[0];

  const mapQuery = encodeURIComponent(`${activeLocation.address}, ${activeLocation.city}`);

  return (
    <section id="sedes" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-origen-teal">
          Capítulo III
        </p>
        <h2 className="mt-2 font-display text-4xl text-origen-ink sm:text-5xl">Diarios de Sede</h2>
      </motion.div>

      <div className="mb-8 flex justify-center gap-2">
        {LOCATIONS.map((location) => (
          <button
            key={location.id}
            type="button"
            onClick={() => setActiveId(location.id)}
            className={`rounded-sm px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wide transition-colors ${
              activeId === location.id
                ? "border-4 border-double border-origen-ink bg-origen-teal text-origen-paper"
                : "border-2 border-origen-ink/20 text-origen-ink/60 hover:border-origen-ink/50"
            }`}
          >
            {location.name}
          </button>
        ))}
      </div>

      <motion.div
        key={activeLocation.id}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="paper-shadow grid gap-0 overflow-hidden rounded-sm border-2 border-origen-ink md:grid-cols-2"
      >
        <div className="h-64 bg-origen-surface md:h-full">
          <iframe
            title={`Mapa ${activeLocation.name}`}
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0 grayscale-[0.15] sepia-[0.15]"
          />
        </div>

        <div className="flex flex-col justify-center border-t-4 border-double border-origen-ink p-6 sm:p-8 md:border-l-4 md:border-t-0">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-origen-teal">
            {activeLocation.journalTitle}
          </p>
          <h3 className="mt-1 font-display text-2xl font-bold text-origen-ink">{activeLocation.name}</h3>
          <p className="mt-3 font-display text-lg italic leading-snug text-origen-ink/70">
            &ldquo;{activeLocation.journalEntry}&rdquo;
          </p>

          <div className="mt-6 flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-origen-teal" />
            <p className="text-sm text-origen-ink/70">
              {activeLocation.address}
              <br />
              {activeLocation.city}
            </p>
          </div>

          <div className="mt-4 flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-origen-teal" />
            <div className="font-mono text-sm text-origen-ink/70">
              {activeLocation.hours.map((hour) => (
                <p key={hour.days}>
                  <span className="font-bold text-origen-ink">{hour.days}:</span> {hour.time}
                </p>
              ))}
            </div>
          </div>

          <a
            href={`tel:${activeLocation.phone.replace(/\s/g, "")}`}
            className="mt-4 flex items-center gap-3 font-mono text-sm text-origen-ink/70 transition-colors hover:text-origen-teal"
          >
            <Phone className="h-5 w-5 shrink-0 text-origen-teal" />
            {activeLocation.phone}
          </a>

          {activeLocation.parkingNote && (
            <div className="mt-4 flex items-center gap-3 text-sm text-origen-ink/70">
              <ParkingSquare className="h-5 w-5 shrink-0 text-origen-teal" />
              {activeLocation.parkingNote}
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={activeLocation.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-sm bg-origen-ink px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wide text-origen-paper transition-colors hover:bg-origen-teal"
            >
              <Navigation className="h-4 w-4" />
              Google Maps
            </a>
            <a
              href={activeLocation.wazeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-sm border-2 border-origen-ink px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wide text-origen-ink transition-colors hover:bg-origen-ink hover:text-origen-paper"
            >
              <Navigation className="h-4 w-4" />
              Waze
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
