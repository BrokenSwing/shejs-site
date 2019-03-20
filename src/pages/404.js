import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 : Page introuvable" />
    <h1>Page introuvable</h1>
    <p>Il semble que vous vous soyez perdu en chemin et aillez atteint le bout de la route ...</p>
  </Layout>
)

export default NotFoundPage
