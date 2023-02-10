// Нашли кнопки
const sliderControlsBtn = document.querySelectorAll('.slider-controls_btn');
// Нашли блок в кнопке который будем менять
const insideTheBtn = document.querySelectorAll('.slider-controls_btn-active');
// Нашли фон который будем менять
let sliderList = document.querySelector('.slider-list');
sliderList = sliderList.children;

for (let i = 0; i < sliderControlsBtn.length; i++) {
  sliderControlsBtn[i].addEventListener('click', function () {
    j = i;
    [...sliderList].map(elem => {
      return elem.classList.add('non');
    });
    sliderList[i].classList.remove('non');

    [...insideTheBtn].map(elem => {
      return elem.classList.add('none-btn');
    });
    insideTheBtn[i].classList.remove('none-btn');
  });
}

let j = 0;
const automaticCarousel = () => {
  if (j === sliderList.length - 1) {
    sliderList[j].classList.add('non');
    insideTheBtn[j].classList.add('none-btn');
    j = 0;
    sliderList[j].classList.remove('non');
    insideTheBtn[j].classList.remove('none-btn');
  } else {
    sliderList[j].classList.add('non');
    insideTheBtn[j].classList.add('none-btn');

    sliderList[j + 1].classList.remove('non');
    insideTheBtn[j + 1].classList.remove('none-btn');
    j++;
  }
}

setInterval(automaticCarousel, 6000); 