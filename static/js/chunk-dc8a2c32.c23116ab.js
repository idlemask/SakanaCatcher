(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dc8a2c32"],{5539:function(t,e,n){"use strict";n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return i})),n.d(e,"e",(function(){return r})),n.d(e,"d",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return l}));var s=n("b775");function o(){return Object(s["a"])({url:"/inform/p2p/list",method:"get"})}function i(t){return Object(s["a"])({url:"/inform/unRead/list",method:"get",params:t})}function r(){return Object(s["a"])({url:"/inform/p2o/list",method:"get"})}function a(t){return Object(s["a"])({url:"/inform/group/history",method:"get",params:t})}function c(t){return Object(s["a"])({url:"/inform/group/info",method:"get",params:{name:t}})}function u(t){return Object(s["a"])({url:"/inform/group/all",method:"get",params:{id:t}})}function l(t){return Object(s["a"])({url:"/inform/group/p2o/check",method:"get",params:{oid:t}})}},"5d58":function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"e",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return a})),n.d(e,"b",(function(){return c})),n.d(e,"k",(function(){return u}));var s=n("b775");function o(t,e){return Object(s["a"])({url:"/com/check/name/beforeUpdate",method:"get",params:{name:t,id:e}})}function i(t){return Object(s["a"])({url:"/com/list",method:"get",params:t})}function r(t){return Object(s["a"])({url:"/com/detail",method:"get",params:{id:t}})}function a(){return Object(s["a"])({url:"/com/detail/auth",method:"get"})}function c(t,e){return Object(s["a"])({url:"/com/member/delete",method:"get",params:{oid:t,uid:e}})}function u(t){return Object(s["a"])({url:"/com/update",method:"post",data:t})}},8023:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"message-list",attrs:{id:"message-box"}},[t.showHistory?t._e():n("el-button",{staticStyle:{"align-self":"center",padding:"5px"},attrs:{id:"btn-more",type:"info",round:""},on:{click:t.showMore}},[t._v("查看历史")]),t._l(t.history,(function(e,s){return n("div",{key:s,staticClass:"message-item",style:{"align-self":e.sender.id!==t.id?"flex-start":"flex-end"},attrs:{id:"dialog"+s}},[e.sender.id!==t.id?n("el-avatar",{attrs:{size:70,src:e.sender.avatar}}):t._e(),n("div",{staticClass:"message-item-content"},[n("div",{staticClass:"message-item-user",style:{"align-self":e.sender.id!==t.id?"flex-start":"flex-end"}},[t._v(" "+t._s(e.sender.name)+" "),n("span",[t._v(t._s(t._f("parseTime")(e.createTime,"{y}-{m}-{d} {h}:{i}")))])]),n("div",{class:"dialog-box-"+(e.sender.id!==t.id?"left":"right")},[n("div",{domProps:{innerHTML:t._s(e.content)}}),"dialog"!==e.type?n("div",{staticClass:"btn-bar"},[n("el-button",{attrs:{type:"primary"}},[t._v("同意")]),n("el-button",{attrs:{type:"danger"}},[t._v("拒绝")])],1):t._e()])]),e.sender.id===t.id?n("el-avatar",{attrs:{size:70,src:e.sender.avatar}}):t._e()],1)}))],2),n("el-form",{staticClass:"input-box"},[n("el-form-item",[n("el-input",{staticClass:"textarea",attrs:{autosize:{minRows:8,maxRows:8},type:"textarea"},model:{value:t.form.content,callback:function(e){t.$set(t.form,"content",e)},expression:"form.content"}})],1),n("el-form-item",{staticClass:"btn-bar"},[n("el-button",{attrs:{type:"primary"},on:{click:t.sendMsg}},[t._v("发送")]),n("el-button",[t._v("撤销")])],1)],1)],1)},o=[],i=(n("b0c0"),n("c740"),n("5539")),r=n("5d58"),a=(n("ed08"),n("5c96")),c=null,u={name:"P2O",data:function(){return{id:this.$store.getters.id,groupName:this.$route.params.name,groupId:-1,showHistory:!1,scrollListener:null,listQuery:{page:0,limit:5,groupName:this.$route.params.name},form:{message:"new dialog",content:"",senderId:this.$store.getters.id,type:"dialog",groupName:this.$route.params.name,senderName:this.$store.getters.name},loadingOptions:{target:".app-container",lock:!0,text:"Loading",spinner:"el-icon-loading"},history:[]}},computed:{listenWebsocket:function(){return this.$store.state.websocket.message}},watch:{listenWebsocket:function(t){var e=JSON.parse(t);if("new dialog"===e.message){var n=Object.assign({},JSON.parse(e.items));if(console.log(n),n.createTime=new Date(n.createTime).getTime(),this.history.push(n),n.sender.id===this.id){var s=document.getElementById("message-box");this.form.content="",setTimeout((function(){s.scrollTo({top:s.scrollHeight,behavior:"smooth"})}),200)}else this.$notify({title:n.sender.name,message:n.content.length>25?n.content.substring(0,25)+"...":n.content,type:"success",duration:4e3})}}},mounted:function(){var t=this;Object(r["fetchOrgByName"])(this.groupName).then((function(e){t.groupId=e.data.items.id,Object(i["a"])(t.groupId=e.data.items.id).then((function(e){200===e.status&&(Object(a["Message"])({message:"社团通知将会发送给所有社团成员",type:"info",duration:2e3}),t.getHistory())}),(function(e){t.$notify({title:"Error",message:"你无权访问该页面",type:"error",duration:500}),t.$store.dispatch("tagsView/delVisitedView",t.$route),t.$router.go(-1)}))}))},methods:{getElementTop:function(t){var e=t.offsetTop,n=t.offsetParent;while(null!==n)e+=n.offsetTop,n=n.offsetParent;return e},scrollTo:function(t,e){var n=document.getElementById(t),s=n.offsetTop,o=n.offsetParent,i=null;while(null!==o)s+=o.offsetTop,o=o.offsetParent;i="BackCompat"===document.compatMode?document.body.scrollTop:document.documentElement.scrollTop,document.getElementById("message-box").scrollTo(0,s-i+e)},showMore:function(){this.showHistory=!0,this.getHistory()},getHistory:function(){var t=this,e=document.getElementById("message-box"),n=this;this.listQuery.page++,c=a["Loading"].service(this.loadingOptions),n.listQuery.page<=2&&n.showHistory&&(n.scrollListener=function(){var t=document.getElementById("message-box");t.scrollTop<=0&&n.getHistory()},e.addEventListener("scroll",n.scrollListener)),Object(i["d"])(this.listQuery).then((function(n){for(var s in n.data.items)t.history.unshift(n.data.items[s]),t.history[0].createTime=new Date(t.history[0].createTime).getTime();setTimeout((function(){n.data.items.length>0?(console.log(n.data.items.length),t.listQuery.page>1&&null!==document.getElementById("dialog"+(n.data.items.length-1))&&t.scrollTo("dialog"+(n.data.items.length-1),0)):e.scrollTop<=0&&t.$notify({title:"已到顶部",message:"",type:"info",duration:1e3}),c.close()}),300)}))},sendMsg:function(){var t=Object.assign({},this.form);this.$store.dispatch("websocket/WEBSOCKET_SEND",JSON.stringify(t))},setTagsViewTitle:function(t){var e=this;this.$route.meta.title=t+"-通知";var n=this.$store.getters.visitedViews[this.$store.getters.visitedViews.findIndex((function(t){return t.path===e.$route.path}))];null!=n&&(n.title=t+"-通知")},setPageTitle:function(t){document.title="".concat(t)+"-通知"}}},l=u,d=(n("afb7"),n("2877")),m=Object(d["a"])(l,s,o,!1,null,"128a3697",null);e["default"]=m.exports},afb7:function(t,e,n){"use strict";n("c5a4")},c5a4:function(t,e,n){}}]);