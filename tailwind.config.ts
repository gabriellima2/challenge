import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/ui/**/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: '#F0F0F5',
				font: {
					primary: '#737380',
					secondary: '#41414D',
					tertiary: '#09090A',
				},
				brand: {
					orange: '#FFA585',
					blue: '#115D8C',
				},
				others: {
					green: '#51B853',
					red: '#DE3838',
				},
			},
			fontSize: {
				xl: '2rem',
				lg: '1.5rem',
				md: '1.25rem',
				regular: '1rem',
				sm: '0.875rem',
				xs: '0.75rem',
			},
			fontFamily: {
				primary: ['var(--font-primary)', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
export default config
