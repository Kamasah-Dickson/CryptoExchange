/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontWeight: {
				thin: 300,
				small: 400,
				large: 700,
			},
		},
	},
	plugins: [],
};
