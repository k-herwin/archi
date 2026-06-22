/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          50:  '#fdf4f0',
          100: '#fbe4d8',
          200: '#f6c5a8',
          300: '#ef9e72',
          400: '#e67744',
          500: '#c85a28',
          600: '#a8461e',
          700: '#87351a',
          800: '#6a2914',
          900: '#4d1d0d',
        },
      },
      fontFamily: {
        display: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
