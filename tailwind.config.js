/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'text-TypeScript',
    'text-JavaScript',
    'text-WebGL',
    'text-Nodejs',
    'text-MongoDB',
    'text-Express',
    'text-GLSL',
    'text-Maths',
    'text-ThreeJS',
    'text-Socketio',
    'text-React',
    'text-Cplusplus',
    'text-DataStructures',
    'text-Algorithms',
    'text-Canvas',
    'text-HTML',
    'text-CSS',
  ],
  theme: {
    extend: {
      fontFamily: {
        impact: ['Impact', 'Arial', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        exo: ['Exo', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
      backgroundImage: {
        customGradient:
          'linear-gradient(rgb(241, 230, 230), rgb(255, 228, 217))',
      },
      colors: {
        navBg: 'rgb(248, 226, 217)',
        primary: colors.amber,
        borderColor: 'rgba(255,255,255,0.5)',
        lowerBgColor: 'rgb(248, 226, 214)',
        TypeScript: '#3178C6',
        JavaScript: '#D4B830',
        WebGL: '#990000',
        Nodejs: '#339933',
        MongoDB: '#47A248',
        Express: '#000000',
        GLSL: '#FFB500',
        Maths: '#008B8B',
        ThreeJS: '#FF5C8D',
        Socketio: '#010101',
        React: '#61DAFB',
        Cplusplus: '#00599C',
        DataStructures: '#8B008B',
        Algorithms: '#F4A300',
        Canvas: '#FFB6C1',
        HTML: '#E34F26', // Vibrant orange for HTML
        CSS: '#1572B6', // Cool blue for CSS
      },
      animation: {
        fadeIn: 'fadeIn 500ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
