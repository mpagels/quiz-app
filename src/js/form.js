import { get } from './utility'

export default function ({ insertCard }) {
  const form = get('form')

  form?.addEventListener('submit', (event) => {
    event.preventDefault()
    insertCard({
      question: form.question.value,
      answer: form.answer.value,
      tags: form.tags.value,
    })
    form.reset()
  })
}
