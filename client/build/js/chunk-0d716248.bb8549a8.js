(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d716248"],{1436:function(t,s,i){},"9b9e":function(t,s,i){"use strict";i.r(s);var o=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{staticClass:"hero is-fullheight"},[i("div",{staticClass:"hero-body"},[i("div",{staticClass:"container"},[i("div",{staticClass:"columns is-centered"},[i("div",{staticClass:"main"},[i("h1",{staticClass:"title"},[t._v("Animateur")]),i("div",{staticClass:"btn"},[i("button",{attrs:{id:"live_btn"},on:{click:t.startLive}},[t._v("start live")]),i("button",{attrs:{id:"stop_btn"},on:{click:t.stopLive}},[t._v("stop live")])])])])])])])},e=[],n={data:function(){return{bool:!1,liste_blob:[]}},methods:{startLive:function(){this.bool=!0;var t={audio:!0};navigator.mediaDevices.getUserMedia(t).then((function(t){var s=new MediaRecorder(t);s.onstart=function(){this.chunks=[]},s.ondataavailable=function(t){this.chunks.push(t.data);var s=new Blob(this.chunks,{type:"audio/ogg; codecs=opus"});this.liste_blob.push(s),bool&&this.$socket.emit("radio",s)},console.log("record started"),s.start(),setInterval((function(){this.bool&&(s.stop(),s.start())}),1e3)}))},stopLive:function(){this.bool=!1,console.log("live stoped")}}},a=n,c=(i("e77c"),i("2877")),l=Object(c["a"])(a,o,e,!1,null,null,null);s["default"]=l.exports},e77c:function(t,s,i){"use strict";i("1436")}}]);
//# sourceMappingURL=chunk-0d716248.bb8549a8.js.map