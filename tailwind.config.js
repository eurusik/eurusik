/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        'heading': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      colors: {
        surface: {
          primary: '#0A0A0B',
          secondary: '#111113',
          tertiary: '#1A1A1D',
          elevated: '#232326',
        },
        border: {
          subtle: '#2A2A2E',
          default: '#3A3A3F',
        },
        content: {
          primary: '#EDEDEF',
          secondary: '#A0A0A8',
          tertiary: '#6B6B73',
        },
        accent: {
          DEFAULT: '#10B981',
          hover: '#059669',
          muted: 'rgba(16, 185, 129, 0.12)',
          glow: 'rgba(16, 185, 129, 0.25)',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'cursor-blink': 'cursorBlink 1s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
