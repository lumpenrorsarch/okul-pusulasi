/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  safelist: [
    'bg-emerald-50', 'bg-emerald-100', 'bg-emerald-500', 'bg-emerald-600',
    'text-emerald-600', 'text-emerald-700', 'text-emerald-100',
    'bg-sky-50', 'text-sky-600', 'text-sky-700',
    'bg-amber-50', 'text-amber-600', 'text-amber-700',
    'bg-rose-50', 'text-rose-600', 'text-rose-700',
    'bg-blue-50', 'text-blue-600', 'text-blue-700',
    'bg-green-50', 'text-green-600', 'text-green-700',
    'border-emerald-200', 'border-blue-200', 'border-amber-200', 'border-rose-200',
  ],
  plugins: [],
};
