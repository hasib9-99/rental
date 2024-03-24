import type { Config } from "tailwindcss";
import { DEFAULT_CIPHERS } from "tls";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#066A9E',
          "100": "#7FD4FA"
        },
        'text': {
          DEFAULT: '#3D3D3D',
          '100': '#6D6D6D',
          '200': '#5D5D5D',
          '300': '#4F4F4F',
          'light': '#091638'
        }
      },
    },

  },
  plugins: [],
};
export default config;
