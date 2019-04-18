import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import RefLink from "../components/ref-link"

import "../css/laws.css"

const Laws = () => (
  <Layout>
    <SEO title="Les lois" />
    <h1>Les lois</h1>
    <h2>Les principaux textes de lois en vigueur (au niveau national)</h2>

    <cite>
      Loi n°70-1320 du 31 décembre 1970 « Relative aux mesures sanitaires de lutte contre la toxicomanie, et à la répression du trafic et l’usage illicite de 
      substances vénéneuses » Code pénal et Code de la santé publique <RefLink refTo="8"/>
    </cite>
    <blockquote>
      Le cannabis est un produit classé stupéfiant. Depuis 1970, l’achat, la consommation, la détention, la revente, la cultivation qu’elle soit personnelle ou non, 
      le transport ou la conduite sous cannabis sont formellement proscrits et passibles de sanctions lourdes devant les tribunaux, quelle que soit la quantité de 
      cannabis incriminée. Les peines sont doublées quand le cannabis est vendu ou donné à des mineurs. De même les médicaments contenant des extraits de cannabis 
      sont formellement interdits (sauf rares exceptions : exemple du Sativex dont règles de prescription sont très strictes).
    </blockquote>

    <cite>
      Loi n° 2003-87 du 3 février 2003 « Relative à la conduite sous l'influence de substances ou plantes classées comme stupéfiants » 
      <RefLink refTo="9"/>
    </cite>
    <blockquote>
      Toute personne ayant conduit après usage de substances classées comme stupéfiants est passible d'une peine de 2 ans d'emprisonnement et de 4 500 € d'amende. 
      Si la personne se trouvait également sous l'emprise de l'alcool (plus de 0,5 g par litre dans le sang), les peines peuvent aller jusqu’à 3 ans d'emprisonnement 
      et à 9 000 € d'amende. Des contrôles avec un dépistage d'usage de stupéfiants peuvent être réalisés par les services de police ou de gendarmerie.
    </blockquote>

    <cite>
      Plan gouvernemental de lutte contre les drogues (2013 – 2017) <RefLink refTo="10"/>
    </cite>
    <blockquote>
      Principaux objectifs :<br/>
      <ul>
        <li>mettre l’accent sur la compréhension des addictions, soutien de méthodes thérapeutiques innovantes.</li>
        <li>prendre en considération la difficulté d’accès aux soins et à la prévention des populations mais aussi leur niveau d’exposition vis-à-vis des trafics, etc. 
          Homogénéisation de la prévention en ce qui concerne les conditions sociales et territoriales.</li>
        <li>Favoriser la réinsertion sociale des usagers et durcissement de la répression notamment autour des activités périphériques au trafics et à la consommation.</li>
      </ul>
    </blockquote>

    <p><b>Pour mieux comprendre l’évolution des lois, se référer à <Link to="timeline">la frise chronologique</Link>.</b></p>
  </Layout>
)

export default Laws
