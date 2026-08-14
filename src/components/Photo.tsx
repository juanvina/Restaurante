"use client";

import { useState } from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

type PhotoProps = {
  src?: string;
  alt: string;
  gradient: string;
  icon: LucideIcon;
  className?: string;
  sizes?: string;
};

export default function Photo({
  src,
  alt,
  gradient,
  icon: Icon,
  className = "",
  sizes = "100vw",
}: PhotoProps) {
  const [broken, setBroken] = useState(false);

  if (!src || broken) {
    return (
      <div
        className={`dish-placeholder flex items-center justify-center text-origen-paper ${className}`}
        style={{ ["--tile-gradient" as string]: gradient }}
      >
        <Icon className="h-12 w-12 opacity-90" strokeWidth={1.3} />
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="photo-warm object-cover"
        onError={() => setBroken(true)}
      />
    </div>
  );
}
