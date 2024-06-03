/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        success: 'var(--success-color)',
        error: 'var(--error-color)',
        warning: 'var(--warning-color)',
      },
      textColor: {
        main: 'var(--font-color-main)',
        sec: 'var(--font-color-second)',
        acc: 'var(--font-color-accent)'
      }
    },
  },
  plugins: [],
};
