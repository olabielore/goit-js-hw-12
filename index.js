import{a as u,S as d,i as a}from"./assets/vendor-MgecxatS.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="53366292-8a86654a215d946083e2f4242",h="https://pixabay.com/api/",m=o=>u.get(h,{params:{key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data.hits),c=document.querySelector(".loader-wrapper");function g(){c.classList.remove("hidden")}function n(){c.classList.add("hidden")}const p=document.querySelector(".gallery"),y=new d(".gallery a");function L(o){const s=o.map(t=>(console.log(t),`<li class="gallery-item">
	<a class="gallery-link" href="${t.largeImageURL}">
		<img 
		  class="gallery-image" 
		  src="${t.webformatURL}" 
		  alt="${t.tags}" 
		/>
	</a>
  <ul class="gallery-list">
    <li class="section">
      <p class="list-paragraph">Likes</p>
      <p class="list-section">${t.likes}</p>
    </li>
    <li class="section">
      <p class="list-paragraph">Views</p>
    <p class="list-section">${t.views}</p>
    </li>
    <li class="section">
      <p class="list-paragraph">Comments</p>
      <p class="list-section">${t.comments}</p>
    </li>
    <li class="section">
      <p class="list-paragraph">Downloads</p>
      <p class="list-section">${t.downloads}</p>
    </li>
    </ul>
</li>
`)).join("");p.insertAdjacentHTML("beforeend",s),y.refresh()}function b(){p.innerHTML=""}const w=document.querySelector(".form"),S=o=>{o.preventDefault();const s=o.target.elements["search-text"],t=s.value.trim();if(t===""){a.error({title:"Please enter search text.",position:"topRight"});return}b(),g(),m(t).then(i=>{if(i.length===0){a.warning({title:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n();return}s.value="",L(i),n()}).catch(i=>{a.error({title:"Server error try later",position:"topRight"}),n()})};w.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
