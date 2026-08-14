"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { Dish } from "@/data/origenData";
import { LOCATIONS } from "@/data/origenData";

type UIContextValue = {
  isReservationOpen: boolean;
  openReservation: () => void;
  closeReservation: () => void;
  selectedDish: Dish | null;
  openDish: (dish: Dish) => void;
  closeDish: () => void;
  selectedLocationId: string;
  setSelectedLocationId: (id: string) => void;
};

const UIContext = createContext<UIContextValue | null>(null);

export function UIProvider({ children }: { children: ReactNode }) {
  const [isReservationOpen, setReservationOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [selectedLocationId, setSelectedLocationId] = useState(LOCATIONS[0].id);

  return (
    <UIContext.Provider
      value={{
        isReservationOpen,
        openReservation: () => setReservationOpen(true),
        closeReservation: () => setReservationOpen(false),
        selectedDish,
        openDish: setSelectedDish,
        closeDish: () => setSelectedDish(null),
        selectedLocationId,
        setSelectedLocationId,
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used within UIProvider");
  return ctx;
}
