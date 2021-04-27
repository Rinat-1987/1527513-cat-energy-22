var pageHeader = document.querySelector('.page-header');
var toggle = document.querySelector('.page-header__toggle');
var pageHeaderLink = document.querySelector('.page-header__link');
var mainNav = document.querySelector('.main-nav');

toggle.addEventListener('click', function() {
  mainNav.classList.remove('main-nav--closed');
  pageHeaderLink.classList.add('page-header__link--closed');
  toggle.classList.add('.page-header__toggle--closed');
})
