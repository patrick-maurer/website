'use strict';

// elements
const nav = document.querySelector('.nav');
const fadeBox = document.querySelector('.fader__textbox');
const headerImg = document.querySelector('header');
const contact = document.querySelector('.impressum__contact');

// expand contact
contact.addEventListener('click', function () {
  if (contact.textContent == 'Contact') {
    contact.textContent = 'maurerpatrick@protonmail.com';
  } else contact.textContent = 'Contact';
});

// fadeBox
let faderIndex = 0;
let faderText = [
  'I am a professional scientist.',
  'I am a machine learning enthusiast.',
  'I am a passionate runner.',
];

function fader() {
  fadeBox.classList.add('hide');
  setTimeout(function () {
    fadeBox.textContent = faderText[faderIndex];
    fadeBox.classList.remove('hide');
    faderIndex++;
    if (faderIndex == faderText.length) {
      faderIndex = 0;
    }
  }, 1000);
}

// sticky navigation
const obsCallback = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};
const obsOptions = {
  root: null,
  treshold: 0,
};
const headerObserver = new IntersectionObserver(obsCallback, obsOptions);
headerObserver.observe(headerImg);
