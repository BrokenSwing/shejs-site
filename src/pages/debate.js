import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RefLink from "../components/ref-link"

import "../css/debate.css"

const Debate = () => (
  <Layout>
    <SEO title="Arbres des débats" />
    <h1>Arbre des débats</h1>
    
    <ol className="debate-toc">
      <li><a href="#moral_sanitaire">Débat moral et sanitaire</a></li>
      <ul>
        <li>Chiffres</li>
        <li>Consommation</li>
        <li>Conséquences</li>
      </ul>
      <li><a href="#juridique">Débat juridique, législatif et citoyen</a></li>
      <ul>
        <li>Opinion sur les politiques publiques</li>
        <li>Gestion des trafics illicites</li>
        <li>Coût humain</li>
        <li>Limites des lois (CBD)</li>
      </ul>
      <li><a href="#economique">Débat économique / financier</a></li>
      <ul>
        <li>Vente</li>
        <li>Manque à gagner (coût social)</li>
        <li>Opportunité économique pour les industriels ?</li>
      </ul>
      <li><a href="#conclusion">Conclusion</a></li>
    </ol>

    <article className="debate-subject">
    <h2 id="moral_sanitaire">Débat moral et sanitaire</h2>
    <h3>Chiffres</h3>
    <p>
      Aux Pays-Bas, là où la vente et la consommation de cannabis sont légales, seulement 26% des jeunes disent avoir déjà consommé du cannabis contre près de 40% 
      en France où elle est interdite, de quoi se poser des questions sur la légitimité de la répression.
    </p>
    <p>
    Les principaux axes du débat tournent autour des aspects moraux et sanitaires. D’après le CAST (Cannabis Abuse Screening Test) outil mis en place par l’OFDT
    <RefLink refTo="6"/> permettant d’identifier les individus pouvant potentiellement développer un usage problématique (dépendance et risque impacts sur la santé 
    conséquents), à 17 ans 7,4 % des adolescents présentent un risque d’usage critique, soit, rapporté à l’ensemble de la population, autour de 60 000 jeunes de cet âge. 
    Sur l’ensemble des consommateurs 20% sont identifiés comme ayant un risque élevé d’abus ou de dépendance. 
    </p>
    <p>
    Compte tenu de ces chiffres alarmants, nombreux sont 
    ceux qui s’interrogent. D’une part il y a les proches (famille, amis, corps enseignant) : ce sont eux les premiers témoins des éventuels effets du cannabis sur 
    un individu et sur son comportement : difficulté de concentration, décrochement scolaire, isolement social, dépression. D’autre part, il y a les 
    professionnels de la santé : pour certains (organismes : exemple des CJC : Consultations Jeunes Consommateurs <RefLink refTo="12"/>) le rôle est d'accueillir et 
    d’accompagner les personnes dépendantes ou à risque de le devenir. Pour d’autres, il s’agit du bien être général des patients usagers (conséquences multiples sur 
    la santé, Cf “conséquences” ci-dessous). Enfin, d’autres entités extérieures au consommateur lui-même sont aussi concernés (Politiques, Industriels) mais pour 
    lesquelles la légalisation représente surtout des enjeux législatifs ou économiques.
    </p>

    <h3>Consommation</h3>
    <p>
    Intéressons nous plus précisément à la consommation de cannabis en France : Le cannabis constitue la substance illicite la plus consommée chez les jeunes 
    mais aussi chez les adultes. En sixième un élève sur dix prétend avoir déjà consommé du cannabis au moins une fois dans sa vie. On constate un nette augmentation autour de l’année de 
    quatrième. Pour des lycéens lambdas de 17 ans, ce chiffre grimpe à quatre sur dix. Contrairement aux croyances générales, ce chiffre est le plus bas enregistré 
    depuis une dizaine d’années. Le taux d’usagers adolescents réguliers (consommation > à 10 fois par mois) avoisine les 7%. Le taux d’usagers adultes réguliers 
    avoisine les 2% (1,7 sur 67 millions).
    </p>
    <p>
      Compte tenu de ces résultats, force est de constater que l’expérimentation ainsi que la consommation sont des tendances générationnelles attirant 
      essentiellement les jeunes, et ce, dès le collège et avec une décroissance significative à la sortie du lycée. Le risque d’échec ou de retard scolaire 
      constitue un facteur d’inquiétude important dans l’entourage du consommateur. 
    </p>

    <h3>Conséquences</h3>
    <p>
      Prise en charge : les centres spécialisés pour l’accompagnement et la prévention en addictologie constatent que 80% des consultations concernent l’usage de 
      cannabis. Près de 60% des consommateurs de cannabis accueillis disent en fumer de manière quotidienne. 
    </p>
    <p>
    Conséquences sur la santé et mortalité : des études montrent l’impact de la consommation de cannabis sur la santé peuvent être liés soit au principe actif du 
    cannabis (Δ9-THC) soit aux substances résultant de sa combustion (goudrons) soit aux additifs. 
    </p>
    <p>
    Cannabis et accidents de la route : Les conducteurs sous l’influence du cannabis auraient 1,8 fois plus de risque d’être responsables d’un accident mortel que 
    les conducteurs négatifs. Si la consommation de cannabis est associée à celle de l’alcool le risque est 15 fois plus important.
    En ce sens la légalisation peut sembler dangereuse. C’est pourquoi il s’agit là d’une des “conditions” souhaitées par ceux en faveur de la légalisation : 
    la conduite sous cannabis doit rester illégale comme elle l’est pour l’alcool par le danger qu’elle représente.
    </p>
    <p>
    Conséquences physiques et psychologiques : Contrairement à de nombreux a priori, aucune étude scientifique ne permet de corréler de manière évidente et 
    certaine qu’une consommation aiguë de cannabis augmente de manière considérable l’apparition de pathologies.<br />
    Le cannabis pourrait être un éventuel déclencheur dans de rares cas d’infarctus, de trouble du rythme cardiaque, d’AVC. Mais c’est dans l'inhalation de fumée en 
    général que réside le risque : il en vient régulièrement l’apparition de cancers (poumons, voies aérodigestives, vessie, prostate, etc.), de maladies 
    respiratoires chroniques, etc.
    </p>
    <p>
    Bien que cela permette à certains de relativiser sur la dangerosité du cannabis du point de vue de la santé physique, il ne faut pas oublier les impacts 
    neurologiques et comportementaux engendrés qui à long termes peuvent s'avérer tout aussi destructeurs. 
    </p>
    <p>
    En effet, sont constatés plus fréquemment des troubles d’anxiétés, d’angoisse et “bad trips” (attaques de panique). La consommation régulière de cannabis peut 
    constituer un facteur d’aggravation de toutes les maladies psychiatriques (risque dépressif, suicidaire, de désinsertion sociale, etc.). Une consommation 
    chronique dès l’adolescence pourrait même entraîner une dégradation cognitive irrémédiable. De plus, la consommation de cannabis serait potentiellement un 
    facteur propice au développement de la schizophrénie. 
    </p>
    <p>
    À l’opposé, certains sites et personnes pro cannabis mettent en avant le fait que la consommation de cannabis permettrait de se détendre et de stimuler la créativité. Un bien être qui justifierait donc la consommation. De plus, certains bienfaits avéré du cannabis dans des traitements médicaux comme la sclérose en plaque amène beaucoup de personnes à se rassurer quand à la consommation. D’autre encore prêterais au cannabis des vertus contre le cancer lui même bien que cela n’est pas été prouvé.

	Finalement, bien qu’aujourd’hui les méfaits du cannabis sur la santé soient réels et connus cela n'empêche pas que certain puisse y trouver un plaisir et/ou une utilité.

    </p>
    </article>

    <article className="debate-subject">
    <h2 id="juridique">Débat juridique, législatif et citoyen</h2>
    <h3>Opinion sur les politiques publiques</h3>
    <p>
    En 2008, 85% de la population était contre la vente libre de cannabis. En 2018, ce taux chute à près de 78% <RefLink refTo="6" />. Pourtant 60% seraient d’avis 
    d’autoriser son usage sous certaines conditions (uniquement pour les majeurs et sans risque de conduire par la suite). Là aussi on constate une augmentation : 
    en 2008 seuls 30% étaient de cet avis. En 2013, 44% des personnes interrogées estiment l’interdiction du cannabis comme une atteinte à la liberté.
    </p>
    <p>
    Force est de constater que les opinions changent et tendent significativement vers la légalisation ou du moins à la régulation. 
    </p>

    <h3>Gestion des trafics illicites</h3>
    <p>
      La grande partie des revenus générés par les trafics de drogues et en particulier du cannabis profitent au crime organisé. De manière plus générale le trafic 
      de stupéfiant appartient et finance un ensemble de pratique illégales (trafic d’armes, d’êtres humains, proxénétisme, etc.). En ce sens il est important de 
      saisir qu’en anéantissant les trafics de drogues l’Etat peut sérieusement ébranler l’intégralité des trafics illégaux. A l’inverse, une mauvaise gestion d’un 
      trafic de stupéfiant à des répercussions d’autant plus importantes et diverses et augmente l'insécurité nationale.
    </p>
    <p>
      La Mission interministérielle de lutte contre la drogue et la toxicomanie (MILDT ou MILDECA) est l’organisme national qui anime et coordonne la lutte contre 
      les drogues et les toxicomanies. La brigade des Stupéfiants (plus connue sous le nom de « Stups ») dépend de l’OCRTIS, organisme central assuré par INTERPOL.
    </p>

    <h3>Coût humain</h3>
    <p>
    En moyenne, sur l’ensemble des accidents mortels sur la route, 7% des individus se révèlent être positifs au cannabis. On estime qu’un joint représente entre 0,3 
    et 0,7 grammes d'alcool par litre de sang.
    </p>
    <p>
    Cependant, il est difficile d’estimer le nombre de décès liés aux cannabis de manière exhaustive.  Bien que de nombreux chercheurs tentent de corréler la 
    consommation de cannabis à l’apparition de pathologies mentales ou physiques, aucune étude ne permet à ce stade d’établir un lien concret entre ces deux notions. 
    Par ailleurs, comme il n’existe pas réellement de dose “létale” de THC (du moins visiblement inatteignable), les morts par surdose n’existent pas contrairement à 
    bon nombre d’autres drogues. 
    </p>
    <p>
    Cependant il faut garder à l’esprit que les impacts sur la morbidité se révèlent à long terme et c’est pour cette raison qu’il sont difficilement quantifiables. 
    Bien que certains usent des arguments précédent pour soutenir la légalisation, il serait donc faux de dire que le cannabis n’a aucune incidence sur la mortalité. 
    </p>

    <h3>Limites des lois (CBD)</h3>
    <p>
	L’arrivée récente du CDB dans certains commerces français ravive la polémique et suscite des interrogations sur le bien-fondé des lois actuelles concernant le cannabis. 
	Pour le moment toutes forme de cannabis dont la dose de THC n’excède pas les 0.2% peut être vendue légalement. 
	De plus, nombreux sont ceux à pointer du doigt une forme de laxisme des forces de l’ordre vis à vis des consommateurs. En effet, aujourd'hui la loi française necessite passage en jugement pour consommation de cannabis.
	Cela implique donc qu'il est compliqué de condamner la totalité des consommateurs. 
	On peut donc légitimement se poser des question sur la pertinence de la législation actuelle ainsi que la possibilité de la faire respecter au vu des ressources matérielles et humaines que possède l’Etat.

    </p>
    <p>
    Pour le moment toutes forme de cannabis dont la dose de THC n’excède pas les 0.2% peut être vendue légalement. 
    </p>
    </article>

    <article className="debate-subject">
    <h2 id="economique">Débat économique / financier</h2>
    <h3>Vente</h3>
    <p>
    Depuis une dizaine d’années, le prix médian du gramme d’herbe de cannabis est en hausse d’après l’OCRTIS : il passe de 6,5 euros en 2009 à 11 euros en 2016. 
    Ce phénomène serait essentiellement dû à la volonté des consommateurs d’acheter une herbe de « qualité  supérieure ». 
    </p>
    <p>
    La teneur moyenne en THC dans les produits aurait donc eu tendance à augmenter proportionnellement au prix du gramme, et ce notamment pour ce qui est des résines.
    </p>
    <h3>Manque à gagner (coût social)</h3>
    <p>
    Depuis mai 2018 l’INSEE intègre les revenus liés au trafic de drogue dans le PIB : ce marché représente 2,7 milliards d’euros dont 1 milliard uniquement pour le 
    cannabis. Il en vient une nouvelle source de discussion : la légalisation du cannabis pourrait désormais être potentiellement intéressante du point de vue de sa 
    rentabilité économique.<br />
    On peut confirmer l’importance croissante du marché de l’herbe en France par la hausse de confiscation des plants, dont plus de 137 000 ont été saisis sur le 
    territoire en 2017.
    </p>
    <p>
    Le “coût social” permet de déterminer cette éventuelle rentabilité, il se base notamment sur le coût de la répression et des pathologies associées ainsi que sur 
    le coût externe (nombre de décès, perte de production, etc.). Pour le cannabis le coût social estimé autour du milliard d’euros annuel et  est essentiellement dû 
    au coût de la répression qui excède les 500 millions d’euros par an. 
    </p>
    <p>
    De plus, si la vente de cannabis devenait légale, l’état pourrait percevoir une taxe (et pourrait l’augmenter de manière progressive) comme c’est le cas pour le 
    tabac ou pour l’alcool.<br />
    L’Etat peut voir en ce sens un intérêt certain du point de vue économique. C’est le cas des institutions canadiennes et uruguayennes ayant récemment jugé la 
    légalisation comme bénéfique. Cependant du point de vue de la cohérence avec la politique intérieure et les avis des citoyens, la décision de légaliser ou non le 
    cannabis de se limite pas au manque à gagner...
    </p>

    <h3>Opportunité économique pour les industriels ?</h3>
    <p>
    Avant de devenir illégal le chanvre représentait un matière première intéresse dans un bon nombre d’industries (papier, médical, etc.). Depuis son interdiction 
    et par soucis de transparence, tous les produits à but non récréatif issu du cannabis on dû se tourner vers des techniques alternatives. Le retour du chanvre sur 
    la marché pour donc relancer ses économies et représenter un opportunité pour les industriels. 
    </p>
    <p>
    Bien qu’aujourd’hui le chanvre ne soit plus rentable pour la production de papier ou autres, il représente dans le secteur médical un véritable intérêt. 
    Compte tenu de ses vertus térapeutiques multiples il pourrait être utilisé dans de nombreux médicaments et parallèlement de rompre le monopole de l’opium 
    (le bonheur des uns pour le malheur des autres) notamment pour la production de morphine dont la France est le leader mondial. 
    </p>
    <p>
    Enfin c’est dans la vente de cannabis à but récréatif que réside l’autre opportunité économique des industriels. 
    </p>


    </article>

    <article className="debate-subject">
    <h2 id="conclusion">Conclusion</h2>
    <p>
    Finalement, bien qu’aujourd’hui les arguments en faveur de la légalisation du cannabis soit nombreux et pertinent on constate une certaine stagnation du sujet. 
    Le changement de la législation ne semble pas être une priorité bien au contraire. 
    On constate plutôt une tendance de la société à tolérer la consommation. 
    Cependant, le changement pourrait venir de l’arrivée de médicament à base de cannabis dans les pharmacies et de l’arrivée de produit dérivé à base de cannabis comme le CBD à la limite de la légalité.
    </p>

  </Layout>
)

export default Debate
