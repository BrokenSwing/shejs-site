(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(151),o=a(149);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"Accueil"}))}},145:function(e,t,a){var n;e.exports=(n=a(147))&&n.default||n},146:function(e){e.exports={data:{site:{siteMetadata:{title:"SHEJS"}}}}},147:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(54),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},148:function(e){e.exports={data:{site:{siteMetadata:{author:"BrokenSwing"}}}}},149:function(e,t,a){"use strict";var n=a(150),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(156),l=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,s=n.data.site,u=t||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:c},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"fr",meta:[],keywords:["cannabis","polytech","shejs","legalisation"]},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=u},150:function(e){e.exports={data:{site:{siteMetadata:{title:"SHEJS",description:"Une site pour le cours de SHEJS à Polytech.",author:"BrokenSwing"}}}}},151:function(e,t,a){"use strict";var n=a(146),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(32),l=a.n(s),u=(a(145),i.a.createContext({})),d=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func};a(152);var p=function(e){var t=e.to,a=e.children;return i.a.createElement(l.a,{to:t,activeClassName:"active-nav-link",class:"nav-link"},a)},m=(a(153),function(e){var t=e.siteTitle;return i.a.createElement("header",null,i.a.createElement(p,{to:"/"},t),i.a.createElement(p,{to:"/timeline"},"Timeline"))});m.propTypes={siteTitle:c.a.string},m.defaultProps={siteTitle:""};var f=m,y=a(148),g=(a(154),function(){return i.a.createElement(d,{query:"1563720716",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("footer",null,e.site.siteMetadata.author," © ",(new Date).getFullYear(),i.a.createElement("div",{style:{float:"right"}},"Powered by ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:y})}),h=(a(155),function(e){var t=e.children;return i.a.createElement(d,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",null,t),i.a.createElement(g,null))},data:n})});h.propTypes={children:c.a.node.isRequired};t.a=h}}]);
//# sourceMappingURL=component---src-pages-index-js-355b911c36ea0b85b9b0.js.map