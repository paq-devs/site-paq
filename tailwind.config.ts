import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        img1:{
          '0% , 100%':{transform: 'translatex(0px)'},
          '20%':{transform: 'translatex(-300px)'}
        },
        text1:{
          '0% , 100%':{transform: 'translatex(0px)'},
          '33%':{transform: 'translatex(500px)'}}
      },

      animation: {
        'teste': 'text1 20s infinite ease-out',
        'img1': 'img1 20s infinite'
      },

      colors: {
        'preto': '#000000',
        'branco': '#ffffff',
        'azulpaq': '#0DA2D2',
        'numeroestilizado': '#0EB3E8',
      },
      fontSize:{
        'font-sec1':  '70.02px'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'formula-condensed': ['PP Formula Condensed', 'sans-serif'],
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
