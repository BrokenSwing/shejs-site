(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(161),c=a(159),s=a(153),o=(a(182),a(183)),l=a.n(o),u=a(184),d=a.n(u),p=a(185),m=a.n(p);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"Ressources"}),r.a.createElement("h1",null,"Ressources"),r.a.createElement("section",{className:"resources-links"},r.a.createElement("div",{className:"book-icon"},r.a.createElement("span",null,"Carnet de bord"),r.a.createElement(s.a,{to:"/resources/log-book"},r.a.createElement("img",{src:d.a}))),r.a.createElement("div",{className:"loupe-icon"},r.a.createElement("span",null,"Bibliographie"),r.a.createElement(s.a,{to:"/resources/bibliography"},r.a.createElement("img",{src:l.a}))),r.a.createElement("div",{className:"az-icon"},r.a.createElement("span",null,"Glossaire"),r.a.createElement(s.a,{to:"/resources/glossary"},r.a.createElement("img",{src:m.a})))))}},153:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),s=a(33),o=a.n(s);a.d(t,"a",function(){return o.a});a(154);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},154:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},155:function(e,t,a){e.exports=a.p+"static/favicon-28b8066cb9c618ea4c25239b2f761e91.jpg"},156:function(e){e.exports={data:{site:{siteMetadata:{title:"SHEJS"}}}}},157:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),s=a(55),o=a(2),l=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},158:function(e){e.exports={data:{site:{siteMetadata:{author:"BrokenSwing"}}}}},159:function(e,t,a){"use strict";var n=a(160),r=a(0),i=a.n(r),c=a(4),s=a.n(c),o=a(166),l=a.n(o),u=a(155),d=a.n(u);function p(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,s=e.title,o=n.data.site,u=t||o.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},link:[{rel:"icon",type:"image/jpg",href:d.a}],title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})}p.defaultProps={lang:"fr",meta:[],keywords:["cannabis","polytech","shejs","legalisation"]},p.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=p},160:function(e){e.exports={data:{site:{siteMetadata:{title:"SHEJS",description:"Une site pour le cours de SHEJS à Polytech.",author:"BrokenSwing"}}}}},161:function(e,t,a){"use strict";var n=a(156),r=a(0),i=a.n(r),c=a(4),s=a.n(c),o=a(153),l=(a(162),function(e){var t=e.to,a=e.partially,n=e.children;return i.a.createElement(o.a,{to:t,activeClassName:"active-nav-link",partiallyActive:a,class:"nav-link"},n)}),u=(a(163),function(e){e.siteTitle;return i.a.createElement("header",null,i.a.createElement("nav",null,i.a.createElement("a",{href:"javascript:void(0)",class:"closebtn"},"×"),i.a.createElement(l,{to:"/"},"Introduction"),i.a.createElement(l,{to:"/laws"},"Lois"),i.a.createElement(l,{to:"/actors"},"Acteurs"),i.a.createElement(l,{to:"/debate"},"Arbre des débats"),i.a.createElement(l,{to:"/timeline"},"Frise chronologique"),i.a.createElement(l,{to:"/resources",partially:!0},"Ressources")),i.a.createElement("div",{class:"topBrand"},i.a.createElement("a",{href:"javascript:void(0)",class:"openbtn"},"☰ Menu")))});u.propTypes={siteTitle:s.a.string},u.defaultProps={siteTitle:""};var d=u,p=a(158),m=(a(164),function(){return i.a.createElement(o.b,{query:"1041092198",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("footer",null,e.site.siteMetadata.author," © ",(new Date).getFullYear(),i.a.createElement("div",{style:{float:"right"}},"Powered by ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:p})}),f=(a(165),function(e){var t=e.children;return i.a.createElement(o.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",null,t),i.a.createElement(m,null))},data:n})});f.propTypes={children:s.a.node.isRequired};t.a=f},183:function(e,t,a){e.exports=a.p+"static/loupe-ffb55f8400b856282a5a57cafd704ae2.png"},184:function(e,t,a){e.exports=a.p+"static/carnet-51328735370504e5fbd016297257fffd.png"},185:function(e,t,a){e.exports=a.p+"static/a-z-17f813c88b51301034b6be5b91e2d317.png"}}]);
//# sourceMappingURL=component---src-pages-resources-js-a67974e23a551decd96f.js.map