import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        img1:{
          '0% , 100%':{margin:'0px 0px'},
          '50%':{margin:'0px 200px'}
        },
        text1:{
          '0% , 100%':{margin:'0px 0px'},
          '50%':{margin:'0px 200px'}}
      },

      animation: {
        'teste': 'text1 10s infinite'
      },

      color: {
        'preto': '#000000',
        'branco': '#ffffff',
        'azul-paq': '#0DA2D2'
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
