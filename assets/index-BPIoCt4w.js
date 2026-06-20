var e=(e,t)=>()=>(e&&(t=e(e=0)),t),t=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n,r,i,a,o,s,c,l,u=e((()=>{n=document.querySelector(`.DarkThemeToggle`),r=document.querySelector(`.App`),i=document.querySelector(`.TaskSearchBar__button`),a=document.querySelector(`.TaskSearchBar__input`),o=document.querySelector(`.TaskList__list`),s=document.querySelector(`.TaskList__link`),c=()=>document.querySelectorAll(`.TaskList__deleteIcon`),document.querySelector(`.App__wrapper`),l=()=>document.querySelectorAll(`.TaskList__checkbox`)})),d,f,p,m,h,g,_,v,y,b,x=e((()=>{u(),w(),d=()=>{p(`isdarkTheam`,!r.classList.contains(`App--isDark`)),r.classList.toggle(`App--isDark`)},f=e=>{let t=localStorage.getItem(e);return t?JSON.parse(t):!1},p=(e,t)=>{localStorage.setItem(e,JSON.stringify(t))},m=e=>{let t=``;e.forEach(e=>{t+=`
  <li class="TaskList__taskContent ${e.isCompleted?` TaskList__taskContent--isActive`:``}">
  <div class="TaskList__checkbox" tabindex="0" role="button">
    <img src="./assets/icon-checkmark.svg" alt="icon-checkmark" class="TaskList__checkboxImg">

  </div>
  <div class="TaskList__valueContent">
    <p class="TaskList__value">${e.value}</p>
    <img src="./assets/icon-basket.svg" alt="icon-basket" class="TaskList__deleteIcon">
  </div>
</li>
  `}),o.innerHTML=t,a.value=``},h=(e,t)=>{if(!confirm(`Are you sure that you are want to delete Task`))return;let n=f(`task`);n.splice(t,1),p(`task`,n),y(n)},g=()=>{let e=a.value;if(!e)return;let t={value:e,isCompleted:!1},n=f(`task`)||[];n.push(t),p(`task`,n),y(n)},_=()=>{o.innerHTML=`
  <li class="EmptyList">
  <img src="./assets/icon-empty.svg" alt="list is empty" class="EmptyList__img">
  <p>المهام فارغة</p>
</li>

  `},v=()=>{f(`isdarkTheam`)&&d(),y(f(`task`))},y=e=>{e?.length?(m(e),S()):_()},b=(e,t)=>{let n=f(`task`);e.currentTarget.parentElement.classList.toggle(`TaskList__taskContent--isActive`),n[t].isCompleted=!n[t].isCompleted,p(`task`,n)}})),S,C,w=e((()=>{u(),x(),S=()=>{c().forEach((e,t)=>{e.addEventListener(`click`,e=>{h(e,t)})}),l().forEach((e,t)=>{e.addEventListener(`click`,e=>b(e,t)),e.addEventListener(`keydown`,e=>e.key&&b(e,t))})},C=()=>{i.addEventListener(`click`,e=>{e.preventDefault(),g()}),n.addEventListener(`click`,()=>{d()}),s.addEventListener(`click`,()=>{o.classList.toggle(`TaskList__list--hideCompleted`),s.classList.toggle(`TaskList__link--isActive`)})}}));t((()=>{w(),x(),v(),C()}))();