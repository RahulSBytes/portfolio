import tailwindScrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { 
        sans: ["inter", "sans-serif"],
        jetbrains:["JetBrains Mono", "monospace"]
      },
      colors:{
        primary : '#fafafa',
        primaryblack:'#262626'
      }
    },
  },
  plugins: [tailwindScrollbar], // registering the plugin
};
