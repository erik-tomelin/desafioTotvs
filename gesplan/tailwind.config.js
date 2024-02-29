/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
    extend: {
      colors: {
        '$primary-button': '#2563EB',
        '$secundary-button': '#243c5a',
      },
    },
	},
	plugins: [],
};
