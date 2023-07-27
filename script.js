let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    // menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};


// var swiper = new Swiper(".laptop-slider", {
//     spaceBetween: 20,
//     effect: "fade",
//     grabCursor: true,
//     loop:true,
//     centeredSlides: true,
//     autoplay: {
//         delay:  500,
//         disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
    
// });

 
var swiper = new Swiper(".laptop-slider", {
 
        grabCursor: true,
        // slidesPerView: "auto",
        
        spaceBetween: 10,
        loop: true,
        autoplay: {
                  delay:  2500,
                  disableOnInteraction: false,
              },
             
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  });


  // var swiper = new Swiper(".project-slider", {
  //   effect: "coverflow",
  //   grabCursor: true,
  //   centeredSlides: true,
  //   slidesPerView: "auto",
  //   coverflowEffect: {
  //     rotate: 50,
  //     stretch: 0,
  //     depth: 100,
  //     modifier: 1,
  //     slideShadows: true,
  //   },
  //   breakpoints:{
  //     0:{
  //         slidesPerView:1,
  //     },
  //     768:{
  //         slidesPerView:2,
  //     },
  //     991:{
  //         slidesPerView:3,
  //     },
  // },
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },
  // });


