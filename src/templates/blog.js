import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../layout'
import Container from '../components/Container'
import PostList from '../components/PostList'
import Pagination from '../components/Pagination'

import styled from 'styled-components'

export default class IndexPage extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const { edges: posts } = data.allWordpressPost

    return (
      <Layout>
        <Container>
          <ContentSide>
            <PostList posts={posts} title="Ostatnie wpisy" />
            <Pagination pageContext={pageContext} pathPrefix="/" />
          </ContentSide>
          <Sidebar>Tu</Sidebar>
        </Container>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allWordpressPost: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
  }),
}

const ContentSide = styled.div`
  width: 66.666667%;
`

const Sidebar = styled.div`
  width: 33.333333%;
`

export const pageQuery = graphql`
  query IndexQuery($limit: Int!, $skip: Int!) {
    allWordpressPost(
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...PostListFields
        }
      }
    }
  }
`
