(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(85)}])},85:function(e,o,n){"use strict";n.r(o);var t=n(5893),l=n(7294),i=n(2729),_=n.n(i);let a=()=>{let[e,o]=(0,l.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),[n,i]=(0,l.useState)([[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]]),a=[[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1]],r=[[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1]],c=e.map(e=>e.map(e=>e)),d=JSON.parse(JSON.stringify(n)),s=()=>{let n=e.map(e=>e.map(()=>0)),t=d.map(e=>e.map(()=>0));o(n),i(t)},f=0,x=0,m=0,u=0,g=0;for(m=0;m<9;m++)for(u=0;u<9;u++){f=m,x=u;for(let e=-1;e<=1;e++)for(let o=-1;o<=1;o++){let t=f+e,l=x+o;void 0!==n[l]&&void 0!==n[l][t]&&0!==n[l][t]&&1===n[l][t]&&(g++,a[x][f]=g)}g=0}for(let e=0;e<9;e++)for(let o=0;o<9;o++)1===n[o][e]&&(a[o][e]=11);for(let o=0;o<9;o++)for(let n=0;n<9;n++)1===e[n][o]&&-1===a[n][o]&&function e(o,n){for(let t=-1;t<=1;t++)for(let l=-1;l<=1;l++){let i=o+t,_=n+l;console.log("a"),void 0!==a[i]&&void 0!==a[i][_]&&(-1!==a[i][_]?r[i][_]=0:-1===a[i][_]&&(console.log("b"),r[i][_]=0,a[i][_]=0,e(i,_)))}}(n,o);for(let o=0;o<9;o++)for(let t=0;t<9;t++)if(1===e[t][o]&&1===n[t][o]){alert("爆発");for(let e=0;e<9;e++)for(let o=0;o<9;o++)r[o][e]=0,-1===a[o][e]&&(r[o][e]=0,a[o][e]=0)}for(let o=0;o<9;o++)for(let n=0;n<9;n++)1!==e[o][n]&&-1===r[o][n]&&(a[o][n]=-1);console.log(e),console.log(n),console.log(a);let p=0;for(let e=0;e<9;e++)for(let o=0;o<9;o++)-1===a[e][o]&&p++;10===p&&alert("クリア"),console.log(p);let h=(n,t,l)=>{let _=e.some(e=>e.some(e=>0!==e));if(c[t][n]=1,!_){let e=0;for(;e<10;){let o=Math.floor(9*Math.random()),n=Math.floor(9*Math.random());0===d[o][n]&&1!==c[o][n]&&(d[o][n]=1,e++)}i(d)}o(c)};return(0,t.jsx)("div",{className:_().container,children:(0,t.jsxs)("div",{className:_().board1,children:[(0,t.jsx)("div",{className:_().button,onClick:s,children:"a"}),(0,t.jsx)("div",{className:_().board2,children:a.map((e,o)=>e.map((e,n)=>(0,t.jsx)("div",{className:_().cell,onClick:e=>h(n,o,e),onContextMenu:e=>h(n,o,e),children:0!==e&&(-1!==e&&9!==e&&10!==e?(0,t.jsx)("div",{className:_().icon,style:{backgroundPosition:"".concat(-(30*(e-1)),"px")}}):e<11&&(0,t.jsx)("div",{className:_().stone,children:(9===a[o][n]||10===a[o][n])&&(0,t.jsx)("div",{className:_().flag,style:{backgroundPosition:"".concat(-(100*(e-1)),"%")}})}))},"".concat(n,"-").concat(o))))})]})})};o.default=a},2729:function(e){e.exports={container:"index_container__gnN1f",main:"index_main__kAcUb",footer:"index_footer__qq_p6",title:"index_title__gEapU",description:"index_description__087sm",code:"index_code__VeCgy",grid:"index_grid__FmmIe",card:"index_card__kAxi6",logo:"index_logo__FcDOZ",hoge:"index_hoge__UVxRa",board1:"index_board1__iJLCK",board2:"index_board2___5jH9",cell:"index_cell__3W8ZQ",icon:"index_icon__Noc_h",flag:"index_flag__Bsg_z",stone:"index_stone__oeDmm",button:"index_button__6kyPH"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);