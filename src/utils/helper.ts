export function highLightNode() {
  const element: HTMLElement = document.getElementById('header-0');
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    inline: 'nearest',
  });
  element.classList.add('test');
  setTimeout(() => {
    element.classList.remove('test');
  }, 1000);
}
