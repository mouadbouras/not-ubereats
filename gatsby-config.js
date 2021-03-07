require("dotenv").config({ path: __dirname + "/.env" });

let contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  useNameForId: true,
};

if (process.env.CONTENTFUL_HOST) {
  contentfulConfig = {
    ...contentfulConfig,
    accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    host: process.env.CONTENTFUL_HOST,
  };
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

module.exports = {
  siteMetadata: {
    title: "Not UberEats",
    author: {
      name: `Randy Singh`,
      summary: `who lives and works in Montreal building useful things.`,
    },
    description: `Find local restaurants in Montreal and reduce delivery fees for restaurants.`,
    siteUrl: `https://not-ubereats.com/`,
  },
  plugins: [
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfig,
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          process.env.GOOGLE_TRACKING_ID, // Google Analytics / GA
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Lato\:400,700`],
        display: "swap",
      },
    },
    "gatsby-plugin-netlify",
    "gatsby-plugin-offline",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
