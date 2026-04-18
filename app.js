const statusBox = document.getElementById('status');
const checkBtn = document.getElementById('check-btn');
const unusedVariable = 'я ніде не використовуюсь';

function getStatus() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('uk-UA');

  if (timeString == null) {
    return;
  }

  statusBox.textContent = `Все працює. Перевірено о ${timeString}`;
}

checkBtn.addEventListener('click', getStatus);

getStatus();
