import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TimelineItem from "../components/timeline-item"
import { graphql } from "gatsby"

import "../css/timeline-item.css"

const TimelinePage = ({ data }) => (
  <Layout>
    <SEO title="Frise chronologique" />
    <h1>Frise chronologique</h1>
    <h4>{data.allMarkdownRemark.totalCount} événements</h4>
    <section className="cd-timeline js-cd-timeline">
        <div className="cd-timeline__container">
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <TimelineItem node={node} />
            ))}
        </div>
    </section>
  </Layout>
)

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC}) {
            totalCount
            edges {
                node {
                    html
                    frontmatter {
                        title,
                        date(formatString: "DD MMMM YYYY", locale: "fr")
                    }
                }
            }
        }
    }
`

export default TimelinePage
