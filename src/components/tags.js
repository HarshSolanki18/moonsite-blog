import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import _ from 'lodash'

const Tags = props => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  return (
    <>
      {data.allMdx.group.map(tag=> (
        <li key={tag.fieldValue}>
          <Link
            to={`/tags/${_.kebabCase(tag.fieldValue)}`}
            key={tag.fieldValue}
            activeClassName={props.activeClassName}
          >
            {tag.fieldValue}
            <strong> ({tag.totalCount})</strong>
          </Link>
        </li>
      ))}
    </>
  )
}

export default Tags