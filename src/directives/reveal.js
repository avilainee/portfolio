export const reveal = {
  mounted(el, binding) {
    // default animation, override with v-reveal="'fadeInLeft'" etc.
    const animation = binding.value || 'fadeInUp'

    el.classList.add('animate__animated')
    el.style.opacity = 0

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = 1
          el.classList.add(`animate__${animation}`)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
  }
}