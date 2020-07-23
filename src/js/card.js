import { get } from './utility'

export default function () {
  // button__cards-show/answer
  const showAnswerCard1 = get('.btn__card--1 button')
  const showAnswerCard2 = get('.btn__card--2 button')
  const showAnswerCard3 = get('.btn__card--3 button')

  // Answer sections
  const answerCard1 = get('.answer__card-1')
  const answerCard2 = get('.answer__card-2')
  const answerCard3 = get('.answer__card-3')

  showAnswerCard1.addEventListener(
    'click',
    forCard(showAnswerCard1, answerCard1)
  )
  showAnswerCard2.addEventListener(
    'click',
    forCard(showAnswerCard2, answerCard2)
  )
  showAnswerCard3.addEventListener(
    'click',
    forCard(showAnswerCard3, answerCard3)
  )

  function forCard(button, answerCard) {
    return () => {
      if (button.classList.contains('card__button--show-answer')) {
        answerCard.classList.remove('hidden')
        button.classList.remove('card__button--show-answer')
        button.classList.add('card__button--hide-answer')
      } else {
        answerCard.classList.add('hidden')
        button.classList.add('card__button--show-answer')
        button.classList.remove('card__button--hide-answer')
      }
    }
  }
}
