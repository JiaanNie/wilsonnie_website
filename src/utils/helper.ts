export function highLightNode(elementId: string) {
  const element: HTMLElement = document.getElementById(elementId);
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    inline: 'nearest',
  });
  element.classList.add('on-click-highlight ');
  setTimeout(() => {
    element.classList.remove('on-click-highlight ');
  }, 1000);
}
