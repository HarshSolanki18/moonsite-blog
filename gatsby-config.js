module.exports = {
  siteMetadata: {
    title: 'Moonsite Blogs',
    description:
      'A site to showcase moonsite solutions blogsS',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-remark-prismjs',
    {
      resolve:'gatsby-plugin-manifest',
      options:{
        name: "Moonsite Solutions",
        theme_color: "#1b4070",
        start_url: "/",
        display: "standalone",
        icon: "images/moonsite-image.jpg"
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [{ resolve: 'gatsby-remark-images' }],
        plugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      },
    },
  ],
};