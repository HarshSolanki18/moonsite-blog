import React from 'react'
import Helmet from 'react-helmet'
import config from '../../data/SiteConfig';

const SEO = ({post,postSEO}) => {
  let title
  let description
  let image
  let postURL
  if (postSEO) {
    const postMeta = post.frontmatter
    const postNode= post
    ;({ title } = postMeta)
    description = postMeta.description ? postMeta.description : postNode.excerpt
    postURL = `https://moonsiteblogs.netlify.app/${post.frontmatter.slug}/`
  } else {
    title = config.siteTitle
    description = config.siteDescription
  }

  
  const blogURL = `https://moonsite.netlify.app`
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: blogURL,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : ''
    }
  ]
  if (postSEO) {
    schemaOrgJSONLD.push(
      {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@id': postURL,
              name: title
            }
          }
        ]
      },
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        url: blogURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
        headline: title,
        description
      }
    )
  }
  return (
    <Helmet>
      {/* General tags */}
      <meta name="description" content={description} />
      

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={postSEO ? postURL : blogURL} />
      {postSEO ? <meta property="og:type" content="article" /> : null}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      

      
    </Helmet>
  )
}

export default SEO