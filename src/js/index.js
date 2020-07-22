// get all main elements, buttons, titleElement
// main elements
const mainIndex = document.querySelector('.main__index')
const mainBookmark = document.querySelector('.main__bookmark')
const mainCreate = document.querySelector('.main__create')
const mainProfile = document.querySelector('.main__profile')

// buttons
const navButtonHome = document.querySelector('.btn-home')
const navButtonSaved = document.querySelector('.btn-bookmarks')
const navButtonAdd = document.querySelector('.btn-add')
const navButtonProfile = document.querySelector('.btn-profile')

const showAnswerCard1 = document.querySelector('.btn__card--1 button')

//titleElement
const headerTitle = document.querySelector('.header__title')

//Answer sections
const answerCard1 = document.querySelector('.main__index .answer')
const answerCard2 = document.querySelector('.main__bookmark .answer')

// EVENTS

navButtonHome.addEventListener('click', () => {
  headerTitle.textContent = 'QUIZ - APP'
  mainIndex.classList.remove('hidden')
  mainBookmark.classList.add('hidden')
  mainCreate.classList.add('hidden')
  mainProfile.classList.add('hidden')
})
navButtonSaved.addEventListener('click', () => {
  headerTitle.textContent = 'BOOKMARKS'
  mainIndex.classList.add('hidden')
  mainBookmark.classList.remove('hidden')
  mainCreate.classList.add('hidden')
  mainProfile.classList.add('hidden')
})
navButtonAdd.addEventListener('click', () => {
  headerTitle.textContent = 'CREATE'
  mainIndex.classList.add('hidden')
  mainBookmark.classList.add('hidden')
  mainCreate.classList.remove('hidden')
  mainProfile.classList.add('hidden')
})
navButtonProfile.addEventListener('click', () => {
  headerTitle.textContent = 'PROFILE'
  mainIndex.classList.add('hidden')
  mainBookmark.classList.add('hidden')
  mainCreate.classList.add('hidden')
  mainProfile.classList.remove('hidden')
})

showAnswerCard1.addEventListener('click', () => {
  if (showAnswerCard1.classList.contains('card__button--show-answer')) {
    answerCard1.classList.remove('hidden')
    showAnswerCard1.classList.remove('card__button--show-answer')
    showAnswerCard1.classList.add('card__button--hide-answer')
  } else {
    answerCard1.classList.add('hidden')
    showAnswerCard1.classList.add('card__button--show-answer')
    showAnswerCard1.classList.remove('card__button--hide-answer')
  }
})
// hideAnswerCard1.addEventListener('click', () => {
//   console.log('Hello World')
//   answerCard1.classList.add('hidden')
//   showAnswerCard1.classList.add('card__button--show-answer')
//   showAnswerCard1.classList.remove('card__button--hide-answer')
// })

// function setHideClass() {
//   document.querySelector('.btn__card--1 .card__button--hide-answer')
// }
