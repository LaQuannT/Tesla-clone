const menuBtn = document.getElementById('btn-nav-phone');
const modal = document.getElementById('modal');
const menuCloseBtn = document.getElementById('btn-nav-close');
const body = document.querySelector('body');
const mobileNav = document.getElementById('mobile-nav');

const openMenu = () => {
  modal.style.display = 'block';
  body.style.overflow = 'hidden';
  mobileNav.classList.add('active');
};

const closeMenu = () => {
  modal.style.display = 'none';
  body.style.overflow = 'auto';
  mobileNav.classList.remove('active');
};

menuBtn.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);
