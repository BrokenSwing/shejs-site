(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(160),l=a(158),o=a(153);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"Ressources"}),r.a.createElement("h1",null,"Ressources"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.a,{to:"/resources/log-book"},"Carnet de bord")),r.a.createElement("li",null,r.a.createElement(o.a,{to:"/resources/bibliography"},"Bibliographie")),r.a.createElement("li",null,r.a.createElement(o.a,{to:"/resources/glossary"},"Glossaire"))))}},153:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(33),s=a.n(o);a.d(t,"a",function(){return s.a});a(154);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},154:function(e,t,a){var n;e.exports=(n=a(156))&&n.default||n},155:function(e){e.exports={data:{site:{siteMetadata:{title:"SHEJS"}}}}},156:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),o=a(55),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},157:function(e){e.exports={data:{site:{siteMetadata:{author:"BrokenSwing"}}}}},158:function(e,t,a){"use strict";var n=a(159),r=a(0),i=a.n(r),l=a(4),o=a.n(l),s=a(165),c=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,o=e.title,s=n.data.site,u=t||s.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"fr",meta:[],keywords:["cannabis","polytech","shejs","legalisation"]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u},159:function(e){e.exports={data:{site:{siteMetadata:{title:"SHEJS",description:"Une site pour le cours de SHEJS à Polytech.",author:"BrokenSwing"}}}}},160:function(e,t,a){"use strict";var n=a(155),r=a(0),i=a.n(r),l=a(4),o=a.n(l),s=a(153),c=(a(161),function(e){var t=e.to,a=e.partially,n=e.children;return i.a.createElement(s.a,{to:t,activeClassName:"active-nav-link",partiallyActive:a,class:"nav-link"},n)}),u=(a(162),function(e){e.siteTitle;return i.a.createElement("header",null,i.a.createElement("nav",null,i.a.createElement("a",{href:"javascript:void(0)",class:"closebtn"},"×"),i.a.createElement(c,{to:"/"},"Introduction"),i.a.createElement(c,{to:"/laws"},"Lois"),i.a.createElement(c,{to:"/actors"},"Acteurs"),i.a.createElement(c,{to:"/debate"},"Arbre des débats"),i.a.createElement(c,{to:"/timeline"},"Frise chronologique"),i.a.createElement(c,{to:"/resources",partially:!0},"Ressources")),i.a.createElement("div",{class:"topBrand"},i.a.createElement("a",{href:"javascript:void(0)",class:"openbtn"},"☰ Menu")))});u.propTypes={siteTitle:o.a.string},u.defaultProps={siteTitle:""};var d=u,m=a(157),p=(a(163),function(){return i.a.createElement(s.b,{query:"1041092198",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("footer",null,e.site.siteMetadata.author," © ",(new Date).getFullYear(),i.a.createElement("div",{style:{float:"right"}},"Powered by ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:m})}),E=(a(164),function(e){var t=e.children;return i.a.createElement(s.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",null,t),i.a.createElement(p,null))},data:n})});E.propTypes={children:o.a.node.isRequired};t.a=E}}]);
//# sourceMappingURL=component---src-pages-resources-js-73491b476d688b1db635.js.map