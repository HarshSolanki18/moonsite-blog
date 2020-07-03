import React from 'react'
import { Follow } from 'react-twitter-widgets'
import styles from './bio.module.scss'
import Img from 'gatsby-image';

const Bio = ({ post }) => (
  <div>
    <Img
      className={styles.avatar}
      fixed={post.frontmatter.userAvatar.sharp.fixed}
      alt={post.frontmatter.author}
    />
    <div>
    <p >
      Written by <strong>{post.frontmatter.author}</strong> 
      {` `}
      <Follow
        username={post.frontmatter.userTwitter}
        
      />
    </p>
    </div>
  </div>
)

export default Bio