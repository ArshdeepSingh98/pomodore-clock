(this.webpackJsonppomodoro_clock=this.webpackJsonppomodoro_clock||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/expand_less-24px.47f91d3c.svg"},function(e,t,n){e.exports=n.p+"static/media/expand_more-24px.95a46151.svg"},function(e,t,n){e.exports=n.p+"static/media/play_arrow-24px.f5408bdf.svg"},function(e,t,n){e.exports=n.p+"static/media/pause-24px.0d842eeb.svg"},function(e,t,n){e.exports=n.p+"static/media/restore-24px.0ebb9c89.svg"},,,,,,function(e,t,n){e.exports=n(30)},,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(8),r=n.n(s),o=(n(26),n(9)),c=n(10),l=n(1),u=n(20),h=n(19),g=n(3),d=n(4),p=n(11),m=n.n(p),f=n(12),_=n.n(f),k=n(13),v=n.n(k),b=n(14),x=n.n(b),E=n(15),y=n.n(E);function S(){var e=Object(g.a)(["\n    height: ",";\n    cursor: pointer;\n    pointer-events: ","\n"]);return S=function(){return e},e}function C(){var e=Object(g.a)(["\n    font-size: ",";\n    font-weight: bold;\n    padding: ","\n"]);return C=function(){return e},e}function w(){var e=Object(g.a)(["\n    display: flex;\n    flex-direction: ",";\n    align-items: center;\n    justify-content: center;\n    width: auto;\n    height: ",";\n"]);return w=function(){return e},e}var j=d.a.div(w(),(function(e){var t;return null!==(t=e.direction)&&void 0!==t?t:"row"}),(function(e){var t;return null!==(t=e.height)&&void 0!==t?t:"auto"})),z=d.a.p(C(),(function(e){var t;return null!==(t=e.size)&&void 0!==t?t:"24px"}),(function(e){var t;return null!==(t=e.padding)&&void 0!==t?t:"0"})),O=d.a.img(S(),(function(e){var t;return null!==(t=e.size)&&void 0!==t?t:"24px"}),(function(e){return e.disabled?"none":"auto"})),R=function(e){var t=e.type,n=e.length,a=e.handleChange,s=e.clockRunning;return i.a.createElement(j,{direction:"column"},i.a.createElement(z,{size:"36px",padding:"10px"},t," Length"),i.a.createElement(j,null,i.a.createElement(z,{padding:"4px"},n),i.a.createElement(j,{direction:"column"},i.a.createElement(O,{disabled:s,onClick:function(){return a(t,"increase")},src:m.a,alt:""}),i.a.createElement(O,{disabled:s,onClick:function(){return a(t,"decrease")},src:_.a,alt:""}))))},B=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleReset=function(){console.log("reset"),clearInterval(a.timer),a.setState(a.initialState)},a.handleRun=function(){!1===a.state.clock_running?a.timer=setInterval((function(){0===a.state.time_left&&("Session"===a.state.current_type?a.setState({current_type:"Break"}):a.handleReset()),console.log("clock",a.state.time_left),a.setState({time_left:a.state.time_left-1})}),200):clearInterval(a.timer),a.setState({clock_running:!a.state.clock_running})},a.state=a.initialState,a.handleChange=a.handleChange.bind(Object(l.a)(a)),a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){}},{key:"handleChange",value:function(e,t){"Session"===e&&this.state.session_length>=1&&this.setState({session_length:this.state.session_length+("increase"===t?1:-1)}),"Break"===e&&this.state.break_length>=1&&this.setState({break_length:this.state.break_length+("increase"===t?1:-1)})}},{key:"componentDidUpdate",value:function(e,t,n){t.session_length!==this.state.session_length&&this.state.session_length<1&&this.setState({session_length:1,time_left:0}),t.break_length!==this.state.break_length&&this.state.break_length<1&&this.setState({break_length:1,time_left:0,clock_running:!1}),t.current_type===this.state.current_type&&t.session_length===this.state.session_length&&t.break_length===this.state.break_length||this.setState({time_left:"Session"===this.state.current_type?this.state.session_length:this.state.break_length})}},{key:"render",value:function(){return i.a.createElement(j,{direction:"column",height:"100%"},i.a.createElement(z,{size:"42px"},"Pomodoro Clock"),i.a.createElement(j,{height:"100px"},i.a.createElement(R,{handleChange:this.handleChange,clockRunning:this.state.clock_running,type:"Break",length:this.state.break_length}),i.a.createElement(R,{handleChange:this.handleChange,clockRunning:this.state.clock_running,type:"Session",length:this.state.session_length})),i.a.createElement(j,{direction:"column"},i.a.createElement(z,{size:"36px"},this.state.current_type),i.a.createElement(z,{size:"48px"},this.state.time_left)),i.a.createElement(j,null,i.a.createElement(O,{size:"40px",src:this.state.clock_running?x.a:v.a,onClick:this.handleRun,alt:""}),i.a.createElement(O,{size:"40px",src:y.a,onClick:this.handleReset,alt:""})))}},{key:"initialState",get:function(){return{session_length:25,break_length:5,time_left:25,clock_running:!1,current_type:"Session"}}}]),n}(i.a.Component);n(29);var I=function(){return i.a.createElement(B,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[21,1,2]]]);
//# sourceMappingURL=main.50f5a0c1.chunk.js.map