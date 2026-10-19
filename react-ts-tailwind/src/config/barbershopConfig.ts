export interface ServiceItem {
  id: string;
  category: 'corte' | 'barba' | 'combo' | 'acabamento';
  name: string;
  duration: string;
  price: string;
  description: string;
  image: string;
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  category: 'cortes' | 'barba' | 'ambiente';
  title: string;
  subtitle: string;
  image: string;
  isReference: boolean;
}

export interface ReviewItem {
  author: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  isPlaceholder?: boolean;
}

export interface HoursItem {
  dayIndex: number;
  dayName: string;
  hours: string;
}

export interface BarbershopConfig {
  name: string;
  citySubtitle: string;
  badgeText: string;
  heroHeadlineHighlight: string;
  heroDescription: string;
  googleMapsUrl: string;
  address: string;
  whatsappNumber: string;
  phoneDisplay: string;
  instagramUrl: string;
  statusText: string;
  services: ServiceItem[];
  gallery: GalleryItem[];
  reviews: ReviewItem[];
  hours: HoursItem[];
}

export const BARBERSHOP_CONFIG: BarbershopConfig = {
  name: "BARBEARIA PREMIUM",
  citySubtitle: "Grooming & Estilo Masculino",
  badgeText: "Tradição, Estilo & Precisão Masculina",
  heroHeadlineHighlight: "Excelência em cada detalhe do seu visual.",
  heroDescription:
    "Cortes clássicos e modernos, degradê de alta precisão e barboterapia com toalha quente em um ambiente projetado para quem valoriza atendimento pontual e acabamento impecável.",
  googleMapsUrl: "https://maps.app.goo.gl/z1PtXUDnDcrpzAR69",
  address: "Localização oficial vinculada ao Google Maps (edite aqui para exibir Rua, Número, Bairro e Cidade)",
  whatsappNumber: "", // Exemplo: "5516999999999"
  phoneDisplay: "Consulte ou adicione o WhatsApp oficial",
  instagramUrl: "",
  statusText: "Horários Configuráveis",
  services: [
    {
      id: "corte-moderno",
      category: "corte",
      name: "Corte Masculino (Social ou Degradê)",
      duration: "45 min",
      price: "Valor sob consulta",
      description: "Corte personalizado na tesoura ou máquina (low, mid ou high fade), lavagem refrescante e finalização com pomada modeladora.",
      image: "/assets/img/fade.jpg",
      popular: true
    },
    {
      id: "barba-toalha-quente",
      category: "barba",
      name: "Barba Tradicional & Toalha Quente",
      duration: "35 min",
      price: "Valor sob consulta",
      description: "Ritual clássico com toalha aquecida, alinhamento geométrico na navalha, óleo essencial e balm pós-barba calmante.",
      image: "/assets/img/beard.jpg",
      popular: true
    },
    {
      id: "combo-corte-barba",
      category: "combo",
      name: "Combo Completo (Corte + Barba)",
      duration: "1h 15min",
      price: "Valor sob consulta",
      description: "A experiência completa de renovação do visual: corte sob medida aliado ao ritual de barboterapia com toalha quente.",
      image: "/assets/img/exec.jpg",
      popular: true
    }
  ],
  gallery: [],
  reviews: [],
  hours: [
    { dayIndex: 1, dayName: "Segunda-feira", hours: "Horário a confirmar" },
    { dayIndex: 2, dayName: "Terça-feira", hours: "09:00 às 20:00 (Configurável)" },
    { dayIndex: 3, dayName: "Quarta-feira", hours: "09:00 às 20:00 (Configurável)" },
    { dayIndex: 4, dayName: "Quinta-feira", hours: "09:00 às 20:00 (Configurável)" },
    { dayIndex: 5, dayName: "Sexta-feira", hours: "09:00 às 20:00 (Configurável)" },
    { dayIndex: 6, dayName: "Sábado", hours: "08:30 às 18:00 (Configurável)" },
    { dayIndex: 0, dayName: "Domingo", hours: "Fechado" }
  ]
};
