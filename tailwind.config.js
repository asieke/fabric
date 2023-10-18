/** @type {import('tailwindcss').Config} */

import path from 'path';

export default {
  content: [
    'src/**/*.{html,js,svelte,ts}',
    '../../packages/ui/components/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: []
};
