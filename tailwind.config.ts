import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1e40af',
        'primary-blue-light': '#2563eb',
        'primary-blue-dark': '#1d4ed8',
        'accent-orange': '#f59e0b',
        'accent-orange-light': '#fbbf24',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities, addComponents, theme }) {
      addUtilities({
        '.hero-gradient': {
          background: 'linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #1d4ed8 100%)',
        },
        '.section-gradient': {
          background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
        },
        '.card-hover': {
          transition: 'all 0.3s ease',
        },
        '.card-hover:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
        },
        '.text-gradient': {
          background: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
        },
        '.hero-text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
        },
        '.nav-link': {
          color: '#93c5fd',
          transition: 'all 0.3s ease',
          fontWeight: '500',
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          '&:hover': {
            color: '#ffffff',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          },
        },
        '.nav-link-active': {
          color: '#ffffff',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          fontWeight: 'bold',
        },
      })

      addComponents({
        '.btn-primary': {
          backgroundColor: '#2563eb',
          color: '#ffffff',
          fontWeight: 'bold',
          padding: '0.75rem 2rem',
          borderRadius: '0.5rem',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            backgroundColor: '#1d4ed8',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          },
        },
        '.btn-secondary': {
          border: '2px solid #2563eb',
          color: '#2563eb',
          fontWeight: 'bold',
          padding: '0.75rem 2rem',
          borderRadius: '0.5rem',
          transition: 'all 0.3s ease',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
          '&:hover': {
            backgroundColor: '#eff6ff',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          },
        },
        '.modern-card': {
          backgroundColor: '#ffffff',
          borderRadius: '0.75rem',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
          padding: '2rem',
          transition: 'all 0.3s ease',
          border: '1px solid #f3f4f6',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
          },
        },
        '.stat-number': {
          fontSize: '2.5rem',
          fontWeight: 'bold',
          background: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '0.75rem',
          filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
        },
        '.stat-label': {
          color: '#374151',
          fontWeight: '600',
          fontSize: '1.125rem',
        },
      })
    },
  ],
}

export default config
