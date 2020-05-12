module.exports = {
   plugins: [
      'tailwindcss',
      'postcss-preset-env',
      'postcss-nested',
      'postcss-custom-selectors',
      'autoprefixer',
      ...(process.env.NODE_ENV === 'production' ? ['autoprefixer'] : []),
   ],
};
