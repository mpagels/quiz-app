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
const showAnswerCard2 = document.querySelector('.btn__card--2 button')
const showAnswerCard3 = document.querySelector('.btn__card--3 button')
//titleElement
const headerTitle = document.querySelector('.header__title')

//Answer sections
const answerCard1 = document.querySelector('.answer__card-1')
const answerCard2 = document.querySelector('.answer__card-2')
const answerCard3 = document.querySelector('.answer__card-3')

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

  if (showAnswerCard3.classList.contains('card__button--show-answer')) {
    showAnswerCard3.addEventListener('click', () => {
      answerCard3.classList.remove('hidden')
      showAnswerCard3.classList.remove('card__button--show-answer')
      showAnswerCard3.classList.add('card__button--hide-answer')
    })
  } else {
    showAnswerCard3.addEventListener('click', () => {
      answerCard3.classList.add('hidden')
      showAnswerCard3.classList.add('card__button--show-answer')
      showAnswerCard3.classList.remove('card__button--hide-answer')
    })
  }
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

showAnswerCard2.addEventListener('click', () => {
  if (showAnswerCard2.classList.contains('card__button--show-answer')) {
    answerCard2.classList.remove('hidden')
    showAnswerCard2.classList.remove('card__button--show-answer')
    showAnswerCard2.classList.add('card__button--hide-answer')
  } else {
    answerCard2.classList.add('hidden')
    showAnswerCard2.classList.add('card__button--show-answer')
    showAnswerCard2.classList.remove('card__button--hide-answer')
  }
})
