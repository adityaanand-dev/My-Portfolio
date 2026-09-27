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
        dark: {
          bg: '#090D16',
          surface: '#0F172A',
          card: '#131C31',
          border: '#1E293B',
          muted: '#334155'
        },
        cloud: {
          light: '#38BDF8',
          DEFAULT: '#0EA5E9',
          dark: '#0284C7',
          glow: 'rgba(14, 165, 233, 0.25)'
        },
        sde: {
          light: '#34D399',
          DEFAULT: '#10B981',
          dark: '#059669',
          glow: 'rgba(16, 185, 129, 0.25)'
        },
        accent: {
          purple: '#818CF8',
          amber: '#F59E0B',
          rose: '#F43F5E'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'glow-cloud': '0 0 25px -5px rgba(14, 165, 233, 0.3)',
        'glow-sde': '0 0 25px -5px rgba(16, 185, 129, 0.3)',
        'glow-card': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
