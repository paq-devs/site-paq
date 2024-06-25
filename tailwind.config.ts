import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
          'paq-image': "url('./public/BG.png)",
      },
    },
    colors: {
      'white': '#ffffff',
      'azul-paq': '#0EB3E8'
    }
  },
  plugins: [],
};
export default config;
