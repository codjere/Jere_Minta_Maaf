const nameCard = document.getElementById('nameCard');
const apologyCard = document.getElementById('apologyCard');
const nicknameInput = document.getElementById('nickname');
const submitName = document.getElementById('submitName');
const apologyTitle = document.getElementById('apologyTitle');
const apologyText = document.getElementById('apologyText');
const recipientSpan = document.getElementById('recipient');
const backBtn = document.getElementById('backBtn');

const popup = document.getElementById('popup');
const heartsContainer = document.getElementById('hearts');
const popupTitle = document.getElementById('popupTitle');
const popupMsg = document.getElementById('popupMsg');
const closePopup = document.getElementById('closePopup');

let nickname = '';

submitName.addEventListener('click', () => {
  nickname = nicknameInput.value.trim();
  if (!nickname) {
    alert('Siapa nih yang isi nama ?  ');
    return;
  }

  // Show apology card with updated message about not being able to join eval
  nameCard.style.display = 'none';
  apologyCard.style.display = 'block';

  apologyTitle.textContent = `${nickname}, maaf ya kak *emot sorry banget `;
  recipientSpan.textContent = nickname;
  apologyText.innerHTML = `Maaf ya <strong>${nickname}</strong>, aku belum bisa ikut eval kali ini. Semoga sebentar lancar dan menyenangkan dan penuh hadirat Tuhan.`;
});

backBtn.addEventListener('click', () => {
  // Go back to name input so user can edit or re-enter
  apologyCard.style.display = 'none';
  nameCard.style.display = 'block';
  nicknameInput.value = '';
  nickname = '';
});

// Optional popup handlers (if you want to show a popup elsewhere)
function showThankYouPopup() {
  if (!nickname) return;
  popup.style.display = 'block';
  popupTitle.textContent = `Makasih ya, ${nickname} 💕`;
  popupMsg.textContent = `Terima kasih atas pengertiannya. Semoga acaranya berjalan lancar!`;
  generateHearts();
}

closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
  // clear hearts
  heartsContainer.innerHTML = '';
});

function generateHearts() {
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = `${Math.random() * 100 - 50}px`;
    heart.style.top = `${Math.random() * 40 - 20}px`;
    heart.style.animationDelay = `${Math.random() * 0.3}s`;
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 2000);
  }
}
