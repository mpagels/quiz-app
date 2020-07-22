// get all main elements, buttons, titleElement

const mainIndex = document.querySelector('.main__index')
const mainBookmark = document.querySelector('.main__bookmark')
const mainCreate = document.querySelector('.main__create')
const mainProfile = document.querySelector('.main__profile')

const navButtonHome = document.querySelector('.btn-home')
const navButtonSaved = document.querySelector('.btn-bookmarks')
const navButtonAdd = document.querySelector('.btn-add')
const navButtonProfile = document.querySelector('.btn-profile')

const headerTitle = document.querySelector('.header__title')

// Events

navButtonHome.addEventListener('click', () => {
  headerTitle.textContent = 'QUIZ - APP'
  mainIndex.classList.remove('hidden')
  mainBookmark.classList.add('hidden')
  mainCreate.classList.add('hidden')
  mainProfile.classList.add('hidden')
})
navButtonSaved.addEventListener('click', () => {
  headerTitle.textContent = 'BOOKMARKS'
  mainIndex.classList.add('hidden')
  mainBookmark.classList.remove('hidden')
  mainCreate.classList.add('hidden')
  mainProfile.classList.add('hidden')
})
navButtonAdd.addEventListener('click', () => {
  headerTitle.textContent = 'CREATE'
  mainIndex.classList.add('hidden')
  mainBookmark.classList.add('hidden')
  mainCreate.classList.remove('hidden')
  mainProfile.classList.add('hidden')
})
navButtonProfile.addEventListener('click', () => {
  headerTitle.textContent = 'PROFILE'
  mainIndex.classList.add('hidden')
  mainBookmark.classList.add('hidden')
  mainCreate.classList.add('hidden')
  mainProfile.classList.remove('hidden')
})
