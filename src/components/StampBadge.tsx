import type { ReactNode } from "react";

type StampBadgeProps = {
  children: ReactNode;
  tone?: "ink" | "teal" | "caramel" | "chili";
  rotate?: "left" | "right" | "none";
  className?: string;
};

const TONE_CLASSES: Record<NonNullable<StampBadgeProps["tone"]>, string> = {
  ink: "text-origen-ink border-origen-ink",
  teal: "text-origen-teal border-origen-teal",
  caramel: "text-origen-caramel border-origen-caramel",
  chili: "text-origen-chili border-origen-chili",
};

const ROTATE_CLASSES: Record<NonNullable<StampBadgeProps["rotate"]>, string> = {
  left: "-rotate-3",
  right: "rotate-2",
  none: "",
};

export default function StampBadge({
  children,
  tone = "ink",
  rotate = "left",
  className = "",
}: StampBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border-double border-4 bg-origen-paper px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider ${TONE_CLASSES[tone]} ${ROTATE_CLASSES[rotate]} ${className}`}
    >
      {children}
    </span>
  );
}
