"use strict";window.ready=function(t){"loading"!==document.readyState?t():document.addEventListener?document.addEventListener("DOMContentLoaded",t):document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&t()})},function(n){window.lightGallery=function(t,e){n(t).find(e).each(function(){n(this).attr("data-sub-html",n(this).find("img").attr("title"))}),n(t).lightGallery({selector:e,download:!1,fullScreen:!1,zoom:!1,share:!1,thumbnail:!0})}}(jQuery);
"use strict";ready(function(){var e,r,l,s,o=document.querySelector(".block-calculate-cost"),t=(o.querySelector(".block__content"),o.querySelector(".block__slider")),i=(o.querySelector(".block__slider-wrapper"),o.querySelectorAll(".teaser-calculate-cost:not(.swiper-slide-duplicate)")),a=o.querySelector(".arrow-prev"),c=o.querySelector(".arrow-next"),d=(o.querySelector(".block__footer"),o.querySelector(".block__dots"));1025<=document.body.offsetWidth&&(3<i.length?t.classList.contains(".swiper-container-initialized")||(e=slidesPerView=3,r=slidesPerGroup=3,l=loop=!1,s=spaceBetween=24,new Swiper(t,{init:!1,wrapperClass:"block__slider-wrapper",slideClass:"teaser-calculate-cost",slidesPerView:e,slidesPerGroup:r,setWrapperSize:!0,grabCursor:!0,spaceBetween:s,watchOverflow:!0,updateOnWindowResize:!0,observer:!0,observeParents:!0,observeSlideChildren:!0,loop:l,loopFillGroupWithBlank:!0,freeMode:!1,freeModeMomentum:!1,navigation:{prevEl:a||null,nextEl:c||null,disabledClass:"arrows__arrow_disabled"},pagination:{el:d,dynamicBullets:!0,clickable:!0}}).init(),d&&(d.style.display="block"),o.classList.add("js-processed-slider")):(arrows&&(arrows.style.opacity="0"),arrows&&(arrows.style.visibility="hidden"),d&&(d.style.display="none")))});
"use strict";!function(e){"undefined"!=typeof Drupal&&(Drupal.behaviors.customThemeFile={attach:function(e,t){}}),e(document).ready(function(){e("table").wrap("<div class='table-wrapper'></div>")})}(jQuery);