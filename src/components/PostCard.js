import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import Truncate from 'react-truncate'

const PostCard = ({ post }) => (
  <article className="post-card flex">
    <div className="post-card__header">
      {post.featured_media && (
        // <Image
        //   className="post-card__image"
        //   objectFit="cover"
        //   objectPosition="50% 50%"
        //   fluid={post.featured_media.localFile.childImageSharp.fluid}
        // />

        <Image
          className="post-card__image"
          objectFit="cover"
          objectPosition="50% 50%"
          fluid={post.featured_media.localFile.childImageSharp.fluid}
        />
      )}
    </div>
    <div className="post-card__body flex">
      <div className="post-card__meta flex">
        {post.categories &&
          post.categories.map(category => (
            <div key={category.id} className="category-badge">
              {category.name}
            </div>
          ))}
        <div className="post-date">{post.date}</div>
      </div>

      <Link to={post.slug}>
        <h1
          className="post-card__title"
          dangerouslySetInnerHTML={{
            __html: post.title,
          }}
        />
      </Link>

      <div className="post-card__content">
        <div
          dangerouslySetInnerHTML={{
            __html: post.excerpt
              .replace(/<p class="link-more.*/, '')
              .split(' ')
              .splice(0, 25)
              .join(' ')
              .concat(' ...'),
          }}
        />
      </div>
      <div className="author-details flex">
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEcDLgAabSLTw/profile-displayphoto-shrink_100_100/0?e=1594857600&v=beta&t=04Q8IP60AZXDuX6S6zlZ2QS3LuH0zY0Is4eVvs0Ei3M" />
        <Link to={`/author/${post.author.slug}`}>{post.author.name}</Link>
      </div>
    </div>
  </article>
)

export default PostCard
