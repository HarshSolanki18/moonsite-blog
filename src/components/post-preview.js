import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import ReadLink from '../components/read-link';
import styles from './post-preview.module.scss';
import usePosts from '../hooks/use-posts';

const PostPreview = () => {
  const posts=usePosts();
  return(
    <div className={styles.articleList}>
    {
      posts.map(post => (
      <Link to={post.slug} key={post.title}>   
      <article className={styles.articleBox}>
      <div className={styles.right}>
      
        <Image
          //fluid={post.image.sharp.fluid}
         fixed={post.image.sharp.fixed}
          alt={post.title}
        />
      
      <div>
        <h3>
          <Link to={post.slug}>{post.title}</Link>
        </h3>
        <p>{post.description}</p>
        <ReadLink to={post.slug}>read this post &rarr;</ReadLink>
      </div>
     </div> 
    </article> 
    </Link>
    ))
    }
    </div>
  )
  
  
}

export default PostPreview;