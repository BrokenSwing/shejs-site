(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(156),o=a(154);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Les acteurs"}),r.a.createElement("h1",null,"Les acteurs"))}},150:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},151:function(e){e.exports={data:{site:{siteMetadata:{title:"SHEJS"}}}}},152:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(55),c=a(2),l=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},153:function(e){e.exports={data:{site:{siteMetadata:{author:"BrokenSwing"}}}}},154:function(e,t,a){"use strict";var n=a(155),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(161),l=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title,c=n.data.site,u=t||c.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"fr",meta:[],keywords:["cannabis","polytech","shejs","legalisation"]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u},155:function(e){e.exports={data:{site:{siteMetadata:{title:"SHEJS",description:"Une site pour le cours de SHEJS à Polytech.",author:"BrokenSwing"}}}}},156:function(e,t,a){"use strict";var n=a(151),r=a(0),i=a.n(r),o=a(4),s=a.n(o),c=a(33),l=a.n(c),u=(a(150),i.a.createContext({})),d=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};a(157);var m=function(e){var t=e.to,a=e.children;return i.a.createElement(l.a,{to:t,activeClassName:"active-nav-link",class:"nav-link"},a)},p=(a(158),function(e){e.siteTitle;return i.a.createElement("header",null,i.a.createElement("nav",null,i.a.createElement("a",{href:"javascript:void(0)",class:"closebtn"},"×"),i.a.createElement(m,{to:"/"},"Introduction"),i.a.createElement(m,{to:"/laws"},"Les lois"),i.a.createElement(m,{to:"/actors"},"Les acteurs"),i.a.createElement(m,{to:"/debate"},"Arbre des débats"),i.a.createElement(m,{to:"/timeline"},"Frise chronologique"),i.a.createElement(m,{to:"/log-book"},"Ressources")),i.a.createElement("div",{class:"topBrand"},i.a.createElement("a",{href:"javascript:void(0)",class:"openbtn"},"☰ Menu")))});p.propTypes={siteTitle:s.a.string},p.defaultProps={siteTitle:""};var f=p,E=a(153),g=(a(159),function(){return i.a.createElement(d,{query:"1041092198",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("footer",null,e.site.siteMetadata.author," © ",(new Date).getFullYear(),i.a.createElement("div",{style:{float:"right"}},"Powered by ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:E})}),y=(a(160),function(e){var t=e.children;return i.a.createElement(d,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",null,t),i.a.createElement(g,null))},data:n})});y.propTypes={children:s.a.node.isRequired};t.a=y}}]);
//# sourceMappingURL=component---src-pages-actors-js-a61c007788b288454a62.js.map