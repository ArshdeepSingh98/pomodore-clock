(this.webpackJsonppomodoro_clock=this.webpackJsonppomodoro_clock||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/expand_less-24px.47f91d3c.svg"},function(e,t,n){e.exports=n.p+"static/media/expand_more-24px.95a46151.svg"},function(e,t,n){e.exports=n.p+"static/media/play_arrow-24px.f5408bdf.svg"},function(e,t,n){e.exports=n.p+"static/media/pause-24px.0d842eeb.svg"},function(e,t,n){e.exports=n.p+"static/media/restore-24px.0ebb9c89.svg"},function(e,t,n){e.exports=n.p+"static/media/beep-04.8ee39c4e.mp3"},,,,,,function(e,t,n){e.exports=n(31)},,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(8),r=n.n(s),o=(n(27),n(9)),l=n(10),c=n(1),u=n(21),h=n(20),d=n(3),g=n(4),p=n(11),_=n.n(p),m=n(12),f=n.n(m),k=n(13),b=n.n(k),v=n(14),y=n.n(v),x=n(15),S=n.n(x),E=n(16),w=n.n(E);function C(){var e=Object(d.a)(["\n    height: ",";\n    cursor: pointer;\n    pointer-events: ","\n"]);return C=function(){return e},e}function j(){var e=Object(d.a)(["\n    font-size: ",";\n    font-weight: bold;\n    padding: ","\n"]);return j=function(){return e},e}function z(){var e=Object(d.a)(["\n    display: flex;\n    flex-direction: ",";\n    align-items: center;\n    justify-content: center;\n    width: auto;\n    background: rgb(245, 245, 245);\n    height: ",";\n"]);return z=function(){return e},e}var O=g.a.div(z(),(function(e){var t;return null!==(t=e.direction)&&void 0!==t?t:"row"}),(function(e){var t;return null!==(t=e.height)&&void 0!==t?t:"auto"})),R=g.a.p(j(),(function(e){var t;return null!==(t=e.size)&&void 0!==t?t:"24px"}),(function(e){var t;return null!==(t=e.padding)&&void 0!==t?t:"0"})),I=g.a.img(C(),(function(e){var t;return null!==(t=e.size)&&void 0!==t?t:"24px"}),(function(e){return e.disabled?"none":"auto"})),B=function(e){var t=e.type,n=e.length,a=e.handleChange,s=e.clockRunning;return i.a.createElement(O,{direction:"column"},i.a.createElement(R,{size:"36px",padding:"10px"},t," Length"),i.a.createElement(O,null,i.a.createElement(R,{padding:"4px"},n),i.a.createElement(O,{direction:"column"},i.a.createElement(I,{disabled:s,onClick:function(){return a(t,"increase")},src:_.a,alt:""}),i.a.createElement(I,{disabled:s,onClick:function(){return a(t,"decrease")},src:f.a,alt:""}))))},P=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleReset=function(){clearInterval(a.timer),a.setState(a.initialState)},a.handleRun=function(){!1===a.state.clock_running?a.timer=setInterval((function(){0===a.state.time_left&&("Session"===a.state.current_type?a.setState({current_type:"Break"}):a.handleReset()),a.setState({time_left:a.state.time_left-1})}),1e3):clearInterval(a.timer),a.setState({clock_running:!a.state.clock_running})},a.showTime=function(e){return new Date(1e3*e).toISOString().substr(14,5)},a.togglePlay=function(){a.setState({play_audio:!a.state.play_audio},(function(){a.state.play_audio?a.audio.play():a.audio.pause()}))},a.state=a.initialState,a.handleChange=a.handleChange.bind(Object(c.a)(a)),a.audio=new Audio(w.a),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.audio.addEventListener("ended",(function(){return e.setState({play_audio:!1})}))}},{key:"componentWillUnmount",value:function(){var e=this;this.audio.removeEventListener("ended",(function(){return e.setState({play_audio:!1})})),clearInterval(this.timer)}},{key:"handleChange",value:function(e,t){"Session"===e&&this.state.session_length>=1&&this.setState({session_length:this.state.session_length+("increase"===t?1:-1)}),"Break"===e&&this.state.break_length>=1&&this.setState({break_length:this.state.break_length+("increase"===t?1:-1)})}},{key:"componentDidUpdate",value:function(e,t,n){t.session_length!==this.state.session_length&&(this.state.session_length<1&&this.setState({session_length:1,time_left:0}),this.state.session_length>=60&&this.setState({session_length:60,time_left:3599})),t.break_length!==this.state.break_length&&(this.state.break_length<1&&this.setState({break_length:1,time_left:0,clock_running:!1}),this.state.break_length>=60&&this.setState({break_length:60,time_left:3599})),t.current_type===this.state.current_type&&t.session_length===this.state.session_length&&t.break_length===this.state.break_length||(t.current_type!==this.state.current_type&&this.togglePlay(),this.setState({time_left:"Session"===this.state.current_type?t.break_length!==this.state.break_length?this.state.time_left:60*this.state.session_length:60*this.state.break_length,alert_time:!1})),t.time_left!==this.state.time_left&&(this.state.time_left<=30&&this.setState({alert_time:!0}),this.state.time_left<=5&&this.togglePlay())}},{key:"render",value:function(){return i.a.createElement(O,{direction:"column",height:"100%"},i.a.createElement(R,{size:"42px"},"Pomodoro Clock"),i.a.createElement(O,{height:"180px"},i.a.createElement(B,{handleChange:this.handleChange,clockRunning:this.state.clock_running,type:"Break",length:this.state.break_length}),i.a.createElement(B,{handleChange:this.handleChange,clockRunning:this.state.clock_running,type:"Session",length:this.state.session_length})),i.a.createElement(O,{style:{color:this.state.alert_time?"red":"black",background:"rgb(220, 220, 220)",padding:"20px 0 10px 0",width:"400px"},direction:"column"},i.a.createElement(R,{size:"42px"},this.state.current_type),i.a.createElement(R,{size:"64px"},this.showTime(this.state.time_left))),i.a.createElement(O,{style:{background:"rgb(200, 200, 200)",padding:"10px 0 20px 0",width:"400px"}},i.a.createElement(I,{size:"48px",src:this.state.clock_running?y.a:b.a,onClick:this.handleRun,alt:""}),i.a.createElement(I,{size:"48px",src:S.a,onClick:this.handleReset,alt:""})))}},{key:"initialState",get:function(){return{session_length:25,break_length:5,time_left:1500,clock_running:!1,current_type:"Session",alert_time:!1,play_audio:!1}}}]),n}(i.a.Component);n(30);var D=function(){return i.a.createElement(P,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[22,1,2]]]);
//# sourceMappingURL=main.196d6b1e.chunk.js.map