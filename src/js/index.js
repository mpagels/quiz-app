import { get } from './utility'
import navInit from './nav'

navInit()

// button__cards_bookmark
const bookmark1 = get('.card__bookmark1')
const bookmark2 = get('.card__bookmark2')
const bookmark3 = get('.card__bookmark3')

// button__cards-show/answer
const showAnswerCard1 = get('.btn__card--1 button')
const showAnswerCard2 = get('.btn__card--2 button')
const showAnswerCard3 = get('.btn__card--3 button')

// Answer sections
const answerCard1 = get('.answer__card-1')
const answerCard2 = get('.answer__card-2')
const answerCard3 = get('.answer__card-3')

// form
const formButtonSubmit = get('.card__button--submit')

// Form
const createForm = get('form')

showAnswerCard1.addEventListener('click', forCard(1))
showAnswerCard2.addEventListener('click', forCard(2))
showAnswerCard3.addEventListener('click', forCard(3))

bookmark1.addEventListener('click', toggleBookmark(event))
bookmark2.addEventListener('click', toggleBookmark(event))
bookmark3.addEventListener('click', toggleBookmark(event))

formButtonSubmit.addEventListener('click', (event) => {
  event.preventDefault()
  get('textarea[name=question]').value = ''
  get('textarea[name=answer]').value = ''
  get('input[name=tags]').value = ''
})

function forCard(number) {
  if (number === 1) {
    return () => {
      if (showAnswerCard1.classList.contains('card__button--show-answer')) {
        answerCard1.classList.remove('hidden')
        showAnswerCard1.classList.remove('card__button--show-answer')
        showAnswerCard1.classList.add('card__button--hide-answer')
      } else {
        answerCard1.classList.add('hidden')
        showAnswerCard1.classList.add('card__button--show-answer')
        showAnswerCard1.classList.remove('card__button--hide-answer')
      }
    }
  } else if (number === 2) {
    return () => {
      if (showAnswerCard2.classList.contains('card__button--show-answer')) {
        answerCard2.classList.remove('hidden')
        showAnswerCard2.classList.remove('card__button--show-answer')
        showAnswerCard2.classList.add('card__button--hide-answer')
      } else {
        answerCard2.classList.add('hidden')
        showAnswerCard2.classList.add('card__button--show-answer')
        showAnswerCard2.classList.remove('card__button--hide-answer')
      }
    }
  } else if (number === 3) {
    return () => {
      if (showAnswerCard3.classList.contains('card__button--show-answer')) {
        answerCard3.classList.remove('hidden')
        showAnswerCard3.classList.remove('card__button--show-answer')
        showAnswerCard3.classList.add('card__button--hide-answer')
      } else {
        answerCard3.classList.add('hidden')
        showAnswerCard3.classList.add('card__button--show-answer')
        showAnswerCard3.classList.remove('card__button--hide-answer')
      }
    }
  }
}

function toggleBookmark(event) {
  return (event) => {
    event.target.classList.toggle('card__bookmark--active')
    event.target.classList.toggle('card__bookmark--inactive')
  }
}
