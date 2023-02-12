const mapContactsBtn = document.querySelector('.map-contacts_btn');
const modalWindow = document.querySelector('.modal');

const closeBtn = document.querySelector('.close-btn');

mapContactsBtn.addEventListener('click', function () {
  modalWindow.classList.remove('close-window');
  modalWindow.classList.remove('none');
});

closeBtn.addEventListener('click', function () {
  modalWindow.classList.add('close-window');
  setTimeout(() => modalWindow.classList.add('none'), 1000);
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    modalWindow.classList.add('close-window');
    setTimeout(() => modalWindow.classList.add('none'), 1000);
  }
});