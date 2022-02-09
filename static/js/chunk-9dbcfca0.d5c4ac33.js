(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9dbcfca0"],{"9fd0":function(n,e,t){},dd5b:function(n,e,t){"use strict";t("9fd0")},ec29:function(n,e,t){"use strict";t.r(e);var l=t("7a23"),c={class:"doc-container"},o=Object(l["g"])("h1",null,"输入框 sa-input",-1),a=Object(l["g"])("h2",null,"1.基础用法",-1),i=Object(l["i"])(" sa-input 支持使用 "),u=Object(l["g"])("mark",null,"v-model",-1),r=Object(l["i"])(" 进行数据的双向绑定, 当输入框有数据时默认会显示 "),s=Object(l["i"])(" clear 按钮，点击 "),b=Object(l["g"])("mark",null,"clear",-1),p=Object(l["i"])(" 即可清除输入框数据并回传相关事件 "),j=Object(l["g"])("br",null,null,-1),d=Object(l["g"])("p",null,[Object(l["g"])("strong",null,"案例：")],-1),O=Object(l["g"])("br",null,null,-1),m={class:"demo"},g=["innerHTML"],f=Object(l["g"])("h2",null,"2.基础：添加 label",-1),v=Object(l["g"])("p",null,[Object(l["i"])("sa-input 支持使用 "),Object(l["g"])("mark",null,"label"),Object(l["i"])(" 属性进行输入框的输入内容标识")],-1),h=Object(l["g"])("br",null,null,-1),k=Object(l["g"])("br",null,null,-1),L=Object(l["g"])("p",null,[Object(l["g"])("strong",null,"label案例：")],-1),x=Object(l["g"])("br",null,null,-1),y={class:"demo"},w=["innerHTML"],V=Object(l["g"])("h2",null,"3.基础：添加 icon",-1),H=Object(l["g"])("p",null,[Object(l["i"])(" SakanaCatcher 使用 "),Object(l["g"])("a",{href:"https://iconpark.oceanengine.com/home"},"iconPark库"),Object(l["i"])(" 进行icon 引入, 你可以从"),Object(l["g"])("a",{href:"https://iconpark.oceanengine.com/home"},"iconPark库"),Object(l["i"])("寻找icon 将其对于的名字输入到 "),Object(l["g"])("mark",null,"icon"),Object(l["i"])(" 属性，即可引用 ")],-1),S=Object(l["g"])("br",null,null,-1),C=Object(l["g"])("br",null,null,-1),T=Object(l["g"])("p",null,[Object(l["g"])("strong",null,"icon 案例：")],-1),I=Object(l["g"])("br",null,null,-1),M={class:"demo"},U=["innerHTML"],_=Object(l["h"])('<br><p> 还可以更改 <mark>iconColor</mark> 属性,修改icon 颜色,可选值有 <span class="text-primary">primary</span>, <span class="text-info">info</span>, <span class="text-success">success</span>, <span class="text-error"> error</span>, <span class="text-warning">warning</span>, <span>rgb()</span>,<span>raba()</span>, <span>black </span>等 </p><br><br><p><strong>icon iconColor案例：</strong></p><br>',6),z={class:"demo"},E=["innerHTML"],D=Object(l["g"])("h2",null,"4.基础：长度限制 max",-1),G=Object(l["g"])("p",null,[Object(l["i"])("你可以通过 "),Object(l["g"])("mark",null,"max"),Object(l["i"])(" 属性来限制输入的长度")],-1),$=Object(l["g"])("br",null,null,-1),P=Object(l["g"])("br",null,null,-1),A=Object(l["g"])("p",null,[Object(l["g"])("strong",null,"icon 案例：")],-1),J=Object(l["g"])("p",{class:"text-info",style:{"font-size":"12px"}},"//长度限制为5",-1),B={class:"demo"},q=["innerHTML"],F=Object(l["g"])("br",null,null,-1),K=Object(l["g"])("h2",null,"5.基础：错误提醒 errHint",-1),N=Object(l["g"])("p",null,[Object(l["i"])(" 表单校验完成后，你可以通过 sa-input 的内部方法 "),Object(l["g"])("mark",null,"handleErrHint"),Object(l["i"])(" 对用户输入的进行引导, 你可自己把握时机调用 "),Object(l["g"])("mark",null,"clearErrHint"),Object(l["i"])(" 即可清空提醒 ")],-1),Q=Object(l["g"])("br",null,null,-1),R=Object(l["g"])("br",null,null,-1),W=Object(l["g"])("p",null,[Object(l["g"])("strong",null,"icon 案例：")],-1),X=Object(l["g"])("br",null,null,-1),Y={class:"demo"},Z=["innerHTML"],nn=Object(l["g"])("br",null,null,-1),en=Object(l["g"])("h2",null,"6.进阶：自定义样式",-1),tn=Object(l["g"])("p",null," 如果你不满与局部的样式，或者与你的预期不符可以进行自定义样式，组件结构如下 ",-1),ln=["innerHTML"],cn=Object(l["g"])("h2",null,"7.属性",-1);function on(n,e,t,on,an,un){var rn=Object(l["E"])("IconPark"),sn=Object(l["E"])("SaInput"),bn=Object(l["E"])("sa-button"),pn=Object(l["E"])("sa-collapse"),jn=Object(l["E"])("sa-table");return Object(l["v"])(),Object(l["f"])("div",c,[o,Object(l["g"])("section",null,[a,Object(l["g"])("p",null,[i,u,r,Object(l["j"])(rn,{type:"closeOne"}),s,b,p]),j,d,O,Object(l["g"])("div",m,[Object(l["j"])(sn,{modelValue:n.value[0],"onUpdate:modelValue":e[0]||(e[0]=function(e){return n.value[0]=e}),placeholder:"placeholder"},null,8,["modelValue"])]),Object(l["j"])(pn,{visible:n.collapse[0]},{content:Object(l["L"])((function(){return[Object(l["g"])("div",{class:"code",style:{height:"289px",width:"900px"},innerHTML:n.article[0].content},null,8,g)]})),default:Object(l["L"])((function(){return[Object(l["j"])(bn,{icon:n.collapse[0]?"doubleUp":"doubleDown",onClick:e[1]||(e[1]=function(e){return n.collapse[0]=!n.collapse[0]}),"icon-position":"bottom","disable-round":"top",type:"primary"},{default:Object(l["L"])((function(){return[Object(l["i"])(Object(l["G"])(n.collapse[0]?"折叠":"点击查看代码"),1)]})),_:1},8,["icon"])]})),_:1},8,["visible"])]),Object(l["g"])("section",null,[f,v,h,k,L,x,Object(l["g"])("div",y,[Object(l["j"])(sn,{label:"用户名:",modelValue:n.value[1],"onUpdate:modelValue":e[2]||(e[2]=function(e){return n.value[1]=e}),placeholder:""},null,8,["modelValue"])]),Object(l["j"])(pn,{visible:n.collapse[1]},{content:Object(l["L"])((function(){return[Object(l["g"])("div",{class:"code",style:{height:"289px",width:"900px"},innerHTML:n.article[1].content},null,8,w)]})),default:Object(l["L"])((function(){return[Object(l["j"])(bn,{icon:n.collapse[1]?"doubleUp":"doubleDown",onClick:e[3]||(e[3]=function(e){return n.collapse[1]=!n.collapse[1]}),"icon-position":"bottom","disable-round":"top",type:"primary"},{default:Object(l["L"])((function(){return[Object(l["i"])(Object(l["G"])(n.collapse[1]?"折叠":"点击查看代码"),1)]})),_:1},8,["icon"])]})),_:1},8,["visible"])]),Object(l["g"])("section",null,[V,H,S,C,T,I,Object(l["g"])("div",M,[Object(l["j"])(sn,{label:"用户名:",modelValue:n.value[3],"onUpdate:modelValue":e[4]||(e[4]=function(e){return n.value[3]=e}),icon:"user","icon-size":"24px"},null,8,["modelValue"])]),Object(l["j"])(pn,{visible:n.collapse[2]},{content:Object(l["L"])((function(){return[Object(l["g"])("div",{class:"code",style:{height:"378px",width:"900px"},innerHTML:n.article[2].content},null,8,U)]})),default:Object(l["L"])((function(){return[Object(l["j"])(bn,{icon:n.collapse[2]?"doubleUp":"doubleDown",onClick:e[5]||(e[5]=function(e){return n.collapse[2]=!n.collapse[2]}),"icon-position":"bottom","disable-round":"top",type:"primary"},{default:Object(l["L"])((function(){return[Object(l["i"])(Object(l["G"])(n.collapse[2]?"折叠":"点击查看代码"),1)]})),_:1},8,["icon"])]})),_:1},8,["visible"]),_,Object(l["g"])("div",z,[Object(l["j"])(sn,{label:"用户名:",modelValue:n.value[3],"onUpdate:modelValue":e[6]||(e[6]=function(e){return n.value[3]=e}),icon:"user",iconColor:"primary","icon-size":"24px"},null,8,["modelValue"])]),Object(l["j"])(pn,{visible:n.collapse[3]},{content:Object(l["L"])((function(){return[Object(l["g"])("div",{class:"code",style:{height:"396px",width:"900px"},innerHTML:n.article[3].content},null,8,E)]})),default:Object(l["L"])((function(){return[Object(l["j"])(bn,{icon:n.collapse[3]?"doubleUp":"doubleDown",onClick:e[7]||(e[7]=function(e){return n.collapse[3]=!n.collapse[3]}),"icon-position":"bottom","disable-round":"top",type:"primary"},{default:Object(l["L"])((function(){return[Object(l["i"])(Object(l["G"])(n.collapse[3]?"折叠":"点击查看代码"),1)]})),_:1},8,["icon"])]})),_:1},8,["visible"])]),Object(l["g"])("section",null,[D,G,$,P,A,J,Object(l["g"])("div",B,[Object(l["j"])(sn,{modelValue:n.value[4],"onUpdate:modelValue":e[8]||(e[8]=function(e){return n.value[4]=e}),max:5},null,8,["modelValue"])]),Object(l["j"])(pn,{visible:n.collapse[4]},{content:Object(l["L"])((function(){return[Object(l["g"])("div",{class:"code",style:{height:"342px",width:"900px"},innerHTML:n.article[4].content},null,8,q)]})),default:Object(l["L"])((function(){return[Object(l["j"])(bn,{icon:n.collapse[4]?"doubleUp":"doubleDown",onClick:e[9]||(e[9]=function(e){return n.collapse[4]=!n.collapse[4]}),"icon-position":"bottom","disable-round":"top",type:"primary"},{default:Object(l["L"])((function(){return[Object(l["i"])(Object(l["G"])(n.collapse[4]?"折叠":"点击查看代码"),1)]})),_:1},8,["icon"])]})),_:1},8,["visible"]),F]),Object(l["g"])("section",null,[K,N,Q,R,W,X,Object(l["g"])("div",Y,[Object(l["j"])(sn,{ref:"username",label:"用户名:",modelValue:n.value[5],"onUpdate:modelValue":e[10]||(e[10]=function(e){return n.value[5]=e}),icon:"user","icon-size":"24px"},null,8,["modelValue"])]),Object(l["j"])(pn,{visible:n.collapse[5]},{content:Object(l["L"])((function(){return[Object(l["g"])("div",{class:"code",style:{height:"396px",width:"900px"},innerHTML:n.article[5].content},null,8,Z)]})),default:Object(l["L"])((function(){return[Object(l["j"])(bn,{icon:n.collapse[5]?"doubleUp":"doubleDown",onClick:e[11]||(e[11]=function(e){return n.collapse[5]=!n.collapse[5]}),"icon-position":"bottom","disable-round":"top",type:"primary"},{default:Object(l["L"])((function(){return[Object(l["i"])(Object(l["G"])(n.collapse[5]?"折叠":"点击查看代码"),1)]})),_:1},8,["icon"])]})),_:1},8,["visible"]),nn]),Object(l["g"])("section",null,[en,tn,Object(l["g"])("div",{class:"code",innerHTML:n.article[6].content},null,8,ln)]),Object(l["g"])("section",null,[cn,Object(l["j"])(jn,{ref:"table",modelValue:n.property,"onUpdate:modelValue":e[12]||(e[12]=function(e){return n.property=e}),mode:"limit"},null,8,["modelValue"])])])}var an=t("bee2"),un=t("d4ec"),rn=t("262e"),sn=t("2caf"),bn=t("9ab4"),pn=t("ce1f"),jn=t("7c5c"),dn=t("b84f"),On=t("ff9f"),mn=t("4f91"),gn=t("c36c"),fn=t("1ec6"),vn=function(n){Object(rn["a"])(t,n);var e=Object(sn["a"])(t);function t(){return Object(un["a"])(this,t),e.apply(this,arguments)}return Object(an["a"])(t)}(pn["b"]);vn=Object(bn["a"])([Object(pn["a"])({components:{SaInput:mn["a"],SaTable:dn["a"],IconPark:On["a"],SaButton:fn["a"],SaCollapse:gn["a"]},computed:{compiledMarkdown:function(n){return Object(jn["marked"])(n,{gfm:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1})}},data:function(){return{collapse:[!1,!1,!1,!1],value:["","SakanaCatcher","","","","",""],property:[["#id","属性","描述","类型","可选值","默认值"],[1,"type","属性","string","text,number,tel……等原生input属性","text"],[2,"size","控制input大小","string","small,normal,large","normal"],[3,"placeholder","输入框内容提示信息","string","-",""],[4,"rounded","是否为圆角输入框","boolean","-","true"],[5,"label","输入框输入内容提示","string","-",""],[6,"icon","输入框icon显示","boolean","见 https://iconpark.oceanengine.com",""],[7,"iconColor","icon颜色设置","string","各种颜色值 + 类型","info"],[8,"clearUp","清除按钮可见","boolean","-","true"],[9,"max","输入框字数限制","boolean","-","true"],[10,"width","输入框真实长度","string","css 支持的长度","true"]],article:[{content:'```vue\n<template>\n  <SaInput v-model="value" placeholder="placeholder" />\n</template>\nscript:\n@Options({\n  components: {\n    SaInput,\n  },\n  data() {\n    return {\n      value: "",\n    };\n  }\n})\n```\n'},{content:'```vue\n<template>\n  <SaInput label="用户名:" v-model="value" placeholder="placeholder" />\n</template>\nscript:\n@Options({\n  components: {\n    SaInput,\n  },\n  data() {\n    return {\n      value: "",\n    };\n  }\n})\n```\n'},{content:'```vue\n<template>\n  <SaInput\n     label="用户名:" \n     v-model="value"\n     placeholder="placeholder"\n     icon="user"\n  />\n</template>\nscript:\n@Options({\n  components: {\n    SaInput,\n  },\n  data() {\n    return {\n      value: "",\n    };\n  }\n})\n```\n'},{content:'```vue\n<template>\n  <SaInput\n     label="用户名:" \n     v-model="value"\n     placeholder="placeholder"\n     icon="user"\n     iconColor="primary"\n  />\n</template>\nscript:\n@Options({\n  components: {\n    SaInput,\n  },\n  data() {\n    return {\n      value: "",\n    };\n  }\n})\n```\n'},{content:'```vue\n<template>\n  <SaInput\n     v-model="value"\n     :max="5"\n  />\n</template>\nscript:\n@Options({\n  components: {\n    SaInput,\n  },\n  data() {\n    return {\n      value: "",\n    };\n  }\n})\n```\n'},{content:'```vue\n<template>\n  <SaInput\n     label="用户名:" \n     v-model="value"\n     placeholder="placeholder"\n     icon="user"\n     ref="user"\n  />\n</template>\nscript:\n@Options({\n  components: {\n    SaInput,\n  },\n  data() {\n    return {\n      value: "",\n    };\n  },\n  mounted(){\n    this.$refs.user.handleErrHint(\'请按格式输入\')\n  }\n})\n```\n'},{content:'``` vue \n\\\\取决于你选择的size,默认为normal\n<div:class="sa-input-border-\' + size">\\\\取决于你选择的size,默认为normal\n    <div class="sa-input-inner">\n      <label class="sa-input-inner-label"/>\n      <input class="sa-pure-input"/>\n      <span class="reactive-icon"/>\n      \\\\取决于iconColor,为primary 或custom  \n      <span :class="\'icon-\' + iconColorSuffix"/> \n    </div>\n    <span class="sa-input-error"></span>\n</div>\n```'}]}},mounted:function(){var n=this;for(var e in this.article)this.article[e].content=Object(jn["marked"])(this.article[e].content);this.$refs.username.handleErrHint("请按格式输入"),this.$nextTick((function(){n.$refs.table.setTCAlignOfCols("left",1,2,4),n.$refs.table.setTHAlignOfCols("left",1,2)}))}})],vn);var hn=vn,kn=(t("dd5b"),t("6b0d")),Ln=t.n(kn);const xn=Ln()(hn,[["render",on]]);e["default"]=xn}}]);