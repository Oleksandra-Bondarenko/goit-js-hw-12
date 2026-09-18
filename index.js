import{a as w,S as b,i as a}from"./assets/vendor-C1DvvBV_.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const S="57566280-4551ff72abb6b2c46ea49083b";async function d(e,o){return(await w.get("https://pixabay.com/api/",{params:{key:S,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}})).data}const u=document.querySelector(".gallery"),m=document.querySelector(".loader-wrapper"),f=document.querySelector(".load-more-btn"),v=new b(".gallery a",{captionsData:"alt",captionDelay:250});function p(e){const o=e.map(t=>`<li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}">
            <img
              class="gallery-image"
              src="${t.webformatURL}"
              alt="${t.tags}"
            />
            </a>

            <div class="info">
              <p class="info-item">
                Likes
                <span>${t.likes}</span>
              </p>

              <p class="info-item">
                Views
                <span>${t.views}</span>
              </p>

              <p class="info-item">
                Comments
                <span>${t.comments}</span>
              </p>

              <p class="info-item">
                Downloads
                <span>${t.downloads}</span>
              </p>
            </div>
        </li>`).join("");u.insertAdjacentHTML("beforeend",o),v.refresh()}function P(){u.innerHTML=""}function y(){m.classList.remove("is-hidden")}function h(){m.classList.add("is-hidden")}function q(){f.classList.remove("is-hidden")}function g(){f.classList.add("is-hidden")}const M=document.querySelector(".form"),$=document.querySelector(".gallery"),B=document.querySelector(".load-more-btn");M.addEventListener("submit",R);B.addEventListener("click",k);let n=1,c="";async function R(e){e.preventDefault();const o=e.currentTarget.elements["search-text"].value.trim();if(o){c=o,n=1,P(),g(),y();try{const t=await d(c,n);if(t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",theme:"dark"});return}p(t.hits),L(t)}catch{a.error({message:"Something went wrong. Please try again later.",position:"topRight",theme:"dark"})}finally{h(),e.currentTarget.reset()}}}async function k(){n+=1,g(),y();try{const e=await d(c,n);p(e.hits),L(e),E()}catch{a.error({message:"Something went wrong. Please try again later.",position:"topRight",theme:"dark"}),n-=1}finally{h()}}function L(e){const o=Math.ceil(e.totalHits/15);n<o?q():a.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight",theme:"dark"})}function E(){const e=$.querySelector(".gallery-item");if(e){const o=e.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
