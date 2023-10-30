/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
    },
    extend: {
      backgroundImage: {
        'editorialbackground': "url('/images/fo.jpg')",
        'globalMap': "url('https://d7hftxdivxxvm.cloudfront.net/?height=1268&quality=100&resize_to=fit&src=https%3A%2F%2Ffiles.artsy.net%2Fimages%2Fworld-map-with-circles.jpg&width=2554')",
      }
    },
  },
  plugins: [],
}

