import formLogic from './form'
import navInit from './nav'
import { cardLogic, cardInit } from './card-create'

import { DataInterface } from './card-data'

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const { insertCard, getAllCards } = DataInterface()
    navInit({ getAllCards })
    // cardLogic()
    cardInit({ getAllCards })

    formLogic({ insertCard })
  }, 100)
})
