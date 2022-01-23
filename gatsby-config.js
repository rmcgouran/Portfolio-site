module.exports = {
  siteMetadata: {
    title: `Ryan McGouran | Portfolio`,
    siteUrl: `https://www.mcgouran.co.uk`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Oswald"],
      },
      display: "swap",
    },
    { resolve: `gatsby-plugin-react-helmet` },
  ],
};
