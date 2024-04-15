import type { Config } from 'tailwindcss';

export default {
 content: ['./app/**/*.{js,jsx,ts,tsx}'],
 theme: {
  extend: {
   colors: {
    primary_1: '#06030B',
    primary_2: '#365486',
    primary_3: '#7FC7D9',
    primary_4: '#DCF2F1',
    btn_border: '#6EE4FF',
   },
  },
 },
 plugins: [],
} satisfies Config;
