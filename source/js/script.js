var toggle = document.querySelector('.page-header__toggle');
var pageHeaderLink = document.querySelector('.page-header__logo-mobile');
var mainNav = document.querySelector('.main-nav');
var listCross = document.querySelector('.site-list__cross');

pageHeaderLink.classList.remove('page-header__nojs');
toggle.classList.remove('page-header__nojs');
mainNav.classList.remove('main-nav--opened');
mainNav.classList.add('main-nav--closed');
listCross.classList.remove('site-list__cross--nojs');

toggle.addEventListener('click', function() {
  mainNav.classList.remove('main-nav--closed');
  mainNav.classList.add('main-nav--opened');
  pageHeaderLink.classList.add('page-header__link--closed');
  toggle.classList.add('page-header__toggle--closed');
})

listCross.addEventListener('click', function() {
  mainNav.classList.add('main-nav--closed');
  pageHeaderLink.classList.remove('page-header__link--closed');
  toggle.classList.remove('page-header__toggle--closed');
})
