module.exports = {
  corePlugins: {
    preflight: true,
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-footer-color': '#0D0D0D',
      },
      fontFamily: {
        poppinsSans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        // 'default-background': "url('/public/img/blog-background.jpg')",
      },
    },
  }
}
