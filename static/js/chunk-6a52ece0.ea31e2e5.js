(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a52ece0"],{"09f4":function(e,t,i){"use strict";i.d(t,"a",(function(){return s})),Math.easeInOutQuad=function(e,t,i,n){return e/=n/2,e<1?i/2*e*e+t:(e--,-i/2*(e*(e-2)-1)+t)};var n=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function a(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function l(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(e,t,i){var s=l(),o=e-s,r=20,c=0;t="undefined"===typeof t?500:t;var u=function e(){c+=r;var l=Math.easeInOutQuad(c,s,o,t);a(l),c<t?n(e):i&&"function"===typeof i&&i()};u()}},"27c4":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"filter-container"},[i("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"查询内容"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),i("el-select",{staticClass:"filter-item",staticStyle:{width:"130px","margin-left":"10px"},attrs:{placeholder:"查询类型",clearable:""},model:{value:e.listQuery.type,callback:function(t){e.$set(e.listQuery,"type",t)},expression:"listQuery.type"}},e._l(e.searchTypeOptions,(function(e){return i("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})})),1),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v(" 搜索 ")]),i("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v(" 添加社团 ")]),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{loading:e.downloadLoading,type:"primary",icon:"el-icon-download"},on:{click:e.handleDownload}},[e._v(" 下载数据 ")]),i("el-checkbox",{staticStyle:{"margin-left":"10px"},on:{change:e.getList},model:{value:e.listQuery.onlyWorking,callback:function(t){e.$set(e.listQuery,"onlyWorking",t)},expression:"listQuery.onlyWorking"}},[e._v("只显示活跃")])],1),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,border:"",fit:"","highlight-current-row":""},on:{"sort-change":e.sortChange}},[i("el-table-column",{attrs:{label:"#ID",prop:"id",sortable:"custom",align:"center",width:"100","class-name":e.getSortClass("id")},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[i("span",[e._v(e._s(n.id))])]}}])}),i("el-table-column",{attrs:{label:"公司名称",width:"150px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[i("span",[e._v(e._s(n.name))])]}}])}),i("el-table-column",{attrs:{label:"公司类型",width:"300px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[i("span",[e._v(e._s(n.label))])]}}])}),i("el-table-column",{attrs:{label:"负责人",align:"center",width:"100px"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[i("span",{staticClass:"link-type",on:{click:function(t){return e.toMember(n.id)}}},[e._v(" "+e._s(n.principal)+" ")])]}}])}),i("el-table-column",{attrs:{label:"成员",align:"center","min-width":"100px"},scopedSlots:e._u([{key:"default",fn:function(t){t.row;return[i("span",[e._v(" ————后续开发————")])]}}])}),i("el-table-column",{attrs:{label:"人数",align:"center",width:"205"},scopedSlots:e._u([{key:"default",fn:function(t){t.row;return[i("span",[e._v(" ————后续开发————")])]}}])}),i("el-table-column",{attrs:{label:"状态","class-name":"status-col",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[i("el-tag",{attrs:{type:e._f("statusFilter")(n.status)}},[e._v(" 后续 ")])]}}])}),i("el-table-column",{attrs:{label:"Actions",align:"center",width:"270","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row,a=t.$index;return[i("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.toDetail(n.id)}}},[e._v(" 详情 ")]),i("el-button",{attrs:{size:"mini"},on:{click:function(t){return e.handleUpdate(n)}}},[e._v(" 修改 ")]),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handleDelete(n,a)}}},[e._v(" 删除 ")]),i("el-button",{staticStyle:{"background-color":"#409EFF",color:"white"},attrs:{circle:"",icon:"el-icon-chat-dot-round"},on:{click:function(t){return e.toChat(n)}}})]}}])})],1),i("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getList}}),i("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{ref:"dataForm",staticStyle:{width:"90%","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"80px"}},[i("el-form-item",{attrs:{label:"社团名称:",prop:"name"}},[i("el-input",{staticStyle:{width:"70%"},model:{value:e.temp.name,callback:function(t){e.$set(e.temp,"name",t)},expression:"temp.name"}})],1),i("el-form-item",{attrs:{label:"社团级别:",prop:"level"}},[i("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择"},model:{value:e.temp.level,callback:function(t){e.$set(e.temp,"level",t)},expression:"temp.level"}},e._l(e.levelOptions,(function(e){return i("el-option",{key:e.key,attrs:{label:e.display_name,value:e.display_name}})})),1)],1),i("el-form-item",{attrs:{label:"社团状态:"}},[i("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择"},model:{value:e.temp.status,callback:function(t){e.$set(e.temp,"status",t)},expression:"temp.status"}},e._l(e.statusOptions,(function(e){return i("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),i("el-form-item",{attrs:{label:"社团简介:"}},[i("el-input",{attrs:{autosize:{minRows:2,maxRows:4},type:"textarea",placeholder:"Please input"},model:{value:e.temp.intro,callback:function(t){e.$set(e.temp,"intro",t)},expression:"temp.intro"}})],1),i("div",{staticClass:"text-danger"},[e._v("*社团成员在详情处设置")])],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(" 取消 ")]),i("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v(" 确定 ")])],1)],1),i("el-dialog",{staticStyle:{width:"450px",margin:"0 auto"},attrs:{title:"删除确认",visible:e.deleteDialogFormVisible},on:{"update:visible":function(t){e.deleteDialogFormVisible=t}}},[i("div",{ref:"dataForm",staticClass:"text-danger",staticStyle:{width:"100%"}},[i("span",[i("i",{staticClass:"el-icon-warning-outline"})]),e._v(" 删除数据将无法恢复 ")]),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.cancelData}},[e._v(" 取消 ")]),i("el-button",{attrs:{type:"danger"},on:{click:e.deleteData}},[e._v(" 确定 ")])],1)])],1)},a=[],l=(i("b0c0"),i("4e82"),i("a434"),i("d3b7"),i("3ca3"),i("ddb0"),i("d81d"),i("5d58")),s=i("6724"),o=i("ed08"),r=i("333d"),c=[{key:"name",display_name:"社团名称"}],u=c.reduce((function(e,t){return e[t.key]=t.display_name,e}),{}),d={name:"ComplexTable",components:{Pagination:r["a"]},directives:{waves:s["a"]},filters:{statusFilter:function(e){var t={"活跃":"success","暂停":"info","解散":"danger"};return t[e]},typeFilter:function(e){return u[e]}},data:function(){return{tableKey:0,list:null,total:0,listLoading:!0,listQuery:{page:1,limit:20,title:"",type:"",onlyWorking:!0},searchTypeOptions:c,levelOptions:[{key:"0",display_name:"兴趣社团"},{key:"1",display_name:"院级社团"},{key:"2",display_name:"校级社团"}],sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["活跃","暂停","解散"],showReviewer:!1,temp:{id:"",name:"",position:"",level:"",num:"",principal:"",status:"",intro:"",logo:"",expenditure:0},addDialogFormVisible:!1,dialogFormVisible:!1,deleteDialogFormVisible:!1,deleteTemp:-1,dialogStatus:"",textMap:{update:"编辑",create:"新建"},rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1}},created:function(){this.getList()},methods:{getList:function(){var e=this;Object(l["e"])(this.listQuery).then((function(t){var i=t.data.items;e.list=i,e.total=t.data.total,setTimeout((function(){e.listLoading=!1}),200)}))},toDetail:function(e){console.log(e),this.$router.push({path:"/org-info/detail/"+e})},toMember:function(e){this.$router.push({path:"/member/detail/"+e+"/"+(new Date).getTime()})},toChat:function(e){this.$router.push({path:"/inform/p2o/"+e.name+"/"+(new Date).getTime()})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleModifyStatus:function(e,t){this.$message({message:"操作Success",type:"success"}),e.status=t},sortChange:function(e){var t=e.prop,i=e.order;"id"===t&&this.sortByID(i)},sortByID:function(e){this.listQuery.sort="ascending"===e?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp={id:void 0,remark:"",timestamp:new Date,title:"",status:"活跃",type:"",expenditure:0}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},createData:function(){var e=this,t=Object.assign({},this.temp);createOrg(t).then((function(t){e.dialogFormVisible=!1,200===t.status&&(e.getList(),e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3}))}))},handleUpdate:function(e){var t=this;this.temp=Object.assign({},e),console.log(e),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},handleDelete:function(e,t){this.deleteDialogFormVisible=!0},updateData:function(){var e=this,t=Object.assign({},this.temp);updateOrg(t).then((function(t){e.dialogFormVisible=!1,200===t.status&&(e.getList(),e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3}))}))},cancelData:function(){this.deleteDialogFormVisible=!1,this.deleteTemp=-1},deleteData:function(){this.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3}),this.list.splice(this.deleteTemp,1),this.deleteTemp=-1,this.deleteDialogFormVisible=!1},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([i.e("chunk-519483dc"),i.e("chunk-181fab9f"),i.e("chunk-2125b98f")]).then(i.bind(null,"4bf8")).then((function(t){var i=["社团id","社团名称","社团级别","社团人数","负责人","状态","简介","logo"],n=["id","name","level","num","principal","status","intro","logo"],a=e.formatJson(n);t.export_json_to_excel({header:i,data:a,filename:"社团信息表（总）"}),e.downloadLoading=!1}))},formatJson:function(e){return this.list.map((function(t){return e.map((function(e){return"timestamp"===e?Object(o["c"])(t[e]):t[e]}))}))},getSortClass:function(e){var t=this.listQuery.sort;return t==="+".concat(e)?"ascending":"descending"}}},p=d,m=i("2877"),f=Object(m["a"])(p,n,a,!1,null,null,null);t["default"]=f.exports},"5d58":function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"e",(function(){return l})),i.d(t,"c",(function(){return s})),i.d(t,"d",(function(){return o})),i.d(t,"b",(function(){return r})),i.d(t,"k",(function(){return c}));var n=i("b775");function a(e,t){return Object(n["a"])({url:"/com/check/name/beforeUpdate",method:"get",params:{name:e,id:t}})}function l(e){return Object(n["a"])({url:"/com/list",method:"get",params:e})}function s(e){return Object(n["a"])({url:"/com/detail",method:"get",params:{id:e}})}function o(){return Object(n["a"])({url:"/com/detail/auth",method:"get"})}function r(e,t){return Object(n["a"])({url:"/com/member/delete",method:"get",params:{oid:e,uid:t}})}function c(e){return Object(n["a"])({url:"/com/update",method:"post",data:e})}},6724:function(e,t,i){"use strict";i("8d41");var n="@@wavesContext";function a(e,t){function i(i){var n=Object.assign({},t.value),a=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),l=a.ele;if(l){l.style.position="relative",l.style.overflow="hidden";var s=l.getBoundingClientRect(),o=l.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(s.width,s.height)+"px",l.appendChild(o)),a.type){case"center":o.style.top=s.height/2-o.offsetHeight/2+"px",o.style.left=s.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(i.pageY-s.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(i.pageX-s.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=a.color,o.className="waves-ripple z-active",!1}}return e[n]?e[n].removeHandle=i:e[n]={removeHandle:i},i}var l={bind:function(e,t){e.addEventListener("click",a(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[n].removeHandle,!1),e.addEventListener("click",a(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[n].removeHandle,!1),e[n]=null,delete e[n]}},s=function(e){e.directive("waves",l)};window.Vue&&(window.waves=l,Vue.use(s)),l.install=s;t["a"]=l},"8d41":function(e,t,i){}}]);