/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      gridTemplateColumns: {
        'landing': 'max-content 1fr',
      },
    },
  },
	plugins: [],
}
