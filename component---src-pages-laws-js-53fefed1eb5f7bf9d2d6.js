(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(160),i=a(158),l=a(153),o=a(166);a(178);t.default=function(){return r.a.createElement(s.a,null,r.a.createElement(i.a,{title:"Les lois"}),r.a.createElement("h1",null,"Les lois"),r.a.createElement("h2",null,"Les principaux textes de lois en vigueur (au niveau national)"),r.a.createElement("cite",null,"Loi n°70-1320 du 31 décembre 1970 « Relative aux mesures sanitaires de lutte contre la toxicomanie, et à la répression du trafic et l’usage illicite de substances vénéneuses » Code pénal et Code de la santé publique ",r.a.createElement(o.a,{refTo:"8"})),r.a.createElement("blockquote",null,"Le cannabis est un produit classé stupéfiant. Depuis 1970, l’achat, la consommation, la détention, la revente, la cultivation qu’elle soit personnelle ou non, le transport ou la conduite sous cannabis sont formellement proscrits et passibles de sanctions lourdes devant les tribunaux, quelle que soit la quantité de cannabis incriminée. Les peines sont doublées quand le cannabis est vendu ou donné à des mineurs. De même les médicaments contenant des extraits de cannabis sont formellement interdits (sauf rares exceptions : exemple du Sativex dont règles de prescription sont très strictes)."),r.a.createElement("cite",null,"Loi n° 2003-87 du 3 février 2003 « Relative à la conduite sous l'influence de substances ou plantes classées comme stupéfiants »",r.a.createElement(o.a,{refTo:"9"})),r.a.createElement("blockquote",null,"Toute personne ayant conduit après usage de substances classées comme stupéfiants est passible d'une peine de 2 ans d'emprisonnement et de 4 500 € d'amende. Si la personne se trouvait également sous l'emprise de l'alcool (plus de 0,5 g par litre dans le sang), les peines peuvent aller jusqu’à 3 ans d'emprisonnement et à 9 000 € d'amende. Des contrôles avec un dépistage d'usage de stupéfiants peuvent être réalisés par les services de police ou de gendarmerie."),r.a.createElement("cite",null,"Plan gouvernemental de lutte contre les drogues (2013 – 2017) ",r.a.createElement(o.a,{refTo:"10"})),r.a.createElement("blockquote",null,"Principaux objectifs :",r.a.createElement("br",null),r.a.createElement("ul",null,r.a.createElement("li",null,"mettre l’accent sur la compréhension des addictions, soutien de méthodes thérapeutiques innovantes."),r.a.createElement("li",null,"prendre en considération la difficulté d’accès aux soins et à la prévention des populations mais aussi leur niveau d’exposition vis-à-vis des trafics, etc. Homogénéisation de la prévention en ce qui concerne les conditions sociales et territoriales."),r.a.createElement("li",null,"Favoriser la réinsertion sociale des usagers et durcissement de la répression notamment autour des activités périphériques au trafics et à la consommation."))),r.a.createElement("p",null,r.a.createElement("b",null,"Pour mieux comprendre l’évolution des lois, se référer à ",r.a.createElement(l.a,{to:"timeline"},"la frise chronologique"),".")))}},153:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),s=a(4),i=a.n(s),l=a(33),o=a.n(l);a.d(t,"a",function(){return o.a});a(154);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},154:function(e,t,a){var n;e.exports=(n=a(156))&&n.default||n},155:function(e){e.exports={data:{site:{siteMetadata:{title:"SHEJS"}}}}},156:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),s=a(4),i=a.n(s),l=a(55),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},157:function(e){e.exports={data:{site:{siteMetadata:{author:"BrokenSwing"}}}}},158:function(e,t,a){"use strict";var n=a(159),r=a(0),s=a.n(r),i=a(4),l=a.n(i),o=a(165),c=a.n(o);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,l=e.title,o=n.data.site,u=t||o.siteMetadata.description;return s.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"fr",meta:[],keywords:["cannabis","polytech","shejs","legalisation"]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},159:function(e){e.exports={data:{site:{siteMetadata:{title:"SHEJS",description:"Une site pour le cours de SHEJS à Polytech.",author:"BrokenSwing"}}}}},160:function(e,t,a){"use strict";var n=a(155),r=a(0),s=a.n(r),i=a(4),l=a.n(i),o=a(153),c=(a(161),function(e){var t=e.to,a=e.partially,n=e.children;return s.a.createElement(o.a,{to:t,activeClassName:"active-nav-link",partiallyActive:a,class:"nav-link"},n)}),u=(a(162),function(e){e.siteTitle;return s.a.createElement("header",null,s.a.createElement("nav",null,s.a.createElement("a",{href:"javascript:void(0)",class:"closebtn"},"×"),s.a.createElement(c,{to:"/"},"Introduction"),s.a.createElement(c,{to:"/laws"},"Lois"),s.a.createElement(c,{to:"/actors"},"Acteurs"),s.a.createElement(c,{to:"/debate"},"Arbre des débats"),s.a.createElement(c,{to:"/timeline"},"Frise chronologique"),s.a.createElement(c,{to:"/resources",partially:!0},"Ressources")),s.a.createElement("div",{class:"topBrand"},s.a.createElement("a",{href:"javascript:void(0)",class:"openbtn"},"☰ Menu")))});u.propTypes={siteTitle:l.a.string},u.defaultProps={siteTitle:""};var d=u,m=a(157),p=(a(163),function(){return s.a.createElement(o.b,{query:"1041092198",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("footer",null,e.site.siteMetadata.author," © ",(new Date).getFullYear(),s.a.createElement("div",{style:{float:"right"}},"Powered by ",s.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:m})}),f=(a(164),function(e){var t=e.children;return s.a.createElement(o.b,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),s.a.createElement("main",null,t),s.a.createElement(p,null))},data:n})});f.propTypes={children:l.a.node.isRequired};t.a=f},166:function(e,t,a){"use strict";var n=a(153),r=a(0),s=a.n(r);t.a=function(e){var t=e.refTo;return s.a.createElement(n.a,{to:"resources/bibliography#src_"+t,className:"ref"},"[",t,"]")}}}]);
//# sourceMappingURL=component---src-pages-laws-js-53fefed1eb5f7bf9d2d6.js.map