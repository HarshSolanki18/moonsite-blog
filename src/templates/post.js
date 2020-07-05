import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import Bio from '../components/bio';
import Social from '../components/social';
import styles from '../templates/post.module.scss';
import SEO from '../components/seo';
import PostTags from "../components/posttags";
import './prism-okaidia.css'

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        author
        tags
        slug
        userAvatar{
          sharp: childImageSharp{
            fixed(height:70,width:70){
              ...GatsbyImageSharpFixed
            }
          }
        }
        userTwitter
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => {
  
  return(
  <Layout>
    <SEO post={post} postSEO/>
    <h1>{post.frontmatter.title}</h1>
    <p className={styles.postMeta}>
        {post.frontmatter.date.split('T')} 
    </p>
    <div className={styles.postMeta}>
            <PostTags tags={post.frontmatter.tags} />
    </div>  
    <MDXRenderer >{post.body}</MDXRenderer>
    <Bio post={post}/>
    
    
    <div className={styles.postMeta}>
    <Social post={post}/>
    </div>

    <ReadLink to="/">&larr; back to all posts</ReadLink>
    
  </Layout>
  )
  };

export default PostTemplate;