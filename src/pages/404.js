import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import roadImage from "../images/road.png"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 : Page introuvable" />
    <h1>Page introuvable</h1>
    <p>Il semble que vous vous soyez perdu en chemin et aillez atteint le bout de la route ...</p>
    <img 
      src={roadImage} 
      alt="road" 
      style={{
        width: 400,
        height: 400,
        float: `right`,
      }}
    />
  </Layout>
)

export default NotFoundPage
