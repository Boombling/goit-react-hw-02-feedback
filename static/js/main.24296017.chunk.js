(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(t,e,a){t.exports={Statistics:"Statistics_Statistics__JDbxt",title:"Statistics_title__ATvRF",list:"Statistics_list__XJhUK",item:"Statistics_item__ixPya",stats_list:"Statistics_stats_list__2gPtG"}},function(t,e,a){t.exports={btn:"FeedbackOptions_btn__2-4q3"}},,function(t,e,a){t.exports={section:"FeedBack_section__3oaQQ",title:"FeedBack_title__26O52"}},,,,function(t,e,a){t.exports={Message:"Notification_Message__2HfRr"}},,,,,,,,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var s=a(1),i=a.n(s),c=a(6),n=a.n(c),o=a(7),l=a(8),r=a(11),d=a(10),b=a(2),u=a.n(b),j=a(0),h=function(t){var e=t.good,a=t.neutral,s=t.bad,i=t.total,c=t.percentage;return Object(j.jsxs)("div",{className:u.a.Statistics,children:[Object(j.jsx)("h2",{className:u.a.title,children:"Statistics"}),Object(j.jsxs)("ul",{className:u.a.list,children:[Object(j.jsxs)("li",{className:u.a.item,children:["Good ",e]}),Object(j.jsxs)("li",{className:u.a.item,children:["Neutral ",a]}),Object(j.jsxs)("li",{className:u.a.item,children:["Bad ",s]}),Object(j.jsxs)("li",{className:u.a.item,children:["Total ",i]}),Object(j.jsxs)("li",{className:u.a.item,children:["Positive feedback ",c,"%"]})]})]})},k=a(3),f=a.n(k),_=function(t){var e=t.onClickGood,a=t.onClickNeutral,s=t.onClickBad;return Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:f.a.btn,type:"button",onClick:e,children:"Good"}),Object(j.jsx)("button",{className:f.a.btn,type:"button",onClick:a,children:"Neutral"}),Object(j.jsx)("button",{className:f.a.btn,type:"button",onClick:s,children:"Bad"})]})},x=a(9),O=a.n(x),m=function(t){var e=t.message;return Object(j.jsx)("h2",{className:O.a.Message,children:e})},g=a(5),v=a.n(g),N=function(t){Object(r.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(o.a)(this,a);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={good:0,neutral:0,bad:0,visible:!1},t.onClickGood=function(){t.setState({visible:!0}),t.setState((function(t){return{good:t.good+1}}))},t.onClickNeutral=function(){t.setState({visible:!0}),t.setState((function(t){return{neutral:t.neutral+1}}))},t.onClickBad=function(){t.setState({visible:!0}),t.setState((function(t){return{bad:t.bad+1}}))},t.countTotalFeedback=function(){return t.state.good+t.state.neutral+t.state.bad},t.countPositiveFeedbackPercentage=function(){return Math.round(100/t.countTotalFeedback()*t.state.good)},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.countTotalFeedback(),e=this.countPositiveFeedbackPercentage();return Object(j.jsxs)("div",{className:v.a.section,children:[Object(j.jsx)("h1",{className:v.a.title,children:"Pleas leave feedback"}),Object(j.jsx)(_,{onClickGood:this.onClickGood,onClickNeutral:this.onClickNeutral,onClickBad:this.onClickBad}),this.state.visible?Object(j.jsx)(h,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:t,percentage:e}):Object(j.jsx)(m,{message:"No feedback given"})]})}}]),a}(s.Component),p=(a(17),function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(N,{})})});n.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.24296017.chunk.js.map