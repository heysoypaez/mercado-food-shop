(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(160),l=a(155);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"404: Not found"}),r.a.createElement("div",{className:"container not-found"},r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness.")))}},153:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),o=a(4),l=a.n(o),c=a(33),i=a.n(c);a.d(t,"a",function(){return i.a});a(154);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},154:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},155:function(e,t,a){"use strict";var n=a(158),r=a(0),o=a.n(r),l=a(4),c=a.n(l),i=a(165),s=a.n(i);function m(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,c=e.title,i=n.data.site,m=t||i.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:c},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:m}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"es",meta:[],keywords:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Mercado Food - Alimentos Por Mayor"}}}}},157:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),o=a(4),l=a.n(o),c=a(55),i=a(2),s=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=s},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Mercado Food - Alimentos Por Mayor",description:"Alimentos, frutas, verduras por mayor para tu negocio",author:"@heysoypaez"}}}}},159:function(e,t,a){e.exports=a.p+"static/logotipo-mercado-food-comida-por-mayor-7705bcb392bceb97ef2d2649b392689d.png"},160:function(e,t,a){"use strict";var n=a(156),r=a(0),o=a.n(r),l=a(4),c=a.n(l),i=a(153),s=(a(162),a(163),a(164),a(155)),m=a(159),u=a.n(m),d=function(e){var t=e.siteTitle;return o.a.createElement("header",{className:"site-header"},o.a.createElement(s.a,{title:t}),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12 col-md-4 align-self-center"},o.a.createElement(i.a,{className:"header-logo",to:"/"},o.a.createElement("img",{src:u.a,alt:"logo"}))),o.a.createElement("div",{className:"col-sm-12 col-md-8 align-self-center"},o.a.createElement("nav",null,o.a.createElement("ul",{className:"navbar-nav mr-auto"},o.a.createElement("li",{className:"nav-item active"},o.a.createElement(i.a,{className:"nav-link",to:"/"},"Inicio")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(i.a,{className:"nav-link",to:"/blogs"},"Blog")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(i.a,{className:"nav-link",to:"/store"},"Tienda")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(i.a,{className:"nav-link",to:"/about"},"Sobre Nosotros")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(i.a,{className:"nav-link",to:"/distributors"},"Distribuidores")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(i.a,{className:"nav-link",to:"/contact-us"},"Contacto"))),o.a.createElement("div",{className:"header-cart"},o.a.createElement(i.a,{className:"Header__summary snipcart-summary snipcart-checkout",to:"#"},o.a.createElement("i",{className:"fas fa-cart-plus"}))))))))};d.propTypes={siteTitle:c.a.string},d.defaultProps={siteTitle:""};var p=d,E=a(7),f=a.n(E),v=function(e){function t(){return e.apply(this,arguments)||this}return f()(t,e),t.prototype.render=function(){return o.a.createElement("footer",{className:"site-footer"},o.a.createElement("div",{className:"footer_inner"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"footer-widget footer-content"},o.a.createElement("section",{id:"nav_menu-8",className:"widget widget_nav_menu"},o.a.createElement("div",{className:"menu-main-container"},o.a.createElement("ul",{id:"menu-main",className:"menu"},o.a.createElement("li",null,o.a.createElement(i.a,{to:"/about"},"Sobre Nosotros")),o.a.createElement("li",null,o.a.createElement(i.a,{to:"/blogs"},"Blog")),o.a.createElement("li",null,o.a.createElement(i.a,{to:"/store"},"Tienda")),o.a.createElement("li",null,o.a.createElement(i.a,{to:"/contact-us"},"Contacto")),o.a.createElement("li",null,o.a.createElement(i.a,{to:"/copyright"},"Derechos de autor")))))),o.a.createElement("div",{className:"footer-bottom social-right-menu "},o.a.createElement("div",{className:"site-info"},"©2019 heysoypaez. Todos los derechos resevados.")))))},t}(o.a.Component),g=(a(166),function(e){var t=e.children;return o.a.createElement(i.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",null,o.a.createElement("main",null,t)),o.a.createElement(v,null))},data:n})});g.propTypes={children:c.a.node.isRequired};t.a=g}}]);
//# sourceMappingURL=component---src-pages-404-js-b186f7627f06bba7e3ee.js.map