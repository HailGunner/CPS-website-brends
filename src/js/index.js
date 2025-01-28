const swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    spaceBetween: 16,
    slidesPerView: 'auto',
    
  });

const arrowHideElement = document.querySelector('.content__arrow-hide');
const arrowShowElement = document.querySelector('.content__arrow-show');
const hiddenDesktopElements = document.querySelectorAll('.content__link-hidden');
const hiddenTabletElements = document.querySelectorAll('.content__tablet--hidden');
const arrowElement = document.querySelector('.content__arrow-img');
const screenMedia = window.matchMedia('(max-width: 1070px)');


function show() {

arrowHideElement.addEventListener('click', () => {
  hiddenDesktopElements.forEach((desktopContent) => desktopContent.style.display = 'flex');
  arrowHideElement.style.display = 'none';
  arrowShowElement.style.display = 'flex';
  arrowElement.style.transform = 'rotate(180deg)';
});

arrowShowElement.addEventListener('click', () => {
  hiddenDesktopElements.forEach((desktopContent) => desktopContent.style.display = 'none');
  arrowHideElement.style.display = 'flex';
  arrowShowElement.style.display = 'none';
  arrowElement.style.transform = 'rotate(0deg)';
});
}

show();

function media () {
if (screenMedia.matches) {
  arrowHideElement.addEventListener('click', () => {
    hiddenTabletElements.forEach((tblContent) => tblContent.style.display = 'flex');
    arrowHideElement.style.display = 'none';
    arrowShowElement.style.display = 'flex';
    arrowElement.style.transform = 'rotate(180deg)';
  });
  
  arrowShowElement.addEventListener('click', () => {
    hiddenTabletElements.forEach((tblContent) => tblContent.style.display = 'none');
    arrowHideElement.style.display = 'flex';
    arrowShowElement.style.display = 'none';
    arrowElement.style.transform = 'rotate(0deg)';
  });
}}

window.addEventListener("resize", media);

media();