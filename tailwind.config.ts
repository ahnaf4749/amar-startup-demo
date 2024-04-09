import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      colors: {
        dark_section: "#08090D",
        primary: {
          50: "#fff8e8",
          100: "#ffeab9",
          200: "#ffe097",
          300: "#ffd167",
          400: "#ffc949",
          500: "#ffbb1c",
          600: "#e8aa19",
          700: "#8c670f",
          800: "#6b4f0c",
        },
        secondary: {
          50: "#edf0fe",
          100: "#c6d2fb",
          200: "#aabcf9",
          300: "#849df6",
          400: "#6c8af5",
          500: "#476df2",
          600: "#4163dc",
          700: "#324dac",
          800: "#1e2e66",
        },
        gray_neutral: {
          25: "#fcfcfd",
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d2d6db",
          400: "#9da4ae",
          500: "#6c737f",
          600: "#4d5761",
          700: "#384250",
          800: "#1f2a37",
          900: "#111927",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply w-full max-w-[1440px] mx-auto px-5 md:px-10 lg:px-[60px]": {},
        },
        ".h2": {
          "@apply text-[26px] sm:text-[32px] md:text-[50px] lg:text-[48px] leading-[36px] sm:leading-[42px] md:leading-[50px] lg:leading-[58px] font-[500] lg:font-[600] text-[#0A0A0B]":
            {},
        },
        ".h4": {
          "@apply text-[20px] sm:text-[24px] md:text-[26px] lg:text-[30px] leading-[26px] sm:leading-[30px] md:leading-[36px] lg:leading-[38px] font-[500] lg:font-[600] text-gray-800":
            {},
        },
        ".h5": {
          "@apply text-[18px] sm:text-[18px] md:text-[20px] lg:text-[20px] leading-[28px] sm:leading-[28px] md:leading-[30px] lg:leading-[30px] font-[500] text-gray-700":
            {},
        },
        ".h6": {
          "@apply text-[16px] leading-[24px] font-[500] text-gray-700": {},
        },
        ".input_label": {
          "@apply text-[14px] leading-[20px] font-[500] text-gray-700": {},
        },
        ".price": {
          "@apply text-[18px] leading-[28px] font-[600] text-gray-800": {},
        },
        ".quantity": {
          "@apply text-[14px] leading-[20px] font-[400] text-gray-600": {},
        },
        ".py-section": {
          "@apply py-[30px] sm:py-[35px] md:py-[45px] lg:py-[48px]": {},
        },
        ".p-section": {
          "@apply p-16 sm:p-20 md:p-24 lg:p-28 xl:p-32": {},
        },
        ".space-y-section": {
          "@apply space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16 xl:space-y-20 2xl:space-y-24":
            {},
        },
      });
    }),
  ],
};
export default config;
