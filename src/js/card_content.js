import card from './card'

const cardData = [
  {
    question: 'Do all HTML tags come in a pair?',
    answer:
      'No, there are single HTML tags that do not need a closing tag. Examples are the <img> tag and <br> tags.',
    tags: ['HTML', 'Basics'],
    bookmarked: '--active',
  },
  {
    question: 'What are style sheets?',
    answer:
      'Style sheets enable you to build consistent, transportable, and well-defined style templates. These templates can be linked to several different web pages, making it easy to maintain and change the look and feel of all the web pages within site.',
    tags: ['HTML', 'CSS', 'Basics'],
    bookmarked: '--inactive',
  },
]

const cardSection = document.querySelector('.main__index')

export default function cardContent() {
  cardData.forEach(buildCardwith)
}

// Helper functions
function buildCardwith(data) {
  const el = document.createElement('section')
  el.className = 'card'
  el.innerHTML = buildInnerHTML(data)
  cardSection.appendChild(el)
  const ul = el.querySelector('ul')
  buildTags(data, ul)
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
