import{a as u,S as p,i}from"./assets/vendor-B4VkUtbg.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="57566280-4551ff72abb6b2c46ea49083b";function d(o){return u.get("https://pixabay.com/api/",{params:{key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9}}).then(s=>s.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader-wrapper"),m=new p(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const s=o.map(t=>`<li class="gallery-item">
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
        </li>`).join("");l.insertAdjacentHTML("beforeend",s),m.refresh()}function y(){l.innerHTML=""}function g(){c.classList.remove("is-hidden")}function L(){c.classList.add("is-hidden")}const b=document.querySelector(".form");b.addEventListener("submit",w);function w(o){o.preventDefault();const s=o.currentTarget.elements["search-text"].value.trim();s!==""&&(y(),g(),d(s).then(t=>{if(t.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",theme:"dark"});return}h(t.hits)}).catch(t=>{i.error({message:"Something went wrong. Please try again later.",position:"topRight",theme:"dark"})}).finally(()=>{L()}),o.currentTarget.reset())}
//# sourceMappingURL=index.js.map
