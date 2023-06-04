/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			screens: {
				'-2xl': { max: '1535px' },
				'-xl': { max: '1279px' },
				'-lg': { max: '991px' },
				'-md': { max: '767px' },
				'-sm': { max: '639px' },
			},
			colors: {
				selectiveYellowColor: '#FFB400',
				selectiveYellowColorLight: 'RGBA(255,180,0,0.95)',
				nightRiderColor: '#2B2B2B',
				blackPearlColor: '#18191A',
				balticSeaColor: '#3A3B3C',
				blueCharcoalColor: '#242526',
				greyColor: '#767676',
				solitudeColor: '#E4E6EB',
				snowColor: '#FAFAFA',
				whiteColor: '#FFFFFF',
				blueMagenta: '#F0F0F6',
			},
		},
	},
	plugins: [],
};
