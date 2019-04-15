const path = require('path');

module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components'),
        cssCreations: path.join(__dirname, 'src/cssCreations'),
        utilities: path.join(__dirname, 'src/utilities')
      }
    },
    {
      resolve: 'gatsby-plugin-sass-resources',
      options: {
        resources: ['./src/global/mixins.scss']
      }
    },
    'gatsby-plugin-react-helmet'
  ]
};
