// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        museo: ['"Museo Sans Cyrl"', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
