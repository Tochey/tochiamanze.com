import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Tochi's Blog`,
    description: "Personal Blog",
    siteUrl: `https://www.tochiamanze.com`,
    author: `Tochi Amanze`,
    image: './src/content/assets/IMG_7327.jpg',
    twitter: '@surverless'
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // `gatsby-remark-line-breaks`,
          {
            resolve: `gatsby-remark-video`,
            options: {
              width: "100%",
              height: "auto",
              preload: "auto",
              muted: true,
              autoplay: true,
              playsinline: true,
              controls: false,
              loop: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 250
            },
          },
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './static/favicon-16x16.png',
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}

export default config
