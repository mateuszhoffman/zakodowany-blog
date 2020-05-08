import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import PostCard from './PostCard'

export default class IndexPage extends React.Component {
  render() {
    const { posts } = this.props

    return (
      <div className="container">
        <section>
          {posts.map(({ node: post }) => (
            <PostCard post={post} key={post.id} />
          ))}
        </section>
      </div>
    )
  }
}

const Temp = ({ post }) => (
  <div className="panel" key={post.id}>
    <Link className="post-title" to={post.slug}>
      <h1>{post.title}</h1>
    </Link>
    <span> &bull; </span>
    <small>
      {post.date} - opublikowane przez{' '}
      <Link to={`/author/${post.author.slug}`}>{post.author.name}</Link>
    </small>

    <div>
      <div
        className="post-preview__description"
        dangerouslySetInnerHTML={{
          __html: post.excerpt.replace(/<p class="link-more.*/, ''),
        }}
      />
      <Link className="btn btn-grey btn-large" to={post.slug}>
        Czytaj Dalej →
      </Link>
    </div>
  </div>
)

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    author {
      name
      slug
      avatar_urls {
        wordpress_48
      }
    }
    categories {
      name
    }
    featured_media {
      localFile {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    date(formatString: "D MMMM YYYY", locale: "pl_PL")
    slug
  }
`
