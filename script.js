const menuOpenButton = document.getElementById("menu-open-button");
const navLinks = document.querySelectorAll(".nav-menu .nav-item .nav-link");
const menuCloseButton = document.getElementById("menu-close-button");
 
// mobile menu toggle
menuOpenButton.addEventListener("click", () => {
    document.body.classList.add('show-mobile-menu');
});

// close mobile menu when click x button
menuCloseButton.addEventListener('click', () => {
    document.body.classList.remove('show-mobile-menu');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => 
        menuCloseButton.click());
});

// swiper js
const swiper = new Swiper('.slider-wrapper', {
  // Optional parameters
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
        dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
//   Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        1024: {
        slidesPerView: 3,
        },
    }
});

const links = document.querySelectorAll(".nav-link");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});
console.log("hello");
