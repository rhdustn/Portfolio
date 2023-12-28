/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {},
        minWidth: {
            itemTable: '300px',
        },
        screens: {
            sm: { max: '810px' },
            md: { min: '810px', max: '1200px' },
            lg: { min: '1200px' },
        },
    },
    plugins: [
        require('tailwind-scrollbar'),
    ],
}
