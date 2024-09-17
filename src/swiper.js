import "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";


console.log(124);

if (window.matchMedia("(max-width: 768px)").matches) {
  // document.querySelector(".second-swiper").classList.remove("swiper");
  // document.querySelector(".first-swiper").classList.remove("swiper");
  // document.querySelector(".third-swiper").classList.remove("swiper");
  // console.log(12415);

  // swiper.destroy();
  console.log(213);

  const swiper = new Swiper(".swiper", {
    // Optional parameters
    slidesPerView: "auto",
    loop: true,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination1",
    },
    // // Navigation arrows
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  
    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });



} else {
  document.querySelector(".second-swiper").classList.remove("swiper");
  document.querySelector(".first-swiper").classList.remove("swiper");
  document.querySelector(".third-swiper").classList.remove("swiper");
}

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth;
  if (width < 768){
    const swiper = new Swiper(".swiper", {
      // Optional parameters
      slidesPerView: "auto",
      loop: true,
      // If we need pagination
      pagination: {
        el: ".swiper-pagination1",
      },
      // // Navigation arrows
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
    
      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
    console.log(213);

  }
})