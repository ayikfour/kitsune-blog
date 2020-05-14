module.exports = {
   purge: ['./components/**/*.js', './pages/**/*.js'],
   theme: {
      colors: {
         bg: 'var(--bg)',
         fg: 'var(--fg)',
         accent: 'var(--accent)',
         'bg-header': 'var(--bg-header)',
         selection: 'var(--selection)',
         shade: 'var(--shade)',
         outline: 'var(--outline)',
         'low-emphasize': 'var(--low-emphasize)',
         'medium-emphasize': 'var(--medium-emphasize)',
         'high-emphasize': 'var(--high-emphasize)',
         'higher-emphasize': 'var(--higher-emphasize)',
         'most-emphasize': 'var(--most-emphasize)',
         warning: 'var(--warning)',
         success: 'var(--success)',
         error: 'var(--error)',
         magenta: 'var(--magenta)',
         purple: 'var(--purple)',
         violet: 'var(--violet)',
         cyan: 'var(--cyan)',
         overlay: 'var(--overlay)',
         white: 'var(--white)',
         black: 'var(--black)',
      },
      textColor: (theme) => ({
         ...theme('colors'),
      }),
      backgroundColor: (theme) => ({
         ...theme('colors'),
         'bg-theme': 'var(--bg)',
         'fg-theme': 'var(--fg)',
      }),
      stroke: (theme) => ({
         ...theme('colors'),
      }),
      borderColor: (theme) => ({
         ...theme('colors'),
      }),
   },
   variants: {
      backgroundColor: ['responsive', 'hover'],
      borderColor: ['responsive', 'focus'],
      screen: [''],
   },
   plugins: [],
};
