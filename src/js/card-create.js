import { get } from './utility'
import { toggleAnswer } from './anwer-toggleLogic'
import { bookmarkLogic } from './bookmark'
import { CARD_DATA } from './card-data'
import { Card } from './components/card'

const cardSection = document.querySelector('.main__index')
const bookmarkPage = document.querySelector('.main__bookmark')

export function cardLogic(buildBookmarks = false) {
  cardSection.innerHTML = ''
  bookmarkPage.innerHTML = ''
  !buildBookmarks
    ? CARD_DATA.forEach(buildCardWith)
    : CARD_DATA.filter((card) => card.bookmarked).forEach(buildBookmarkCardWith)
}

// Helper functions
function buildCardWith(data) {
  const el = buildCardBody(data)
  cardSection.appendChild(el)
}

function buildBookmarkCardWith(data) {
  const el = buildCardBody(data)
  bookmarkPage.appendChild(el)
}

function buildCardBody(data) {
  const el = document.createElement('section')
  el.className = 'card'
  el.innerHTML = buildInnerHTML(data)
  if (data.tags.length > 0) {
    buildTags(data, get('ul', el))
  }
  toggleAnswer(el)
  bookmarkLogic(el)
  return el
}

function buildInnerHTML({ bookmarked, question, id, answer }) {
  return `<button class="card__bookmark${
    bookmarked ? '--active' : '--inactive'
  }" data-id=${id}></button>
    <section class="card__content">
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

function buildTags({ tags }, ulElement) {
  tags.forEach((tag) => {
    const li = document.createElement('li')
    li.textContent = tag
    li.className = 'tags'
    ulElement.appendChild(li)
  })
}

export function cardInit() {
  CARD_DATA.forEach((data) => {
    Card(data)
  })
}
