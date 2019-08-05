/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const ui = require("ui");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      root: [
        path.resolve(__dirname, '../node_modules'),
        path.resolve(__dirname, '../src'),
      ],
      alias: {
        'jquery-ui': 'jquery-ui-dist/jquery-ui.js'
      },
      extensions: ['', '.js', '.json'],
    }
  });
};