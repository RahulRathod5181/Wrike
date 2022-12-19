let btn = document.getElementById("get");

btn.addEventListener("click",()=>{
    window.location.href = "sign-up.html"
})

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 25,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




  