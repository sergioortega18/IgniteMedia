import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}", // Asegúrate de incluir la carpeta sections
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",  
  ],
  theme: {
    screens: {  
      sm: "375px",
      md: "768px",
      lg: "1440px",
    },
    extend: {
      fontFamily: {
        serif: ['var(--font-playfair-display)', 'serif'], // Playfair Display
        aeonik: ['var(--font-aeonik)'],
      },
      container: {
        center: true,
        padding: {  
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
        },
      },
      colors: {
        'red-orange': {
          500: '#FF4500',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;