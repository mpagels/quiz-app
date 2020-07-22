// main elements
const mainIndex = document.querySelector('.main__index')
const mainBookmark = document.querySelector('.main__bookmark')
const mainCreate = document.querySelector('.main__create')
const mainProfile = document.querySelector('.main__profile')

// button__nav
const navButtonHome = document.querySelector('[class*="btn-home"]')
const navButtonSaved = document.querySelector('[class*="btn-bookmarks"]')
const navButtonAdd = document.querySelector('[class*="btn-add"]')
const navButtonProfile = document.querySelector('[class*="btn-profile"]')
// button__cards-show/answer
const showAnswerCard1 = document.querySelector('.btn__card--1 button')
const showAnswerCard2 = document.querySelector('.btn__card--2 button')
const showAnswerCard3 = document.querySelector('.btn__card--3 button')

// button__cards_bookmark
const bookmark1 = document.querySelector('.card__bookmark1')
const bookmark2 = document.querySelector('.card__bookmark2')
const bookmark3 = document.querySelector('.card__bookmark3')

// form
const formButtonSubmit = document.querySelector('.card__button--submit')

// titleElement
const headerTitle = document.querySelector('.header__title')

// Answer sections
const answerCard1 = document.querySelector('.answer__card-1')
const answerCard2 = document.querySelector('.answer__card-2')
const answerCard3 = document.querySelector('.answer__card-3')

// Form
const createForm = document.querySelector('form')

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

showAnswerCard3.addEventListener('click', () => {
  if (showAnswerCard3.classList.contains('card__button--show-answer')) {
    answerCard3.classList.remove('hidden')
    showAnswerCard3.classList.remove('card__button--show-answer')
    showAnswerCard3.classList.add('card__button--hide-answer')
  } else {
    answerCard3.classList.add('hidden')
    showAnswerCard3.classList.add('card__button--show-answer')
    showAnswerCard3.classList.remove('card__button--hide-answer')
  }
})

formButtonSubmit.addEventListener('click', (event) => {
  event.preventDefault()
  document.querySelector('textarea[name=question]').value = ''
  document.querySelector('textarea[name=answer]').value = ''
  document.querySelector('input[name=tags]').value = ''
})

bookmark1.addEventListener('click', () => {
  bookmark1.classList.toggle('card__bookmark--active')
  bookmark1.classList.toggle('card__bookmark--inactive')
})
bookmark2.addEventListener('click', () => {
  bookmark2.classList.toggle('card__bookmark--active')
  bookmark2.classList.toggle('card__bookmark--inactive')
})
bookmark3.addEventListener('click', () => {
  bookmark3.classList.toggle('card__bookmark--active')
  bookmark3.classList.toggle('card__bookmark--inactive')
})

// bookmarkButtons.forEach((bookmark) => {
//   bookmark.addEventListener('click', () => {
//     if (bookmark.classList.contains('card__bookmark--active')) {
//       bookmark.classList.remove('card__bookmark--active')
//       bookmark.classList.add('card__bookmark--inactive')
//     } else {
//       bookmark.classList.add('card__bookmark--active')
//       bookmark.classList.remove('card__bookmark--inactive')
//     }
//   })
// })
