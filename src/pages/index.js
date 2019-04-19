import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RefLink from "../components/ref-link"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Introduction" />
    <h1 
      style={{
        textTransform: `capitalize`,
        fontVariant: `small-caps`
      }}
    ><q>La question de la légalisation du cannabis en France</q></h1>
    <h2>Introduction</h2>
    <p>
      Actuellement, la France est l’un des pays les plus répressif concernant l’usage du cannabis. Bien qu’étant considéré comme une drogue douce, du point de vue de 
      la loi, le cannabis n’est pas différencié des autres drogues. Pourtant les français comptent parmi ceux qui en consomment le plus. Ce constat permet aisément de 
      rendre compte de l’ampleur de la controverse au sein même de notre société. En effet d’après les chiffres l’OFDT, bien que 54% des français pensent que le 
      cannabis puisse être dangereux dès le premier usage, 60% seraient d’avis d’autoriser son utilisation sous certaines conditions.
    </p>

    <p>
      Avec l’arrivée récente du CBD dans certains commerces en France, la controverse est ravivé avec de nombreux interviews et débats sur toute la sphère médiatique.
      De manière plus générale la succession de légalisations de la consommation et/ou de la vente dans un certain nombre de pays autour du globe génère une tendance mondiale.
    </p>

    <h2>Cannabis</h2>
    <Img
      fixed={data.cannabis.childImageSharp.fixed}
      style={{
        float: `right`,
        margin: `20px`
      }}
    />
    <p>
      Le cannabis, ou chanvre est une plante dont la variété la plus répandue est le Cannabis sativa et dont les propriétés médicinales et psychotropes sont 
      essentiellement dues au delta-9-tetrahydrocannabinol (plus communément appelé THC). Le cannabis est vu en France comme stupéfiant depuis 1916 au même titre que 
      l’opium, la morphine et la cocaïne mais ne sera réellement interdit qu’après 1961 suite à la “Convention Unique contre les Stupéfiants” de l’ONU 
      <RefLink refTo="19"/>. 
      Il se présente sous 3 formes : l'herbe (feuilles, tiges et sommités), la résine (le "haschisch") et l'huile. Bien que certains ingèrent le cannabis sous forme de 
      plats (space-cakes notamment) ou de de boissons (infusions, thés), la façon la plus courante de le consommer est de le fumer. La fumée souvent associé à la prise 
      de tabac inquiète certains pour les conséquences qu’elle entraîne sur la santé.
    </p>

    <h2>Les effets d'une consommation de cannabis</h2>
    <Img
      fixed={data.cake.childImageSharp.fixed}
      style={{
        margin: `20px`,
        float: `left`,
        width: `179px`
      }}
    />
    <p>
      Les effets psychoactifs surviennent en général 15 à 20 minutes après l'inhalation du cannabis (lorsqu’il est fumé). Pour un consommateur régulier ce délai peut 
      être plus important. 
    </p>

    <p>
      Usuellement, l’inhalation provoque une sensation de bien-être, de bonheur chez le consommateur. Généralement ces sensations s’accompagnent d’une tendance à rire 
      plus facilement puis à posteriori d’un état de somnolence auquel s’additionne une baisse de la vigilance, de l’attention et de la coordination motrice. Associé à 
      une consommation d’alcool, les effets des deux substances peuvent être décuplés.
    </p>

    <p>
      Une consommation plus importante peut être à l’origine d’hallucination ou de trouble d’angoisse / d’anxiété.
      Si la consommation est régulière les effets notoires concernant l’attention et le comportement peuvent potentiellement devenir chroniques. La dépression et la 
      dépendance sont aussi des conséquences fréquentes chez les usagers réguliers menant souvent à des exclusions sociales.
    </p>
  </Layout>
)

export const query = graphql`
query {
  cannabis: file(relativePath: { eq: "favicon.jpg"}) {
    childImageSharp {
      fixed(width: 179, height: 179) {
        ...GatsbyImageSharpFixed_tracedSVG
      }
    }
 }
 cake: file(relativePath: { eq: "space_cake.jpg"}) {
  childImageSharp {
    fixed(width: 179, height: 179) {
      ...GatsbyImageSharpFixed_tracedSVG
    }
  }
}
}
`

export default IndexPage
