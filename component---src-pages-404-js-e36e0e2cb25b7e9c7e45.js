(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(151),o=a(149),l=a(163),c=a.n(l);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404 : Page introuvable"}),r.a.createElement("h1",null,"Page introuvable"),r.a.createElement("p",null,"Il semble que vous vous soyez perdu en chemin et aillez atteint le bout de la route ..."),r.a.createElement("img",{src:c.a,alt:"road",style:{width:400,height:400,float:"right"}}))}},145:function(e,t,a){var n;e.exports=(n=a(147))&&n.default||n},146:function(e){e.exports={data:{site:{siteMetadata:{title:"SHEJS"}}}}},147:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(54),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},148:function(e){e.exports={data:{site:{siteMetadata:{author:"BrokenSwing"}}}}},149:function(e,t,a){"use strict";var n=a(150),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(154),s=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title,c=n.data.site,u=t||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"fr",meta:[],keywords:["cannabis","polytech","shejs","legalisation"]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},150:function(e){e.exports={data:{site:{siteMetadata:{title:"SHEJS",description:"Une site pour le cours de SHEJS à Polytech.",author:"BrokenSwing"}}}}},151:function(e,t,a){"use strict";var n=a(146),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(32),s=a.n(c),u=(a(145),i.a.createContext({})),d=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func};var m=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rgb(175, 202, 46)",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};m.propTypes={siteTitle:l.a.string},m.defaultProps={siteTitle:""};var p=m,g=a(148),f=(a(152),function(){return i.a.createElement(d,{query:"1563720716",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("footer",null,e.site.siteMetadata.author," © ",(new Date).getFullYear(),i.a.createElement("div",{style:{float:"right"}},"Powered by ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:g})}),y=(a(153),function(e){var t=e.children;return i.a.createElement(d,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("main",null,t),i.a.createElement(f,null))},data:n})});y.propTypes={children:l.a.node.isRequired};t.a=y},163:function(e,t,a){e.exports=a.p+"static/road-fa0cbf9f12fac46d1314ec796f4b986e.png"}}]);
//# sourceMappingURL=component---src-pages-404-js-e36e0e2cb25b7e9c7e45.js.map