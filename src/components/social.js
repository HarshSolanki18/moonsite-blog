import React from 'react';
import {TwitterIcon,TwitterShareButton,WhatsappIcon,
WhatsappShareButton,LinkedinIcon,LinkedinShareButton,RedditIcon,RedditShareButton} 
from 'react-share';
import styles from '../components/social.module.scss';

export default function Social({post}) {
    return (
        <div className={styles.socialLinks}>
            <p>share:</p>
            <TwitterShareButton url={`https://moonsiteblogs.netlify.app/${post.frontmatter.slug}/`} 
            tittle={post.frontmatter.title}>
            <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <WhatsappShareButton url={`https://moonsiteblogs.nelify.app/${post.frontmatter.slug}/`}
            title={post.frontmatter.title}>
                <WhatsappIcon  size={32} round={true}/> 
            </WhatsappShareButton >
            <LinkedinShareButton url={`https://moonsiteblogs.nelify.app/${post.frontmatter.slug}/`}
            title={post.frontmatter.title}>
            <LinkedinIcon size={32} round={true}/>
            </LinkedinShareButton>
            <RedditShareButton url={`https://moonsiteblogs.nelify.app/${post.frontmatter.slug}/`}
            title={post.frontmatter.title}>
             <RedditIcon size={32} round={true}/>   
            </RedditShareButton>
        </div>
    )
}
