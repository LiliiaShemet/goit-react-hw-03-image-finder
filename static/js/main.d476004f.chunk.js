(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={Item:"ImageGalleryItem_Item__3TOxF",Image:"ImageGalleryItem_Image__28VSh"}},12:function(e,t,a){e.exports={Overlay:"Modal_Overlay__Slh0j",Modal:"Modal_Modal__1b3VZ"}},15:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1a0lw"}},16:function(e,t,a){e.exports={container:"Container_container__Tj3sV"}},17:function(e,t,a){e.exports={Gallery:"Section_Gallery__1z3Zq"}},18:function(e,t,a){e.exports={text:"ErrorMessage_text__2Brah"}},19:function(e,t,a){e.exports={text:"Request_text__2Omeb"}},20:function(e,t,a){e.exports={Button:"Button_Button__3bFcu"}},25:function(e,t,a){},28:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=a.n(o),s=(a(25),a(13)),l=a(4),i=a(5),u=a(7),h=a(6),m=a(9),d=(a(26),a(27),a(28),a(14)),j=a.n(d),b=a(11),g=a.n(b),p=a(1);var f=function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.tags,r=e.onOpenModal;return Object(p.jsx)("li",{className:g.a.item,children:Object(p.jsx)("img",{src:t,alt:n,"data-source":a,className:g.a.image,onClick:r})})},O=a(15),x=a.n(O),y=function(e){var t=e.images,a=e.openModal;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("ul",{className:x.a.ImageGallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL,o=e.tags;return Object(p.jsx)(f,{webformatURL:n,openModal:a,largeImageURL:r,tags:o},t)}))})})},_=a(8),v=a.n(_),S=a(16),w=a.n(S),I=function(e){var t=e.children;return Object(p.jsx)("div",{className:w.a.container,children:t})},F=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleSubmitForm=function(t){t.preventDefault(),e.state.query?(e.props.onSubmit(e.state.query),e.setState({query:""})):m.b.error("Please, enter your request!")},e.handleChangeQuery=function(t){e.setState({query:t.currentTarget.value.toLowerCase().trim()})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsx)("header",{className:v.a.Searchbar,children:Object(p.jsx)(I,{children:Object(p.jsxs)("form",{onSubmit:this.handleSubmitForm,className:v.a.Form,children:[Object(p.jsx)("button",{type:"submit",className:v.a.Button,children:Object(p.jsx)("span",{className:v.a.Label,children:"Search"})}),Object(p.jsx)("input",{className:v.a.Input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChangeQuery,value:this.state.query})]})})})}}]),a}(n.Component),M=F,k="22960309-85052fc004ca9b43ae271af96",C={fetchImage:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(k,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.json()}))}},q=C,L=a(17),N=a.n(L),B=function(e){var t=e.children;return Object(p.jsx)("section",{className:N.a.Gallery,children:t})},U=a(18),G=a.n(U),R=function(e){var t=e.message;return Object(p.jsx)("p",{className:G.a.text,children:t})},D=a(19),E=a.n(D),T=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("p",{className:E.a.text,children:"Please, enter your request"})})},P=a(20),A=a.n(P),K=function(e){var t=e.onClick;return Object(p.jsx)("button",{type:"button",className:A.a.Button,onClick:t,children:"Load more"})},V=a(12),Z=a.n(V),z=document.querySelector("#modal-root"),J=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.onBackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(p.jsx)("div",{className:Z.a.Overlay,onClick:this.onBackdropClick,children:Object(p.jsx)("div",{className:Z.a.Modal,children:this.props.children})}),z)}}]),a}(n.Component),Q=J,W=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",images:null,page:1,error:null,total:null,status:"idle",showModal:!1,largeURL:""},e.firstFetchImages=function(t,a){q.fetchImage(t,a).then((function(t){var a=t.hits,n=t.total;e.setState({images:a,total:n,status:"resolved"}),n?e.setState({error:null}):e.setState({error:"Something went wrong! Please, change your request!",status:"rejected"})}))},e.nextFetchImages=function(t,a){q.fetchImage(t,a).then((function(t){var a=t.hits;e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(a))}}))}))},e.handleFormSubmit=function(t){e.setState({query:t,page:1})},e.handleIncrement=function(){e.setState({page:e.state.page+1})},e.toggleModal=function(t){e.setState((function(e){return{showModal:!e.showModal,largeURL:t}}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.query,r=a.page,o=a.showModal;t.query!==n&&(this.setState({status:"pending"}),this.firstFetchImages(n,r)),t.page!==r&&1!==r&&this.nextFetchImages(n,r),o||t.showModal||window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.status,n=e.total,r=e.page,o=e.showModal,c=e.largeURL,s=e.images;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(M,{onSubmit:this.handleFormSubmit}),Object(p.jsx)(B,{children:Object(p.jsxs)(I,{children:["idle"===a&&Object(p.jsx)(T,{}),"rejected"===a&&Object(p.jsx)(R,{message:t}),"resolved"===a&&Object(p.jsx)(y,{images:s,openModal:this.toggleModal}),"pending"===a&&Object(p.jsx)(j.a,{type:"Watch",color:"#00BFFF",height:80,width:80}),n-12*r>0&&Object(p.jsx)(K,{onClick:this.handleIncrement})]})}),o&&Object(p.jsx)(Q,{onClose:this.toggleModal,children:Object(p.jsx)("img",{src:c,alt:""})}),Object(p.jsx)(m.a,{autoClose:3e3})]})}}]),a}(n.Component),X=W;c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(X,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2XcUr",Form:"Searchbar_Form__3dMTF",Button:"Searchbar_Button__2FZat",Label:"Searchbar_Label__1tmGq",Input:"Searchbar_Input__1qLX-"}}},[[50,1,2]]]);
//# sourceMappingURL=main.d476004f.chunk.js.map