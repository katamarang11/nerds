// Нашли кнопки
const sliderControlsBtn = document.querySelectorAll('.slider-controls_btn');
// Нашли блок в кнопке который будем менять
const insideTheBtn = document.querySelectorAll('.slider-controls_btn-active');
// Нашли фон который будем менять
let sliderList = document.querySelector('.slider-list');
sliderList = sliderList.children;

for (let i = 0; i < sliderControlsBtn.length; i++) {

  setInterval(() => {
    [...sliderList].map(elem => {
      return elem.classList.add('non');
    });
    sliderList[1].classList.remove('non');

    [...insideTheBtn].map(elem => {
      return elem.classList.add('none-btn');
    });
    insideTheBtn[1].classList.remove('none-btn');

    setTimeout(() => {
      [...sliderList].map(elem => {
        return elem.classList.add('non');
      });
      sliderList[2].classList.remove('non');

      [...insideTheBtn].map(elem => {
        return elem.classList.add('none-btn');
      });
      insideTheBtn[2].classList.remove('none-btn');

      setTimeout(() => {
        [...sliderList].map(elem => {
          return elem.classList.add('non');
        });
        sliderList[0].classList.remove('non');

        [...insideTheBtn].map(elem => {
          return elem.classList.add('none-btn');
        });
        insideTheBtn[0].classList.remove('none-btn');
      }, 4000);

    }, 4000);

  }, 10000);



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
