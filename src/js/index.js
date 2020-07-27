import bookmarkLogic from './bookmark'
import cardLogic from './card'
import formLogic from './form'
import navInit from './nav'
import cardInit from './card-create'

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    navInit()
    cardInit()
    bookmarkLogic()
    cardLogic()
    formLogic()
  }, 100)
})
