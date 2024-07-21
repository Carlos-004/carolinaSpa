import "../sass/style.scss";
// window.swiper = new Swiper({
//     el:'.swiper-wrapper',
//     sliderClass:'swiper-slide',
//     createElements:true,
//     autoplay:{
//         delay:2000
//     },
//     loop:true,
//     navigation:true,
//     pagination:true
// })

window.swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    loop:true
  });