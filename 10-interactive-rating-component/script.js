const mainContainer = document.querySelector('.main-container');
const thanksContainer = document.querySelector('.thank-you');
const submitBtn = document.getElementById('submit');
const rateAgain = document.getElementById('rate-again');
const rating = document.getElementById('rating');
const rates = document.querySelectorAll('.btn');

submitBtn.addEventListener('click', function () {
  thanksContainer.classList.remove('hidden');
  mainContainer.style.display = 'none';
});

rateAgain.addEventListener('click', function () {
  thanksContainer.classList.add('hidden');
  mainContainer.style.display = 'block';
});

rates.forEach((rate) => {
  rate.addEventListener('click', function () {
    console.log(rate.innerHTML);
    rating.innerHTML = rate.innerHTML;
  });
});
