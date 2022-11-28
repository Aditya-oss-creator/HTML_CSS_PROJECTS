const mobileNavLinks = document.querySelectorAll('.mobile-nav-links');
const mobileNavBtn = document.querySelector('.mobile-nav-btn');

console.log(mobileNavLinks);
console.log(mobileNavBtn);

mobileNavBtn.addEventListener('click', function (e) {
  mobileNavLinks.classList.toggle('mobile-navbar');
});
