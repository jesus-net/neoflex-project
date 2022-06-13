import '@components/header/header.scss';

import '@components/input/input.js';

const menuBurger = document.querySelector('.header__burger');
const navbar = document.querySelector('.navbar');
const mainHome = document.querySelector('.home');

menuBurger.addEventListener('click', function () {
    navbar.classList.add('navbar--active');
    menuBurger.classList.add('header__burger--disabled');
});

mainHome.addEventListener('click', function() {
    navbar.classList.remove('navbar--active');
    menuBurger.classList.remove('header__burger--disabled');
});


