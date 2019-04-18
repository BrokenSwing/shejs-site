import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import "../../css/glossary.css"

const Glossary = () => (
  <Layout>
    <SEO title="Glossaire" />
    <h1>Glossaire</h1>
    <table>
        <tr><th>THC</th><td>Δ-9-tétrahydrocannabinol, substance psychotrope présente dans les formes récréatives du cannabis (sativa, indica, afghanica).</td></tr>
        <tr><th>CBD</th><td>Cannabidiol, cannabis sans THC.</td></tr>
        <tr><th>MILDECA / MILDT</th><td>Mission interministérielle de lutte contre les drogues et les conduites addictives / Toxicomanie.</td></tr>
        <tr><th>OFDT</th><td>Observatoire Français des Drogues et des Toxicomanies.</td></tr>
        <tr><th>OCRTIS</th><td>Office Central pour la Répression du Trafic Illicite des Stupéfiants</td></tr>
    </table>
  </Layout>
)

export default Glossary
