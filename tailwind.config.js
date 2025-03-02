module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Adjust based on your Vite project structure
    theme: {
      extend: {},
    },
    plugins: [
      require('tailwind-scrollbar-hide') // Add the plugin here
    ],
  };
  