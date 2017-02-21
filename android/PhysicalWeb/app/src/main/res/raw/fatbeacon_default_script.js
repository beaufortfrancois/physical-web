document.querySelector('svg').animate(
  [
    { transform: 'scale(1)'},
    { transform: 'scale(.8)'},
    { transform: 'scale(1)'},
  ], {
    duration: 800,
    easing: 'ease-out',
    iterations: Infinity
  }
);