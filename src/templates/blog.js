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
        <BlogInner>
          <ContentSide>
            <PostList posts={posts} title="Ostatnie wpisy" />
            <Pagination pageContext={pageContext} pathPrefix="/" />
          </ContentSide>
          <Sidebar>
            <WidgetWrapper>
              <h2>About me</h2>
              <br />
              <img
                width="200px"
                src="https://pbs.twimg.com/profile_images/1247444310758428672/4yNzlvE2_400x400.jpg"
              />
              <br />
              <p>Hello, I'm Mateusz 👋</p>
            </WidgetWrapper>
          </Sidebar>
        </BlogInner>
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

const BlogInner = styled(Container)`
  display: flex;
  flex-direction: row;
`

const ContentSide = styled.div`
  padding: 0 15px;
  width: 66.666667%;
`

const Sidebar = styled.div`
  padding: 0 15px;
  width: 33.333333%;
`

const WidgetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0.707px 0.707px 7px 0px rgba(0, 0, 0, 0.1);
  padding: 50px 30px;
  background-color: #ffffff;
  border-radius: 10px;
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
