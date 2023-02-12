const temporaryStub = document.querySelector('.temporary-stub');
const secretButton = document.querySelectorAll('.secret-button');
const stubWrraperBtn = document.querySelector('.stub-wrraper_btn');

for (let i = 0; i < secretButton.length; i++) {
  secretButton[i].addEventListener('click', function () {
    temporaryStub.classList.remove('close-window');
    temporaryStub.classList.remove('none');
  });
}

stubWrraperBtn.addEventListener('click', function () {
  temporaryStub.classList.add('close-window');
  setTimeout(() => temporaryStub.classList.add('none'), 1000);
})

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    temporaryStub.classList.add('none');
  }
})
