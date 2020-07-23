import { get } from './utility'

export default function () {
  // button__cards_bookmark
  const bookmark1 = get('.card__bookmark1')
  const bookmark2 = get('.card__bookmark2')
  const bookmark3 = get('.card__bookmark3')

  bookmark1.addEventListener('click', toggleBookmark(event))
  bookmark2.addEventListener('click', toggleBookmark(event))
  bookmark3.addEventListener('click', toggleBookmark(event))

  function toggleBookmark(event) {
    return (event) => {
      event.target.classList.toggle('card__bookmark--active')
      event.target.classList.toggle('card__bookmark--inactive')
    }
  }
}
