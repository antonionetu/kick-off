/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",

      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      screens: {
         sm: "576px",
         md: "960px",
         lg: "1440px",
         xl: "1920px",
      },
      extend: {},
   },
   plugins: [],
}
