(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"7HQ6":function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMEBQEG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQD/2gAMAwEAAhADEAAAAZMyHjetYBKNcGyI/8QAHRAAAgICAwEAAAAAAAAAAAAAAQMCBAAREhMxQ//aAAgBAQABBQK1YKwqxJc9ggy5tkd4i31r+Zyfv//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABYRAAMAAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPwEr/8QAHhAAAQMFAQEAAAAAAAAAAAAAAQACERASIUGBMWH/2gAIAQEABj8CsbgnanMb+qR4UXnNLHCYR5Ti/8QAGxABAQEBAQEBAQAAAAAAAAAAAREAITFBUXH/2gAIAQEAAT8hMJFX6DDra8LcAmoUdPnTy5RHv5hNdOfzSOfM9bwYdDv/2gAMAwEAAgADAAAAEOj/AAP/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAEDAQE/EB//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8Q1IVX/8QAHxABAAICAgIDAAAAAAAAAAAAAQARIUExUWFxkaHw/9oACAEBAAE/EH30i9Kullyb2uBtzvzDVAA2PEemTNN0a+o0oHAvh8dRkMwzXT5uUIZSH97jzqUzhZs2mZ//2Q==","width":50,"height":50,"src":"/static/6f9f1ebe602591d513a7f92142bc2af5/99438/profile-pic.jpg","srcSet":"/static/6f9f1ebe602591d513a7f92142bc2af5/99438/profile-pic.jpg 1x,\\n/static/6f9f1ebe602591d513a7f92142bc2af5/aba1d/profile-pic.jpg 1.5x,\\n/static/6f9f1ebe602591d513a7f92142bc2af5/b315d/profile-pic.jpg 2x"}}},"site":{"siteMetadata":{"author":{"name":"FrozenAlex","summary":"who likes to build stuff"},"social":{"twitter":"FrosteeAlex"}}}}}')},"9eSz":function(e,t,a){"use strict";a("rGqo");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),l=r(a("8OQS")),d=r(a("pVnL")),o=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},A=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},f=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(A);if(-1!==t)return e[t]}return e[0]},m=Object.create({}),p=function(e){var t=u(e),a=f(t);return m[a]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,E=b&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),o.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function v(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},Q=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+o+s+l+a+r+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=o.default.createElement(L,(0,d.default)({src:t},i,{ariaHidden:n}));return a.length>1?o.default.createElement("picture",null,r(a),s):s},L=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,A=e.draggable,f=e.ariaHidden,g=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,d.default)({"aria-hidden":f,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:A,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));L.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var B=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!h&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(h||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,A=void 0===c?{}:c,f=e.placeholderClassName,m=e.fluid,p=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,y=e.itemProp,w=e.loading,I=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,B=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,d.default)({opacity:R?1:0,transition:B?"opacity "+b+"ms":"none"},l),z="boolean"==typeof h?"lightgray":h,C={transitionDelay:b+"ms"},O=(0,d.default)({opacity:this.state.imgLoaded?0:1},B&&C,{},l,{},A),M={title:t,alt:this.state.isVisible?"":a,style:O,className:f,itemProp:y};if(m){var H=m,V=g(m);return o.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},o.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),z&&o.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},B&&C)}),V.base64&&o.default.createElement(j,{ariaHidden:!0,src:V.base64,spreadProps:M,imageVariants:H,generateSources:x}),V.tracedSVG&&o.default.createElement(j,{ariaHidden:!0,src:V.tracedSVG,spreadProps:M,imageVariants:H,generateSources:v}),this.state.isVisible&&o.default.createElement("picture",null,S(H),o.default.createElement(L,{alt:a,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:I})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:Q((0,d.default)({alt:a,title:t,loading:w},V,{imageVariants:H}))}}))}if(p){var T=p,k=g(p),Y=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},n);return"inherit"===n.display&&delete Y.display,o.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:Y,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},z&&o.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:z,width:k.width,opacity:this.state.imgLoaded?0:1,height:k.height},B&&C)}),k.base64&&o.default.createElement(j,{ariaHidden:!0,src:k.base64,spreadProps:M,imageVariants:T,generateSources:x}),k.tracedSVG&&o.default.createElement(j,{ariaHidden:!0,src:k.tracedSVG,spreadProps:M,imageVariants:T,generateSources:v}),this.state.isVisible&&o.default.createElement("picture",null,S(T),o.default.createElement(L,{alt:a,title:t,width:k.width,height:k.height,sizes:k.sizes,src:k.src,crossOrigin:this.props.crossOrigin,srcSet:k.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:I})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:Q((0,d.default)({alt:a,title:t,loading:w},k,{imageVariants:T}))}}))}return null},t}(o.default.Component);B.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),z=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});B.propTypes={resolutions:N,sizes:z,fixed:c.default.oneOfType([N,c.default.arrayOf(N)]),fluid:c.default.oneOfType([z,c.default.arrayOf(z)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var C=B;t.default=C},lRrx:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=a("7HQ6"),l=a("9eSz"),d=a.n(l);var o=()=>{const e=s.data,{author:t,social:a}=e.site.siteMetadata;return i.a.createElement("div",{className:"flex m-3",style:{display:"flex"}},i.a.createElement(d.a,{fixed:e.avatar.childImageSharp.fixed,alt:t.name,style:{marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null,t.name)," ",t.summary," ",i.a.createElement("a",{href:`https://twitter.com/${a.twitter}`},"You should follow him on Twitter")))},c=a("Kqmz"),u=a("dmsj");a.d(t,"pageQuery",(function(){return A}));t.default=({data:e,pageContext:t,location:a})=>{const r=e.markdownRemark,s=e.site.siteMetadata.title,{previous:l,next:d}=t;return i.a.createElement(c.a,{shrink:!1,location:a,title:s},i.a.createElement(u.a,{title:r.frontmatter.title,description:r.frontmatter.description||r.excerpt}),i.a.createElement("article",{className:"container-small mx-auto max-w-lg"},i.a.createElement("header",{className:"text-center"},i.a.createElement("h1",{className:"m-6 text-4xl"},r.frontmatter.title),i.a.createElement("p",{className:"m-6 text-xl"},r.frontmatter.date)),i.a.createElement("section",{className:"content",dangerouslySetInnerHTML:{__html:r.html}}),i.a.createElement("hr",null),i.a.createElement("footer",null,i.a.createElement(o,null))),i.a.createElement("nav",null,i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,l&&i.a.createElement(n.Link,{to:l.fields.slug,rel:"prev"},"← ",l.frontmatter.title)),i.a.createElement("li",null,d&&i.a.createElement(n.Link,{to:d.fields.slug,rel:"next"},d.frontmatter.title," →")))))};const A="366699947"}}]);
//# sourceMappingURL=component---src-templates-blog-post-jsx-5fc5d39dd849ac5b4ba6.js.map