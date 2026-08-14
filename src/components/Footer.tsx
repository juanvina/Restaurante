import { Camera, Music2, Phone, Clock, MapPin } from "lucide-react";
import { LOCATIONS, SCHEDULE, BRAND } from "@/data/origenData";

export default function Footer() {
  return (
    <footer className="border-t-4 border-double border-origen-caramel bg-origen-ink px-6 py-16 text-origen-paper">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <span className="font-display text-2xl font-bold tracking-wide text-origen-caramel">
            {BRAND.name}
          </span>
          <p className="mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-origen-paper/50">
            {BRAND.edition}
          </p>
          <p className="mt-4 max-w-sm text-sm text-origen-paper/70">
            Una gaceta gastronómica que fusiona la calidez tolimense con
            especias del mundo. Currys, bowls, arroces al wok y cocina
            vegetariana hechos desde cero, todos los días, en Ibagué.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={BRAND.instagram}
              aria-label="Instagram de Origen Restaurante"
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-origen-paper/20 transition-colors hover:border-origen-caramel hover:text-origen-caramel"
            >
              <Camera className="h-4 w-4" />
            </a>
            <a
              href={BRAND.tiktok}
              aria-label="TikTok de Origen Restaurante"
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-origen-paper/20 transition-colors hover:border-origen-caramel hover:text-origen-caramel"
            >
              <Music2 className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-origen-paper/50">
            Sedes
          </h4>
          <ul className="mt-4 space-y-4 text-sm text-origen-paper/70">
            {LOCATIONS.map((location) => (
              <li key={location.id} className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-origen-caramel" />
                <span>
                  <span className="block font-medium text-origen-paper">{location.name}</span>
                  {location.address}, {location.city}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-origen-paper/50">
            Contacto y Horarios
          </h4>
          <a
            href={`tel:${LOCATIONS[0].phone.replace(/\s/g, "")}`}
            className="mt-4 flex items-center gap-2.5 font-mono text-sm text-origen-paper/70 transition-colors hover:text-origen-caramel"
          >
            <Phone className="h-4 w-4 text-origen-caramel" />
            {LOCATIONS[0].phone}
          </a>
          <div className="mt-3 space-y-1.5 font-mono text-sm text-origen-paper/70">
            {SCHEDULE.map((hour) => (
              <p key={hour.days} className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-origen-caramel" />
                <span>
                  <span className="text-origen-paper">{hour.days}:</span> {hour.time}
                </span>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-origen-paper/10 pt-6 font-mono text-xs text-origen-paper/50">
        © {new Date().getFullYear()} {BRAND.fullName}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
