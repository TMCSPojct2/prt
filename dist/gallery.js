(() => {
  const dialog = document.querySelector('.image-dialog');
  const image = dialog.querySelector('.full-image');
  const caption = dialog.querySelector('p');
  let previousFocus;
  document.querySelectorAll('[data-full]').forEach(button => {
    button.addEventListener('click', () => {
      previousFocus = button;
      image.src = button.dataset.full;
      image.alt = button.dataset.caption;
      caption.textContent = button.dataset.caption;
      dialog.showModal();
      document.body.classList.add('gallery-open');
    });
  });
  dialog.querySelector('button').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) {
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    }
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('gallery-open');
    previousFocus?.focus();
  });
})();
