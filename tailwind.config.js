/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                gold: {
                    50: '#fffbf0',
                    100: '#fff4c6',
                    200: '#ffe688',
                    300: '#ffd24a',
                    400: '#ffb91a',
                    500: '#f59e0b', // amber-500
                    600: '#d97706', // amber-600
                    700: '#b45309', // amber-700
                    800: '#92400e', // amber-800
                    900: '#78350f', // amber-900
                },
            },
            fontFamily: {
                playfair: ['"Playfair Display"', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'pulse-amber': 'pulse-amber 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'reveal': 'reveal 0.8s ease-out forwards',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
            },
            keyframes: {
                'pulse-amber': {
                    '0%, 100%': { opacity: 1, boxShadow: '0 0 0 0 rgba(245, 158, 11, 0.7)' },
                    '50%': { opacity: .5, boxShadow: '0 0 0 10px rgba(245, 158, 11, 0)' },
                },
                reveal: {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                },
                fadeInUp: {
                    '0%': { opacity: 0, transform: 'translateY(20px)' },
                    '100%': { opacity: 1, transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
