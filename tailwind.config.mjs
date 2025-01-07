// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",  // Ensure that all content files are included
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Custom CSS variables
        foreground: "var(--foreground)", // Custom CSS variables
      },
    },
  },
  plugins: [
    // Add any plugins you might need, for example:
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
  darkMode: 'class',  // Optional: Add this if you're using dark mode with classes
};
