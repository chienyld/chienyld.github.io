/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      animation: {
        'waiting': 'wait 1s linear',
      },
      keyframes: {
        wait: {
          '0%': { opacity:'0' },
          '50%': { opacity:'0' },
          '100%': { opacity:'1' },
        }
      }
    },
  },
  plugins: [],
}

