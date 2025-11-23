  // Mobile TOC Toggle
  const tocToggle = document.getElementById('tocToggle');
  const tocCard = document.getElementById('tocCard');
  const tocClose = document.getElementById('tocClose');

  if (tocToggle && tocCard && tocClose) {
    tocToggle.addEventListener('click', () => {
      tocCard.classList.add('toc-open');
      document.body.style.overflow = 'hidden';
    });

    tocClose.addEventListener('click', () => {
      tocCard.classList.remove('toc-open');
      document.body.style.overflow = '';
    });

    // Close when clicking TOC links
    const tocLinks = tocCard.querySelectorAll('a');
    tocLinks.forEach(link => {
      link.addEventListener('click', () => {
        tocCard.classList.remove('toc-open');
        document.body.style.overflow = '';
      });
    });

    // Close on backdrop click
    tocCard.addEventListener('click', (e) => {
      if (e.target === tocCard) {
        tocCard.classList.remove('toc-open');
        document.body.style.overflow = '';
      }
    });
  }
