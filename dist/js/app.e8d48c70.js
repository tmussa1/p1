(function(t){function s(s){for(var a,r,o=s[0],c=s[1],d=s[2],h=0,l=[];h<o.length;h++)r=o[h],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&l.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(s);while(l.length)l.shift()();return i.push.apply(i,d||[]),e()}function e(){for(var t,s=0;s<i.length;s++){for(var e=i[s],a=!0,o=1;o<e.length;o++){var c=e[o];0!==n[c]&&(a=!1)}a&&(i.splice(s--,1),t=r(r.s=e[0]))}return t}var a={},n={app:0},i=[];function r(s){if(a[s])return a[s].exports;var e=a[s]={i:s,l:!1,exports:{}};return t[s].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=a,r.d=function(t,s,e){r.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,s){if(1&s&&(t=r(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var a in t)r.d(e,a,function(s){return t[s]}.bind(null,a));return e},r.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(s,"a",s),s},r.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=s,o=o.slice();for(var d=0;d<o.length;d++)s(o[d]);var u=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,s,e){t.exports=e("56d7")},"034f":function(t,s,e){"use strict";var a=e("85ec"),n=e.n(a);n.a},1335:function(t,s,e){},"3e84":function(t,s,e){"use strict";var a=e("1335"),n=e.n(a);n.a},4678:function(t,s,e){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var s=i(t);return e(s)}function i(t){if(!e.o(a,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="4678"},"56d7":function(t,s,e){"use strict";e.r(s);e("e260"),e("e6cf"),e("cca6"),e("a79d");var a=e("2b0e"),n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[t.isAuthenticated?e("div",[e("NavBarComponent",{attrs:{username:t.username}}),e("b-container",{attrs:{id:"gameContainer"}},[e("b-row",[e("Home",{on:{"update-win":function(s){return t.updateWin(s)},"update-loss":function(s){return t.updateLoss(s)}}}),e("div",{attrs:{id:"spacer2"}}),e("ChartComponent",{attrs:{winCount:t.winCount,lossCount:t.lossCount}})],1)],1)],1):e("div",{staticClass:"input-group mb-3 col-md-6",attrs:{id:"landing"}},[e("h3",[t._v("Let's play Tic Tac Toe")]),e("div",{attrs:{id:"spacer1"}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Please enter your name",id:"user"},domProps:{value:t.username},on:{input:function(s){s.target.composing||(t.username=s.target.value)}}}),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{id:"playButton",type:"button"},on:{click:t.playGame}},[t._v("Let's play")])]),t.showAlert?e("div",[e("div",{class:t.alertFailure,attrs:{role:"alert"}},[t._v("Please enter a valid name")])]):t._e()])])},i=[],r=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"board"}},[e("canvas",{attrs:{id:"game-board"},on:{mousedown:t.boxClicked}}),e("b-modal",{attrs:{id:"win-modal","body-bg-variant":t.alertSuccess}},[t._v("Congratulations, you won! Click okay to play again!")]),e("b-modal",{attrs:{id:"game-over-modal","body-bg-variant":t.alertGameOver}},[t._v("Game over! click okay to play again!")]),e("b-modal",{attrs:{id:"maximum-attempts-modal","body-bg-variant":t.alertTooManyAttempts}},[t._v("You can keep playing but you won't get any credits!")]),e("div",{attrs:{id:"spacer"}}),e("b-button",{attrs:{variant:"danger"},on:{click:t.resetGame}},[t._v("Reset the Game")])],1)},o=[],c={data:function(){return{squares:[[],[],[],[],[],[],[],[],[]],characters:["","","","","","","","",""],xCoordinate:0,yCoordinate:0,won:!1,winningCount:0,lossCount:0,alertGameOver:"warning",alertTooManyAttempts:"danger",alertSuccess:"success"}},methods:{drawBoard:function(){var t=document.getElementById("game-board"),s=t.getContext("2d"),e=t.offsetWidth,a=Math.floor(e/3);this.drawVertical(s,a,0,300),this.drawVertical(s,2*a,0,300),this.drawHorizontal(s,.5*a,0,300),this.drawHorizontal(s,a,0,300),this.drawHorizontal(s,1.5*a,0,300),this.populateLocation(100,50)},drawVertical:function(t,s,e,a){t.beginPath(),t.moveTo(s,e),t.lineTo(s,a),t.stroke()},drawHorizontal:function(t,s,e,a){t.beginPath(),t.moveTo(e,s),t.lineTo(a,s),t.stroke()},populateLocation:function(t,s){this.squares[0]=[0*s,0*t,1*t,1*s],this.squares[1]=[0*s,1*t,2*t,1*s],this.squares[2]=[0*s,2*t,3*t,1*s],this.squares[3]=[1*s,0*t,1*t,2*s],this.squares[4]=[1*s,1*t,2*t,2*s],this.squares[5]=[1*s,2*t,3*t,2*s],this.squares[6]=[2*s,0*t,1*t,3*s],this.squares[7]=[2*s,1*t,2*t,3*s],this.squares[8]=[2*s,2*t,3*t,3*s]},boxClicked:function(t){this.xCoordinate=t.offsetX,this.yCoordinate=t.offsetY;for(var s=Math.floor(10*Math.random()),e=0;e<this.squares.length;e++)if(this.xCoordinate<=this.squares[e][2]&&this.yCoordinate<=this.squares[e][3]){s<5?(this.drawCharacters("X",this.squares[e][1],this.squares[e][3],this.squares[e][1],this.squares[e][0]),this.characters[e]="X",this.checkwin(),this.checkGameOver()):(this.drawCharacters("O",this.squares[e][1],this.squares[e][3],this.squares[e][1],this.squares[e][0]),this.characters[e]="O",this.checkwin(),this.checkGameOver());break}},drawCharacters:function(t,s,e,a,n){var i=document.getElementById("game-board"),r=i.getContext("2d");r.fillStyle="#ffffff",r.fillRect(a+1,n+1,20,48),r.save(),r.font="20px Georgia",r.fillStyle="#000000",r.fillText(t,s,e),r.save()},clearCanvas:function(){var t=document.getElementById("game-board"),s=t.getContext("2d");s.fillStyle="#ffffff",s.fillRect(0,0,300,150),s.save();for(var e=0;e<this.characters.length;e++)this.characters[e]=null;this.won=!1},checkwin:function(){this.checkRowWins(0),this.checkRowWins(3),this.checkRowWins(6),this.checkColumnWins(0),this.checkColumnWins(1),this.checkColumnWins(2),this.checkDiagonalWins(0),this.checkDiagonalWins(2),this.won&&(this.$bvModal.show("win-modal"),this.winningCount+=1,this.$emit("update-win",this.winningCount),this.clearCanvas(),this.drawBoard())},checkRowWins:function(t){this.characters[t]&&this.characters[t]==this.characters[t+1]&&this.characters[t+1]==this.characters[t+2]&&this.characters[t]==this.characters[t+2]&&(this.won=!0)},checkColumnWins:function(t){this.characters[t]&&this.characters[t]==this.characters[t+3]&&this.characters[t+3]==this.characters[t+6]&&this.characters[t]==this.characters[t+6]&&(this.won=!0)},checkDiagonalWins:function(t){(this.characters[t]&&this.characters[t]==this.characters[t+4]&&this.characters[t+4]==this.characters[t+8]&&this.characters[t]==this.characters[t+8]||this.characters[t]&&t>=2&&this.characters[t]==this.characters[t+2]&&this.characters[t+2]==this.characters[t+4]&&this.characters[t]==this.characters[t+4])&&(this.won=!0)},checkGameOver:function(){for(var t=0,s=0;s<this.characters.length;s++)this.characters[s]&&(t+=1);t>8&&!this.won&&(this.$bvModal.show("game-over-modal"),this.lossCount+=1,this.$emit("update-loss",this.lossCount),this.clearCanvas(),this.drawBoard())},resetGame:function(){this.clearCanvas(),this.drawBoard(),this.lossCount=0,this.winningCount=0,this.$emit("update-loss",this.winningCount),this.$emit("update-win",this.winningCount)}},mounted:function(){this.drawBoard()},computed:{total:function(){return this.winningCount+this.lossCount}},watch:{total:function(){10==this.total&&this.$bvModal.show("maximum-attempts-modal")}}},d=c,u=(e("3e84"),e("2877")),h=Object(u["a"])(d,r,o,!1,null,"50fb9fb2",null),l=h.exports,f=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"chartDiv"}},[e("canvas",{attrs:{id:"player-statistics"}})])}],m={type:"bar",data:{labels:["Possible attempts","Wins","Losses"],datasets:[{label:"Statistics",data:[10,0,0],backgroundColor:["rgba(123, 239, 178, 1)","rgba(54,73,93,.5)","rgba(255, 159, 64, 0.2)"],borderColor:["#36495d","#36495d","#36495d"],borderWidth:1}]},options:{responsive:!0,lineTension:1,scales:{yAxes:[{ticks:{beginAtZero:!0,padding:25}}]}}},p=m,j=e("30ef"),v=e.n(j),g={data:function(){return{winningStatistics:p,updatedWinCount:0,updatedLossCount:0}},methods:{formChart:function(t){var s=document.getElementById("player-statistics");new v.a(s,{type:t.type,data:t.data,options:t.options})}},mounted:function(){this.formChart(this.winningStatistics)},props:["lossCount","winCount"],watch:{immediate:!0,lossCount:function(){this.updatedWinCount+this.updatedLossCount<=10&&(this.updatedLossCount=this.$props.lossCount),this.winningStatistics.data.datasets[0].data[2]=this.updatedLossCount,this.winningStatistics.data.datasets[0].data[0]=10-(this.updatedLossCount+this.updatedWinCount)>0?10-(this.updatedLossCount+this.updatedWinCount):0,this.formChart(this.winningStatistics)},winCount:function(){this.updatedWinCount+this.updatedLossCount<=10&&(this.updatedWinCount=this.$props.winCount),this.winningStatistics.data.datasets[0].data[1]=this.updatedWinCount,this.winningStatistics.data.datasets[0].data[0]=10-(this.updatedLossCount+this.updatedWinCount)>0?10-(this.updatedLossCount+this.updatedWinCount):0,this.formChart(this.winningStatistics)}}},w=g,C=(e("b362"),Object(u["a"])(w,f,b,!1,null,null,null)),y=C.exports,k=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"container"},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[e("a",{staticClass:"navbar-brand",attrs:{id:"name",href:"#"}},[t._v("Hello "+t._s(t.username))])])])])},x=[],_={props:["username"]},z=_,O=Object(u["a"])(z,k,x,!1,null,"212ad53c",null),W=O.exports,q={name:"App",components:{Home:l,ChartComponent:y,NavBarComponent:W},data:function(){return{isAuthenticated:!1,username:"",showAlert:!1,alertFailure:"alert alert-danger col-md-12",winCount:0,lossCount:0}},methods:{playGame:function(){this.username.length>=1?(this.isAuthenticated=!0,this.showAlert=!1,document.getElementById("playButton").disabled=!1):(this.showAlert=!0,document.getElementById("playButton").disabled=!0)},updateWin:function(t){this.winCount=t},updateLoss:function(t){this.lossCount=t}},watch:{username:function(){this.username.length>=1&&this.playGame()}}},S=q,L=(e("034f"),Object(u["a"])(S,n,i,!1,null,null,null)),B=L.exports,G=(e("4989"),e("ab8b"),e("5f5b"));a["default"].config.productionTip=!1,a["default"].use(G["a"]),new a["default"]({render:function(t){return t(B)}}).$mount("#app")},"85ec":function(t,s,e){},b362:function(t,s,e){"use strict";var a=e("d8f7"),n=e.n(a);n.a},d8f7:function(t,s,e){}});
//# sourceMappingURL=app.e8d48c70.js.map