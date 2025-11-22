
  const openBtn = document.getElementById('open-form');
  const modal = document.getElementById('form-modal');
  const closeBtn = modal.querySelector('.modal-close');
  const backdrop = modal.querySelector('.modal-backdrop');

  function openModal() {
    modal.classList.remove('hidden');
  }

  function closeModal() {
    modal.classList.add('hidden');
  }

  openBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

