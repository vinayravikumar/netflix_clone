import{A as i,J as r,M as c,V as d,aa as p,j as l,k as s,y as o,z as n}from"./chunk-RT6O7DL3.js";var g=class a{router=l(p);ngOnInit(){google.accounts.id.initialize({client_id:"313331208405-okj0ubsknrcfpp037j024ml11d8j5fnn.apps.googleusercontent.com",callback:e=>this.handleLogin(e)}),google.accounts.id.renderButton(document.getElementById("google-btn"),{theme:"filled blue",size:"large",shape:"rectangle",width:300})}decodeToken(e){return JSON.parse(atob(e.split(".")[1]))}handleLogin(e){if(e){let t=this.decodeToken(e.credential);sessionStorage.setItem("loggedInUser",JSON.stringify(t)),this.router.navigate(["browse"])}}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=s({type:a,selectors:[["app-login"]],standalone:!0,features:[c],decls:6,vars:0,consts:[[1,"absolute"],["src","https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/becb4b4a-fa87-47ab-b92b-aae2c1c6d6f7/SG-en-20231023-popsignuptwoweeks-perspective_alpha_website_small.jpg","alt",""],[1,"w-full","md:w-3/12","absolute","right-0","left-0","p-12","bg-black","my-36","mx-auto","text-white","rounded-lg","bg-opacity-80"],[1,"font-bold","text-3xl","py-4"],["id","google-btn"]],template:function(t,m){t&1&&(o(0,"div",0),i(1,"img",1),n(),o(2,"div",2)(3,"h1",3),r(4,"Netflix Sign In"),n(),i(5,"div",4),n())},dependencies:[d]})};export{g as LoginComponent};