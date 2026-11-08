/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        blush: '#FFE3EE',
        'hot-pink': '#FF3D8B',
        black: '#0A0A0A',
        'berry-dark': '#8F0F4A',
        'butter-yellow': '#FFE45C',
      },
      fontFamily: {
        heading: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      borderWidth: {
        '3': '3px',
      },
      boxShadow: {
        'brutal-sm': '3px 3px 0px #0A0A0A',
        'brutal': '5px 5px 0px #0A0A0A',
        'brutal-lg': '8px 8px 0px #0A0A0A',
        'brutal-xl': '12px 12px 0px #0A0A0A',
      },
    },
  },
  plugins: [],
};
