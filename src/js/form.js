import { get } from './utility'

export default function () {
  // form
  const formButtonSubmit = get('.card__button--submit')

  // Form
  const form = get('form')

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    get('textarea[name=question]').value = ''
    get('textarea[name=answer]').value = ''
    get('input[name=tags]').value = ''
  })
}
