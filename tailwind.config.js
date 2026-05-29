
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        void: "#050510",
        panel: "#0a0a18",
        panel2: "#101025",
        line: "#2b2d52",
        mute: "#9aa0c3",
        text: "#eceeff",
        cyber: "#34e8dc",
        cyberd: "#17b8b0",
        signal: "#ff3366",
        warn: "#ffb800",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'scan': 'scan 8s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        }
      }
    },
  },
  plugins: [],
}
