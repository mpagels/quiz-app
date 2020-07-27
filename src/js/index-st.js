import bookmarkLogic from './bookmark'
import cardLogic from './card'
import formLogic from './form'
import navInit from './nav'

document.addEventListener(
  'DOMContentLoaded',
  function () {
    // all my imported functions for the first time
    navInit()
    bookmarkLogic()
    cardLogic()
    formLogic()
    const callback = function (mutationsList) {
      for (let i = 0, len = mutationsList.length; i < len; i++) {
        if (mutationsList[i].type == 'childList') {
          // all my imported functions for the second time
          navInit()
          bookmarkLogic()
          cardLogic()
          formLogic()
          break
        }
      }
    }

    const observer = new MutationObserver(callback)
    const config = { childList: true, subtree: false }
    observer.observe(document.getElementById('root'), config)
  },
  false
)

// document.addEventListener('DOMContentLoaded', () => {
//   setTimeout(() => {
//     navInit()
//     bookmarkLogic()
//     cardLogic()
//     formLogic()
//   }, 100)
// })
