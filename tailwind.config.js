/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'abundant-primary': '#2c3e50',
        'abundant-secondary': '#34495e',
        'abundant-accent': '#3498db',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
