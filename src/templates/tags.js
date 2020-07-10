import React from "react";
import PropTypes from 'prop-types';
import styles from '../components/post-preview.module.scss'
// Components
import { Link, graphql } from "gatsby";
import Layout from '../components/layout';
import Image from 'gatsby-image';

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
        <h2>{tagHeader}</h2>  
    <div className={styles.articleList}>
      
      
        {edges.map(({ node }) => {
          const { slug } = node.frontmatter
          const { title } = node.frontmatter
          return (
            
              <Link to={`/${slug}/`}>
                  <article className={styles.articleBox}>
                    <div className={styles.right}>
                    <Image
                        //fluid={post.image.sharp.fluid}
                        fixed={node.frontmatter.image.sharp.fixed}
                        alt={title}
                    />   
                    <div>
                        <h3>
                            <Link to={`/${slug}/`}>{title}</Link>
                        </h3>
                            <p>{node.frontmatter.description}</p>
                    
                    </div>
                    </div>
                  </article>
              </Link>
            
          )
        })}
      
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
     
    </div>
    </Layout>
  )
}
Tags.propTypes = {
    pageContext: PropTypes.shape({
      tag: PropTypes.string.isRequired,
    }),
    data: PropTypes.shape({
      allMarkdownRemark: PropTypes.shape({
        totalCount: PropTypes.number.isRequired,
        edges: PropTypes.arrayOf(
          PropTypes.shape({
            node: PropTypes.shape({
              frontmatter: PropTypes.shape({
                title: PropTypes.string.isRequired,
                slug:PropTypes.string.isRequired
              }),
            }),
          }).isRequired
        ),
      }),
    }),
  }
  

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          
          frontmatter {
            title
            slug
            description
            image {
                sharp: childImageSharp {
                  fixed(
                    height:200,width:268){
                      ...GatsbyImageSharpFixed
                    }
                }
            }        
          }
        }
      }
    }
  }
`
