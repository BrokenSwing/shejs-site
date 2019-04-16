import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Bibliography = ({ data }) => (
  <Layout>
    <SEO title="Bibliographie" />
    <h1>Bibliographie</h1>
    <h2>Articles scientifiques</h2>
    {data.books.edges.map(({ node }) => (
      <>
        [{node.frontmatter.ref}]
        <article dangerouslySetInnerHTML={{ __html: node.html }} />
      </>
    ))}
    <h2>Sites webs</h2>
    {data.sites.edges.map(({ node }) => (
      <>
        [{node.frontmatter.ref}]
        <article dangerouslySetInnerHTML={{ __html: node.html }} />
      </>
    ))}
  </Layout>
)

export const query = graphql`
  query {
    books: allMarkdownRemark(
      sort: { fields: [frontmatter___ref], order: ASC }
      filter: { fileAbsolutePath: { regex: "/bibliography\/books/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            ref
          }
        }
      }
    }
    sites: allMarkdownRemark(
        sort: { fields: [frontmatter___ref], order: ASC }
        filter: { fileAbsolutePath: { regex: "/bibliography\/sites/" } }
      ) {
        edges {
          node {
            html
            frontmatter {
              ref
            }
          }
        }
      }
  }
`

export default Bibliography
