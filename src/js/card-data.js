export const CARD_DATA = [
  {
    id: 1,
    question: 'Do all HTML tags come in a pair?',
    answer:
      'No, there are single HTML tags that do not need a closing tag. Examples are the &ltimg> tag and &ltbr> tags.',
    tags: ['HTML', 'Basics'],
    bookmarked: true,
  },
  {
    id: 2,
    question: 'What are style sheets?',
    answer:
      'Style sheets enable you to build consistent, transportable, and well-defined style templates. These templates can be linked to several different web pages, making it easy to maintain and change the look and feel of all the web pages within site.',
    tags: ['HTML', 'CSS', 'Basics'],
    bookmarked: false,
  },
]

export function DataInterface() {
  return { getAllCards, changeBookmark, insertCard }

  function getAllCards() {
    return CARD_DATA
  }

  function insertCard({ question, answer, tags }) {
    CARD_DATA.push({
      id: CARD_DATA.length + 1,
      question,
      answer,
      bookmarked: false,
      tags: tags.split(',').map((tag) => tag.trim()),
    })
  }

  function changeBookmark(id) {
    const cardToChange = { ...CARD_DATA[id - 1] }
    cardToChange.bookmarked = cardToChange.bookmarked
      ? (cardToChange.bookmarked = false)
      : (cardToChange.bookmarked = true)
    console.log('changeBookmark -> data', cardToChange)
    CARD_DATA[id - 1] = cardToChange
  }
}
