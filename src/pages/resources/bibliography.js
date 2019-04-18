import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import "../../css/bibliography.css"

const Bibliography = ({ data }) => (
  <Layout>
    <SEO title="Bibliographie" />
    <h1>Bibliographie</h1>
    <h2>Articles scientifiques</h2>
    {data.books.edges.map(({ node }) => (
      <section>
        <span id={"src_" + node.frontmatter.ref}>[{node.frontmatter.ref}]</span>
        <article dangerouslySetInnerHTML={{ __html: node.html }} />
      </section>
    ))}
    <h2>Sites webs</h2>
    {data.sites.edges.map(({ node }) => (
      <section>
        <span id={"src_" + node.frontmatter.ref}>[{node.frontmatter.ref}]</span>
        <article dangerouslySetInnerHTML={{ __html: node.html }} />
      </section>
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
