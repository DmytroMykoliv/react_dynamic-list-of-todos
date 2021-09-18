(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{17:function(e,t,r){},18:function(e,t,r){},20:function(e,t,r){},21:function(e,t,r){},22:function(e,t,r){"use strict";r.r(t);var s=r(9),n=r.n(s),c=r(6),a=r.n(c),o=r(7),i=r(2),l=r(3),d=r(5),u=r(4),h=r(1),j=r.n(h),p=function(e){return fetch("".concat("https://mate.academy/students-api/").concat(e)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Failed to load data"))}))},b=function(e){return p("/users/".concat(e))},f=(r(17),r(18),r(10)),m=r(11),v=r.n(m),O=r(0),x=function(e){var t=e.onHandleChange,r=e.filteredQuery,s=e.selectedQuery;return Object(O.jsxs)("div",{className:"TodoList__form",children:[Object(O.jsx)("label",{className:"TodoList__label",htmlFor:"filterTitle",children:Object(O.jsx)("input",{type:"text",name:"filteredQuery",id:"filterTitle",className:"form-control",placeholder:"find title",value:r,onChange:t})}),Object(O.jsx)("label",{className:"TodoList__label",htmlFor:"selectedTodo",children:Object(O.jsxs)("select",{name:"selectedQuery",id:"selectedTodo",value:s,className:"form-control",onChange:t,children:[Object(O.jsx)("option",{value:"all",children:"All"}),Object(O.jsx)("option",{value:"active",children:"Active"}),Object(O.jsx)("option",{value:"completed",children:"Completed"})]})})]})},y=(r(20),function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(i.a)(this,r);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={filteredQuery:"",selectedQuery:""},e.handleChange=function(t){var r=t.target,s=r.name,n=r.value;e.setState(Object(f.a)({},s,n))},e.getFilteredTodos=function(){var t=e.props.todos,r=e.state.filteredQuery.toLowerCase();switch(e.state.selectedQuery){case"all":return t.filter((function(e){return e.title.toLowerCase().includes(r)}));case"active":return t.filter((function(e){return!e.completed&&e.title.toLowerCase().includes(r)}));case"completed":return t.filter((function(e){return e.completed&&e.title.toLowerCase().includes(r)}));default:return t.filter((function(e){return e.title.toLowerCase().includes(r)}))}},e}return Object(l.a)(r,[{key:"render",value:function(){var e=this.state,t=e.filteredQuery,r=e.selectedQuery,s=this.props.onUsersId,n=this.getFilteredTodos();return Object(O.jsxs)("div",{className:"TodoList",children:[Object(O.jsx)("h2",{children:"Todos:"}),Object(O.jsx)(x,{onHandleChange:this.handleChange,filteredQuery:t,selectedQuery:r}),Object(O.jsx)("div",{className:"TodoList__list-container",children:Object(O.jsx)("ul",{className:"TodoList__list",children:n.map((function(e){return Object(O.jsxs)("li",{className:v()("TodoList__item",{"TodoList__item--checked":e.completed,"TodoList__item--unchecked":!e.completed}),children:[Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"checkbox",checked:e.completed,readOnly:!0}),Object(O.jsx)("p",{children:e.title})]}),Object(O.jsx)("button",{className:"TodoList__user-button button",type:"button",onClick:function(){return s(e.userId)},children:"User:".concat(e.userId)})]},e.id)}))})})]})}}]),r}(j.a.Component)),_=(r(21),function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(i.a)(this,r);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={user:null,errorMessage:""},e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){this.getLoadedData()}},{key:"componentDidUpdate",value:function(e){e.userId!==this.props.userId&&this.getLoadedData()}},{key:"getLoadedData",value:function(){var e=Object(o.a)(a.a.mark((function e(){var t,r,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=this.props.userId,e.next=4,b(t);case 4:r=e.sent,this.setState((function(){return{user:r,errorMessage:""}})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),s=e.t0,this.setState({errorMessage:s.message});case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.user,r=e.errorMessage,s=this.props.onClearUserId;return t?Object(O.jsx)(O.Fragment,{children:r||Object(O.jsxs)("div",{className:"CurrentUser",children:[Object(O.jsx)("h2",{className:"CurrentUser__title",children:Object(O.jsx)("span",{children:"Selected user: ".concat(t.id)})}),Object(O.jsx)("h3",{className:"CurrentUser__name",children:t.name}),Object(O.jsx)("p",{className:"CurrentUser__email",children:t.email}),Object(O.jsx)("p",{className:"CurrentUser__phone",children:t.phone}),Object(O.jsx)("button",{type:"button",className:"TodoList__user-button--selected button",onClick:function(){return s()},children:"Clear"})]})}):Object(O.jsx)("div",{children:r})}}]),r}(j.a.Component)),g=function(e){Object(d.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(i.a)(this,r);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={selectedUserId:0,todos:[],errorMessage:""},e.setUsersId=function(t){e.setState((function(){return{selectedUserId:t}}))},e.clearUserId=function(){e.setState({selectedUserId:0})},e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){this.getLoadedTodos()}},{key:"getLoadedTodos",value:function(){var e=Object(o.a)(a.a.mark((function e(){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p("/todos");case 3:t=e.sent,this.setState({todos:t,errorMessage:""}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),r=e.t0,this.setState({errorMessage:r.message});case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.selectedUserId,r=e.todos,s=e.errorMessage;return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("div",{className:"App__sidebar",children:s||Object(O.jsx)(y,{todos:r,onUsersId:this.setUsersId})}),Object(O.jsx)("div",{className:"App__content",children:Object(O.jsx)("div",{className:"App__content-container",children:t?Object(O.jsx)(_,{userId:t,onClearUserId:this.clearUserId}):"No user selected"})})]})}}]),r}(j.a.Component),C=g;n.a.render(Object(O.jsx)(C,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.02199c64.chunk.js.map