import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'

import Truncate from 'react-truncate'
import styled from 'styled-components'

export default class IndexPage extends React.Component {
  render() {
    const { posts, title } = this.props

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">{title}</h1>
          </div>
          {posts.map(({ node: post }) => (
            <PostItem post={post} key={post.id} />
          ))}
        </div>
      </section>
    )
  }
}

const PostItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 200px;
  margin: 30px 0;
`

const PostItemImage = styled(Image)`
  border-radius: 8px;
  min-width: 300px;
`

const PostItemContent = styled.div`
  padding-left: 2.5rem;
`

const PostItem = ({ post }) => (
  <PostItemWrapper>
    {post.featured_media && (
      <PostItemImage
        fluid={post.featured_media.localFile.childImageSharp.fluid}
      />
    )}
    <PostItemContent>
      <h3>{post.title}</h3>
      <small>
        {post.date} - opublikowane przez{' '}
        <Link to={`/author/${post.author.slug}`}>{post.author.name}</Link>
      </small>
      <div>
        <Truncate lines={3} ellipsis={<span>...</span>}>
          <div
            className="post-preview__description"
            dangerouslySetInnerHTML={{
              __html: post.excerpt.replace(/<p class="link-more.*/, ''),
            }}
          />
        </Truncate>
        <ReadMoreButton className="btn btn-grey btn-large" to={post.slug}>
          Czytaj Dalej →
        </ReadMoreButton>
      </div>
    </PostItemContent>
  </PostItemWrapper>
)

const ReadMoreButton = styled(Link)`
  display: block;
  margin-top: 10px;
`

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
