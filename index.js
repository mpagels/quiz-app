'use strict'

// constants
var HOME_ACTIVE = 'images/buttons/round_home_black_48dp.png'
var HOME_INACTIVE = 'images/buttons/round_home_outline_48dp.png'
var SAVED_ACTIVE = 'images/buttons/round_bookmarks_black_48dp.png'
var SAVED_INACTIVE = 'images/buttons/round_bookmarks_outline_48dp.png'
var ADD_ACTIVE = 'images/buttons/round_add_box_black_48dp.png'
var ADD_INACTIVE = 'images/buttons/round_add_box_outline_48dp.png'
var PROFILE_ACTIVE = 'images/buttons/round_account_box_black_48dp.png'
var PROFILE_INACTIVE = 'images/buttons/round_account_box_outline_48dp.png' // main elements

var mainIndex = get('.main__index')
var mainBookmark = get('.main__bookmark')
var mainCreate = get('.main__create')
var mainProfile = get('.main__profile') // button__nav

var navButtonHome = get('[class*="btn-home--"]')
var navButtonSaved = get('[class*="btn-bookmarks--"]')
var navButtonAdd = get('[class*="btn-add--"]')
var navButtonProfile = get('[class*="btn-profile--"]') // button__cards_bookmark

var bookmark1 = get('.card__bookmark1')
var bookmark2 = get('.card__bookmark2')
var bookmark3 = get('.card__bookmark3') // button__cards-show/answer

var showAnswerCard1 = get('.btn__card--1 button')
var showAnswerCard2 = get('.btn__card--2 button')
var showAnswerCard3 = get('.btn__card--3 button') // Answer sections

var answerCard1 = get('.answer__card-1')
var answerCard2 = get('.answer__card-2')
var answerCard3 = get('.answer__card-3') // form

var formButtonSubmit = get('.card__button--submit') // site headline

var headerTitle = get('.header__title') // Form

var createForm = get('form') // EVENTS

navButtonHome.addEventListener('click', navigateTo('QUIZ - APP'))
navButtonSaved.addEventListener('click', navigateTo('BOOKMARKS'))
navButtonAdd.addEventListener('click', navigateTo('CREATE'))
navButtonProfile.addEventListener('click', navigateTo('PROFILE'))
showAnswerCard1.addEventListener('click', forCard(1))
showAnswerCard2.addEventListener('click', forCard(2))
showAnswerCard3.addEventListener('click', forCard(3))
bookmark1.addEventListener('click', toggleBookmark(event))
bookmark2.addEventListener('click', toggleBookmark(event))
bookmark3.addEventListener('click', toggleBookmark(event))
formButtonSubmit.addEventListener('click', function (event) {
  event.preventDefault()
  get('textarea[name=question]').value = ''
  get('textarea[name=answer]').value = ''
  get('input[name=tags]').value = ''
}) // LOGIC

function get(selector) {
  return document.querySelector(selector)
}

function navigateTo(site) {
  if (site === 'QUIZ - APP') {
    return function () {
      headerTitle.textContent = site
      mainIndex.classList.remove('hidden')
      mainBookmark.classList.add('hidden')
      mainCreate.classList.add('hidden')
      mainProfile.classList.add('hidden')
      navButtonHome.src = HOME_ACTIVE
      navButtonSaved.src = SAVED_INACTIVE
      navButtonAdd.src = ADD_INACTIVE
      navButtonProfile.src = PROFILE_INACTIVE
    }
  } else if (site === 'BOOKMARKS') {
    return function () {
      headerTitle.textContent = site
      mainIndex.classList.add('hidden')
      mainBookmark.classList.remove('hidden')
      mainCreate.classList.add('hidden')
      mainProfile.classList.add('hidden')
      navButtonHome.src = HOME_INACTIVE
      navButtonSaved.src = SAVED_ACTIVE
      navButtonAdd.src = ADD_INACTIVE
      navButtonProfile.src = PROFILE_INACTIVE
    }
  } else if (site === 'CREATE') {
    return function () {
      headerTitle.textContent = site
      mainIndex.classList.add('hidden')
      mainBookmark.classList.add('hidden')
      mainCreate.classList.remove('hidden')
      mainProfile.classList.add('hidden')
      navButtonHome.src = HOME_INACTIVE
      navButtonSaved.src = SAVED_INACTIVE
      navButtonAdd.src = ADD_ACTIVE
      navButtonProfile.src = PROFILE_INACTIVE
    }
  } else if (site === 'PROFILE') {
    return function () {
      headerTitle.textContent = site
      mainIndex.classList.add('hidden')
      mainBookmark.classList.add('hidden')
      mainCreate.classList.add('hidden')
      mainProfile.classList.remove('hidden')
      navButtonHome.src = HOME_INACTIVE
      navButtonSaved.src = SAVED_INACTIVE
      navButtonAdd.src = ADD_INACTIVE
      navButtonProfile.src = PROFILE_ACTIVE
    }
  }
}

function forCard(number) {
  if (number === 1) {
    return function () {
      if (showAnswerCard1.classList.contains('card__button--show-answer')) {
        answerCard1.classList.remove('hidden')
        showAnswerCard1.classList.remove('card__button--show-answer')
        showAnswerCard1.classList.add('card__button--hide-answer')
      } else {
        answerCard1.classList.add('hidden')
        showAnswerCard1.classList.add('card__button--show-answer')
        showAnswerCard1.classList.remove('card__button--hide-answer')
      }
    }
  } else if (number === 2) {
    return function () {
      if (showAnswerCard2.classList.contains('card__button--show-answer')) {
        answerCard2.classList.remove('hidden')
        showAnswerCard2.classList.remove('card__button--show-answer')
        showAnswerCard2.classList.add('card__button--hide-answer')
      } else {
        answerCard2.classList.add('hidden')
        showAnswerCard2.classList.add('card__button--show-answer')
        showAnswerCard2.classList.remove('card__button--hide-answer')
      }
    }
  } else if (number === 3) {
    return function () {
      if (showAnswerCard3.classList.contains('card__button--show-answer')) {
        answerCard3.classList.remove('hidden')
        showAnswerCard3.classList.remove('card__button--show-answer')
        showAnswerCard3.classList.add('card__button--hide-answer')
      } else {
        answerCard3.classList.add('hidden')
        showAnswerCard3.classList.add('card__button--show-answer')
        showAnswerCard3.classList.remove('card__button--hide-answer')
      }
    }
  }
}

function toggleBookmark(event) {
  return function (event) {
    event.target.classList.toggle('card__bookmark--active')
    event.target.classList.toggle('card__bookmark--inactive')
  }
}
