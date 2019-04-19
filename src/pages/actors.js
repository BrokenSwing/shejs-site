import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../css/actors.css"

import coggle from "../images/coggle.pdf"

const Actors = () => (
  <Layout>
    <SEO title="Les acteurs" />
    <h1>Les acteurs</h1>

    <p>
      Vous pouvez télécharger la carte mentale des acteurs <a href={coggle}>ici</a>.
    </p>

    <section className="actor">
    <h2>L'Etat</h2>
    <p>
      Les enjeux pour l’Etat sont multiples. On observe d’ailleurs une scission au sein même de la sphère politique qui est révélatrice de la complexité de la 
      décision de légalisation. 
    </p>

    <h3>Enjeux de santé publique</h3>
    <p>
      En France l’Etat se doit de s’assurer de la santé des citoyens. Ce devoir de santé publique justifie donc les lois actuellement en vigueur. En effet, par ce 
      biais l’Etat tente de prévenir les problèmes de santé engendrés par la consommation du cannabis. En opposition certains soutiennent que la légalisation 
      permettrait de baisser la consommation. De ce fait, l’Etat travaille avec la communauté scientifique afin de justifier ses décisions.
    </p>

    <h3>Enjeux économique</h3>
    <p>
      Aujourd’hui le tabac est taxé à 80% en France. On peut donc s’imaginer que la commercialisation du cannabis pourrait engendrer une taxe similaire et donc 
      permettre à l’Etat de bénéficier d’un apport financier non négligeable.
    </p>

    <h3>Enjeux sécuritaire</h3>
    <p>
      L’un des arguments majeurs en faveur de la légalisation aujourd’hui est la régulation des trafics dangereux pour la population, qu’il s’agisse des consommateurs 
      ou non. 
    </p>
    </section>

    <section className="actor">
    <h2>La communauté scientifique</h2>
    <p>
      La communauté scientifique représente la source d’informations la plus tangible dans le débat. Responsable des études sur les impacts de la consommation de 
      cannabis sur la santé autant physique que mentale leur rôle est essentiel. De plus, il a été prouvé que le cannabis peut avoir des vertus thérapeutiques comme 
      par exemple dans le traitement de la sclérose en plaque ou encore réduire les effets secondaires de la chimiothérapie (vomissements ou nausées). Pour le corps 
      médical l’intérêt est donc de faciliter le traitement des patients.   
    </p>
    </section>

    <section className="actor">
    <h2>Les consommateurs</h2>
    <p>
      Les consommateurs font partie des premiers concernés par cette controverse. Un changement de la législation entraînerait logiquement une modification de leur 
      comportement. Cependant, au sein de la population consommatrice de cannabis les avis restent divergents. 
    </p>

    <h3>La légalité</h3>
    <p>
      La légalisation du cannabis en France permettrait au consommateur de continuer à fumer mais tout en respectant la loi. En plus de l’avantage moral que cela 
      représente (culpabilité d’entraver la loi pour se procurer du plaisir, ou par besoin, etc.), la légalisation priverait le consommateur du risque d’amende 
      forfaitaire (jusqu'à 375 euros) ou de prison (jusqu’à un an) associé à la consommation de cannabis. 
    </p>

    <h3>Le prix</h3>
    <p>
      Si le cannabis devenait légal il y aurait certes dans un premier temps un accès plus facile à de l’herbe pour un prix équivalent à celui actuel. Cependant si 
      tel était le cas alors l’Etat taxerait probablement la vente de cannabis de manière progressive comme ce fut le cas de l'alcool et du tabac. Ayant dans la 
      grande majorité conscience de cela, les consommateurs eux même ne sont pas tous favorables à la légalisation.
    </p>
    </section>

    <section className="actor">
    <h2>Les industriels</h2>
    <h3>Economique</h3>
    <p>
      Pour les industriels l’enjeux économique est important. En effet une légalisation du cannabis impliquerait forcément une commercialisation de ce dernier à 
      des fins médicales et récréatives ouvrant ainsi de nouveaux secteurs de vente et de production.
    </p>
    <p>
      Bien que pour certains la légalisation se traduirait par une aubaine économique, pour d’autres, l’arrivée sur le marché de médicaments à base de cannabis 
      pourrait représenter une réelle concurrence à ceux actuellement réalisés à base d’opium (morphine, etc.) et ayant le monopole de leurs vertus thérapeutiques 
      communes. C’est d’ailleurs l’une des raisons qui ont justifié la criminalisation du cannabis dans les années 30 suite à l’arrivée de médicament à base d’opium 
      sur le marché au Etats-Unis puis dans le reste du monde. 
    </p>
    </section>

    <section className="actor">
    <h2>La population</h2>
    <p>
      Aujourd’hui un peu plus de la moitié de la population est d’avis à autoriser la consommation de cannabis. Cependant nombreux sont ceux qui ne sont pas pour la 
      légalisation. On constate assez facilement à travers tous les sondages que les avis sont très variés et que nombreux sont ceux qui ne savent pas trop se 
      positionner. Cette divergence d’opinion au sein même de notre société explique en partie que certains politiques hésitent à se prononcer de manière tranchée 
      sur le sujet. Cependant la population reste un acteur majoritaire de la controverse de par son nombre de “représentant” et du fait qu’ils sont les premiers 
      impactés par la législation.
    </p>
    </section>

  </Layout>
)

export default Actors
