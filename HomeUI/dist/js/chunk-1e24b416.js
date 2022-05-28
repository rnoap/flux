(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e24b416"],{"11b4":function(e,t,a){"use strict";a("9cf8")},"761b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h6",{staticClass:"mb-1"},[e._v(" Click the 'Download File' button to download the log. This may take a few minutes depending on file size. ")]),a("h6",{staticClass:"mb-1"},[e._v(" Click the 'Show File' button to view the last 100 lines of the log file. ")]),a("b-row",e._l(e.logTypes,(function(t){return a("b-col",{key:t},[a("b-card",{attrs:{title:e.capitalizeWord(t)+" File"}},[a("div",[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{id:"start-download-"+t,variant:"outline-primary",size:"md",block:""}},[e._v(" Download File ")]),e.total[t]&&e.downloaded[t]?a("div",{staticClass:"d-flex",staticStyle:{width:"300px"}},[a("b-card-text",{staticClass:"mt-1 mb-0 mr-auto"},[e._v(" "+e._s((e.downloaded[t]/1e6).toFixed(2)+" / "+(e.total[t]/1e6).toFixed(2))+" MB - "+e._s((e.downloaded[t]/e.total[t]*100).toFixed(2)+"%")+" ")]),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"btn-icon cancel-button",attrs:{variant:"danger",size:"sm"},on:{click:function(a){return e.cancelDownload(t)}}},[e._v(" x ")])],1):e._e(),a("b-popover",{ref:"popover",refInFor:!0,attrs:{target:"start-download-"+t,triggers:"click",show:e.downloadPopoverShow[t],placement:"auto",container:"my-container"},on:{"update:show":function(a){return e.$set(e.downloadPopoverShow,t,a)}},scopedSlots:e._u([{key:"title",fn:function(){return[a("div",{staticClass:"d-flex justify-content-between align-items-center"},[a("span",[e._v("Are You Sure?")]),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:function(a){return e.onDownloadClose(t)}}},[a("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[e._v("×")])])],1)]},proxy:!0}],null,!0)},[a("div",[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:function(a){return e.onDownloadClose(t)}}},[e._v(" Cancel ")]),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:function(a){return e.onDownloadOk(t)}}},[e._v(" Download "+e._s(e.capitalizeWord(t))+" ")])],1)]),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1 mt-1",attrs:{id:"start-tail-"+t,variant:"outline-primary",size:"md",block:""}},[e._v(" Show File ")]),a("b-popover",{ref:"popover",refInFor:!0,attrs:{target:"start-tail-"+t,triggers:"click",show:e.tailPopoverShow[t],placement:"auto",container:"my-container"},on:{"update:show":function(a){return e.$set(e.tailPopoverShow,t,a)}},scopedSlots:e._u([{key:"title",fn:function(){return[a("div",{staticClass:"d-flex justify-content-between align-items-center"},[a("span",[e._v("Are You Sure?")]),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:function(a){return e.onTailClose(t)}}},[a("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[e._v("×")])])],1)]},proxy:!0}],null,!0)},[a("div",[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:function(a){return e.onTailClose(t)}}},[e._v(" Cancel ")]),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:function(a){return e.onTailOk(t)}}},[e._v(" Show "+e._s(e.capitalizeWord(t))+" ")])],1)])],1)])],1)})),1),e.callResponse.data.message?a("b-card",[a("b-form-textarea",{staticClass:"mt-1",attrs:{plaintext:"","no-resize":"",rows:"30",value:e.callResponse.data.message}})],1):e._e()],1)},o=[],r=a("c7eb"),i=a("1da1"),c=(a("a15b9"),a("4de4"),a("d3b7"),a("ac1f"),a("1276"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),a("fb6a"),a("205f")),s=a("b28b"),l=a("a15b"),u=a("1947"),d=a("3828"),p=a("9c7d"),f=a("d6e4"),b=a("b307"),m=a("e009"),g=a("bc3a"),v=a.n(g),h=a("867f"),w={components:{BCard:c["a"],BCol:s["a"],BRow:l["a"],BButton:u["a"],BPopover:d["a"],BFormTextarea:p["a"],BCardText:f["a"],ToastificationContent:b["a"]},directives:{Ripple:m["a"]},data:function(){return{downloadPopoverShow:{},tailPopoverShow:{},abortToken:{},downloaded:{},total:{},callResponse:{status:"",data:{}},logTypes:["error","warn","info","debug"]}},computed:{fluxLogTail:function(){return this.callResponse.data.message?this.callResponse.data.message.split("\n").reverse().filter((function(e){return""!==e})).join("\n"):this.callResponse.data}},methods:{cancelDownload:function(e){this.abortToken[e].cancel("User download cancelled"),this.downloaded[e]="",this.total[e]=""},onDownloadClose:function(e){this.downloadPopoverShow[e]=!1},onDownloadOk:function(e){var t=this;return Object(i["a"])(Object(r["a"])().mark((function a(){var n,o,i,c,s,l,u,d;return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t,n.abortToken[e]&&n.abortToken[e].cancel(),t.downloadPopoverShow[e]=!1,o=v.a.CancelToken,i=o.source(),t.abortToken[e]=i,c=localStorage.getItem("zelidauth"),s={headers:{zelidauth:c},responseType:"blob",onDownloadProgress:function(t){n.downloaded[e]=t.loaded,n.total[e]=t.total,n.$forceUpdate()},cancelToken:n.abortToken[e].token},a.next=10,h["a"].justAPI().get("/flux/".concat(e,"log"),s);case 10:l=a.sent,u=window.URL.createObjectURL(new Blob([l.data])),d=document.createElement("a"),d.href=u,d.setAttribute("download","".concat(e,".log")),document.body.appendChild(d),d.click();case 17:case"end":return a.stop()}}),a)})))()},onTailClose:function(e){this.tailPopoverShow[e]=!1},onTailOk:function(e){var t=this;return Object(i["a"])(Object(r["a"])().mark((function a(){var n;return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.tailPopoverShow[e]=!1,n=localStorage.getItem("zelidauth"),h["a"].tailFluxLog(e,n).then((function(e){"error"===e.data.status?t.$toast({component:b["a"],props:{title:e.data.data.message||e.data.data,icon:"InfoIcon",variant:"danger"}}):(t.callResponse.status=e.data.status,t.callResponse.data=e.data.data)})).catch((function(a){t.$toast({component:b["a"],props:{title:"Error while trying to get latest ".concat(e," log"),icon:"InfoIcon",variant:"danger"}}),console.log(a)}));case 3:case"end":return a.stop()}}),a)})))()},capitalizeWord:function(e){return e[0].toUpperCase()+e.slice(1)}}},x=w,j=(a("11b4"),a("2877")),k=Object(j["a"])(x,n,o,!1,null,null,null);t["default"]=k.exports},"867f":function(e,t,a){"use strict";a("e9c4"),a("99af");var n=a("b4c0");t["a"]={softUpdateFlux:function(e){return Object(n["a"])().get("/flux/softupdateflux",{headers:{zelidauth:e}})},softUpdateInstallFlux:function(e){return Object(n["a"])().get("/flux/softupdatefluxinstall",{headers:{zelidauth:e}})},updateFlux:function(e){return Object(n["a"])().get("/flux/updateflux",{headers:{zelidauth:e}})},hardUpdateFlux:function(e){return Object(n["a"])().get("/flux/hardupdateflux",{headers:{zelidauth:e}})},rebuildHome:function(e){return Object(n["a"])().get("/flux/rebuildhome",{headers:{zelidauth:e}})},updateDaemon:function(e){return Object(n["a"])().get("/flux/updatedaemon",{headers:{zelidauth:e}})},reindexDaemon:function(e){return Object(n["a"])().get("/flux/reindexdaemon",{headers:{zelidauth:e}})},updateBenchmark:function(e){return Object(n["a"])().get("/flux/updatebenchmark",{headers:{zelidauth:e}})},getFluxVersion:function(){return Object(n["a"])().get("/flux/version")},broadcastMessage:function(e,t){var a=t,o={headers:{zelidauth:e}};return Object(n["a"])().post("/flux/broadcastmessage",JSON.stringify(a),o)},connectedPeers:function(){return Object(n["a"])().get("/flux/connectedpeers?timestamp=".concat((new Date).getTime()))},connectedPeersInfo:function(){return Object(n["a"])().get("/flux/connectedpeersinfo?timestamp=".concat((new Date).getTime()))},incomingConnections:function(){return Object(n["a"])().get("/flux/incomingconnections?timestamp=".concat((new Date).getTime()))},incomingConnectionsInfo:function(){return Object(n["a"])().get("/flux/incomingconnectionsinfo?timestamp=".concat((new Date).getTime()))},addPeer:function(e,t){return Object(n["a"])().get("/flux/addpeer/".concat(t),{headers:{zelidauth:e}})},removePeer:function(e,t){return Object(n["a"])().get("/flux/removepeer/".concat(t),{headers:{zelidauth:e}})},removeIncomingPeer:function(e,t){return Object(n["a"])().get("/flux/removeincomingpeer/".concat(t),{headers:{zelidauth:e}})},adjustCruxID:function(e,t){return Object(n["a"])().get("/flux/adjustcruxid/".concat(t),{headers:{zelidauth:e}})},adjustKadena:function(e,t,a){return Object(n["a"])().get("/flux/adjustkadena/".concat(t,"/").concat(a),{headers:{zelidauth:e}})},getCruxID:function(){return Object(n["a"])().get("/flux/cruxid")},getKadenaAccount:function(){return Object(n["a"])().get("/flux/kadena")},getZelid:function(){return Object(n["a"])().get("/flux/zelid")},tailFluxLog:function(e,t){return Object(n["a"])().get("/flux/tail".concat(e,"log"),{headers:{zelidauth:t}})},justAPI:function(){return Object(n["a"])()},cancelToken:function(){return n["b"]}}},"9cf8":function(e,t,a){},d6e4:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("2b0e"),o=a("b42e"),r=a("c637"),i=a("a723"),c=a("cf75"),s=Object(c["d"])({textTag:Object(c["c"])(i["t"],"p")},r["p"]),l=n["default"].extend({name:r["p"],functional:!0,props:s,render:function(e,t){var a=t.props,n=t.data,r=t.children;return e(a.textTag,Object(o["a"])(n,{staticClass:"card-text"}),r)}})}}]);