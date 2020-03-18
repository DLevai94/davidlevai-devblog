import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Link from 'components/Link'
import Container from '../components/Container'

export default ({ data: { site } }) => (
  <Layout site={site}>
    <Container>
      <Link to="my-gear" aria-label={`View My Gear`}>
        My Setup
      </Link>
      <Link to="bookshelf" aria-label={`View My Gear`}>
        Bookshelf
      </Link>
      <Link to="portfolio" aria-label={`View My Gear`}>
        Portfolio
      </Link>
    </Container>
  </Layout>
)

export const pageQuery = graphql`
  query {
    site {
      ...site
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { isPost: { eq: true } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          fields {
            title
            slug
            date
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            banner {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            slug
            keywords
          }
        }
      }
    }
  }
`
