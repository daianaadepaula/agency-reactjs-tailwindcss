/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                                        
    "./src/**/*.{js,ts,jsx,tsx}",
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
			colors: {
				'neutralSilver': '#F5F7FA',
				'neutralDGrey': '#4D4D4D',
				'brandPrimary': '#4A4AE6',
				'neutralGrey': '#717171',
				'bgNeutral': '#C8CBE6',
				'gray900': '#717171',
			}
		},
  },
  plugins: [require('flowbite/plugin')],
}

