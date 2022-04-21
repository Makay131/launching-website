//değiştirilebilir tarih- ne zaman açılacağı ile ilgili olan kısım
const countDownDate = new Date('Dec 16, 2023 00:00:00').getTime();

//değiştirme
const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById('days').textContent = 00;
    document.getElementById('hours').textContent = 00;
    document.getElementById('minutes').textContent = 00;
    document.getElementById('seconds').textContent = 00;
  }
}, 1000);

//Bluring Load
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

const blurring = () => {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.textContent = `Loading ${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.opacity = scale(load, 85, 100, 1, 0);
};

//0 to 100 toooo 1 to 0 function (1 and 0 for opacity cuz it could not be 100)
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

let int = setInterval(blurring, 30);
