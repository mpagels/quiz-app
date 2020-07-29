import formLogic from './form'
import navInit from './nav'
import { cardLogic } from './card-create'

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    navInit()
    cardLogic()
    formLogic()
  }, 100)
})
