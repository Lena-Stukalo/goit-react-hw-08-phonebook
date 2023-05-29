/*! For license information please see 658.28f429e4.chunk.js.LICENSE.txt */
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[658],{4658:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return ke}});var r=t(885),n=t(2791),s="Contacts_item__Fq-f8",i="Contacts_button__YHx4N",o="Contacts_contact__OpFP6",l="Contacts_name__OnqFS",c="Contacts_page__yr1is",d="Contacts_title__CxcDI",u=t(4383),f=t(2007),m=t.n(f),p=t(1413);function v(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var x=t(1694),h=t.n(x),b=t(184),y=["as","className","type","tooltip"],N={type:m().string,tooltip:m().bool,as:m().elementType},j=n.forwardRef((function(e,a){var t=e.as,r=void 0===t?"div":t,n=e.className,s=e.type,i=void 0===s?"valid":s,o=e.tooltip,l=void 0!==o&&o,c=v(e,y);return(0,b.jsx)(r,(0,p.Z)((0,p.Z)({},c),{},{ref:a,className:h()(n,"".concat(i,"-").concat(l?"tooltip":"feedback"))}))}));j.displayName="Feedback",j.propTypes=N;var g=j,C=n.createContext({}),Z=["xxl","xl","lg","md","sm","xs"],P=n.createContext({prefixes:{},breakpoints:Z,minBreakpoint:"xs"});P.Consumer,P.Provider;function _(e,a){var t=(0,n.useContext)(P).prefixes;return e||t[a]||a}var k=["id","bsPrefix","className","type","isValid","isInvalid","as"],w=n.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,s=e.className,i=e.type,o=void 0===i?"checkbox":i,l=e.isValid,c=void 0!==l&&l,d=e.isInvalid,u=void 0!==d&&d,f=e.as,m=void 0===f?"input":f,x=v(e,k),y=(0,n.useContext)(C).controlId;return r=_(r,"form-check-input"),(0,b.jsx)(m,(0,p.Z)((0,p.Z)({},x),{},{ref:a,type:o,id:t||y,className:h()(s,r,c&&"is-valid",u&&"is-invalid")}))}));w.displayName="FormCheckInput";var F=w,I=["bsPrefix","className","htmlFor"],S=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,s=e.htmlFor,i=v(e,I),o=(0,n.useContext)(C).controlId;return t=_(t,"form-check-label"),(0,b.jsx)("label",(0,p.Z)((0,p.Z)({},i),{},{ref:a,htmlFor:s||o,className:h()(r,t)}))}));S.displayName="FormCheckLabel";var O=S;var R=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],T=n.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,s=e.bsSwitchPrefix,i=e.inline,o=void 0!==i&&i,l=e.reverse,c=void 0!==l&&l,d=e.disabled,u=void 0!==d&&d,f=e.isValid,m=void 0!==f&&f,x=e.isInvalid,y=void 0!==x&&x,N=e.feedbackTooltip,j=void 0!==N&&N,Z=e.feedback,P=e.feedbackType,k=e.className,w=e.style,I=e.title,S=void 0===I?"":I,T=e.type,z=void 0===T?"checkbox":T,L=e.label,V=e.children,A=e.as,D=void 0===A?"input":A,E=v(e,R);r=_(r,"form-check"),s=_(s,"form-switch");var W=(0,n.useContext)(C).controlId,q=(0,n.useMemo)((function(){return{controlId:t||W}}),[W,t]),B=!V&&null!=L&&!1!==L||function(e,a){return n.Children.toArray(e).some((function(e){return n.isValidElement(e)&&e.type===a}))}(V,O),H=(0,b.jsx)(F,(0,p.Z)((0,p.Z)({},E),{},{type:"switch"===z?"checkbox":z,ref:a,isValid:m,isInvalid:y,disabled:u,as:D}));return(0,b.jsx)(C.Provider,{value:q,children:(0,b.jsx)("div",{style:w,className:h()(k,B&&r,o&&"".concat(r,"-inline"),c&&"".concat(r,"-reverse"),"switch"===z&&s),children:V||(0,b.jsxs)(b.Fragment,{children:[H,B&&(0,b.jsx)(O,{title:S,children:L}),Z&&(0,b.jsx)(g,{type:P,tooltip:j,children:Z})]})})})}));T.displayName="FormCheck";var z=Object.assign(T,{Input:F,Label:O}),L=t(4942),V=(t(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),A=n.forwardRef((function(e,a){var t,r,s=e.bsPrefix,i=e.type,o=e.size,l=e.htmlSize,c=e.id,d=e.className,u=e.isValid,f=void 0!==u&&u,m=e.isInvalid,x=void 0!==m&&m,y=e.plaintext,N=e.readOnly,j=e.as,g=void 0===j?"input":j,Z=v(e,V),P=(0,n.useContext)(C).controlId;(s=_(s,"form-control"),y)?t=(0,L.Z)({},"".concat(s,"-plaintext"),!0):(r={},(0,L.Z)(r,s,!0),(0,L.Z)(r,"".concat(s,"-").concat(o),o),t=r);return(0,b.jsx)(g,(0,p.Z)((0,p.Z)({},Z),{},{type:i,size:l,ref:a,readOnly:N,id:c||P,className:h()(d,t,f&&"is-valid",x&&"is-invalid","color"===i&&"".concat(s,"-color"))}))}));A.displayName="FormControl";var D=Object.assign(A,{Feedback:g}),E=/-(.)/g;var W=["className","bsPrefix","as"],q=function(e){return e[0].toUpperCase()+(a=e,a.replace(E,(function(e,a){return a.toUpperCase()}))).slice(1);var a};var B=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=a.displayName,r=void 0===t?q(e):t,s=a.Component,i=a.defaultProps,o=n.forwardRef((function(a,t){var r=a.className,n=a.bsPrefix,i=a.as,o=void 0===i?s||"div":i,l=v(a,W),c=_(n,e);return(0,b.jsx)(o,(0,p.Z)({ref:t,className:h()(r,c)},l))}));return o.defaultProps=i,o.displayName=r,o}("form-floating"),H=["controlId","as"],U=n.forwardRef((function(e,a){var t=e.controlId,r=e.as,s=void 0===r?"div":r,i=v(e,H),o=(0,n.useMemo)((function(){return{controlId:t}}),[t]);return(0,b.jsx)(C.Provider,{value:o,children:(0,b.jsx)(s,(0,p.Z)((0,p.Z)({},i),{},{ref:a}))})}));U.displayName="FormGroup";var M=U,G=["as","bsPrefix","className"],Y=["className"];function J(e){var a=e.as,t=e.bsPrefix,r=e.className,s=v(e,G);t=_(t,"col");var i=(0,n.useContext)(P).breakpoints,o=(0,n.useContext)(P).minBreakpoint,l=[],c=[];return i.forEach((function(e){var a,r,n,i=s[e];delete s[e],"object"===typeof i&&null!=i?(a=i.span,r=i.offset,n=i.order):a=i;var d=e!==o?"-".concat(e):"";a&&l.push(!0===a?"".concat(t).concat(d):"".concat(t).concat(d,"-").concat(a)),null!=n&&c.push("order".concat(d,"-").concat(n)),null!=r&&c.push("offset".concat(d,"-").concat(r))})),[(0,p.Z)((0,p.Z)({},s),{},{className:h().apply(void 0,[r].concat(l,c))}),{as:a,bsPrefix:t,spans:l}]}var X=n.forwardRef((function(e,a){var t=J(e),n=(0,r.Z)(t,2),s=n[0],i=s.className,o=v(s,Y),l=n[1],c=l.as,d=void 0===c?"div":c,u=l.bsPrefix,f=l.spans;return(0,b.jsx)(d,(0,p.Z)((0,p.Z)({},o),{},{ref:a,className:h()(i,!f.length&&u)}))}));X.displayName="Col";var $=X,K=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],Q=n.forwardRef((function(e,a){var t=e.as,r=void 0===t?"label":t,s=e.bsPrefix,i=e.column,o=e.visuallyHidden,l=e.className,c=e.htmlFor,d=v(e,K),u=(0,n.useContext)(C).controlId;s=_(s,"form-label");var f="col-form-label";"string"===typeof i&&(f="".concat(f," ").concat(f,"-").concat(i));var m=h()(l,s,o&&"visually-hidden",i&&f);return c=c||u,i?(0,b.jsx)($,(0,p.Z)({ref:a,as:"label",className:m,htmlFor:c},d)):(0,b.jsx)(r,(0,p.Z)({ref:a,className:m,htmlFor:c},d))}));Q.displayName="FormLabel",Q.defaultProps={column:!1,visuallyHidden:!1};var ee=Q,ae=["bsPrefix","className","id"],te=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,s=e.id,i=v(e,ae),o=(0,n.useContext)(C).controlId;return t=_(t,"form-range"),(0,b.jsx)("input",(0,p.Z)((0,p.Z)({},i),{},{type:"range",ref:a,className:h()(r,t),id:s||o}))}));te.displayName="FormRange";var re=te,ne=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],se=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.size,s=e.htmlSize,i=e.className,o=e.isValid,l=void 0!==o&&o,c=e.isInvalid,d=void 0!==c&&c,u=e.id,f=v(e,ne),m=(0,n.useContext)(C).controlId;return t=_(t,"form-select"),(0,b.jsx)("select",(0,p.Z)((0,p.Z)({},f),{},{size:s,ref:a,className:h()(i,t,r&&"".concat(t,"-").concat(r),l&&"is-valid",d&&"is-invalid"),id:u||m}))}));se.displayName="FormSelect";var ie=se,oe=["bsPrefix","className","as","muted"],le=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.as,s=void 0===n?"small":n,i=e.muted,o=v(e,oe);return t=_(t,"form-text"),(0,b.jsx)(s,(0,p.Z)((0,p.Z)({},o),{},{ref:a,className:h()(r,t,i&&"text-muted")}))}));le.displayName="FormText";var ce=le,de=n.forwardRef((function(e,a){return(0,b.jsx)(z,(0,p.Z)((0,p.Z)({},e),{},{ref:a,type:"switch"}))}));de.displayName="Switch";var ue=Object.assign(de,{Input:z.Input,Label:z.Label}),fe=["bsPrefix","className","children","controlId","label"],me=n.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.children,s=e.controlId,i=e.label,o=v(e,fe);return t=_(t,"form-floating"),(0,b.jsxs)(M,(0,p.Z)((0,p.Z)({ref:a,className:h()(r,t),controlId:s},o),{},{children:[n,(0,b.jsx)("label",{htmlFor:s,children:i})]}))}));me.displayName="FloatingLabel";var pe=me,ve=["className","validated","as"],xe={_ref:m().any,validated:m().bool,as:m().elementType},he=n.forwardRef((function(e,a){var t=e.className,r=e.validated,n=e.as,s=void 0===n?"form":n,i=v(e,ve);return(0,b.jsx)(s,(0,p.Z)((0,p.Z)({},i),{},{ref:a,className:h()(t,r&&"was-validated")}))}));he.displayName="Form",he.propTypes=xe;var be=Object.assign(he,{Group:M,Control:D,Floating:B,Check:z,Switch:ue,Label:ee,Text:ce,Range:re,Select:ie,FloatingLabel:pe}),ye=t(9674);be.propTypes={onSubmit:m().func};var Ne=function(e){var a=e.onSubmit,t=(0,n.useState)(""),s=(0,r.Z)(t,2),i=s[0],o=s[1],l=(0,n.useState)(""),c=(0,r.Z)(l,2),d=c[0],u=c[1],f=function(e){switch(e.target.name){case"name":o(e.target.value);break;case"number":u(e.target.value);break;default:return}};return(0,b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a(i,d),o(""),u("")},className:ye.Z.form,children:[(0,b.jsx)("div",{className:ye.Z.inputWraper,children:(0,b.jsxs)("label",{children:[(0,b.jsx)("span",{className:ye.Z.text,children:"Name:"}),(0,b.jsx)("input",{className:ye.Z.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:i,onChange:f})]})}),(0,b.jsx)("div",{className:ye.Z.inputWraper,children:(0,b.jsxs)("label",{children:[(0,b.jsx)("span",{className:ye.Z.text,children:"Tel:"}),(0,b.jsx)("input",{className:ye.Z.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:d,onChange:f})]})}),(0,b.jsx)("button",{className:ye.Z.button,type:"submit",children:"Add contact"})]})},je="Filter_wraper__Sr5Xg",ge="Filter_text__+9v48",Ce="Filter_input__R4e-B",Ze="Filter_inputWraper__qWDz5",Pe=function(e){var a=e.filter,t=e.onFilterChange;return(0,b.jsx)("div",{className:je,children:(0,b.jsx)("form",{className:"mb-3",children:(0,b.jsxs)("label",{htmlFor:"",className:Ze,children:[(0,b.jsx)("span",{className:ge,children:"Find Contact"}),(0,b.jsx)("input",{className:Ce,type:"text",value:a,onChange:t})]})})})},_e=function(e){var a=e.contacts,t=e.filter,r=e.onFilterChange,n=e.onDeleteClick;return(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{className:d,children:"Contacts"}),(0,b.jsx)(Pe,{filter:t,onFilterChange:r}),(0,b.jsx)("ul",{children:a.map((function(e){return(0,b.jsxs)("li",{variant:"info",className:s,children:[(0,b.jsxs)("p",{className:o,children:[(0,b.jsxs)("span",{className:l,children:[e.name,":"]}),(0,b.jsx)("span",{children:e.number})]}),(0,b.jsx)("button",{className:i,variant:"danger",type:"button",onClick:function(){n(e.id)},children:"Delete"})]},e.id)}))})]})};function ke(){var e=(0,n.useState)(""),a=(0,r.Z)(e,2),t=a[0],s=a[1],i=(0,u.bC)(),o=i.data,l=i.isFetching,f=(0,u.Nt)(),m=(0,r.Z)(f,1)[0],p=(0,u.Lr)(),v=(0,r.Z)(p,1)[0],x=[];return!l&&o&&(x=function(){var e=t.toLowerCase();if(o)return o.filter((function(a){return a.name.toLowerCase().includes(e)}))}()),(0,b.jsxs)("div",{className:c,children:[(0,b.jsx)("h1",{className:d,children:"Phonebook"}),(0,b.jsx)(Ne,{onSubmit:function(e,a){(function(e){return o.find((function(a){return a.name===e}))})(e)?window.alert("".concat(e," is alredy exist")):v({name:e,number:a})}}),(0,b.jsx)(_e,{contacts:x,filter:t,onFilterChange:function(e){s(e.target.value)},onDeleteClick:m})]})}},1694:function(e,a){var t;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],a=0;a<arguments.length;a++){var t=arguments[a];if(t){var s=typeof t;if("string"===s||"number"===s)e.push(t);else if(Array.isArray(t)){if(t.length){var i=n.apply(null,t);i&&e.push(i)}}else if("object"===s){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var o in t)r.call(t,o)&&t[o]&&e.push(o)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(t=function(){return n}.apply(a,[]))||(e.exports=t)}()},888:function(e,a,t){"use strict";var r=t(9047);function n(){}function s(){}s.resetWarningCache=n,e.exports=function(){function e(e,a,t,n,s,i){if(i!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function a(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:s,resetWarningCache:n};return t.PropTypes=t,t}},2007:function(e,a,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2391:function(e){"use strict";var a=function(){};e.exports=a}}]);
//# sourceMappingURL=658.28f429e4.chunk.js.map