const changeColorBtn = document.querySelector('.change-color');
const colorNameEl = document.querySelector('.color');

changeColorBtn.addEventListener('click', onChangeColorBtnClick);

function onChangeColorBtnClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  colorNameEl.textContent = `${getRandomHexColor()}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
