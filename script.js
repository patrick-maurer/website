'use strict'

// elements
const nav = document.querySelector('.nav')
const fadeBox = document.querySelector('.fader__textbox')
const headerImg = document.querySelector('.header')
const contact = document.querySelector('.impressum__contact')
const slides = document.querySelectorAll('.gallery__slider__element')
const btnPrv = document.querySelector('.gallery__slider__btnPrv')
const btnNxt = document.querySelector('.gallery__slider__btnNxt')

// expand contact
contact.addEventListener('click', function () {
  if (contact.textContent == 'Patrick Maurer') {
    contact.textContent = 'Technikerstraße 21a 6020 Innsbruck'
  } else contact.textContent = 'Patrick Maurer'
})

// fadeBox
let faderIndex = 0
let faderText = [
  'a professional scientist.',
  'a curious developer.',
  'a passionate hiker.',
]

function fader() {
  fadeBox.classList.add('hide')
  setTimeout(function () {
    fadeBox.textContent = faderText[faderIndex]
    fadeBox.classList.remove('hide')
    faderIndex++
    if (faderIndex == faderText.length) {
      faderIndex = 0
    }
  }, 1000)
}

// sticky navigation
const obsCallback = function (entries) {
  const [entry] = entries
  if (!entry.isIntersecting) nav.classList.add('sticky')
  else nav.classList.remove('sticky')
}
const obsOptions = {
  root: null,
  treshold: 0,
}
const headerObserver = new IntersectionObserver(obsCallback, obsOptions)
headerObserver.observe(headerImg)

// slider
let currentSlide = 4

const manualNav = function (manual) {
  slides.forEach((slide) => {
    slide.classList.remove('active')
  })
  slides[Math.abs(manual)].classList.add('active')
}

btnNxt.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % 5
  manualNav(currentSlide)
  console.log(currentSlide)
})

btnPrv.addEventListener('click', () => {
  currentSlide = (currentSlide - 1) % 5
  manualNav(currentSlide)
  console.log(currentSlide)
})
