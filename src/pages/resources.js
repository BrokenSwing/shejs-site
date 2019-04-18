import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const Resources = () => (
  <Layout>
    <SEO title="Ressources" />
    <h1>Ressources</h1>
    <ul>
        <li><Link to="/resources/log-book">Carnet de bord</Link></li>
        <li><Link to="/resources/bibliography">Bibliographie</Link></li>
        <li><Link to="/resources/glossary">Glossaire</Link></li>
    </ul>
  </Layout>
)

export default Resources
