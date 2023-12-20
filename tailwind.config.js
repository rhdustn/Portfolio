/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {},
        minWidth: {
            itemTable: '300px',
        },
        screens: {
            sm: { max: '500px' },
            md: { min: '500px', max: '990px' },
            lg: { min: '990px' },
        },
    },
    plugins: [],
}
