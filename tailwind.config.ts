import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          hover: '#4338CA',
          soft: '#EEF2FF',
        },
        success: {
          DEFAULT: '#10B981',
          soft: '#ECFDF5',
        },
        warning: {
          DEFAULT: '#F59E0B',
          soft: '#FFFBEB',
        },
        danger: {
          DEFAULT: '#F43F5E',
          soft: '#FFF1F2',
        },
        ink: '#0F172A',
        muted: '#64748B',
        canvas: '#F8FAFC',
        line: '#E2E8F0',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['4rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '800' }],
        h1: ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '800' }],
        h2: ['1.75rem', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '800' }],
        h3: ['1.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '700' }],
        body: ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
      },
      borderRadius: {
        card: '12px',
        control: '8px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 23, 42, 0.04)',
        lift: '0 8px 24px rgba(15, 23, 42, 0.08)',
      },
      maxWidth: {
        shell: '1440px',
      },
    },
  },
  plugins: [],
};

export default config;
