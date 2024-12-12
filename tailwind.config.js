/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(22, 100%, 79.8%)', // Correct placement for primary color
      },
      backgroundImage: {
        'custom-radial': 'radial-gradient(88% 100% at top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0))',
      },
      boxShadow: {
        'custom-shadow': `0 10px 32px rgba(34, 42, 53, 0.12), 
                          0 1px 1px rgba(0, 0, 0, 0.05), 
                          0 0 0 1px rgba(34, 42, 53, 0.05), 
                          0 4px 6px rgba(34, 42, 53, 0.08), 
                          0 24px 108px rgba(47, 48, 55, 0.10)`,
      },
      maskImage: {
        "radial-custom": 'radial-gradient(33.875rem 33.875rem at calc(100% - 8.9375rem) 0, white 3%, transparent 70%)'
      }
    },
  },
  plugins: [],
};
