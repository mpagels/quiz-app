import { get } from './utility'
import navInit from './nav'
import bookmarkLogic from './bookmark'
import cardLogic from './card'

navInit()
bookmarkLogic()
cardLogic()

// form
const formButtonSubmit = get('.card__button--submit')

// Form
const createForm = get('form')

formButtonSubmit.addEventListener('click', (event) => {
  event.preventDefault()
  get('textarea[name=question]').value = ''
  get('textarea[name=answer]').value = ''
  get('input[name=tags]').value = ''
})
