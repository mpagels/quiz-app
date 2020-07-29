import { CARD_DATA } from './card-data'
import { cardLogic } from './card-create'

export function bookmarkLogic(card) {
  const bookmark = card.querySelector('[class*="card__bookmark--"]')
  bookmark.addEventListener('click', toggleBookmark)
}

function toggleBookmark(event) {
  event.target.classList.toggle('card__bookmark--active')
  event.target.classList.toggle('card__bookmark--inactive')
  const id = event.target.dataset.id
  changeBookmark(id)
  if (event.target.parentElement.parentElement.className === 'main__bookmark') {
    cardLogic(true)
  }
}

function changeBookmark(id) {
  const data = { ...CARD_DATA[id - 1] }
  data.bookmarked = data.bookmarked
    ? (data.bookmarked = false)
    : (data.bookmarked = true)
  CARD_DATA[id - 1] = data
}
