(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{152:function(e,a,t){"use strict";t.r(a);t(168);var n=t(7),r=t.n(n),l=t(0),c=t.n(l),s=t(153),i=t(167),o=t.n(i),m=t(160),d=t(155),u=t(217),p=t.n(u),E={dots:!0,speed:500,infinite:!0,autoplay:!0,autoplaySpeed:3e3,slidesToShow:1,slidesToScroll:1},f=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=this.props.BannerData;return c.a.createElement("div",{className:"slider-section"},c.a.createElement(p.a,E,e.map(function(e,a){return c.a.createElement("div",{key:a,className:"item"},c.a.createElement("div",{className:"site-Banner"},c.a.createElement(o.a,{sizes:e.node.image.fluid}),c.a.createElement("div",{className:"Banner-details"},c.a.createElement("div",null,c.a.createElement("span",{className:"sub-title"},e.node.subHeading),c.a.createElement("h1",null,e.node.title),c.a.createElement(s.a,{to:"/store"},"Compra ahora")))))})))},a}(l.Component),v=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=this.props.data;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"text-center"},c.a.createElement("h2",{className:"with-underline"},"Últimos articulos")),c.a.createElement("ul",{className:"latest-blog"},e.edges.map(function(e){return c.a.createElement("li",{key:e.node.id},c.a.createElement("div",{className:"inner"},c.a.createElement(s.a,{to:e.node.slug}),c.a.createElement(o.a,{sizes:e.node.featureImage.fluid}),c.a.createElement("h2",null,e.node.title)))})))},a}(l.Component),g=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=this.props.data;return c.a.createElement("div",{className:"countdown-section"},c.a.createElement(o.a,{sizes:e.featureImage.fluid}),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"countdown-inner"},c.a.createElement("h2",{className:"with-underline"},e.title),c.a.createElement("span",{className:"date"},"Fecha límite :"),c.a.createElement("span",{className:"date"},c.a.createElement("strong",null,c.a.createElement("i",{className:"fas fa-clock"}),e.date)),c.a.createElement(s.a,{to:"/store"},"Compra ahora"))))},a}(l.Component),N=t(172),h=t.n(N);t.d(a,"query",function(){return b});var y=function(e){function a(){return e.apply(this,arguments)||this}return r()(a,e),a.prototype.render=function(){var e=this.props.data;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row product-main"},e.data.allContentfulProduct.edges.map(function(e){return c.a.createElement("div",{className:"Catalogue__item col-sm-12 col-md-6 col-lg-4",key:e.node.id},c.a.createElement("div",{className:"details_List"},null===e.node.image?c.a.createElement("div",{className:"no-image"},"No Image"):c.a.createElement(o.a,{sizes:e.node.image.fluid}),c.a.createElement("div",{className:"details_inner"},c.a.createElement("h2",null,c.a.createElement(s.a,{to:"/"+e.node.slug},e.node.name)),c.a.createElement(h.a,{name:"rate1",starCount:5,value:e.node.rating}),c.a.createElement("p",null,e.node.details.childMarkdownRemark.excerpt),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-4 align-self-center"},c.a.createElement("span",{className:"price"},"$",e.node.price)),c.a.createElement("div",{className:"col-sm-8 text-right align-self-center"},c.a.createElement("a",{href:"#",className:"Product snipcart-add-item","data-item-id":e.node.slug,"data-item-price":e.node.price,"data-item-image":null===e.node.image?"":e.node.image.fluid.src,"data-item-name":e.node.name,"data-item-url":"/"},c.a.createElement("i",{className:"fas fa-shopping-bag"}),"Agrega al carrito"))))))})))},a}(c.a.Component),b=(a.default=function(e){return c.a.createElement(m.a,null,c.a.createElement(d.a,{title:"Inicio",keywords:["gatsby","application","react"]}),c.a.createElement(f,{BannerData:e.data.allContentfulHeaderBanner.edges}),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"text-center"},c.a.createElement("h2",{className:"with-underline"},"Últimos productos")),c.a.createElement(y,{data:e})),c.a.createElement(v,{data:e.data.allContentfulBlogs}),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"text-center"},c.a.createElement("h2",{className:"with-underline"},"¿Quieres ser distribuidor en Chile?"),c.a.createElement("p",null,"This Started created for Ecommerce site with Gatsby + Contentful and snipcart"),c.a.createElement(s.a,{to:"/contact-us",className:"btn"},"Contáctanos"))),c.a.createElement(g,{data:e.data.contentfulDealCountDown}))},"2233496351")},153:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var n=t(0),r=t.n(n),l=t(4),c=t.n(l),s=t(33),i=t.n(s);t.d(a,"a",function(){return i.a});t(154);var o=r.a.createContext({}),m=function(e){return r.a.createElement(o.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},154:function(e,a,t){var n;e.exports=(n=t(157))&&n.default||n},155:function(e,a,t){"use strict";var n=t(158),r=t(0),l=t.n(r),c=t(4),s=t.n(c),i=t(165),o=t.n(i);function m(e){var a=e.description,t=e.lang,r=e.meta,c=e.keywords,s=e.title,i=n.data.site,m=a||i.siteMetadata.description;return l.a.createElement(o.a,{htmlAttributes:{lang:t},title:s,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:s},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:m}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"es",meta:[],keywords:[],description:""},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},a.a=m},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Mercado Food - Alimentos Por Mayor"}}}}},157:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),l=t(4),c=t.n(l),s=t(55),i=t(2),o=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=o},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Mercado Food - Alimentos Por Mayor",description:"Alimentos, frutas, verduras por mayor para tu negocio",author:"@heysoypaez"}}}}},159:function(e,a,t){e.exports=t.p+"static/logotipo-mercado-food-comida-por-mayor-7705bcb392bceb97ef2d2649b392689d.png"},160:function(e,a,t){"use strict";var n=t(156),r=t(0),l=t.n(r),c=t(4),s=t.n(c),i=t(153),o=(t(162),t(163),t(164),t(155)),m=t(159),d=t.n(m),u=function(e){var a=e.siteTitle;return l.a.createElement("header",{className:"site-header"},l.a.createElement(o.a,{title:a}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-12 col-md-4 align-self-center"},l.a.createElement(i.a,{className:"header-logo",to:"/"},l.a.createElement("img",{src:d.a,alt:"logo"}))),l.a.createElement("div",{className:"col-sm-12 col-md-8 align-self-center"},l.a.createElement("nav",null,l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(i.a,{className:"nav-link",to:"/"},"Inicio")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.a,{className:"nav-link",to:"/blogs"},"Blog")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.a,{className:"nav-link",to:"/store"},"Tienda")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.a,{className:"nav-link",to:"/about"},"Sobre Nosotros")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.a,{className:"nav-link",to:"/distributors"},"Distribuidores")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(i.a,{className:"nav-link",to:"/contact-us"},"Contacto"))),l.a.createElement("div",{className:"header-cart"},l.a.createElement(i.a,{className:"Header__summary snipcart-summary snipcart-checkout",to:"#"},l.a.createElement("i",{className:"fas fa-cart-plus"}))))))))};u.propTypes={siteTitle:s.a.string},u.defaultProps={siteTitle:""};var p=u,E=t(7),f=t.n(E),v=function(e){function a(){return e.apply(this,arguments)||this}return f()(a,e),a.prototype.render=function(){return l.a.createElement("footer",{className:"site-footer"},l.a.createElement("div",{className:"footer_inner"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"footer-widget footer-content"},l.a.createElement("section",{id:"nav_menu-8",className:"widget widget_nav_menu"},l.a.createElement("div",{className:"menu-main-container"},l.a.createElement("ul",{id:"menu-main",className:"menu"},l.a.createElement("li",null,l.a.createElement(i.a,{to:"/about"},"Sobre Nosotros")),l.a.createElement("li",null,l.a.createElement(i.a,{to:"/blogs"},"Blog")),l.a.createElement("li",null,l.a.createElement(i.a,{to:"/store"},"Tienda")),l.a.createElement("li",null,l.a.createElement(i.a,{to:"/contact-us"},"Contacto")),l.a.createElement("li",null,l.a.createElement(i.a,{to:"/copyright"},"Derechos de autor")))))),l.a.createElement("div",{className:"footer-bottom social-right-menu "},l.a.createElement("div",{className:"site-info"},"©2019 heysoypaez. Todos los derechos resevados.")))))},a}(l.a.Component),g=(t(166),function(e){var a=e.children;return l.a.createElement(i.b,{query:"755544856",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("div",null,l.a.createElement("main",null,a)),l.a.createElement(v,null))},data:n})});g.propTypes={children:s.a.node.isRequired};a.a=g}}]);
//# sourceMappingURL=component---src-pages-index-js-831bcb675b329abac6e3.js.map