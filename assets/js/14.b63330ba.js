(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{454:function(e,t,i){},458:function(e,t,i){},462:function(e,t,i){"use strict";i(454)},463:function(e,t,i){"use strict";i.r(t);i(14);var n=i(474),r=i(464),s=i(449);function a(e,t){if("group"===t.type){var i=t.path&&Object(s.e)(e,t.path),n=t.children.some((function(t){return"group"===t.type?a(e,t):"page"===t.type&&Object(s.e)(e,t.path)}));return i||n}return!1}var o={name:"SidebarLinks",components:{SidebarGroup:n.default,SidebarLink:r.default},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){var e=function(e,t){for(var i=0;i<t.length;i++){var n=t[i];if(a(e,n))return i}return-1}(this.$route,this.items);e>-1&&(this.openGroupIndex=e)},toggleGroup(e){this.openGroupIndex=e===this.openGroupIndex?-1:e},isActive(e){return Object(s.e)(this.$route,e.regularPath)}}},l=i(61),p=Object(l.a)(o,(function(){var e=this,t=e._self._c;return e.items.length?t("ul",{staticClass:"sidebar-links"},e._l(e.items,(function(i,n){return t("li",{key:n},["group"===i.type?t("SidebarGroup",{attrs:{item:i,open:n===e.openGroupIndex,collapsable:i.collapsable||i.collapsible,depth:e.depth},on:{toggle:function(t){return e.toggleGroup(n)}}}):t("SidebarLink",{attrs:{"sidebar-depth":e.sidebarDepth,item:i}})],1)})),0):e._e()}),[],!1,null,null,null);t.default=p.exports},464:function(e,t,i){"use strict";i.r(t);i(14),i(41),i(142),i(89);var n=i(449);function r(e,t,i,n,r){var s={props:{to:t,activeClass:"",exactActiveClass:""},class:{active:n,"sidebar-link":!0}};return r>2&&(s.style={"padding-left":r+"rem"}),e("RouterLink",s,i)}function s(e,t,i,a,o){var l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!t||l>o?null:e("ul",{class:"sidebar-sub-headers"},t.map((function(t){var p=Object(n.e)(a,i+"#"+t.slug);return e("li",{class:"sidebar-sub-header"},[r(e,i+"#"+t.slug,t.title,p,t.level-1),s(e,t.children,i,a,o,l+1)])})))}var a={functional:!0,props:["item","sidebarDepth"],render(e,t){var i=t.parent,a=i.$page,o=(i.$site,i.$route),l=i.$themeConfig,p=i.$themeLocaleConfig,u=t.props,c=u.item,d=u.sidebarDepth,h=Object(n.e)(o,c.path),b="auto"===c.type?h||c.children.some((function(e){return Object(n.e)(o,c.basePath+"#"+e.slug)})):h,f="external"===c.type?function(e,t,i){return e("a",{attrs:{href:t,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[i,e("OutboundLink")])}(e,c.path,c.title||c.path):r(e,c.path,c.title||c.path,b),m=[a.frontmatter.sidebarDepth,d,p.sidebarDepth,l.sidebarDepth,1].find((function(e){return void 0!==e})),v=p.displayAllHeaders||l.displayAllHeaders;return"auto"===c.type?[f,s(e,c.children,c.basePath,o,m)]:(b||v)&&c.headers&&!n.d.test(c.path)?[f,s(e,Object(n.c)(c.headers),c.path,o,m)]:f}},o=(i(462),i(61)),l=Object(o.a)(a,void 0,void 0,!1,null,null,null);t.default=l.exports},472:function(e,t,i){"use strict";i(458)},473:function(e,t,i){},474:function(e,t,i){"use strict";i.r(t);var n=i(449),r={name:"SidebarGroup",components:{DropdownTransition:i(460).default},props:["item","open","collapsable","depth"],beforeCreate(){this.$options.components.SidebarLinks=i(463).default},methods:{isActive:n.e}},s=(i(472),i(61)),a=Object(s.a)(r,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"sidebar-group",class:[{collapsable:e.collapsable,"is-sub-group":0!==e.depth},"depth-"+e.depth]},[e.item.path?t("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:e.open,active:e.isActive(e.$route,e.item.path)},attrs:{to:e.item.path},nativeOn:{click:function(t){return e.$emit("toggle")}}},[t("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?t("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]):t("p",{staticClass:"sidebar-heading",class:{open:e.open},on:{click:function(t){return e.$emit("toggle")}}},[t("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?t("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]),e._v(" "),t("DropdownTransition",[e.open||!e.collapsable?t("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:e.item.children,"sidebar-depth":e.item.sidebarDepth,"initial-open-group-index":e.item.initialOpenGroupIndex,depth:e.depth+1}}):e._e()],1)],1)}),[],!1,null,null,null);t.default=a.exports},482:function(e,t,i){"use strict";i(473)},502:function(e,t,i){"use strict";i.r(t);var n=i(463),r=i(483),s={name:"Sidebar",components:{SidebarLinks:n.default,NavLinks:r.default},props:["items"]},a=(i(482),i(61)),o=Object(a.a)(s,(function(){var e=this._self._c;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);t.default=o.exports}}]);