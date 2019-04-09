import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const LogBook = ({ data }) => (
  <Layout>
    <SEO title="Carnet de bord" />
    <h1>Carnet de bord</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => (
        <>
            <h2>Semaine {node.frontmatter.week}</h2>
            <div dangerouslySetInnerHTML={{__html: node.html}} />
        </>
    ))}
  </Layout>
)

export const query = graphql`
    query {
        allMarkdownRemark(
            sort: { fields: [frontmatter___week], order: ASC},
            filter: { fileAbsolutePath: { regex: "/log-book/"}}
        ) {
            edges {
                node {
                    html
                    frontmatter {
                        week
                    }
                }
            }
        }
    }
`

export default LogBook
