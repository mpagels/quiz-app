import { get } from './utility'
import { CARD_DATA } from './card-data'

export default function () {
  const form = get('form')

  form?.addEventListener('submit', (event) => {
    event.preventDefault()
    createCardData(form.question.value, form.answer.value, form.tags.value)
    form.reset()
  })
}

function createCardData(question, answer, tags) {
  CARD_DATA.push({
    id: CARD_DATA.length + 1,
    question: question,
    answer: answer,
    bookmarked: false,
    tags: tags.split(',').map((tag) => tag.trim()),
  })
}
