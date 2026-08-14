export type Category =
  | "Currys de Autor"
  | "Bowls & Wok"
  | "Entradas & Parathas"
  | "Cocina Vegetariana"
  | "Bebidas Naturales";

export type Tag = "Vegano" | "Vegetariano" | "Picante" | "Gluten Free" | "Recomendado del Chef";

export const STAMP_LABELS: Record<Tag, string> = {
  Vegano: "🌱 VEGANO",
  Vegetariano: "🌱 VEGETARIANO",
  Picante: "🌶️ PICANTE",
  "Gluten Free": "GLUTEN FREE",
  "Recomendado del Chef": "⭐ DEL CHEF",
};

export type Dish = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  tags: Tag[];
  isPopular: boolean;
  ingredients: string[];
  pairing: string;
};

export const CATEGORIES: Category[] = [
  "Currys de Autor",
  "Bowls & Wok",
  "Entradas & Parathas",
  "Cocina Vegetariana",
  "Bebidas Naturales",
];

export const DISHES: Dish[] = [
  {
    id: "curry-de-pollo",
    name: "Curry de Pollo",
    description:
      "Pollo criado en el Tolima, bañado en una salsa lenta de tomate maduro, yogur y especias traídas desde el otro lado del océano. El plato que le dio nombre a la casa.",
    price: 38000,
    category: "Currys de Autor",
    image: "/dishes/curry-de-pollo.jpg",
    tags: ["Recomendado del Chef", "Picante"],
    isPopular: true,
    ingredients: ["Pollo", "Tomate", "Yogur natural", "Garam masala", "Cilantro", "Arroz basmati"],
    pairing: "Bebida Natural de Tamarindo",
  },
  {
    id: "curry-de-garbanzos",
    name: "Curry de Garbanzos",
    description:
      "Chana masala de cocción paciente: garbanzos, jengibre fresco y comino tostado a mano hasta que la cocina entera huela a especiería centenaria.",
    price: 34000,
    category: "Currys de Autor",
    image: "/dishes/curry-de-garbanzos.jpg",
    tags: ["Vegano", "Gluten Free"],
    isPopular: false,
    ingredients: ["Garbanzos", "Tomate", "Jengibre", "Comino", "Cilantro"],
    pairing: "Limonada de Coco",
  },
  {
    id: "curry-verde-de-camarones",
    name: "Curry Verde de Camarones",
    description:
      "Camarones frescos en un curry verde donde el Sudeste Asiático se cruza con la India: leche de coco, albahaca y un golpe de picante que se anuncia despacio.",
    price: 44000,
    category: "Currys de Autor",
    image: "/dishes/curry-verde-de-camarones.jpg",
    tags: ["Picante", "Gluten Free"],
    isPopular: true,
    ingredients: ["Camarones", "Leche de coco", "Pasta de curry verde", "Albahaca", "Arroz jazmín"],
    pairing: "Té Helado de Jamaica",
  },
  {
    id: "bowl-de-salmon",
    name: "Bowl de Salmón",
    description:
      "Salmón sellado, aguacate cremoso, edamame y mango maduro sobre una base de granos. Fresco como si el mar y el trópico se hubieran puesto de acuerdo.",
    price: 42000,
    category: "Bowls & Wok",
    image: "/dishes/bowl-de-salmon.jpg",
    tags: ["Gluten Free", "Recomendado del Chef"],
    isPopular: true,
    ingredients: ["Salmón", "Aguacate", "Edamame", "Mango", "Quinua", "Vinagreta cítrica"],
    pairing: "Limonada de Coco",
  },
  {
    id: "bowl-mediterraneo",
    name: "Bowl Mediterráneo",
    description:
      "Garbanzos crocantes, hummus casero, tomate cherry, pepino y queso feta: una postal del Mediterráneo servida con la calidez de nuestra cocina.",
    price: 36000,
    category: "Bowls & Wok",
    image: "/dishes/bowl-mediterraneo.jpg",
    tags: ["Vegetariano", "Gluten Free"],
    isPopular: false,
    ingredients: ["Garbanzos", "Hummus", "Tomate cherry", "Pepino", "Queso feta", "Aceitunas"],
    pairing: "Chai Latte",
  },
  {
    id: "arroz-al-wok-con-camarones",
    name: "Arroz al Wok con Camarones",
    description:
      "Arroz salteado a fuego vivo con camarones, tocineta, vegetales de plaza y maduro caramelizado. El wok como puente entre Oriente y el Tolima.",
    price: 41000,
    category: "Bowls & Wok",
    image: "/dishes/arroz-al-wok-con-camarones.jpg",
    tags: ["Recomendado del Chef"],
    isPopular: true,
    ingredients: ["Camarones", "Arroz", "Tocineta", "Vegetales salteados", "Maduro", "Salsa de soya"],
    pairing: "Té Helado de Jamaica",
  },
  {
    id: "arroz-al-wok-vegetariano",
    name: "Arroz al Wok Vegetariano",
    description:
      "Tofu crocante y vegetales de temporada saltados con ajonjolí tostado, prueba de que la cocina sin carne también puede rugir en el wok.",
    price: 32000,
    category: "Bowls & Wok",
    image: "/dishes/arroz-al-wok-vegetariano.jpg",
    tags: ["Vegano", "Vegetariano"],
    isPopular: false,
    ingredients: ["Tofu", "Arroz", "Vegetales de temporada", "Ajonjolí", "Salsa de soya"],
    pairing: "Limonada de Coco",
  },
  {
    id: "paratha-de-queso",
    name: "Paratha de Queso",
    description:
      "Tortilla india de hojas crujientes, rellena de queso derretido, albahaca fresca y un hilo de salsa de tamarindo agridulce.",
    price: 22000,
    category: "Entradas & Parathas",
    image: "/dishes/paratha-de-queso.jpg",
    tags: ["Vegetariano"],
    isPopular: true,
    ingredients: ["Harina integral", "Queso", "Albahaca", "Salsa de tamarindo"],
    pairing: "Chai Latte",
  },
  {
    id: "samosas-de-papa",
    name: "Samosas de Papa",
    description:
      "Empanadas de masa crocante rellenas de papa especiada y arvejas, fritas hasta el dorado perfecto. Una receta de calle que cruzó fronteras.",
    price: 19000,
    category: "Entradas & Parathas",
    image: "/dishes/samosas-de-papa.jpg",
    tags: ["Vegano", "Picante"],
    isPopular: false,
    ingredients: ["Papa", "Arvejas", "Comino", "Cilantro", "Masa crocante"],
    pairing: "Limonada de Coco",
  },
  {
    id: "paratha-de-pollo",
    name: "Paratha de Pollo",
    description:
      "Tortilla india rellena de pollo desmechado marinado en especias tandoori, para quienes quieren su primer bocado con carácter.",
    price: 24000,
    category: "Entradas & Parathas",
    image: "/dishes/paratha-de-pollo.jpg",
    tags: ["Picante"],
    isPopular: false,
    ingredients: ["Harina integral", "Pollo", "Especias tandoori", "Yogur"],
    pairing: "Té Helado de Jamaica",
  },
  {
    id: "berenjena-a-la-tailandesa",
    name: "Berenjena a la Tailandesa",
    description:
      "Berenjena salteada en leche de coco, jengibre y albahaca tailandesa hasta quedar sedosa. Sin un gramo de carne, sin perder un gramo de carácter.",
    price: 30000,
    category: "Cocina Vegetariana",
    image: "/dishes/berenjena-a-la-tailandesa.jpg",
    tags: ["Vegano", "Picante", "Gluten Free"],
    isPopular: false,
    ingredients: ["Berenjena", "Leche de coco", "Jengibre", "Albahaca tailandesa", "Arroz jazmín"],
    pairing: "Limonada de Coco",
  },
  {
    id: "buddha-bowl-vegano",
    name: "Buddha Bowl Vegano",
    description:
      "Quinua, garbanzos asados, vegetales de temporada y tahini casero: el plato que probó que la cocina vegana también puede ser generosa.",
    price: 32000,
    category: "Cocina Vegetariana",
    image: "/dishes/buddha-bowl-vegano.jpg",
    tags: ["Vegano", "Gluten Free", "Recomendado del Chef"],
    isPopular: true,
    ingredients: ["Quinua", "Garbanzos", "Vegetales asados", "Tahini", "Semillas"],
    pairing: "Chai Latte",
  },
  {
    id: "tofu-tikka-masala",
    name: "Tofu Tikka Masala",
    description:
      "Tofu marinado en especias tandoori y bañado en una salsa cremosa de tomate y anacardos. La receta india más querida, sin un gramo de carne.",
    price: 33000,
    category: "Cocina Vegetariana",
    image: "/dishes/tofu-tikka-masala.jpg",
    tags: ["Vegano", "Picante"],
    isPopular: false,
    ingredients: ["Tofu", "Especias tandoori", "Tomate", "Anacardos", "Arroz basmati"],
    pairing: "Chai Latte",
  },
  {
    id: "bebida-natural-de-tamarindo",
    name: "Bebida Natural de Tamarindo",
    description:
      "Refresco artesanal de tamarindo endulzado con panela, tal como se prepara en las tardes calurosas del Tolima.",
    price: 9000,
    category: "Bebidas Naturales",
    image: "/dishes/bebida-natural-de-tamarindo.jpg",
    tags: ["Vegano", "Gluten Free"],
    isPopular: true,
    ingredients: ["Tamarindo", "Panela", "Agua", "Hielo"],
    pairing: "Ideal con Currys de Autor",
  },
  {
    id: "limonada-de-coco",
    name: "Limonada de Coco",
    description: "Limón recién exprimido con crema de coco y un toque de menta helada.",
    price: 10000,
    category: "Bebidas Naturales",
    image: "/dishes/limonada-de-coco.jpg",
    tags: ["Vegano", "Gluten Free"],
    isPopular: false,
    ingredients: ["Limón", "Crema de coco", "Menta", "Hielo"],
    pairing: "Ideal con Bowls & Wok",
  },
  {
    id: "chai-latte",
    name: "Chai Latte",
    description: "Té negro especiado con canela, cardamomo y clavo, servido con leche cremosa al estilo indio.",
    price: 11000,
    category: "Bebidas Naturales",
    image: "/dishes/chai-latte.jpg",
    tags: ["Vegetariano"],
    isPopular: true,
    ingredients: ["Té negro", "Canela", "Cardamomo", "Clavo", "Leche"],
    pairing: "Ideal con Parathas",
  },
  {
    id: "te-helado-de-jamaica",
    name: "Té Helado de Jamaica",
    description: "Infusión fría de flor de jamaica, ligeramente ácida y refrescante, sin azúcar refinada.",
    price: 9000,
    category: "Bebidas Naturales",
    image: "/dishes/te-helado-de-jamaica.jpg",
    tags: ["Vegano", "Gluten Free"],
    isPopular: false,
    ingredients: ["Flor de jamaica", "Panela", "Hielo"],
    pairing: "Ideal con Currys de Autor",
  },
];

export type Hours = {
  days: string;
  time: string;
};

export const SCHEDULE: Hours[] = [
  { days: "Lunes a Jueves", time: "8:00 AM - 9:00 PM" },
  { days: "Viernes y Sábado", time: "8:00 AM - 10:00 PM" },
  { days: "Domingo", time: "8:00 AM - 8:00 PM" },
];

export type RestaurantLocation = {
  id: string;
  name: string;
  journalTitle: string;
  journalEntry: string;
  address: string;
  city: string;
  phone: string;
  whatsappPhone: string;
  hours: Hours[];
  mapsUrl: string;
  wazeUrl: string;
  parkingNote?: string;
};

export const LOCATIONS: RestaurantLocation[] = [
  {
    id: "la-samaria",
    name: "Sede La Samaria",
    journalTitle: "Diario de La Samaria",
    journalEntry:
      "La sede original. Un rincón cálido donde el aroma a especias tostadas se mezcla con las tardes tolimenses. Aquí empezó todo.",
    address: "Carrera 12 Sur #83-30",
    city: "Ibagué, Tolima",
    phone: "+57 321 9082315",
    whatsappPhone: "573219082315",
    hours: SCHEDULE,
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Carrera+12+Sur+%2383-30%2C+Ibagu%C3%A9%2C+Tolima",
    wazeUrl:
      "https://waze.com/ul?q=Carrera%2012%20Sur%20%2383-30%2C%20Ibagu%C3%A9%2C%20Tolima",
    parkingNote: "Parqueadero disponible en el local",
  },
  {
    id: "centro",
    name: "Sede Centro",
    journalTitle: "Diario del Centro",
    journalEntry:
      "La segunda entrada de este diario gastronómico, en pleno corazón de Ibagué, para quienes prefieren su curry entre el bullicio del centro.",
    address: "Centro de Ibagué",
    city: "Ibagué, Tolima",
    phone: "+57 321 9082315",
    whatsappPhone: "573219082315",
    hours: SCHEDULE,
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Centro+de+Ibagu%C3%A9%2C+Tolima",
    wazeUrl: "https://waze.com/ul?q=Centro%20de%20Ibagu%C3%A9%2C%20Tolima",
  },
];

export const BRAND = {
  name: "ORIGEN",
  tagline: "Cocina Artesanal",
  fullName: "Origen Restaurante",
  edition: "Edición Ibagué",
  // TODO: reemplazar por las cuentas reales del restaurante.
  instagram: "#",
  tiktok: "#",
  primaryWhatsapp: "573219082315",
};
