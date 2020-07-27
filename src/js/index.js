import bookmarkLogic from './bookmark'
import cardLogic from './card'
import formLogic from './form'
import navInit from './nav'
import dataInit from './card_content'

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    navInit()
    dataInit()
    bookmarkLogic()
    cardLogic()
    formLogic()
  }, 100)
})
