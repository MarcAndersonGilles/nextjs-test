import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        'figma-neutre': {
          100: '#181818',
          200: '#27272A',
          300: '#3F3F46',
          400: '#52525B',
          500: '#71717A',
          600: '#A1A1AA',
          700: '#D4D4D8',
          800: '#E4E4E7',
          900: '#F4F4F5',
          1000: '#FAFAFA',
        },
        
        primary: '#33DEBD',
        primaryLight: '#EFFCFA',
        secondary: '#EFFCFA',
        primaryHover: '#4dcbbd',
        primaryLightGray :'#E4E4E7',

        primaryDarkGray: "#3f3f46",
        secondaryLightGray:"#f3f4f6",
        secondaryDarkGray: "#52525B",
        
        primaryGray: '#F7F6F9',
        primaryBlack: '#111111',

        accentColor1: "#D72F59",
        accentColor2: "#3BAFD4",
        accentColor3: "#803BD4",
        accentColor4: "#CB162D",
        accentColor5: "#FCF1F2",  
        accentColor6: "#02B5A1",
        accentColor7: "#ffd53f",
      },
      
    },
  },
  plugins: [],
}
export default config
