(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n(50)},45:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n(0),r=n.n(i),c=n(21),l=n.n(c),s=(n(45),n(7)),o=n(8),u=n(11),m=n(9),b=n(10),f=n(1),d=n(3),p="START_GAME",v="FLIP_TILE",O="MATCH_CHECK",h="TOGGLE_IS_WAITING",j="INCREMENT_TRIES",T=n(5),E=n.n(T),g=[],k=function(){return function(){[],g=[];for(var e=[],t=1;t<9;t++)e.push({number:t,flipped:!1,matched:!1});g=E.a.shuffle(E.a.concat(e,e))}(),g};function C(){var e=k();return console.log("test-----\x3e>>",e),{type:p,tiles:e}}function y(e,t){return{type:v,index:e,tile:t}}function N(e){return{type:h,isWaiting:e}}function W(){return{type:j}}function _(e){return{type:O,flippedTiles:e}}var I=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).handleClickResetButon=e.handleClickResetButon.bind(Object(f.a)(Object(f.a)(e))),e}return Object(b.a)(t,e),Object(o.a)(t,[{key:"handleClickResetButon",value:function(e){var t=this;setTimeout(function(){t.props.startGame()},1e3)}},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-default navbar-top"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("p",{className:"navbar-brand"},"Number of tries: ",r.a.createElement("span",{className:"label label-success"},this.props.numberOfTries))),r.a.createElement("div",{className:"collapse navbar-collapse"},r.a.createElement("ul",{className:"nav navbar-nav navbar-right"},r.a.createElement("li",null,r.a.createElement("a",{className:"btn btn-default btn-small",onClick:this.handleClickResetButon},"Restart"))))))}}]),t}(i.Component);var R=Object(a.connect)(function(e){return{numberOfTries:e.memory.numberOfTries}},function(e){return Object(d.bindActionCreators)({startGame:C},e)})(I),w=function(e){console.log(e);var t=e.tile,n=e.index,a=e.onClickTile,i=t.flipped?"tile effect__click flipped":"tile effect__click";return r.a.createElement("div",{className:i,onClick:function(){a(t,n)}},r.a.createElement("div",{className:"tile__front"}),r.a.createElement("div",{className:"tile__back"},t.number))},x=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).renderTiles=n.renderTiles.bind(Object(f.a)(Object(f.a)(n))),n.onHandleClickTile=n.onHandleClickTile.bind(Object(f.a)(Object(f.a)(n))),n}return Object(b.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.props,t=e.tiles,n=e.toggleIsWaiting,a=e.matchCheck,i=e.incrementTries,r=E.a.filter(t,E.a.matches({flipped:!0,matched:!1}));r.length>=2&&(n(!0),this.props.isWaiting&&(i(),setTimeout(function(){a(r)},500)))}},{key:"onHandleClickTile",value:function(e,t){var n=this.props,a=n.flipTile;n.isWaiting||a(t,e)}},{key:"renderTiles",value:function(){var e=this;console.log("hello");var t=this.props.tiles;return console.log(t),t.map(function(t,n){return r.a.createElement(w,{tile:t,key:n,index:n,onClickTile:e.onHandleClickTile})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container gameboard"},r.a.createElement("div",{className:"row"},this.renderTiles()))}}]),t}(i.Component);var A=Object(a.connect)(function(e){return{tiles:e.memory.tiles,isWaiting:e.memory.isWaiting}},function(e){return Object(d.bindActionCreators)({toggleIsWaiting:N,incrementTries:W,matchCheck:_,flipTile:y},e)})(x);n(48);var G=n(12),H=n(2),B={tiles:[],isWaiting:!1,numberOfTries:0};var S=Object(d.combineReducers)({memory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(H.a)({},e,{isWaiting:!1,numberOfTries:0,tiles:Object(G.a)(t.tiles)});case v:var n=t.index,a=t.tile;return Object(H.a)({},e,{tiles:Object(G.a)(e.tiles.slice(0,n)).concat([Object(H.a)({},a,{flipped:!0})],Object(G.a)(e.tiles.slice(n+1)))});case h:return Object(H.a)({},e,{isWaiting:t.isWaiting});case O:var i=e.tiles;if(t.flippedTiles[0].number===t.flippedTiles[1].number){var r=i.map(function(e){return!0===e.flipped&&!1===e.matched?Object(H.a)({},e,{matched:!0}):e});return Object(H.a)({},e,{tiles:r,isWaiting:!1})}var c=i.map(function(e){return!0===e.flipped&&!1===e.matched?Object(H.a)({},e,{flipped:!1}):e});return Object(H.a)({},e,{tiles:c,isWaiting:!1});case j:return Object(H.a)({},e,{numberOfTries:e.numberOfTries+1});default:return e}}});var L=Object(d.createStore)(S);L.dispatch(C()),l.a.render(r.a.createElement(a.Provider,{store:L},r.a.createElement(function(){return r.a.createElement("section",null,r.a.createElement(R,null),r.a.createElement(A,null))},null)),document.getElementById("root"))}},[[22,2,1]]]);
//# sourceMappingURL=main.62cf3a0d.chunk.js.map