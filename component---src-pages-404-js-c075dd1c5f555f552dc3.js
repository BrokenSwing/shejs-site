(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(161),o=a(159),c=a(176),l=a.n(c);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404 : Page introuvable"}),r.a.createElement("h1",null,"Page introuvable"),r.a.createElement("p",null,"Il semble que vous vous soyez perdu en chemin et aillez atteint le bout de la route ..."),r.a.createElement("img",{src:l.a,alt:"road",style:{width:400,height:400,float:"right"}}))}},153:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a});a(154);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},154:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},155:function(e,t,a){e.exports=a.p+"static/favicon-28b8066cb9c618ea4c25239b2f761e91.jpg"},156:function(e){e.exports={data:{site:{siteMetadata:{title:"SHEJS"}}}}},157:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},158:function(e){e.exports={data:{site:{siteMetadata:{author:"BrokenSwing"}}}}},159:function(e,t,a){"use strict";var n=a(160),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(166),s=a.n(l),u=a(155),d=a.n(u);function p(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,l=n.data.site,u=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},link:[{rel:"icon",type:"image/jpg",href:d.a}],title:c,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}p.defaultProps={lang:"fr",meta:[],keywords:["cannabis","polytech","shejs","legalisation"]},p.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=p},160:function(e){e.exports={data:{site:{siteMetadata:{title:"SHEJS",description:"Une site pour le cours de SHEJS à Polytech.",author:"BrokenSwing"}}}}},161:function(e,t,a){"use strict";var n=a(156),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(153),s=(a(162),function(e){var t=e.to,a=e.partially,n=e.children;return i.a.createElement(l.a,{to:t,activeClassName:"active-nav-link",partiallyActive:a,class:"nav-link"},n)}),u=(a(163),function(e){e.siteTitle;return i.a.createElement("header",null,i.a.createElement("nav",null,i.a.createElement("a",{href:"javascript:void(0)",class:"closebtn"},"×"),i.a.createElement(s,{to:"/"},"Introduction"),i.a.createElement(s,{to:"/laws"},"Lois"),i.a.createElement(s,{to:"/actors"},"Acteurs"),i.a.createElement(s,{to:"/debate"},"Arbre des débats"),i.a.createElement(s,{to:"/timeline"},"Frise chronologique"),i.a.createElement(s,{to:"/resources",partially:!0},"Ressources")),i.a.createElement("div",{class:"topBrand"},i.a.createElement("a",{href:"javascript:void(0)",class:"openbtn"},"☰ Menu")))});u.propTypes={siteTitle:c.a.string},u.defaultProps={siteTitle:""};var d=u,p=a(158),m=(a(164),function(){return i.a.createElement(l.b,{query:"1041092198",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("footer",null,e.site.siteMetadata.author," © ",(new Date).getFullYear(),i.a.createElement("div",{style:{float:"right"}},"Powered by ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:p})}),f=(a(165),function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",null,t),i.a.createElement(m,null))},data:n})});f.propTypes={children:c.a.node.isRequired};t.a=f},176:function(e,t,a){e.exports=a.p+"static/road-fa0cbf9f12fac46d1314ec796f4b986e.png"}}]);
//# sourceMappingURL=component---src-pages-404-js-c075dd1c5f555f552dc3.js.map