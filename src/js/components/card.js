import { createElement } from '../utility'
import { Bookmark } from './bookmark'
import { Tag } from './tag'
import { get } from '../utility'

const cardSection = document.querySelector('.main__index')

export function Card({ id, question, answer, tags, bookmarked }) {
  const el = createElement({
    type: 'section',
    className: 'card',
    target: cardSection,
  })
  Bookmark({ bookmarked, id, target: el })
  el.insertAdjacentHTML('beforeend', cardInnerHTML({ question, answer }))

  if (tags.length > 0) {
    buildTags(tags, get('ul', el))
  }

  toggleAnswerLogic(el)
}

// Helper functions
function buildTags(tags, ulElement) {
  tags.forEach((tag) => {
    Tag({ tag, target: ulElement })
  })
}

function toggleAnswerLogic(target) {
  const buttonAnswer = target.querySelector('[class*="card__button--"]')
  const answer = target.querySelector('.answer')
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

function cardInnerHTML({ question, answer }) {
  return `<section class="card__content">
   <section class="card__question">
     ${question}
     <span>
       <ul>
       </ul>
     </span>
   </section>
   <section class="answer hidden">
   ${answer}
   </section>
   <section class="card__button">
     <button class="card__button--show-answer"></button>
   </section>
  </section>`
}
