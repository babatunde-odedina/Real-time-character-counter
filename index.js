const totalEl = document.getElementById('total');
const remainingEl = document.getElementById('remaining');
const textEl = document.querySelector('.textarea');
const maxLength = 60;

textEl.addEventListener('keyup', () => {
  updateCounter();
});

function updateCounter() {
  const maxLength = textEl.getAttribute('maxlength');
  totalEl.innerHTML = textEl.value.length;
  remainingEl.innerHTML = maxLength - textEl.value.length;
}

updateCounter();
