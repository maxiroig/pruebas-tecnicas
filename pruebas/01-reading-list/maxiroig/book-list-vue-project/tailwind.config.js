/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        lumanosimo: ['lumanosimo', 'cursive'],
        pacifico : ['pacifico', 'cursive'],
        cinzel: ['cinzel Decorative', 'cursive'],
        playfare: ['Playfair Display', 'serif'],
        yellowtail: ['Yellowtail', 'cursive']

      },
      spacing: {
        '128': '29rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('flowbite/plugin')
  ],
}

