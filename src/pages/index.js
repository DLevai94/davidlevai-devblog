import React from 'react'
import { graphql } from 'gatsby'
import { css, keyframes } from '@emotion/core'
import styled from '@emotion/styled'
import Img from 'gatsby-image'
import Layout from 'components/Layout'
import Link from 'components/Link'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'
import { rhythm } from '../lib/typography'

const Hero = ({ minibio, image }) => {
  const theme = useTheme()
  return (
    <section
      css={css`
        background: ${theme.colors.primary};
        width: 100%;
        padding: 40px 0 0 0;
        display: flex;
      `}
    >
      <Container
        css={css`
          display: flex;
          flex-direction: column;
          padding: 0;
          @media (min-width: 570px) {
            flex-direction: row;
          }
        `}
      >
        <Img
          css={css`
            margin-right: ${rhythm(2)};
            margin-bottom: 0;
            min-width: 250px;
            align-self: 'flex-end';
            justify-self: 'flex-end';
          `}
          fluid={image}
          alt="Dávid Lévai"
        />
        <h1
          css={css`
            z-index: 5;
            line-height: 1.5;
          `}
        >
          <mark
            css={css`
              padding: 2px;
              background: ${theme.colors.primary};
              color: ${theme.colors.white};
            `}
          >
            {minibio}
            <span
              css={css`
                font-weight: 100;
                font-size: 30px;
                color: #391f70;
                animation: 1s ${blink} step-end infinite;
              `}
            >
              |
            </span>
          </mark>
        </h1>
      </Container>
    </section>
  )
}

const blink = keyframes`
from,
to {
  color: transparent;
}
50% {
  color: #fff;
}
`

const Description = styled.p`
  margin-bottom: 10px;
  display: inline-block;
`

export default function Index({ data: { profileImg, site, allMdx } }) {
  const theme = useTheme()
  return (
    <Layout site={site}>
      <Hero
        minibio={site.siteMetadata.author.minibio}
        image={profileImg.childImageSharp.fluid}
      />
      <Container
        css={css`
          padding-bottom: 0;
        `}
      >
        {allMdx.edges.map(({ node: post }) => (
          <div
            key={post.id}
            css={css`
              margin-bottom: 40px;
            `}
          >
            <h2
              css={css({
                marginBottom: rhythm(0.3),
                transition: 'all 150ms ease',
                ':hover': {
                  color: theme.colors.primary,
                },
              })}
            >
              <Link
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                {post.frontmatter.title}
              </Link>
            </h2>
            <Description>
              {post.excerpt}{' '}
              <Link
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                Read Article →
              </Link>
            </Description>
          </div>
        ))}
        <Link to="/blog" aria-label="Visit blog page">
          View all articles
        </Link>
        <hr />
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    profileImg: file(
      relativePath: { regex: "/images/davidlevaiprofile-removebg-800.png/" }
    ) {
      id
      childImageSharp {
        fluid(pngQuality: 80, maxHeight: 250) {
          aspectRatio
          src
          srcSet
        }
      }
    }
    site {
      ...site
      siteMetadata {
        title
        author {
          minibio
        }
      }
    }
    allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            banner {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
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
