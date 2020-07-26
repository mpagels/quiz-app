import { get, getAll } from './utility'

export default function () {
  const cards = getAll('.card')

  cards.forEach(toggleAnswer)

  function toggleAnswer(card) {
    const buttonAnswer = card.querySelector('[class*="card__button--"]')
    const answer = card.querySelector('.answer')
    buttonAnswer.addEventListener(
      'click',
      showAnswerForCard(buttonAnswer, answer)
    )
  }

  function showAnswerForCard(button, answerCard) {
    return () => {
      if (button.classList.contains('card__button--show-answer')) {
        answerCard?.classList.remove('hidden')
        button?.classList.remove('card__button--show-answer')
        button?.classList.add('card__button--hide-answer')
      } else {
        answerCard?.classList.add('hidden')
        button?.classList.add('card__button--show-answer')
        button?.classList.remove('card__button--hide-answer')
      }
    }
  }
}
