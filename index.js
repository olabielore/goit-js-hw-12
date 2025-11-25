import{a as L,S as w,i}from"./assets/vendor-CNqCr-V-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const S="53366292-8a86654a215d946083e2f4242",b="https://pixabay.com/api/",u=async(a,t)=>{try{return(await L.get(b,{params:{key:S,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}catch(e){console.log(e)}},d=document.querySelector(".loader-wrapper"),p=document.querySelector(".loader-button"),h=document.querySelector(".gallery");function v(){d.classList.remove("hidden")}function c(){d.classList.add("hidden")}function f(){p.classList.remove("is-hidden")}function y(){p.classList.add("is-hidden")}const q=new w(".gallery a");function g(a){const t=a.map(e=>(console.log(e),`<li class="gallery-item">
	<a class="gallery-link" href="${e.largeImageURL}">
		<img 
		  class="gallery-image" 
		  src="${e.webformatURL}" 
		  alt="${e.tags}" 
		/>
	</a>
  <ul class="gallery-list">
    <li class="section">
      <p class="list-paragraph">Likes</p>
      <p class="list-section">${e.likes}</p>
    </li>
    <li class="section">
      <p class="list-paragraph">Views</p>
    <p class="list-section">${e.views}</p>
    </li>
    <li class="section">
      <p class="list-paragraph">Comments</p>
      <p class="list-section">${e.comments}</p>
    </li>
    <li class="section">
      <p class="list-paragraph">Downloads</p>
      <p class="list-section">${e.downloads}</p>
    </li>
    </ul>
</li>
`)).join("");h.insertAdjacentHTML("beforeend",t),q.refresh()}function B(){h.innerHTML=""}let m="",l=1;const P=document.querySelector(".gallery"),$=document.querySelector(".form"),R=document.querySelector(".loader-button"),E=async a=>{a.preventDefault();const t=a.target.elements["search-text"],e=t.value.trim();if(m=e,e===""){i.error({title:"Please enter search text.",position:"topRight"});return}l=1,B(),y(),v();try{const o=await u(e,l);if(console.log("test",o),o.totalHits===0){i.warning({title:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c();return}g(o.hits),c(),t.value="",o.totalHits>15&&f()}catch(o){console.error(o),i.error({title:"Server error try later",position:"topRight"}),c()}},x=async a=>{try{l++;const t=await u(m,l);g(t.hits);const e=P.querySelector("li").getBoundingClientRect().height;scrollBy({top:e*2,behavior:"smooth"});const o=Math.ceil(t.totalHits/15);l>=o?(y(),i.info({title:"We're reached the end of search results",position:"topRight"})):f()}catch(t){console.log(t)}};$.addEventListener("submit",E);R.addEventListener("click",x);
//# sourceMappingURL=index.js.map
