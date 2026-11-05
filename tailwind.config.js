/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#FFFFFF',
          pure: '#FFFFFF',
          50: '#FBFBFB',
          100: '#F5F5F7',
          200: '#EAEAEA',
          300: '#DCDCDC',
        },
        obsidian: {
          DEFAULT: '#111111',
          light: '#222222',
          muted: '#666666',
          faint: '#999999',
        },
        chrome: {
          DEFAULT: '#E5E5E7',
          border: '#E2E2E4',
          subtle: '#F0F0F2',
          dark: '#737373',
        },
        crimson: {
          DEFAULT: '#D41514',
          hover: '#B51110',
          glow: 'rgba(212, 21, 20, 0.25)',
          subtle: 'rgba(212, 21, 20, 0.08)',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        accent: ['"Space Grotesk"', 'monospace', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.3em',
        'super-wide': '0.45em',
      }
    },
  },
  plugins: [],
}
