import { get } from './utility'
import { CARD_DATA } from './card_data'

const cardSection = document.querySelector('.main__index')

export default function cardContent() {
  CARD_DATA.forEach(buildCardwith)
}

// Helper functions
function buildCardwith(data) {
  const el = document.createElement('section')
  el.className = 'card'
  el.innerHTML = buildInnerHTML(data)
  buildTags(data, get('ul', el))
  cardSection.appendChild(el)
}

function buildInnerHTML(data) {
  return `<button class="card__bookmark${data.bookmarked}"></button>
    <section class="card__content">
      <section class="card__question">
        ${data.question}
        <span>
          <ul>
          </ul>
        </span>
      </section>
      <section class="answer hidden">
      ${data.answer}
      </section>
      <section class="card__button">
        <button class="card__button--show-answer"></button>
      </section>
    </section>`
}

function buildTags(data, ulElement) {
  data.tags.forEach((tag) => {
    const li = document.createElement('li')
    li.textContent = tag
    li.className = 'tags'
    ulElement.appendChild(li)
  })
}
