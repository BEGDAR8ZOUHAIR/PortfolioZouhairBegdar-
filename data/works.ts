import { StaticImageData } from "next/image";

export interface Works {
  name: string;
  tags: string[];
  description: string[];
  icon?: StaticImageData;
  buttons?: { name: string; link: string }[];
  video?: string;
  image?: StaticImageData;
  gradient?: string; // Add gradient option as fallback
  emoji?: string; // Add emoji option for visual representation
}

export const worksID: Works[] = [
  {
    name: "Calories AI",
    tags: ["AI/ML", "TypeScript", "Health Tech", "Original"],
    buttons: [
      {
        name: "View Project",
        link: "https://github.com/BEGDAR8ZOUHAIR/calories-ai",
      },
      {
        name: "Github",
        link: "https://github.com/BEGDAR8ZOUHAIR/calories-ai",
      },
    ],
    description: [
      "Aplikasi AI untuk pelacakan kalori menggunakan TypeScript dan teknologi pembelajaran mesin.",
      "Proyek original dengan implementasi AI untuk deteksi dan analisis makanan secara real-time.",
      "Solusi kesehatan digital inovatif dengan teknologi machine learning terdepan.",
    ],
    gradient: "from-orange-500 to-red-600",
    emoji: "🍎",
  },
  {
    name: "Expense Tracker App",
    tags: ["React Native", "Firebase", "Cloudinary", "Full-Stack"],
    buttons: [
      {
        name: "View Project",
        link: "https://github.com/BEGDAR8ZOUHAIR/expense-tracker-app",
      },
      {
        name: "Github",
        link: "https://github.com/BEGDAR8ZOUHAIR/expense-tracker-app",
      },
    ],
    description: [
      "Aplikasi pelacakan pengeluaran komprehensif dengan React Native, Firebase, dan Cloudinary.",
      "Fitur lengkap: autentikasi, statistik, manajemen dompet, upload media, dan profil pengguna.",
      "Arsitektur full-stack modern dengan real-time synchronization dan cloud storage.",
    ],
    gradient: "from-green-500 to-emerald-600",
    emoji: "💰",
  },
  {
    name: "ZenWork Employee Dashboard",
    tags: ["React", "TypeScript", "Dashboard", "Enterprise"],
    buttons: [
      {
        name: "View Project",
        link: "https://github.com/BEGDAR8ZOUHAIR/zenwork-employee",
      },
      {
        name: "Github",
        link: "https://github.com/BEGDAR8ZOUHAIR/zenwork-employee",
      },
    ],
    description: [
      "Dashboard karyawan yang dibangun dari nol dengan React dan TypeScript.",
      "Sistem manajemen karyawan enterprise dengan interface yang intuitif dan responsive.",
      "Proyek original mendemonstrasikan kemampuan dalam membangun aplikasi bisnis kompleks.",
    ],
    gradient: "from-blue-500 to-indigo-600",
    emoji: "👥",
  },
];

export const worksEng: Works[] = [
  {
    name: "Calories AI",
    tags: ["AI/ML", "TypeScript", "Health Tech", "Original"],
    buttons: [
      {
        name: "Live Demo",
        link: "https://github.com/BEGDAR8ZOUHAIR/calories-ai",
      },
      {
        name: "Github",
        link: "https://github.com/BEGDAR8ZOUHAIR/calories-ai",
      },
    ],
    description: [
      "Original AI-powered calorie tracking application built from scratch with TypeScript and ML.",
      "Features real-time food detection and nutritional analysis using advanced machine learning algorithms.",
      "Innovative digital health solution demonstrating expertise in cutting-edge AI technologies.",
    ],
    gradient: "from-orange-500 to-red-600",
    emoji: "🍎",
  },
  {
    name: "Expense Tracker App",
    tags: ["React Native", "Firebase", "Cloudinary", "Full-Stack"],
    buttons: [
      {
        name: "View Demo",
        link: "https://github.com/BEGDAR8ZOUHAIR/expense-tracker-app",
      },
      {
        name: "Github",
        link: "https://github.com/BEGDAR8ZOUHAIR/expense-tracker-app",
      },
    ],
    description: [
      "Comprehensive expense tracking app built entirely from scratch with React Native ecosystem.",
      "Complete feature set: authentication, statistics, wallet management, media uploads, user profiles.",
      "Modern full-stack architecture with real-time synchronization and cloud storage integration.",
    ],
    gradient: "from-green-500 to-emerald-600",
    emoji: "💰",
  },
  {
    name: "ZenWork Employee Dashboard",
    tags: ["React", "TypeScript", "Dashboard", "Enterprise"],
    buttons: [
      {
        name: "View Dashboard",
        link: "https://github.com/BEGDAR8ZOUHAIR/zenwork-employee",
      },
      {
        name: "Github",
        link: "https://github.com/BEGDAR8ZOUHAIR/zenwork-employee",
      },
    ],
    description: [
      "Custom-built employee dashboard developed from the ground up with React and TypeScript.",
      "Enterprise-grade employee management system with intuitive and responsive interface design.",
      "Original project showcasing ability to build complex business applications independently.",
    ],
    gradient: "from-blue-500 to-indigo-600",
    emoji: "👥",
  },
  {
    name: "Car Marketplace",
    tags: ["TypeScript", "E-commerce", "Automotive", "Full-Stack"],
    buttons: [
      {
        name: "Browse Platform",
        link: "https://github.com/BEGDAR8ZOUHAIR/car-marketplace",
      },
      {
        name: "Github",
        link: "https://github.com/BEGDAR8ZOUHAIR/car-marketplace",
      },
    ],
    description: [
      "Original automotive marketplace platform built entirely with modern TypeScript architecture.",
      "Advanced search, filtering, and comparison systems for comprehensive vehicle listings management.",
      "Professional e-commerce solution demonstrating full-stack development capabilities.",
    ],
    gradient: "from-red-500 to-orange-600",
    emoji: "🚗",
  },
  {
    name: "Weather App Current",
    tags: ["JavaScript", "Weather API", "Mobile", "Real-time"],
    buttons: [
      {
        name: "Check Weather",
        link: "https://github.com/BEGDAR8ZOUHAIR/weaderAppCurrent",
      },
      {
        name: "Github",
        link: "https://github.com/BEGDAR8ZOUHAIR/weaderAppCurrent",
      },
    ],
    description: [
      "Custom weather application built from scratch with JavaScript and weather API integration.",
      "Real-time weather data with location-based forecasting and interactive user interface.",
      "Original project with 2+ stars showing solid development skills and user engagement.",
    ],
    gradient: "from-cyan-500 to-blue-600",
    emoji: "🌤️",
  },
];