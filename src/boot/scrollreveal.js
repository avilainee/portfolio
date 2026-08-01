import ScrollReveal from 'scrollreveal'

export default () => {
  ScrollReveal().reveal('.reveal', {
    distance: '40px',
    origin: 'bottom',
    duration: 800,
    easing: 'ease-out',
    reset: false // set true if you want it to re-animate every time it re-enters viewport
  })
}
