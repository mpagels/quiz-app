import { get, getAll } from './utility'

export default function () {
  const bookmarks = getAll('[class*="card__bookmark--"]')
  bookmarks.forEach((bookmark, event) => {
    bookmark.addEventListener('click', toggleBookmark(event))
  })

  function toggleBookmark(event) {
    return (event) => {
      event.target.classList.toggle('card__bookmark--active')
      event.target.classList.toggle('card__bookmark--inactive')
    }
  }
}
