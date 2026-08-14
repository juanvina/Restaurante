export function buildWhatsAppLink(phone: string, message: string): string {
  const digitsOnly = phone.replace(/\D/g, "");
  return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(message)}`;
}

export function formatCOP(price: number): string {
  return `$${price.toLocaleString("es-CO")} COP`;
}
