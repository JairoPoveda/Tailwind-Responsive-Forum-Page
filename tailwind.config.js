module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width:{        
        'sideW':'340px',
      },
      padding:{
        'vPb':'56.25%',
      },
      maxHeight:{
        'videoMaxH':'calc(100vh - 169px)',
      },
      height:{
        'vContainerH':'calc((9 / 16) * 100vw)',
      }
    },
    screens: {      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      
      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }
      
      '3xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
