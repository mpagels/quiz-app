import { createElement } from '../utility'
import { CARD_DATA } from '../card-data'

export function Bookmark({ bookmarked, id, target }) {
  const classModifier = bookmarked ? '--active' : '--inactive'
  const className = 'card__bookmark' + classModifier
  const el = createElement({ type: 'button', className, id, target })
  el.addEventListener('click', toggleBookmark(event))
  return el
}

function toggleBookmark(event) {
  return (event) => {
    event.target.classList.toggle('card__bookmark--active')
    event.target.classList.toggle('card__bookmark--inactive')
    const id = event.target.dataset.id
    changeBookmark(id)
    if (
      event.target.parentElement.parentElement.className === 'main__bookmark'
    ) {
      cardLogic(true)
    }
  }
}
function changeBookmark(id) {
  const data = { ...CARD_DATA[id - 1] }
  data.bookmarked = data.bookmarked
    ? (data.bookmarked = false)
    : (data.bookmarked = true)
  console.log('changeBookmark -> data', data)
  CARD_DATA[id - 1] = data
}
