(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27f80ee7"],{5117:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),o={class:"doc-container"},i=Object(c["g"])("h1",null,"折叠面版: SaCollapse",-1),r=Object(c["g"])("p",null,[Object(c["i"])(" 折叠面板分通过 "),Object(c["g"])("mark",null,"visible"),Object(c["i"])(" 属性来展开/折叠， 通过 "),Object(c["g"])("mark",null,"content"),Object(c["i"])(" 具名插槽输入折叠内容，通过 "),Object(c["g"])("mark",null,"position"),Object(c["i"])(" 控制折叠方向 ")],-1),a={class:"demo"},l=Object(c["i"])("点击切换"),p=Object(c["i"])(" position-right "),s=Object(c["i"])("点击切换"),b=Object(c["i"])(" position-left "),u=Object(c["i"])("点击切换"),j=Object(c["i"])(" position-top "),f=Object(c["i"])("点击切换"),O=Object(c["i"])(" position-bottom ");function m(e,t,n,m,k,d){var v=Object(c["E"])("sa-button"),y=Object(c["E"])("sa-collapse");return Object(c["v"])(),Object(c["f"])("div",o,[Object(c["g"])("section",null,[i,r,Object(c["g"])("div",a,[Object(c["j"])(y,{visible:e.collapseDemo[0][0],position:"right"},{content:Object(c["L"])((function(){return[p]})),default:Object(c["L"])((function(){return[Object(c["j"])(v,{type:"primary",onClick:t[0]||(t[0]=function(t){return e.collapseDemo[0][0]=!e.collapseDemo[0][0]})},{default:Object(c["L"])((function(){return[l]})),_:1})]})),_:1},8,["visible"]),Object(c["j"])(y,{visible:e.collapseDemo[0][1],position:"left"},{content:Object(c["L"])((function(){return[b]})),default:Object(c["L"])((function(){return[Object(c["j"])(v,{type:"primary",onClick:t[1]||(t[1]=function(t){return e.collapseDemo[0][1]=!e.collapseDemo[0][1]})},{default:Object(c["L"])((function(){return[s]})),_:1})]})),_:1},8,["visible"]),Object(c["j"])(y,{visible:e.collapseDemo[0][2],position:"top"},{content:Object(c["L"])((function(){return[j]})),default:Object(c["L"])((function(){return[Object(c["j"])(v,{type:"primary",onClick:t[2]||(t[2]=function(t){return e.collapseDemo[0][2]=!e.collapseDemo[0][2]})},{default:Object(c["L"])((function(){return[u]})),_:1})]})),_:1},8,["visible"]),Object(c["j"])(y,{visible:e.collapseDemo[0][3],position:"bottom"},{content:Object(c["L"])((function(){return[O]})),default:Object(c["L"])((function(){return[Object(c["j"])(v,{type:"primary",onClick:t[3]||(t[3]=function(t){return e.collapseDemo[0][3]=!e.collapseDemo[0][3]})},{default:Object(c["L"])((function(){return[f]})),_:1})]})),_:1},8,["visible"])])])])}var k=n("bee2"),d=n("d4ec"),v=n("262e"),y=n("2caf"),g=n("9ab4"),D=n("ce1f"),L=n("7c5c"),h=n("6ab2"),x=n("b84f"),z=n("1ec6"),w=n("c36c"),P=function(e){Object(v["a"])(n,e);var t=Object(y["a"])(n);function n(){return Object(d["a"])(this,n),t.apply(this,arguments)}return Object(k["a"])(n)}(D["b"]);P=Object(g["a"])([Object(D["a"])({components:{IconPark:h["a"],SaTable:x["a"],SaButton:z["a"],SaCollapse:w["a"]},computed:{compiledMarkdown:function(e){return Object(L["marked"])(e,{gfm:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1})}},data:function(){return{collapseDemo:[[!1,!1,!1,!1]],collapse:[!1,!1,!1],value:["","SakanaCatcher","","","","",""],property:[["#id","属性","描述","类型","可选值","默认值"],[1,"type","icon标识","string","去iconPark官网看","-"],[2,"size","控icon大小","string","css长度单位","inherit"],[3,"reactive","是否可交互元素","boolean","-","false"],[4,"filled","是否为实心icon","boolean","-","false"],[5,"pain","交互模式选项","boolean","-","false"],[6,"color","icon颜色","string","primary,info,warning,error,success","info"]],article:[{content:'```vue\n<template>\n  <icon-park type="giftBox"/>\n  <icon-park type="gamePs" filled/>\n</template>\nscript:\n@Options({\n  components: {\n    IconPark,\n  },\n})\n```\n'},{content:'```vue\n<template>\n  <icon-park type="giftBox" size="30px"/>\n</template>\nscript:\n@Options({\n  components: {\n    IconPark,\n  },\n})\n```\n'},{content:'```vue\n<template>\n  <icon-park type="giftBox" color="primary" size="50px"/>\n  <icon-park type="gamePs" style="color: aqua" size="50px"/>\n</template>\nscript:\n@Options({\n  components: {\n    IconPark,\n  },\n})\n```\n'},{content:'```vue\n<template>\n  <icon-park type="filter" color="primary" reactive size="50px" />\n  <icon-park type="filter" color="primary" reactive pain size="50px" />\n  <br>  <icon-park type="like" color="error" reactive size="50px" filled />\n  <icon-park type="like" color="error" reactive pain size="50px" />\n</template>\nscript:\n@Options({\n  components: {\n    IconPark,\n  },\n})\n```\n'}]}},mounted:function(){for(var e in this.article)this.article[e].content=Object(L["marked"])(this.article[e].content)}})],P);var _=P,C=(n("abb7"),n("6b0d")),I=n.n(C);const S=I()(_,[["render",m]]);t["default"]=S},abb7:function(e,t,n){"use strict";n("af2c")},af2c:function(e,t,n){}}]);