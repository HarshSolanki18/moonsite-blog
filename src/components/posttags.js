import React from 'react'
import _ from 'lodash'
import { Link } from 'gatsby'
import styles from '../components/posttags.module.scss'

const PostTags = ({ tags }) => {
  return (
    <div className={styles.tagContainer}>
      {tags &&
        tags.map(tag => (
          <Link key={tag} to={`https://moonsiteblogs.netlify.app/tags/${_.kebabCase(tag)}`}>
            <span>{tag}</span>
          </Link>
        ))}
    </div>
  )
}

export default PostTags