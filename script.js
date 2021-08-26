'use strict'

// elements
const nav = document.querySelector('.nav')
const fadeBox = document.querySelector('.fader__textbox')
const headerImg = document.querySelector('.header')
const contact = document.querySelector('.impressum__contact')

// expand contact
contact.addEventListener('click', function () {
  if (contact.textContent == 'Patrick Maurer') {
    contact.textContent = 'contactDetails'
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
