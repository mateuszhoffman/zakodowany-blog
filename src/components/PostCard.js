import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'
import Truncate from 'react-truncate'

const PostCard = ({ post }) => (
  <article className="post-card flex">
    <div className="post-card__header">
      {post.featured_media && (
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
            <div className="category-badge">{category.name}</div>
          ))}
        <div className="post-date">{post.date}</div>
      </div>

      <Link to={post.slug}>
        <h1 className="post-card__title">{post.title}</h1>
      </Link>

      <div className="post-card__content">
        <Truncate lines={3} ellipsis={<span>...</span>}>
          <div
            dangerouslySetInnerHTML={{
              __html: post.excerpt.replace(/<p class="link-more.*/, ''),
            }}
          />
        </Truncate>
      </div>
      <div className="author-details flex">
        <img src="https://avatars3.githubusercontent.com/u/13483854?v=4" />
        <Link to={`/author/${post.author.slug}`}>{post.author.name}</Link>
      </div>
    </div>
  </article>
)

export default PostCard
