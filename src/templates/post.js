import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import ReadLink from '../components/read-link';
import Bio from '../components/bio';

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
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

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>

    <MDXRenderer>{post.body}</MDXRenderer>
    <Bio post={post}/>
    <ReadLink to="/">&larr; back to all posts</ReadLink>
  </Layout>
);

export default PostTemplate;