# SHEJS-Site

## Participer au site

* Installer [Git pour Windows](https://gitforwindows.org/)
* Installer [npm](https://www.npmjs.com/)
* Installer Gatsy en utilisant son CLI : ``npm install -g gatsby-cli``
* Cloner le projet : ``git clone git@github.com:BrokenSwing/shejs-site.git``
* Se rendre dans le dossier du site : ``cd ./shejs-site``
* Vérifier qu'on se trouve sur la bonne branche : ``git checkout master``
* Faire les changements voulus
* Ajouter les nouveaux fichiers au traqueur git : ``git add .``
* (*Optionnel*) Vérifier les fichiers que vous avez modifiés ou ajoutés : ``git status``, rouge = pas pris en compte, vert = pris en compte
* Commit les changements : ``git commit -m "<le message>"`` en remplaçant ``<le message>`` par un message décrivant les changements effectués
* Push les changements sur la branche master : ``git push origin master`` (nécessite les droits, me les demander ou effectuer une PR)

## Mettre à jour [la page Github](brokenswing.github.io/shejs-site)

Une fois les changements push sur la branche master, veuillez mettre à jour la branche de la page github en utilisant la commande : ``npm run build``

## Tester les changements que l'on fait en direct

Pour tester en direct les changements que vous effectuez sur le site, lancer le serveur de développement en local en utilisant la commande ``gatsby develop``. Le serveur sera accessible à l'adresse ``localhost:8000``. Pour plsu d'informations concernant le framework Gatsy, veuillez vous référerer à [sa documentation](https://www.gatsbyjs.org/).
Pour arrêter le serveur de développement, il suffit d'utiliser la combinaison de touches ``CTRL-C`` dans le terminal.

## Ajouter des éléments à la frise chronologique

Se rendre dans le dossier ``src/timeline`` et créer une fichier texte aillant un nom décrivant rapidement l'événement et comme extension ``.md``. (*example* : ``loi_31_decembre_1970.md``).
Dans ce fichier ajoutez le contenu suivant :
```md
---
title: "<titre>"
date: "<annee>:<mois>:<jour>"
---

<contenu>
```
En remplaçant :
* ``<titre>`` par le titre de l'événement
* ``<annee>``, ``<mois>`` et ``<jour>`` par les valeurs correspondantes à la date de l'événements. *Example* : ``1970-12-31`` pour le 31 décembre 1970)
* ``<contenu>`` par le texte à afficher pour décrire l'événement. Le ficher étant un fichier Markdown, vous pouvez et devez utilisez [le formattage Markdown](https://fr.wikipedia.org/wiki/Markdown) pour formater votre contenu.

# Ajouter une page au site

Pour ajouter une page au site, il suffit de créer un fichier ``<nom de la page>.js`` dans le dossier ``src/pages`` en remplaçant ``<nom de la page>`` par le nom que vous voulez que cette page aie. Ce nom doit être en minuscules et sans espaces, ce sera le même nom qui sera utilisé dans l'url sur le site, vous pourrez trouver votre page à sous ``localhost:8000/<nom de la page>`` si vous êtes sur votre serveur local.

Avant toute chose, ajouter le contenu suivant dans votre fichier nouvellement créé.
```js
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MaPage = () => (
    <Layout>
        <SEO title="Ma page" />
    </Layout>
)

export default MaPage
```

Remplacez la variable ``MaPage`` par un nom plus approprié et ``Ma Page`` par le titre qui sera affiché au niveau de l'onglet. Il ne vous reste plus qu'à personnalisé votre page en ajoutant de l'HTML entre les balises ``Layout``, sous la balise ``SEO``.