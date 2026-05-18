import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#07111f",
          900: "#0b1728",
          800: "#11243a",
          700: "#173654",
        },
        skyline: "#58a6ff",
      },
      boxShadow: {
        soft: "0 20px 60px -35px rgba(88, 166, 255, 0.45)",
      },
    },
  },
  plugins: [],
} satisfies Config;
