import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import "../css/resources.css"

const Resources = ({ data }) => (
  <Layout>
    <SEO title="Ressources" />
    <h1>Ressources</h1>
    <section className="resources-links">
      <div className="book-icon icon">
        <span>Carnet de bord</span>
        <Link to="/resources/log-book">
          <Img className="resources-img" fluid={data.carnet.childImageSharp.fluid} />
        </Link>
      </div>
      <div className="loupe-icon icon">
        <span>Bibliographie</span>
        <Link to="/resources/bibliography">
          <Img className="resources-img" fluid={data.loupe.childImageSharp.fluid} />
        </Link>
      </div>
      <div className="az-icon icon">
        <span>Glossaire</span>
        <Link to="/resources/glossary">
        <Img className="resources-img" fluid={data.az.childImageSharp.fluid} />
        </Link>
      </div>
    </section>
  </Layout>
)

export const query = graphql`
query {
  carnet: file(relativePath: { eq: "carnet.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
 }
 loupe: file(relativePath: { eq: "loupe.png"}) {
  childImageSharp {
    fluid {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
az: file(relativePath: { eq: "a-z.png"}) {
  childImageSharp {
    fluid {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
}
`

export default Resources
