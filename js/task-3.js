const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputHandle);

function onInputHandle(event) {
  let displayName = event.target.value.trim();
  if (displayName === '') {
    displayName = 'Anonymous';
  }
  outputEl.textContent = displayName;
}
