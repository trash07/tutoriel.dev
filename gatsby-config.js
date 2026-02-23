/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `tutoriel.dev`,
    siteUrl: `https://tutoriel.dev`,
  },
  plugins: [
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `assets`,
              path: `${__dirname}/assets`,
          },
      },
      {
          resolve: `gatsby-source-filesystem`,
          options: {
              name: `mdx`,
              path: `${__dirname}/mdx`,
          },
      },
      {
          resolve: `gatsby-plugin-mdx`,
          options: {
              gatsbyRemarkPlugins: [
                  {
                      resolve: `gatsby-remark-prismjs`,
                      options: {
                          classPrefix: "language-",
                          inlineCodeMarker: null,
                          showLineNumbers: false,
                          noInlineHighlight: false,
                      },
                  },
              ],
          },
      },
  ],
};
