(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{M06k:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,c=e.size,i=void 0===c?24:c,s=o(e,["color","size"]);return r.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}),r.a.createElement("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),r.a.createElement("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),r.a.createElement("line",{x1:"3",y1:"10",x2:"21",y2:"10"}))}));c.displayName="Calendar",t.a=c},QeBL:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("lHIJ"),o=n("c/7L"),c=n.n(o),i=n("9Dj+"),s=n("+zwd"),m=n("nXCN"),u=n("vYwq"),d=n("9Wgw");t.default=function(e){var t=e.data,n=e.location,a=t.site.siteMetadata,l=t.portfolio.edges.map((function(e,t){return r.a.createElement(m.a,{data:e.node,key:"p-item-index-"+e.node.id,even:(t+1)%2==0})})),o=t.blog.edges.map((function(e){return r.a.createElement(u.a,{data:e.node,key:"b-item-index-"+e.node.id})}));return r.a.createElement(i.a,{front:!0,seo:{title:"Home",description:a.description},navPlaceholder:!1,location:n},r.a.createElement(f,{data:a}),""!==a.about&&r.a.createElement(p,{data:a.about}),r.a.createElement("div",{className:"px-4 lg:px-0",id:"portfolio"},l),r.a.createElement(g,null,o),r.a.createElement(v,{data:a.contact}))};var f=function(e){var t=e.data,n=Object(a.useRef)(null),o=t.twoColumnWall,i=Object(a.useState)({loaded:!1,supportsBlend:!1}),m=i[0],u=i[1];Object(a.useEffect)((function(){window.CSS&&!m.loaded&&CSS.supports("mix-blend-mode","screen")&&(n.current.classList.add("supports-blend"),u({loaded:!0,supportsBlend:!0}))}),[m.loaded]);var d={};!o&&t.titleImage&&(d.style={backgroundImage:"url('"+t.titleImage+"')"});var f=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"title bg-bg"},r.a.createElement("h1",{className:"text-6xl relative lg:text-7xl "+(t.capitalizeTitleOnHome?"uppercase":"")},r.a.createElement("span",d),t.title)),r.a.createElement("p",{className:"text-lg lg:text-xl text-color-2 pt-4 lg:pt-0"},t.introTag),r.a.createElement("p",{className:"text-base lg:text-lg mt-4"},t.description),r.a.createElement(c.a,{selector:"#portfolio"},r.a.createElement(s.a,{title:"Know more",type:"button",iconRight:r.a.createElement(l.a,null)})));return o?r.a.createElement("div",{className:"wall h-screen flex relative justify-center items-center overflow-hidden",ref:n},r.a.createElement("div",{className:"flex-1 lg:block absolute lg:relative w-full h-full top-0 left-0"},r.a.createElement("div",{className:"absolute left-0 top-0 w-full h-full lg:hidden",style:{background:"rgba(0,0,0,.75)"}}),r.a.createElement("img",{src:t.titleImage,alt:"",className:"h-full w-auto max-w-none lg:h-auto lg:w-full"})),r.a.createElement("div",{className:"flex-1 text-center p-3 relative z-10 lg:text-left lg:pl-8 text-white lg:text-color-default"},f)):r.a.createElement("div",{className:"wall h-screen flex flex-col justify-center items-center text-center",ref:n},f)},p=function(e){var t=e.data;return r.a.createElement("div",{className:"boxed"},r.a.createElement("div",{className:"px-4 py-20 text-center lg:py-40 lg:px-0"},r.a.createElement("h2",{className:"text-color-1 font-black text-5xl lg:text-6xl"},"About"),r.a.createElement("p",{className:"mt-5 text-lg"},t)))},g=function(e){var t=e.children;return r.a.createElement("div",{className:"container mx-auto px-0"},r.a.createElement("div",{className:"pt-20 pb-10 text-center lg:pt-40 lg:pb-20"},r.a.createElement("h2",{className:"text-color-1 font-black text-5xl lg:text-6xl"},"Blog")),r.a.createElement("div",{className:"flex flex-wrap"},t))},v=function(e){var t=e.data,n=t.api_url;return r.a.createElement("div",{className:"container mx-auto"},r.a.createElement("div",{className:"pt-20 pb-10 lg:pt-40 lg:pb-20 text-center"},r.a.createElement("h2",{className:"text-color-1 font-black text-5xl lg:text-6xl"},"Contact")),r.a.createElement("div",{className:"flex flex-wrap pb-40"},n&&r.a.createElement("div",{className:"w-full lg:w-1/2 px-4 lg:pl-2 lg:pr-6"},r.a.createElement(d.b,{api:t.api_url})),r.a.createElement("div",{className:"w-full "+(n?"lg:w-1/2":"lg:w-2/3 mx-auto")+" px-6 pt-8"},r.a.createElement(d.a,{data:t}))))}},"c/7L":function(e,t,n){"use strict";var a,r=(a=n("q1tI"))&&"object"==typeof a&&"default"in a?a.default:a;e.exports=function(e){function t(){var e={behavior:o?"smooth":"instant"};m&&(e.block="start",e.inline="nearest"),document.querySelector(a).scrollIntoView(e)}var n=e.children,a=e.selector,l=e.smooth,o=void 0===l||l,c=e.style,i=void 0===c?{}:c,s=e.alignToTop,m=void 0!==s&&s,u=e.className,d=void 0===u?"":u,f=e.onClick;return r.createElement("div",{style:i,className:d,onClick:function(e){"function"==typeof f?(f(e),setTimeout(t,1e3/60)):t()}},n)}},lHIJ:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=Object(a.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,c=e.size,i=void 0===c?24:c,s=o(e,["color","size"]);return r.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),r.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),r.a.createElement("polyline",{points:"12 5 19 12 12 19"}))}));c.displayName="ArrowRight",t.a=c},nXCN:function(e,t,n){"use strict";var a=n("rePB"),r=n("q1tI"),l=n.n(r),o=n("+zwd"),c=n("9eSz"),i=n.n(c),s=n("lHIJ"),m=n("dI71");var u=function(e){function t(t){var n;return(n=e.call(this,t)||this).getWindowHeight=function(){var e=window,t=document,n=t.documentElement,a=t.getElementsByTagName("body")[0];return e.innerHeight||n.clientHeight||a.clientHeight},n.getWindowWidth=function(){var e=window,t=document,n=t.documentElement,a=t.getElementsByTagName("body")[0];return e.innerWidth||n.clientWidth||a.clientWidth},n.isScrolledIntoView=function(e,t,a){if(void 0===t&&(t=0),!a)return!1;var r=e.getBoundingClientRect().top-t,l=e.getBoundingClientRect().bottom+t;return r<=n.getWindowHeight()&&l>=0},n.onScroll=function(){var e=Date.now();e-n.timestamp>=20&&n.isScrolledIntoView(n.node.current,100,n.canUseDom)&&(n.props.changePercentage({percentage:1-n.getRelativePosition(n.node.current,n.canUseDom)}),n.timestamp=e)},n.getPercentage=function(e,t,n){return(n-e)/(t-e)||0},n.getRelativePosition=function(e,t){if(!t)return 0;var a=e,r=a.getBoundingClientRect(),l=r.top,o=r.height,c=n.getNodeHeight(a),i=o>c?o:c,s=Math.round(l>i?i:l);return n.getPercentage(-o,i,s)},n.node=l.a.createRef(),n.timestamp=0,n.canUseDom=!("undefined"==typeof window||!window.document||!window.document.createElement),n.state={percentage:0},n}Object(m.a)(t,e);var n=t.prototype;return n.getNodeHeight=function(e){return e&&"clientHeight"in e?e.clientHeight:this.getWindowHeight()},n.componentDidMount=function(){this.getWindowWidth()>1024&&window.addEventListener("scroll",this.onScroll)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.onScroll)},n.render=function(){return l.a.createElement("div",{ref:this.node},this.props.children)},t}(l.a.Component);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=e.data,n=e.even,a=Object(r.useState)({animated:!1,percentage:0}),c=a[0],m=a[1],d=function(e){return m(f(f({},c),e))},p=Object(r.useRef)(0);return Object(r.useEffect)((function(){var e,t,n,a;p.current=Math.min((e=window,t=document,n=t.documentElement,a=t.getElementsByTagName("body")[0],(e.innerHeight||n.clientHeight||a.clientHeight)/2),300)*Math.max(0,c.percentage-.3),function(){var e=window,t=document,n=t.documentElement,a=t.getElementsByTagName("body")[0];return e.innerWidth||n.clientWidth||a.clientWidth}()<1024&&d({animated:!0})}),[c.percentage]),c.percentage>.3&&!c.animated&&d({animated:!0}),l.a.createElement(u,{changePercentage:d},l.a.createElement("div",{className:"large-container mx-auto"},l.a.createElement("div",{className:"my-4 py-8 lg:py-24 portfolio-item md:flex "+(c.animated?"begin-animation":"")+" "+(n?"even flex-row-reverse":"")},l.a.createElement("div",{className:"relative flex-1"},l.a.createElement("div",{className:"image relative z-10",style:{transform:"translate(0px,"+p.current+"px)"}},l.a.createElement(i.a,{fluid:t.frontmatter.image.childImageSharp.fluid,alt:t.frontmatter.title}))),l.a.createElement("div",{className:"flex-1 flex md:px-4 lg:px-6 items-center"},l.a.createElement("div",{className:"flex flex-1 flex-wrap  "+(n?"md:justify-end md:text-right":"")},l.a.createElement("h3",{className:"text-color-1 text-5xl font-black to-up"},t.frontmatter.title),l.a.createElement("p",{className:"lg:mt-4 to-up"},t.frontmatter.description),l.a.createElement(o.a,{to:t.fields.slug,label:"View "+t.frontmatter.title,title:"View",iconRight:l.a.createElement(s.a,null)}))))))}},vYwq:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("Wbzz"),o=n("9eSz"),c=n.n(o),i=n("M06k");t.a=function(e){var t=e.data,n=Object(a.useState)(!1),o=n[0],s=n[1];return r.a.createElement("div",{className:"blog-item w-full md:w-1/2 lg:w-1/3 p-4"},r.a.createElement("div",{className:"transition-all duration-300 hover:shadow-2xl shadow "+(o&&"focused")},r.a.createElement(l.a,{to:t.fields.slug,title:t.frontmatter.title,onFocus:function(){return s(!0)},onBlur:function(){return s(!1)}},r.a.createElement("div",{className:"image"},r.a.createElement(c.a,{fluid:t.frontmatter.image.childImageSharp.fluid,alt:t.frontmatter.title,className:"w-full"})),r.a.createElement("div",{className:"p-4 py-3"},r.a.createElement("h4",{className:"text-color-2 font-black text-3xl pt-1"},t.frontmatter.title),r.a.createElement("div",{className:"flex items-center text-secondary"},r.a.createElement(i.a,{className:"stroke-current"}),r.a.createElement("p",{className:"pl-2 text-color-default font-sans"},t.frontmatter.date)),r.a.createElement("p",{className:"pt-3 text-color-default"},t.frontmatter.description)))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-64146f22d714b39d7788.js.map