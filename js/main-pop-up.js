const mapContactsBtn = document.querySelector('.map-contacts_btn');
const modalWindow = document.querySelector('.modal');

const closeBtn = document.querySelector('.close-btn');

mapContactsBtn.addEventListener('click', function () {
  modalWindow.classList.remove('none');
});

closeBtn.addEventListener('click', function () {
  modalWindow.classList.add('none');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    modalWindow.classList.add('none');
  }
});