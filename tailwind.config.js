/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        "primary-active": "var(--primary-color-active)",
        success: "var(--success-color)",
        "success-active": "var(--success-color-active)",
        error: "var(--error-color)",
        "error-active": "var(--error-color-active)",
        warning: "var(--warning-color)",
        "warning-active": "var(--warning-color-active)",
      },
      textColor: {
        main: "var(--font-color-main)",
        sec: "var(--font-color-second)",
        acc: "var(--font-color-accent)",
      },
    },
  },
  plugins: [],
};
