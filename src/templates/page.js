import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../layout'
import Image from 'gatsby-image'

export const PageTemplate = ({ title, content, featured_media }) => {
  return (
    <section className="container">
      <div className="flex f-col section panel--white p-2">
        <Image
          objectFit="cover"
          objectPosition="50% 50%"
          fluid={featured_media.localFile.childImageSharp.fluid}
        />

        <h1 className="header__title">{title}</h1>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </section>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Page = ({ data }) => {
  const { wordpressPage: page } = data

  return (
    <Layout>
      <PageTemplate
        title={page.title}
        content={page.content}
        featured_media={page.featured_media}
      />
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query PageById($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      featured_media {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
