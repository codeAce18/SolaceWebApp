import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "Fozanova-Black": "#121933",
        "p-grey": " #7A7D9C",
        "Fozanova-gold": "#DBA73B",
        "Homepage-background": "#F9FAFB",
        "Fazanova-white": "#FFFFFF",
        'border-custom': '#EFF0F6',
        'border-customs' : '#EDF0EE'
      },


      lineHeight: {
        '24': '24px',
        '82' : '82.8px',
      },

      letterSpacing: {
        normal: '0.2px',
        customTight: '-2px',  //custom value
      },
      
    },
  },
  plugins: [],
};
export default config;

