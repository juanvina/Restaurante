"use client";

import { useState, type SubmitEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, MessageCircle } from "lucide-react";
import { useUI } from "@/components/UIProvider";
import { LOCATIONS } from "@/data/origenData";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const FIELD_LABEL = "mb-1.5 block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-origen-ink/50";
const FIELD_INPUT =
  "w-full rounded-sm border-2 border-origen-ink/20 bg-origen-paper px-3 py-2.5 text-sm text-origen-ink focus:border-origen-teal focus:outline-none";

export default function ReservationModal() {
  const { isReservationOpen, closeReservation, selectedLocationId } = useUI();
  const [sedeId, setSedeId] = useState(selectedLocationId);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const activeLocation = LOCATIONS.find((location) => location.id === sedeId) ?? LOCATIONS[0];
  const isValid = date && time && name.trim() && phone.trim();

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!isValid) return;

    const message = [
      "Hola Origen! Quiero reservar mesa.",
      `Sede: ${activeLocation.name.replace("Sede ", "")}`,
      `Fecha: ${date}`,
      `Hora: ${time}`,
      `Personas: ${guests}`,
      `Nombre: ${name}`,
      `Teléfono: ${phone}`,
    ].join("\n");

    window.open(buildWhatsAppLink(activeLocation.whatsappPhone, message), "_blank", "noopener,noreferrer");
    closeReservation();
  }

  return (
    <AnimatePresence>
      {isReservationOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-end justify-center bg-origen-ink/60 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={closeReservation}
        >
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
            className="paper-shadow relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-t-sm border-2 border-origen-ink bg-origen-paper p-6 sm:rounded-sm sm:p-8"
          >
            <button
              type="button"
              aria-label="Cerrar"
              onClick={closeReservation}
              className="absolute right-4 top-4 rounded-full border-2 border-origen-ink bg-origen-paper p-1.5 text-origen-ink"
            >
              <X className="h-4 w-4" />
            </button>

            <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-origen-teal">
              Capítulo IV
            </p>
            <h3 className="mt-1 font-display text-2xl font-bold text-origen-ink">La Mesa Reservada</h3>
            <p className="mt-2 border-b-2 border-dashed border-origen-ink/20 pb-4 text-sm text-origen-ink/60">
              Completa la ficha y te confirmamos por WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-4">
              <label className="block">
                <span className={FIELD_LABEL}>Sede</span>
                <select
                  value={sedeId}
                  onChange={(event) => setSedeId(event.target.value)}
                  className={FIELD_INPUT}
                >
                  {LOCATIONS.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </label>

              <div className="grid grid-cols-2 gap-3">
                <label className="block">
                  <span className={FIELD_LABEL}>Fecha</span>
                  <input
                    type="date"
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                    required
                    className={FIELD_INPUT}
                  />
                </label>
                <label className="block">
                  <span className={FIELD_LABEL}>Hora</span>
                  <input
                    type="time"
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                    required
                    className={FIELD_INPUT}
                  />
                </label>
              </div>

              <label className="block">
                <span className={FIELD_LABEL}>Número de personas</span>
                <input
                  type="number"
                  min={1}
                  max={20}
                  value={guests}
                  onChange={(event) => setGuests(Number(event.target.value))}
                  className={FIELD_INPUT}
                />
              </label>

              <label className="block">
                <span className={FIELD_LABEL}>Nombre</span>
                <input
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  placeholder="Tu nombre completo"
                  className={`${FIELD_INPUT} placeholder:text-origen-ink/35`}
                />
              </label>

              <label className="block">
                <span className={FIELD_LABEL}>Teléfono</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  required
                  placeholder="300 000 0000"
                  className={`${FIELD_INPUT} placeholder:text-origen-ink/35`}
                />
              </label>

              <button
                type="submit"
                disabled={!isValid}
                className="mt-2 flex items-center justify-center gap-2 rounded-sm bg-origen-teal px-5 py-3 font-mono text-xs font-bold uppercase tracking-wide text-origen-paper transition-colors hover:bg-origen-teal-dark disabled:cursor-not-allowed disabled:opacity-50"
              >
                <MessageCircle className="h-4 w-4" />
                Confirmar por WhatsApp
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
