(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),l=a(0),o=a.n(l),c=a(160),i=a(155),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(c.a,null,o.a.createElement(i.a,{title:"About",keywords:["gatsby","application","react"]})," ",o.a.createElement("div",{className:"site-About"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12"},o.a.createElement("h2",null,"About Us"),o.a.createElement("p",null,"This Started created for Ecommerce site with Gatsby + Contentful and snipcart"),o.a.createElement("h2",null,"Features"),o.a.createElement("ul",null,o.a.createElement("li",null,"Blog post listing with for each blog post."),o.a.createElement("li",null,"Store page with all Product with few good features like Rating, Price, Checkout, More then one Product images with tabbing."),o.a.createElement("li",null,"Contact form with Email notification."),o.a.createElement("li",null,"Index pages design with Latest Post, Latest Blog and Deal of week and Banner."),o.a.createElement("li",null,"So many other Good features")),o.a.createElement("h2",null,"Setup"),o.a.createElement("h3",null,"Create a Gatsby site."),o.a.createElement("p",null,"Use the Gatsby CLI to Clone this site."),o.a.createElement("code",null,"# Clone this Repositories",o.a.createElement("br",null),"gatsby new OneShopper https://github.com/Rohitguptab/OneShopper.git"),o.a.createElement("h3",null,"Start developing."),o.a.createElement("p",null,"Navigate into your new site’s directory and start it up."),o.a.createElement("code",null,"cd OneShopper",o.a.createElement("br",null),"npm install",o.a.createElement("br",null),"gatsby develop"),o.a.createElement("h3",null,"Setup your Own Configure Projects."),o.a.createElement("p",null,"Enter your own key"),o.a.createElement("strong",null,"ContentFul:"),o.a.createElement("ul",null,o.a.createElement("li",null,"spaceId = Key"),o.a.createElement("li",null,"accessToken = Key")),o.a.createElement("strong",null,"snipcart:"),o.a.createElement("ul",null,o.a.createElement("li",null,"snipcart = Key")))))," ")," ")},t}(o.a.Component);t.default=s},153:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=a(33),i=a.n(c);a.d(t,"a",function(){return i.a});a(154);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},154:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},155:function(e,t,a){"use strict";var n=a(158),r=a(0),l=a.n(r),o=a(4),c=a.n(o),i=a(165),s=a.n(i);function m(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,i=n.data.site,m=t||i.siteMetadata.description;return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:c},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:m}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"es",meta:[],keywords:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Mercado Food - Alimentos Por Mayor"}}}}},157:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=a(55),i=a(2),s=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Mercado Food - Alimentos Por Mayor",description:"Alimentos, frutas, verduras por mayor para tu negocio",author:"@heysoypaez"}}}}},159:function(e,t,a){e.exports=a.p+"static/logotipo-mercado-food-comida-por-mayor-7705bcb392bceb97ef2d2649b392689d.png"},160:function(e,t,a){"use strict";var n=a(156),r=a(0),l=a.n(r),o=a(4),c=a.n(o),i=a(153),s=(a(162),a(163),a(164),a(155)),m=a(159),u=a.n(m),d=function(e){var t=e.siteTitle;return l.a.createElement("header",{className:"site-header"},l.a.createElement(s.a,{title:t}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 col-md-4 align-self-center"},l.a.createElement(i.a,{className:"header-logo",to:"/"},l.a.createElement("img",{src:u.a,alt:"logo"}))),l.a.createElement("div",{className:"col-sm-12 col-md-8 align-self-center"},l.a.createElement("nav",null,l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(i.a,{className:"nav-link",to:"/"},"Inicio")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.a,{className:"nav-link",to:"/blogs"},"Blog")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.a,{className:"nav-link",to:"/store"},"Tienda")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.a,{className:"nav-link",to:"/about"},"Sobre Nosotros")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.a,{className:"nav-link",to:"/distributors"},"Distribuidores")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.a,{className:"nav-link",to:"/contact-us"},"Contacto"))),l.a.createElement("div",{className:"header-cart"},l.a.createElement(i.a,{className:"Header__summary snipcart-summary snipcart-checkout",to:"#"},l.a.createElement("i",{className:"fas fa-cart-plus"}))))))))};d.propTypes={siteTitle:c.a.string},d.defaultProps={siteTitle:""};var p=d,E=a(7),g=a.n(E),f=function(e){function t(){return e.apply(this,arguments)||this}return g()(t,e),t.prototype.render=function(){return l.a.createElement("footer",{className:"site-footer"},l.a.createElement("div",{className:"footer_inner"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"footer-widget footer-content"},l.a.createElement("section",{id:"nav_menu-8",className:"widget widget_nav_menu"},l.a.createElement("div",{className:"menu-main-container"},l.a.createElement("ul",{id:"menu-main",className:"menu"},l.a.createElement("li",null,l.a.createElement(i.a,{to:"/about"},"Sobre Nosotros")),l.a.createElement("li",null,l.a.createElement(i.a,{to:"/blogs"},"Blog")),l.a.createElement("li",null,l.a.createElement(i.a,{to:"/store"},"Tienda")),l.a.createElement("li",null,l.a.createElement(i.a,{to:"/contact-us"},"Contacto")),l.a.createElement("li",null,l.a.createElement(i.a,{to:"/copyright"},"Derechos de autor")))))),l.a.createElement("div",{className:"footer-bottom social-right-menu "},l.a.createElement("div",{className:"site-info"},"©2019 heysoypaez. Todos los derechos resevados.")))))},t}(l.a.Component),h=(a(166),function(e){var t=e.children;return l.a.createElement(i.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("div",null,l.a.createElement("main",null,t)),l.a.createElement(f,null))},data:n})});h.propTypes={children:c.a.node.isRequired};t.a=h}}]);
//# sourceMappingURL=component---src-pages-about-js-53b0e9bc1a4692bc5ae1.js.map