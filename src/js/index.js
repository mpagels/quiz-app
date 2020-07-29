import formLogic from './form'
import navInit from './nav'
import { cardLogic, cardInit } from './card-create'

import { CARD_DATA } from './card-data'

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    navInit()
    // cardLogic()
    cardInit()

    formLogic()
  }, 100)
})
