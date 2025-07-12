// Toggle Mobile Menu
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

// Close navbar on scroll
window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}

// Swiper Carousel
var swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Dark Mode Toggle Feature
const body = document.body;
const darkToggleBtn = document.createElement('div');
darkToggleBtn.innerHTML = "<i class='bx bx-moon'></i>";
darkToggleBtn.style.position = 'fixed';
darkToggleBtn.style.bottom = '20px';
darkToggleBtn.style.right = '20px';
darkToggleBtn.style.background = '#3cb815';
darkToggleBtn.style.color = '#fff';
darkToggleBtn.style.padding = '10px';
darkToggleBtn.style.borderRadius = '50%';
darkToggleBtn.style.cursor = 'pointer';
darkToggleBtn.style.zIndex = '2000';
document.body.appendChild(darkToggleBtn);

darkToggleBtn.onclick = () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    darkToggleBtn.innerHTML = "<i class='bx bx-sun'></i>";
  } else {
    darkToggleBtn.innerHTML = "<i class='bx bx-moon'></i>";
  }
}

// Optional: Add Dark Mode Styles via JS
const style = document.createElement('style');
style.innerHTML = `
  .dark-mode {
    --bg-color: #121212;
    --text-color: #f0f0f0;
    --green-color: #66bb6a;
    --light-green-color: #a5d6a7;
    --orange-color: #ffa726;
    --light-orange-color: #ff7043;
    background-color: var(--bg-color);
    color: var(--text-color);
  }
  .dark-mode .footer,
  .dark-mode .categories-container .box,
  .dark-mode .products-container .box,
  .dark-mode .customers-container .box {
    background-color: #1e1e1e;
    color: var(--text-color);
  }
  .dark-mode .navbar a {
    color: var(--text-color);
  }
`;
document.head.appendChild(style);

//  Can add more animations or interactivity if needed!
