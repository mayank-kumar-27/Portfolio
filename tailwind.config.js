/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Space Black - Primary Background
        background: {
          DEFAULT: '#0a0a0f',
          dark: '#050508',
          light: '#12121a',
        },
        // Rich Dark Purple/Navy - Secondary Background / Cards
        surface: {
          DEFAULT: '#1a1a2e',
          light: '#252542',
          dark: '#0f0f1a',
        },
        // Electric Cyan - Primary Action / Interactive Elements
        primary: {
          DEFAULT: '#00d4ff',
          light: '#5ce1ff',
          dark: '#00a8cc',
        },
        // Vivid Violet - Secondary Accent
        secondary: {
          DEFAULT: '#7c3aed',
          light: '#a78bfa',
          dark: '#5b21b6',
        },
        // Hot Pink/Magenta - Tertiary Accent
        tertiary: {
          DEFAULT: '#f472b6',
          light: '#f9a8d4',
          dark: '#ec4899',
        },
        // Emerald Green - Success / Fresh Accent
        accent: {
          DEFAULT: '#10b981',
          light: '#34d399',
          dark: '#059669',
        },
        // Amber/Gold - Warm Highlight
        warm: {
          DEFAULT: '#f59e0b',
          light: '#fbbf24',
          dark: '#d97706',
        },
        // Coral Rose - Soft Accent
        rose: {
          DEFAULT: '#fb7185',
          light: '#fda4af',
          dark: '#f43f5e',
        },
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'gradient-shift': 'gradientShift 4s ease infinite',
        'fade-in-up': 'fadeInUp 1s ease-out both',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { filter: 'hue-rotate(0deg)' },
          '50%': { filter: 'hue-rotate(30deg)' },
        },
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
