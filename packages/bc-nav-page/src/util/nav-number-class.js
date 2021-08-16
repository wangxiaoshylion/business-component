export function navNumberClass(length, min, max) {
  let numberClassName = '';
  switch (true) {
    case length > max - 1:
      numberClassName = 'nav-' + max;
      break;
    case length <= min:
      numberClassName = 'nav-' + min;
      break;
    default:
      numberClassName = 'nav-' + (max + min) / 2;
  }

  return numberClassName;
}
