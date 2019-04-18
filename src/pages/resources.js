import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

import loupe from "../images/loupe.png"
import carnet from "../images/carnet.png"
import az from "../images/a-z.png";

import "../css/resources.css"

const Resources = () => (
  <Layout>
    <SEO title="Ressources" />
    <h1>Ressources</h1>
    <section className="resources-links">
      <div className="book-icon">
        <span>Carnet de bord</span>
        <Link to="/resources/log-book">
          <img 
            src={carnet}
          />
        </Link>
      </div>
      <div className="loupe-icon">
        <span>Bibliographie</span>
        <Link to="/resources/bibliography">
          <img 
              src={loupe}
          />
        </Link>
      </div>
      <div className="az-icon">
        <span>Glossaire</span>
        <Link to="/resources/glossary">
          <img 
              src={az}
          />
        </Link>
      </div>
    </section>
  </Layout>
)

export default Resources
