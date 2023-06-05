/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	corePlugins: {
		aspectRatio: true
	},
	plugins: [require('@tailwindcss/aspect-ratio')]
};
