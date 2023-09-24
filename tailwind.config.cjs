/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            outline: ['focus'],
            animation: {
                'slide-in': 'slide-in 0.2s ease-in-out',
                'slide-out': 'slide-out 0.2s ease-in-out',
            },
            keyframes: {
                'slide-in': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0)' },
                },
                'slide-out': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
            screens: {
                'tiny': '280px', // => @media (min-width: 280px) { ... }
                'xxxs': '350px',
                'xxs': '400px',
                'smaller': '460px', // => @media (min-width: 460px) { ... }
                'small': '516px',
                'mobile': '696px',
                'sm-tablet': '850px',
                'tablet': '1025px',
                'desktop': '1296px',
                'landscape': { 'raw': '(orientation: landscape)' },
                'portrait': { 'raw': '(orientation: portrait)' },
                'low': { 'raw': '(min-height: 500px)' }, // low screen height
                'tablet-h': { 'raw': '(min-height: 730px)' }, // tablet height
                'tablet-wh': { 'raw': '(min-width: 1000px) and (min-height: 730px)' } // tablet width and height
            },
            gridTemplateColumns: {
                // Simple 18 column grid
                '18': 'repeat(18, minmax(0, 1fr))',
            },
            colors: {
                'm-blue-light': {
                    '1': '#F1FAFF',
                    '2': '#EAF8FF',
                    '3': '#D5F5FF',
                    '4': '#67cfff',
                    '45': '#51c7ff',
                    '5': '#1285BA'
                },
                'm-gray-light': {
                    '1': '#CDD7DB',
                    '2': '#6A8692',
                    '3': '#517280',
                    '4': '#07354A'
                },
                'm-green': '#16CF8D',
                'm-red': '#D00A51',
                'm-blue-dark': {
                    '1': '#07354A',
                    '2': '#042838',
                    '3': '#042432',
                    '4': '#031D28'
                },
                'm-gray-dark': {
                    '1': '#B3BBBE',
                    '2': '#9AA5A9',
                    '3': '#354A53'
                }
            },
        },
    },
    variants: {
        extend: {
            borderColor: ['focus-visible', 'active'],
            opacity: ['disabled'],
        }
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
    ],
    safelist: ['translate-x-0', '-translate-x-full'],
}
