(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return v});a(168),a(170);var n=a(35),r=a.n(n),i=a(7),o=a.n(i),s=a(0),l=a.n(s),c=a(153),d=a(167),u=a.n(d),f=a(160),m=a(155),p=a(172),g=a.n(p),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={NoOfPost:6},a.handleScroll=a.handleScroll.bind(r()(a)),a}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},a.handleScroll=function(){if(window.pageYOffset+1100>window.outerHeight){var e=this.state.NoOfPost+3;this.setState({NoOfPost:e})}},a.render=function(){var e=this.props.data,t=this.state.NoOfPost;return console.log("onScrollEvent: ",this.onScrollEvent),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row product-main",onScroll:this.handleScroll},e.data.allContentfulProduct.edges.slice(0,t).map(function(e){return l.a.createElement("div",{className:"Catalogue__item col-sm-12 col-md-6 col-lg-4",key:e.node.id},l.a.createElement("div",{className:"details_List"},l.a.createElement(c.a,{to:"/"+e.node.slug},null===e.node.image?l.a.createElement("div",{className:"no-image"},"No Image"):l.a.createElement(u.a,{sizes:e.node.image.fixed})),l.a.createElement("div",{className:"details_inner"},l.a.createElement("h2",null,l.a.createElement(c.a,{to:"/"+e.node.slug},e.node.name)),l.a.createElement(g.a,{name:"rate1",starCount:5,value:e.node.rating}),l.a.createElement("p",null,e.node.details.childMarkdownRemark.excerpt),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-4 align-self-center"},l.a.createElement("span",{className:"price"},"$",e.node.price)),l.a.createElement("div",{className:"col-sm-8 text-right align-self-center"},l.a.createElement("a",{href:"#",className:"Product snipcart-add-item","data-item-id":e.node.slug,"data-item-price":e.node.price,"data-item-image":null===e.node.image?"":e.node.image.fixed.src,"data-item-name":e.node.name,"data-item-url":"/"},l.a.createElement("i",{className:"fas fa-shopping-bag"}),"Agregar al carrito"))))))})))},t}(l.a.Component);t.default=function(e){return l.a.createElement(f.a,null,l.a.createElement(m.a,{title:"Store",keywords:["gatsby","application","react"]}),l.a.createElement("div",{className:"container store-page"},l.a.createElement(h,{data:e})))};var v="204830873"},153:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(33),l=a.n(s);a.d(t,"a",function(){return l.a});a(154);var c=r.a.createContext({}),d=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},154:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},155:function(e,t,a){"use strict";var n=a(158),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(165),c=a.n(l);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,s=e.title,l=n.data.site,d=t||l.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"es",meta:[],keywords:[],description:""},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Mercado Food - Alimentos Por Mayor"}}}}},157:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),s=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Mercado Food - Alimentos Por Mayor",description:"Alimentos, frutas, verduras por mayor para tu negocio",author:"@heysoypaez"}}}}},159:function(e,t,a){e.exports=a.p+"static/logotipo-mercado-food-comida-por-mayor-7705bcb392bceb97ef2d2649b392689d.png"},160:function(e,t,a){"use strict";var n=a(156),r=a(0),i=a.n(r),o=a(4),s=a.n(o),l=a(153),c=(a(162),a(163),a(164),a(155)),d=a(159),u=a.n(d),f=function(e){var t=e.siteTitle;return i.a.createElement("header",{className:"site-header"},i.a.createElement(c.a,{title:t}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-12 col-md-4 align-self-center"},i.a.createElement(l.a,{className:"header-logo",to:"/"},i.a.createElement("img",{src:u.a,alt:"logo"}))),i.a.createElement("div",{className:"col-sm-12 col-md-8 align-self-center"},i.a.createElement("nav",null,i.a.createElement("ul",{className:"navbar-nav mr-auto"},i.a.createElement("li",{className:"nav-item active"},i.a.createElement(l.a,{className:"nav-link",to:"/"},"Inicio")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(l.a,{className:"nav-link",to:"/blogs"},"Blog")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(l.a,{className:"nav-link",to:"/store"},"Tienda")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(l.a,{className:"nav-link",to:"/about"},"Sobre Nosotros")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(l.a,{className:"nav-link",to:"/distributors"},"Distribuidores")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(l.a,{className:"nav-link",to:"/contact-us"},"Contacto"))),i.a.createElement("div",{className:"header-cart"},i.a.createElement(l.a,{className:"Header__summary snipcart-summary snipcart-checkout",to:"#"},i.a.createElement("i",{className:"fas fa-cart-plus"}))))))))};f.propTypes={siteTitle:s.a.string},f.defaultProps={siteTitle:""};var m=f,p=a(7),g=a.n(p),h=function(e){function t(){return e.apply(this,arguments)||this}return g()(t,e),t.prototype.render=function(){return i.a.createElement("footer",{className:"site-footer"},i.a.createElement("div",{className:"footer_inner"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"footer-widget footer-content"},i.a.createElement("section",{id:"nav_menu-8",className:"widget widget_nav_menu"},i.a.createElement("div",{className:"menu-main-container"},i.a.createElement("ul",{id:"menu-main",className:"menu"},i.a.createElement("li",null,i.a.createElement(l.a,{to:"/about"},"Sobre Nosotros")),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/blogs"},"Blog")),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/store"},"Tienda")),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/contact-us"},"Contacto")),i.a.createElement("li",null,i.a.createElement(l.a,{to:"/copyright"},"Derechos de autor")))))),i.a.createElement("div",{className:"footer-bottom social-right-menu "},i.a.createElement("div",{className:"site-info"},"©2019 heysoypaez. Todos los derechos resevados.")))))},t}(i.a.Component),v=(a(166),function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",null,i.a.createElement("main",null,t)),i.a.createElement(h,null))},data:n})});v.propTypes={children:s.a.node.isRequired};t.a=v},161:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===i)for(var s in n)a.call(n,s)&&n[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},167:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r,i=n(a(7)),o=n(a(35)),s=n(a(74)),l=n(a(75)),c=n(a(0)),d=n(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),m=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},p=new WeakMap;var g=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(p.has(e.target)){var t=p.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),p.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),p.set(e,t)),function(){a.unobserve(e),p.delete(e)}},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"";return"<picture>"+n+"<img "+(e.loading?'loading="'+e.loading+'" ':"")+s+l+a+r+t+o+i+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},v=c.default.forwardRef(function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,o=e.onLoad,d=e.onError,u=e.nativeLazyLoadSupported,f=e.loading,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","nativeLazyLoadSupported","loading"]),p={};return u&&(p.loading=f),c.default.createElement("img",(0,l.default)({sizes:a,srcSet:n,src:r},m,{onLoad:o,onError:d,ref:t},p,{style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});v.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!1,i=t.fadeIn,s=!1,l=m(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!0),"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype&&(n=!0,s=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,r=!1);var d=!(t.critical&&!t.fadeIn);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,IOSupported:r,fadeIn:i,hasNoScript:d,seenBefore:l,nativeLazyLoadSupported:s},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.nativeLazyLoadSupported||this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,p=e.fluid,g=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,S=e.itemProp,w=(e.critical,u(this.props).loading);var N=this.state.nativeLazyLoadSupported,L=this.state.imgLoaded||!1===this.state.fadeIn,k=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,l.default)({opacity:L?1:0,transition:k?"opacity "+b+"ms":"none"},s),C="boolean"==typeof y?"lightgray":y,I={transitionDelay:b+"ms"},R=(0,l.default)({opacity:this.state.imgLoaded?0:1},k&&I,s,f),_={title:t,alt:this.state.isVisible?"":a,style:R,className:m};if(p){var z=p;return c.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(z.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/z.aspectRatio+"%"}}),C&&c.default.createElement(E,{title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},k&&I)}),z.base64&&c.default.createElement(v,(0,l.default)({src:z.base64},_)),z.tracedSVG&&c.default.createElement(v,(0,l.default)({src:z.tracedSVG},_)),this.state.isVisible&&c.default.createElement("picture",null,z.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),c.default.createElement(v,{alt:a,title:t,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,nativeLazyLoadSupported:N,loading:w})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t,loading:w},z))}}))}if(g){var P=g,T=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},i);return"inherit"===i.display&&delete T.display,c.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},C&&c.default.createElement(E,{title:t,style:(0,l.default)({backgroundColor:C,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},k&&I)}),P.base64&&c.default.createElement(v,(0,l.default)({src:P.base64},_)),P.tracedSVG&&c.default.createElement(v,(0,l.default)({src:P.tracedSVG},_)),this.state.isVisible&&c.default.createElement("picture",null,P.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:P.srcSetWebp,sizes:P.sizes}),c.default.createElement(v,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,nativeLazyLoadSupported:N,loading:w})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t,loading:w},P))}}))}return null},t}(c.default.Component);y.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var b=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),E=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:b,sizes:E,fixed:b,fluid:E,fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"])};var S=y;t.default=S},168:function(e,t,a){var n=a(25).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||a(14)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},170:function(e,t,a){"use strict";a(171)("fixed",function(e){return function(){return e(this,"tt","","")}})},171:function(e,t,a){var n=a(11),r=a(19),i=a(20),o=/"/g,s=function(e,t,a,n){var r=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},172:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),i=l(r),o=l(a(4)),s=l(a(161));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.state={value:e.value},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),n(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.value;null!=t&&t!==this.state.value&&this.setState({value:t})}},{key:"onChange",value:function(e){var t=this.props,a=t.editing,n=t.value;a&&null==n&&this.setState({value:e})}},{key:"onStarClick",value:function(e,t,a,n){n.stopPropagation();var r=this.props,i=r.onStarClick;r.editing&&i&&i(e,t,a,n)}},{key:"onStarHover",value:function(e,t,a,n){n.stopPropagation();var r=this.props,i=r.onStarHover;r.editing&&i&&i(e,t,a,n)}},{key:"onStarHoverOut",value:function(e,t,a,n){n.stopPropagation();var r=this.props,i=r.onStarHoverOut;r.editing&&i&&i(e,t,a,n)}},{key:"renderStars",value:function(){for(var e=this,t=this.props,a=t.name,n=t.starCount,r=t.starColor,o=t.emptyStarColor,s=t.editing,l=this.state.value,c=function(e,t){return{float:"right",cursor:s?"pointer":"default",color:t>=e?r:o}},d={display:"none",position:"absolute",marginLeft:-9999},u=[],f=function(t){var n=a+"_"+t,r=i.default.createElement("input",{key:"input_"+n,style:d,className:"dv-star-rating-input",type:"radio",name:a,id:n,value:t,checked:l===t,onChange:e.onChange.bind(e,t,a)}),o=i.default.createElement("label",{key:"label_"+n,style:c(t,l),className:"dv-star-rating-star "+(l>=t?"dv-star-rating-full-star":"dv-star-rating-empty-star"),htmlFor:n,onClick:function(n){return e.onStarClick(t,l,a,n)},onMouseOver:function(n){return e.onStarHover(t,l,a,n)},onMouseLeave:function(n){return e.onStarHoverOut(t,l,a,n)}},e.renderIcon(t,l,a,n));u.push(r),u.push(o)},m=n;m>0;m--)f(m);return u.length?u:null}},{key:"renderIcon",value:function(e,t,a,n){var r=this.props,o=r.renderStarIcon,s=r.renderStarIconHalf;return"function"==typeof s&&Math.ceil(t)===e&&t%1!=0?s(e,t,a,n):"function"==typeof o?o(e,t,a,n):i.default.createElement("i",{key:"icon_"+n,style:{fontStyle:"normal"}},"★")}},{key:"render",value:function(){var e=this.props,t=e.editing,a=e.className,n=(0,s.default)("dv-star-rating",{"dv-star-rating-non-editable":!t},a);return i.default.createElement("div",{style:{display:"inline-block",position:"relative"},className:n},this.renderStars())}}]),t}();c.propTypes={name:o.default.string.isRequired,value:o.default.number,editing:o.default.bool,starCount:o.default.number,starColor:o.default.string,onStarClick:o.default.func,onStarHover:o.default.func,onStarHoverOut:o.default.func,renderStarIcon:o.default.func,renderStarIconHalf:o.default.func},c.defaultProps={starCount:5,editing:!0,starColor:"#ffb400",emptyStarColor:"#333"},t.default=c,e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-store-js-01000d9b70bc2c51c014.js.map