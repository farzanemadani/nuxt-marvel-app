module.exports = {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './plugins/**/*.{js,ts}',
      './nuxt.config.{js,ts}',
    ],
    theme: {
      extend: {
        colors: {
          "primary": "#DC2626",
          "secondary": "#2C2E30",
          "primary-surface":"#3B3D3F",
          "secondary-surface":"#2C2E30",
          "gray":"#757575",
          "white":"#F2F2F3"
        },
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          lg: '9rem',
          xl: '9rem',
        },
        center:true,
      },
      // screens: {
      //   sm: "640px",
      //   md: "768px",
      //   lg: "1024px",
      // },
    },
    plugins: [],
}
  