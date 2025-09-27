export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Add CSS optimization for production
    ...(process.env.NODE_ENV === 'production' && {
      'cssnano': {
        preset: 'default',
      }
    }),
  },
}
