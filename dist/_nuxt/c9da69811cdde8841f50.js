(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{145:function(t,e,n){var content=n(171);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("36873827",content,!0,{sourceMap:!1})},170:function(t,e,n){"use strict";var r=n(145);n.n(r).a},171:function(t,e,n){e=t.exports=n(46)(!1);var r=n(172)(n(173));e.push([t.i,'body{background-color:#ecf0f1;background-image:linear-gradient(145deg,transparent,rgba(0,0,0,.25))}.main{margin:20px;align-items:flex-start;display:grid;grid-template-columns:repeat(5,1fr);grid-gap:15px}@media screen and (max-width:1200px){.main{grid-template-columns:repeat(3,1fr)}}@media screen and (max-width:900px){.main{grid-template-columns:repeat(2,1fr)}}@media screen and (max-width:600px){.main{grid-template-columns:repeat(1,1fr)}}.candidate{display:flex;flex-direction:column;align-items:center;justify-content:center}.candidate-logo{width:100px;height:100px;margin:10px;background-size:contain;border-radius:50%;border:2px solid #000}.name{margin:10px;align-self:flex-start}.name,.tw-logo{position:relative}.tw-logo:after{content:"";display:block;background-image:url('+r+");background-size:cover;background-position:50%;width:25px;top:10px;left:-10px;height:25px;border-radius:50%;position:absolute;margin-left:10px}.title{font-size:5em;text-align:center;margin:1em}.news{border:1px solid #bdc3c7;display:flex;flex-direction:column;border-radius:5px;margin-bottom:15px;padding:10px;box-shadow:0 0 15px 1px #bdc3c7}.description{text-align:justify}.news-link{text-decoration:none;color:#fff;background:#7f8c8d;padding:10px;margin:5px;transition:background-color .5s,color .5s,border-color .5s;border-radius:25px;text-align:center}.news-link:hover{background:transparent;color:#000;border:1px solid #000}footer{text-align:center;margin:10px}footer a{text-decoration:none}.name-twitter-container{align-self:center;display:flex}",""])},172:function(t,e,n){"use strict";t.exports=function(t,e){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},173:function(t,e,n){t.exports=n.p+"img/b26b71f.jpg"},174:function(t,e,n){"use strict";n.r(e);n(45),n(24);var r=n(151),o=n.n(r),c={data:function(){return{candidates:[{id:1,name:"Mario+Negri",partido:"Cordoba cambia",pic:"/negri.jpg",twitter:"https://twitter.com/marioraulnegri",news:[]},{id:2,name:"Juan+Schiaretti",partido:"Hacemos por Cordoba",pic:"/schiaretti.png",twitter:"https://twitter.com/JSchiaretti",news:[]},{id:3,name:"Fernando+Schülle",partido:"Partido humanista",pic:"/schulle.jpg",twitter:"https://twitter.com/ferschule",news:[]},{id:4,name:"Aurelio+Elorrio",partido:"Encuentro Vecinal Cordoba",pic:"/elorrio.jpg",twitter:"https://twitter.com/AGarciaElorrio",news:[]},{id:5,name:"Carlos+Bianco",partido:"Union del centro democratico",pic:"/negri.jpg",twitter:"https://twitter.com/marioraulnegri",news:[]},{id:6,name:"Enrique+Sella",partido:"P.A.I.S",pic:"/sella.jpg",twitter:"https://twitter.com/SellaEnrique",news:[]},{id:7,name:"Ramón+Mestre",partido:"Union civica radical",pic:"/mestre.jpg",twitter:"https://twitter.com/ramonjmestre",news:[]},{id:8,name:"Liliana+Olivero",partido:"Frente de izquierda y de los trabajadores",pic:"/olivero.jpg",twitter:"https://twitter.com/LilianaOlivero",news:[]},{id:9,name:"Eduardo+Mulhall",partido:"Movimiento avanzada socialista",pic:"/mulhall.jpg",twitter:"https://twitter.com/EduardoMulhall",news:[]},{id:10,name:"Kasem+Dandach",partido:"Movimiento de accion vecinal",pic:"/dandach.png",twitter:"https://twitter.com/KasemDandach57",news:[]},{id:11,name:"Luis+Beltrán",partido:"Vecinalismo Independiente",pic:"/negri.jpg",twitter:"https://twitter.com/marioraulnegri",news:[]},{id:12,name:"Agustín+Spaccesi",partido:"Partido Unión Ciudadana",pic:"/spaccesi.jpg",twitter:"https://twitter.com/SpaccesiAgustin",news:[]},{id:13,name:"Luciana+Echevarría",partido:"MST-Nueva Izquierda",pic:"/echevarria.jpg",twitter:"https://twitter.com/LuciEchevarria",news:[]}]}},methods:{parseContent:function(content){return content.substring(0,content.indexOf("["))},getCandidatePic:function(img){return"background-image: url('"+img+"')"}},mounted:function(){for(var t=this,e=function(i){o.a.get("https://newsapi.org/v2/everything?q="+t.candidates[i].name+"&domains=clarin.com,perfil.com,lanacion.com.ar,lavoz.com.ar,pagina12.com.ar&apiKey=4483c32148994e428926ebdd2294ac9a").then(function(e){t.candidates[i].news=e.data.articles.slice(0,5)}).catch(function(t){console.log("ERROR",t)}).finally()},i=0;i<this.candidates.length;i++)e(i)}},d=(n(170),n(22)),component=Object(d.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",{staticClass:"title"},[t._v("A quien voto?")]),t._v(" "),n("div",{staticClass:"main"},t._l(t.candidates.filter(function(t){return t.news.length>0}),function(e){return n("div",{key:e.id,staticClass:"candidate"},[n("div",{staticClass:"candidate-logo",style:t.getCandidatePic(e.pic)}),t._v(" "),n("div",{staticClass:"name-twitter-container"},[n("h1",{staticClass:"name"},[t._v(t._s(e.name.replace("+"," ")))]),t._v(" "),n("a",{staticClass:"tw-logo",attrs:{href:e.twitter,target:"_blank"}})]),t._v(" "),t._l(e.news,function(article){return n("div",{key:article.title,staticClass:"news"},[n("h3",{staticClass:"news-title"},[t._v(" "+t._s(article.title)+" ")]),t._v(" "),n("p",{staticClass:"description"},[t._v(" "+t._s(t.parseContent(article.content))+" ")]),t._v(" "),n("a",{staticClass:"news-link",attrs:{href:article.url,target:"_blank"}},[t._v(" Ver en el diario ")])])})],2)}),0),t._v(" "),t._m(0)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("p",[this._v("Use la "),e("a",{staticClass:"news-api",attrs:{href:"https://newsapi.org/"}},[this._v("News API")]),this._v(" para traer los articulos del diario")])])}],!1,null,null,null);e.default=component.exports}}]);