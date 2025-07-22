/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      // You can add custom responsive breakpoints, spacing, colors, etc. here
    },
  },
  plugins: [
    require('@tailwindcss/forms'),        // For better form element styling
    // require('@tailwindcss/typography'),   // For beautiful article/blog text
    require('@tailwindcss/aspect-ratio'), // For controlling image/video ratios
  ],
};
