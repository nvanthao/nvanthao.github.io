(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{199:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return f});a(18);var n=a(0),r=a.n(n),i=a(205),o=a(211),s=a(208),l=a(209),d=a(203),c=a(229);var u=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,u=a.next,f={url:""+this.props.data.site.siteMetadata.siteUrl,identifier:e.id,title:e.frontmatter.title};return r.a.createElement(s.a,{location:this.props.location,title:t},r.a.createElement(l.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),r.a.createElement("h1",{style:{marginTop:Object(d.a)(1),marginBottom:0}},e.frontmatter.title),r.a.createElement("p",{style:Object.assign({},Object(d.b)(-.2),{display:"block",marginBottom:Object(d.a)(1)})},e.frontmatter.date),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),r.a.createElement(c.Disqus,{config:f}),r.a.createElement("hr",{style:{marginBottom:Object(d.a)(1)}}),r.a.createElement(o.a,null),r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,n&&r.a.createElement(i.a,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),r.a.createElement("li",null,u&&r.a.createElement(i.a,{to:u.fields.slug,rel:"next"},u.frontmatter.title," →"))))},n}(r.a.Component);t.default=u;var f="2416098515"},203:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var n=a(215),r=a.n(n),i=a(216),o=a.n(i),s=new r.a(o.a);var l=s.rhythm,d=s.scale},204:function(e,t,a){var n;e.exports=(n=a(206))&&n.default||n},205:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(66),o=a.n(i);a.d(t,"a",function(){return o.a});a(204),a(9).default.enqueue,r.a.createContext({})},206:function(e,t,a){"use strict";a.r(t);a(18);var n=a(0),r=a.n(n),i=a(95);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},207:function(e,t,a){"use strict";a(212)("fixed",function(e){return function(){return e(this,"tt","","")}})},208:function(e,t,a){"use strict";a(18);var n=a(0),r=a.n(n),i=a(205),o=a(203);var s=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e,t=this.props,a=t.location,n=t.title,s=t.children;return e="/"===a.pathname?r.a.createElement("h1",{style:Object.assign({},Object(o.b)(1.5),{marginBottom:Object(o.a)(1.5),marginTop:0})},r.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},r.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(o.a)(24),padding:Object(o.a)(1.5)+" "+Object(o.a)(.75)}},r.a.createElement("header",null,e),r.a.createElement("main",null,s),r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},n}(r.a.Component);t.a=s},209:function(e,t,a){"use strict";var n=a(210),r=a(0),i=a.n(r),o=a(217),s=a.n(o);function l(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,l=n.data.site,d=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},210:function(e){e.exports={data:{site:{siteMetadata:{title:"Blog",description:"A starter blog demonstrating what Gatsby can do.",author:"Gerard Nguyen"}}}}},211:function(e,t,a){"use strict";a(207);var n=a(213),r=a(0),i=a.n(r),o=a(214),s=a.n(o),l=a(203);t.a=function(){var e=n.data,t=e.site.siteMetadata.author;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.5)}},i.a.createElement(s.a,{fixed:e.avatar.childImageSharp.fixed,alt:t,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",null,"Document ",i.a.createElement("strong",null,t),"'s learning journeys!"))}},212:function(e,t,a){var n=a(1),r=a(7),i=a(32),o=/"/g,s=function(e,t,a,n){var r=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},213:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAu0lEQVQ4y+1SywqDMBA0GtHgVZGgiARENCcRvEkUH///SQ5dkYLWQy8ttHOaR2azhFjWH58DY+yNaIfneY7jnH2YiO6aruuO40iHjnuI+L4/DAPn/OVKWuu2bUFs235OSXZdV5blxf4Ur+saRRFIlmVhGFIEBxIEzjzP59G7NsZIKUGapsnznD+glIKEmaZp3/cXZdokSZJpmo64KAqMOOSyLHEc3z17XddCCCoAOEfNIAiqqvraT/IL2ADXTRAt+TlcJwAAAABJRU5ErkJggg==",width:50,height:50,src:"/static/bca8d182ba962463f73329785baa22bf/352e5/profile-pic.png",srcSet:"/static/bca8d182ba962463f73329785baa22bf/352e5/profile-pic.png 1x,\n/static/bca8d182ba962463f73329785baa22bf/aae31/profile-pic.png 1.5x,\n/static/bca8d182ba962463f73329785baa22bf/47c2b/profile-pic.png 2x"}}},site:{siteMetadata:{author:"Gerard Nguyen"}}}}},214:function(e,t,a){"use strict";a(29),a(30),a(13),a(93),a(136),a(207);var n=a(14);t.__esModule=!0,t.default=void 0;var r,i=n(a(67)),o=n(a(71)),s=n(a(132)),l=n(a(133)),d=n(a(0)),c=n(a(51)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,n=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},p=Object.create({}),g=function(e){var t=u(e),a=f(t);return p[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map(function(e){var t=e.src,a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},n&&d.default.createElement("source",{type:"image/webp",media:r,srcSet:n,sizes:i}),d.default.createElement("source",{media:r,srcSet:a,sizes:i}))})}function w(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function S(e){return e.map(function(e){var t=e.src,a=e.media,n=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:n})})}function E(e){return e.map(function(e){var t=e.src,a=e.media,n=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:n})})}function I(e,t){var a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?n:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},A=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)}).join("")+"<img "+d+o+s+a+n+t+i+r+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,a=e.imageVariants,n=e.generateSources,r=e.spreadProps,i=d.default.createElement(R,(0,l.default)({src:t},r));return a.length>1?d.default.createElement("picture",null,n(a),i):i},R=d.default.forwardRef(function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:n,src:r},p,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});R.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var j=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!m&&b&&!t.critical&&!a.seenBefore;var n=t.critical||h&&(m||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,w=e.itemProp,I=e.loading,O=e.draggable,j=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,l.default)({opacity:j?1:0,transition:C?"opacity "+b+"ms":"none"},s),_="boolean"==typeof h?"lightgray":h,q={transitionDelay:b+"ms"},D=(0,l.default)({opacity:this.state.imgLoaded?0:1},C&&q,s,f),T={title:t,alt:this.state.isVisible?"":a,style:D,className:p};if(g){var V=g,M=V[0];return d.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),_&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:_,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&q)}),M.base64&&d.default.createElement(L,{src:M.base64,spreadProps:T,imageVariants:V,generateSources:E}),M.tracedSVG&&d.default.createElement(L,{src:M.tracedSVG,spreadProps:T,imageVariants:V,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,v(V),d.default.createElement(R,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:I,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:A((0,l.default)({alt:a,title:t,loading:I},M,{imageVariants:V}))}}))}if(m){var z=m,U=z[0],N=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:U.width,height:U.height},i);return"inherit"===i.display&&delete N.display,d.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(U.srcSet)},_&&d.default.createElement(y,{title:t,style:(0,l.default)({backgroundColor:_,width:U.width,opacity:this.state.imgLoaded?0:1,height:U.height},C&&q)}),U.base64&&d.default.createElement(L,{src:U.base64,spreadProps:T,imageVariants:z,generateSources:E}),U.tracedSVG&&d.default.createElement(L,{src:U.tracedSVG,spreadProps:T,imageVariants:z,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,v(z),d.default.createElement(R,{alt:a,title:t,width:U.width,height:U.height,sizes:U.sizes,src:U.src,crossOrigin:this.props.crossOrigin,srcSet:U.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:I,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:A((0,l.default)({alt:a,title:t,loading:I},U,{imageVariants:z}))}}))}return null},t}(d.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),x=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});j.propTypes={resolutions:C,sizes:x,fixed:c.default.oneOfType([C,c.default.arrayOf(C)]),fluid:c.default.oneOfType([x,c.default.arrayOf(x)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var _=j;t.default=_},220:function(e,t,a){"use strict";t.__esModule=!0,t.insertScript=function(e,t,a){var n=window.document.createElement("script");return n.async=!0,n.src=e,n.id=t,a.appendChild(n),n},t.removeScript=function(e,t){var a=window.document.getElementById(e);a&&t.removeChild(a)},t.debounce=function(e,t,a){var n;return function(){var r=this,i=arguments,o=a&&!n;window.clearTimeout(n),n=setTimeout(function(){n=null,a||e.apply(r,i)},t),o&&e.apply(r,i)}}},229:function(e,t,a){"use strict";var n=a(14);t.__esModule=!0,t.default=void 0;var r=n(a(230));t.Disqus=r.default;var i=n(a(231));t.CommentCount=i.default;var o=r.default;t.default=o},230:function(e,t,a){"use strict";var n=a(14);t.__esModule=!0,t.default=void 0;var r=n(a(133)),i=n(a(132)),o=n(a(67)),s=n(a(0)),l=n(a(51)),d=a(220);a(200);var c=function(e){function t(t){var a;return(a=e.call(this,t)||this).shortname="gerardnguyen",t.config?a.config=t.config:a.config={identifier:t.identifier,url:t.url,title:t.title},a}(0,o.default)(t,e);var a=t.prototype;return a.componentWillReceiveProps=function(e){this.setState(e)},a.componentWillMount=function(){"undefined"!=typeof window&&window.document&&this.shortname&&this.cleanInstance()},a.componentDidMount=function(){this.loadInstance()},a.shouldComponentUpdate=function(e){if(this.shortname!==e.shortname)return!0;var t=this.config,a=e.config;return t.url!==a.url||t.identifier!==a.identifier},a.componentDidUpdate=function(){this.loadInstance()},a.loadInstance=function(){if("undefined"!=typeof window&&window.document&&this.shortname){var e=this.config;window.disqus_config=function(){this.page.identifier=e.identifier,this.page.title=e.title,this.page.url=e.url},(0,d.insertScript)("https://"+this.shortname+".disqus.com/embed.js","disqus-embed-script",window.document.body)}},a.cleanInstance=function(){(0,d.removeScript)("disqus-embed-script",window.document.body),window&&window.DISQUS&&window.DISQUS.reset();try{delete window.DISQUS}catch(t){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild)},a.render=function(){var e=this.props,t=(e.config,(0,i.default)(e,["config"]));return s.default.createElement("div",(0,r.default)({id:"disqus_thread"},t,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:86},__self:this}))},t}(s.default.Component);t.default=c,c.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string}),identifier:l.default.string,title:l.default.string,url:l.default.string}},231:function(e,t,a){"use strict";var n=a(14);t.__esModule=!0,t.default=void 0;var r=n(a(133)),i=n(a(132)),o=n(a(67)),s=n(a(0)),l=n(a(51)),d=a(220),c=(0,d.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1),u=function(e){function t(t){var a;return(a=e.call(this,t)||this).shortname="gerardnguyen",a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.loadInstance()},a.shouldComponentUpdate=function(e){var t=this.props.config,a=e.config;return t.url!==a.url||t.identifier!==a.identifier},a.componentWillReceiveProps=function(e){this.setState(e)},a.componentDidUpdate=function(){this.loadInstance()},a.loadInstance=function(){window.document.getElementById("dsq-count-scr")?c():(0,d.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},a.cleanInstance=function(){(0,d.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},a.render=function(){var e=this.props,t=e.config,a=e.placeholder,n=(0,i.default)(e,["config","placeholder"]);return s.default.createElement("span",(0,r.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},n,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:55},__self:this}),a)},t}(s.default.Component);t.default=u,u.defaultProps={placeholder:"..."},u.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string}),placeholder:l.default.string}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-f72d58dd557fae0eb5ff.js.map