module.exports = {
  siteMetadata: {
    title: `Cynthia Cao`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cynthia Cao`,
        short_name: `Cynthia Cao`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        icon: `src/images/icon.png`,
        theme_color_in_head: false,
        display: `standalone`
      }
    }]
};