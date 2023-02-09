// Нашли кнопки
const sliderControlsBtn = document.querySelectorAll('.slider-controls_btn');
// Нашли блок в кнопке который будем менять
const insideTheBtn = document.querySelectorAll('.slider-controls_btn-active');
// Нашли фон который будем менять
let sliderList = document.querySelector('.slider-list');
sliderList = sliderList.children;

for (let i = 0; i < sliderControlsBtn.length; i++) {
  sliderControlsBtn[i].addEventListener('click', function () {
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

