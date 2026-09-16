import{a as w,S as b,i}from"./assets/vendor-C1DvvBV_.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const S="57566280-4551ff72abb6b2c46ea49083b";async function d(r,o){return(await w.get("https://pixabay.com/api/",{params:{key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}})).data}const u=document.querySelector(".gallery"),m=document.querySelector(".loader-wrapper"),p=document.querySelector(".load-more-btn"),v=new b(".gallery a",{captionsData:"alt",captionDelay:250});function h(r){const o=r.map(e=>`<li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img
              class="gallery-image"
              src="${e.webformatURL}"
              alt="${e.tags}"
            />
            </a>

            <div class="info">
              <p class="info-item">
                Likes
                <span>${e.likes}</span>
              </p>

              <p class="info-item">
                Views
                <span>${e.views}</span>
              </p>

              <p class="info-item">
                Comments
                <span>${e.comments}</span>
              </p>

              <p class="info-item">
                Downloads
                <span>${e.downloads}</span>
              </p>
            </div>
        </li>`).join("");u.insertAdjacentHTML("beforeend",o),v.refresh()}function P(){u.innerHTML=""}function f(){m.classList.remove("is-hidden")}function y(){m.classList.add("is-hidden")}function g(){p.classList.remove("is-hidden")}function L(){p.classList.add("is-hidden")}const q=document.querySelector(".form"),M=document.querySelector(".gallery"),$=document.querySelector(".load-more-btn");q.addEventListener("submit",R);$.addEventListener("click",k);let a=1,c="";async function R(r){r.preventDefault();const o=r.currentTarget.elements["search-text"].value.trim();if(o){c=o,a=1,P(),L(),f();try{const e=await d(c,a);if(e.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",theme:"dark"});return}h(e.hits);const n=Math.ceil(e.totalHits/15);a<n?g():i.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight",theme:"dark"})}catch{i.error({message:"Something went wrong. Please try again later.",position:"topRight",theme:"dark"})}finally{y(),r.currentTarget.reset()}}}async function k(){a+=1,L(),f();try{const r=await d(c,a);h(r.hits);const o=Math.ceil(r.totalHits/15);a<o?g():i.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight",theme:"dark"});const e=M.querySelector(".gallery-item");if(e){const n=e.getBoundingClientRect().height;window.scrollBy({top:n*2,behavior:"smooth"})}}catch{i.error({message:"Something went wrong. Please try again later.",position:"topRight",theme:"dark"}),a-=1}finally{y()}}
//# sourceMappingURL=index.js.map
