(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{149:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(161),i=a(158);a(185);t.default=function(){return r.a.createElement(l.a,null,r.a.createElement(i.a,{title:"Glossaire"}),r.a.createElement("h1",null,"Glossaire"),r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",null,"THC"),r.a.createElement("td",null,"Δ-9-tétrahydrocannabinol, substance psychotrope présente dans les formes récréatives du cannabis (sativa, indica, afghanica).")),r.a.createElement("tr",null,r.a.createElement("th",null,"CBD"),r.a.createElement("td",null,"Cannabidiol, cannabis sans THC.")),r.a.createElement("tr",null,r.a.createElement("th",null,"MILDECA / MILDT"),r.a.createElement("td",null,"Mission interministérielle de lutte contre les drogues et les conduites addictives / Toxicomanie.")),r.a.createElement("tr",null,r.a.createElement("th",null,"OFDT"),r.a.createElement("td",null,"Observatoire Français des Drogues et des Toxicomanies.")),r.a.createElement("tr",null,r.a.createElement("th",null,"OCRTIS"),r.a.createElement("td",null,"Office Central pour la Répression du Trafic Illicite des Stupéfiants"))))}},153:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(33),s=a.n(c);a.d(t,"a",function(){return s.a});a(154);var o=r.a.createContext({}),u=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},154:function(e,t,a){var n;e.exports=(n=a(156))&&n.default||n},155:function(e){e.exports={data:{site:{siteMetadata:{title:"SHEJS"}}}}},156:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),c=a(55),s=a(2),o=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},157:function(e){e.exports={data:{site:{siteMetadata:{author:"BrokenSwing"}}}}},158:function(e,t,a){"use strict";var n=a(159),r=a(0),l=a.n(r),i=a(4),c=a.n(i),s=a(166),o=a.n(s),u=a(160),d=a.n(u);function m(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,c=e.title,s=n.data.site,u=t||s.siteMetadata.description;return l.a.createElement(o.a,{htmlAttributes:{lang:a},link:[{rel:"icon",type:"image/jpg",href:d.a}],title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"fr",meta:[],keywords:["cannabis","polytech","shejs","legalisation"]},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m},159:function(e){e.exports={data:{site:{siteMetadata:{title:"SHEJS",description:"Une site pour le cours de SHEJS à Polytech.",author:"BrokenSwing"}}}}},160:function(e,t,a){e.exports=a.p+"static/favicon-28b8066cb9c618ea4c25239b2f761e91.jpg"},161:function(e,t,a){"use strict";var n=a(155),r=a(0),l=a.n(r),i=a(4),c=a.n(i),s=a(153),o=(a(162),function(e){var t=e.to,a=e.partially,n=e.children;return l.a.createElement(s.a,{to:t,activeClassName:"active-nav-link",partiallyActive:a,class:"nav-link"},n)}),u=(a(163),function(e){e.siteTitle;return l.a.createElement("header",null,l.a.createElement("nav",null,l.a.createElement("a",{href:"javascript:void(0)",class:"closebtn"},"×"),l.a.createElement(o,{to:"/"},"Introduction"),l.a.createElement(o,{to:"/laws"},"Lois"),l.a.createElement(o,{to:"/actors"},"Acteurs"),l.a.createElement(o,{to:"/debate"},"Arbre des débats"),l.a.createElement(o,{to:"/timeline"},"Frise chronologique"),l.a.createElement(o,{to:"/resources",partially:!0},"Ressources")),l.a.createElement("div",{class:"topBrand"},l.a.createElement("a",{href:"javascript:void(0)",class:"openbtn"},"☰ Menu")))});u.propTypes={siteTitle:c.a.string},u.defaultProps={siteTitle:""};var d=u,m=a(157),p=(a(164),function(){return l.a.createElement(s.b,{query:"1041092198",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",null,e.site.siteMetadata.author," © ",(new Date).getFullYear(),l.a.createElement("div",{style:{float:"right"}},"Powered by ",l.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:m})}),E=(a(165),function(e){var t=e.children;return l.a.createElement(s.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("main",null,t),l.a.createElement(p,null))},data:n})});E.propTypes={children:c.a.node.isRequired};t.a=E}}]);
//# sourceMappingURL=component---src-pages-resources-glossary-js-6703e7a6918945eb2dd7.js.map