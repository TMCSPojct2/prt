(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const nodes = document.querySelectorAll('.section-head, .about > div, .project, .experience, .skill-group, .course, .contact, .strip');
  if (!reduced.matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    nodes.forEach((node, index) => {
      node.classList.add('reveal');
      node.style.setProperty('--delay', `${Math.min(index % 3 * 65, 130)}ms`);
      observer.observe(node);
    });
    document.body.classList.add('motion-ready');
    reduced.addEventListener('change', () => {
      if (reduced.matches) {
        document.body.classList.remove('motion-ready');
        observer.disconnect();
      }
    });
  }
  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.append(progress);
  const sections = [...document.querySelectorAll('main section')];
  const links = [...document.querySelectorAll('.links a')];
  let queued = false;
  function update() {
    const extent = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${extent > 0 ? Math.min(100, scrollY / extent * 100) : 0}%`;
    const offset = document.querySelector('header').offsetHeight + 110;
    const current = sections.filter(section => section.getBoundingClientRect().top <= offset).at(-1);
    links.forEach(link => {
      const active = current && link.hash === `#${current.id}`;
      link.classList.toggle('active', Boolean(active));
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    queued = false;
  }
  addEventListener('scroll', () => {
    if (!queued) { queued = true; requestAnimationFrame(update); }
  }, { passive: true });
  addEventListener('resize', update);
  update();
})();
