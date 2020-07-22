"use strict";

// main elements
var mainIndex = document.querySelector('.main__index');
var mainBookmark = document.querySelector('.main__bookmark');
var mainCreate = document.querySelector('.main__create');
var mainProfile = document.querySelector('.main__profile'); // button__nav

var navButtonHome = document.querySelector('[class*="btn-home"]');
var navButtonSaved = document.querySelector('[class*="btn-bookmarks"]');
var navButtonAdd = document.querySelector('[class*="btn-add"]');
var navButtonProfile = document.querySelector('[class*="btn-profile"]'); // button__cards-show/answer

var showAnswerCard1 = document.querySelector('.btn__card--1 button');
var showAnswerCard2 = document.querySelector('.btn__card--2 button');
var showAnswerCard3 = document.querySelector('.btn__card--3 button'); // button__cards_bookmark

var bookmark1 = document.querySelector('.card__bookmark1');
var bookmark2 = document.querySelector('.card__bookmark2');
var bookmark3 = document.querySelector('.card__bookmark3'); // form

var formButtonSubmit = document.querySelector('.card__button--submit'); // titleElement

var headerTitle = document.querySelector('.header__title'); // Answer sections

var answerCard1 = document.querySelector('.answer__card-1');
var answerCard2 = document.querySelector('.answer__card-2');
var answerCard3 = document.querySelector('.answer__card-3'); // Form

var createForm = document.querySelector('form'); // EVENTS

navButtonHome.addEventListener('click', function () {
  headerTitle.textContent = 'QUIZ - APP';
  mainIndex.classList.remove('hidden');
  mainBookmark.classList.add('hidden');
  mainCreate.classList.add('hidden');
  mainProfile.classList.add('hidden');
  navButtonHome.classList.toggle('btn-home--active');
  navButtonHome.classList.toggle('btn-home--deactive');
  navButtonSaved.classList.remove('btn-bookmarks--active');
  navButtonAdd.classList.remove('btn-add--active');
  navButtonProfile.classList.remove('btn-profile--active');
  navButtonSaved.classList.add('btn-bookmarks--deactive');
  navButtonAdd.classList.add('btn-add--deactive');
  navButtonProfile.classList.add('btn-profile--deactive');
});
navButtonSaved.addEventListener('click', function () {
  headerTitle.textContent = 'BOOKMARKS';
  mainIndex.classList.add('hidden');
  mainBookmark.classList.remove('hidden');
  mainCreate.classList.add('hidden');
  mainProfile.classList.add('hidden');
  navButtonSaved.classList.toggle('btn-bookmarks--active');
  navButtonSaved.classList.toggle('btn-bookmarks--deactive');
  navButtonAdd.classList.remove('btn-add--active');
  navButtonAdd.classList.add('btn-add--deactive');
  navButtonHome.classList.add('btn-home--deactive');
  navButtonHome.classList.remove('btn-home--active');
  navButtonProfile.classList.add('btn-profile--deactive');
  navButtonProfile.classList.remove('btn-profile--active');
});
navButtonAdd.addEventListener('click', function () {
  headerTitle.textContent = 'CREATE';
  mainIndex.classList.add('hidden');
  mainBookmark.classList.add('hidden');
  mainCreate.classList.remove('hidden');
  mainProfile.classList.add('hidden');
  navButtonAdd.classList.add('btn-add--active');
  navButtonAdd.classList.remove('btn-add--deactive');
  navButtonSaved.classList.add('btn-bookmarks--deactive');
  navButtonSaved.classList.remove('btn-bookmarks--active');
  navButtonHome.classList.add('btn-home--deactive');
  navButtonHome.classList.remove('btn-home--active');
  navButtonProfile.classList.add('btn-profile--deactive');
  navButtonProfile.classList.remove('btn-profile--active');
});
navButtonProfile.addEventListener('click', function () {
  headerTitle.textContent = 'PROFILE';
  mainIndex.classList.add('hidden');
  mainBookmark.classList.add('hidden');
  mainCreate.classList.add('hidden');
  mainProfile.classList.remove('hidden');
  navButtonProfile.classList.add('btn-profile--active');
  navButtonProfile.classList.remove('btn-profile--deactive');
  navButtonAdd.classList.remove('btn-add--active');
  navButtonAdd.classList.add('btn-add--deactive');
  navButtonSaved.classList.add('btn-bookmarks--deactive');
  navButtonSaved.classList.remove('btn-bookmarks--active');
  navButtonHome.classList.add('btn-home--deactive');
  navButtonHome.classList.remove('btn-home--active');
});
showAnswerCard1.addEventListener('click', function () {
  if (showAnswerCard1.classList.contains('card__button--show-answer')) {
    answerCard1.classList.remove('hidden');
    showAnswerCard1.classList.remove('card__button--show-answer');
    showAnswerCard1.classList.add('card__button--hide-answer');
  } else {
    answerCard1.classList.add('hidden');
    showAnswerCard1.classList.add('card__button--show-answer');
    showAnswerCard1.classList.remove('card__button--hide-answer');
  }
});
showAnswerCard2.addEventListener('click', function () {
  if (showAnswerCard2.classList.contains('card__button--show-answer')) {
    answerCard2.classList.remove('hidden');
    showAnswerCard2.classList.remove('card__button--show-answer');
    showAnswerCard2.classList.add('card__button--hide-answer');
  } else {
    answerCard2.classList.add('hidden');
    showAnswerCard2.classList.add('card__button--show-answer');
    showAnswerCard2.classList.remove('card__button--hide-answer');
  }
});
showAnswerCard3.addEventListener('click', function () {
  if (showAnswerCard3.classList.contains('card__button--show-answer')) {
    answerCard3.classList.remove('hidden');
    showAnswerCard3.classList.remove('card__button--show-answer');
    showAnswerCard3.classList.add('card__button--hide-answer');
  } else {
    answerCard3.classList.add('hidden');
    showAnswerCard3.classList.add('card__button--show-answer');
    showAnswerCard3.classList.remove('card__button--hide-answer');
  }
});
formButtonSubmit.addEventListener('click', function (event) {
  event.preventDefault();
  document.querySelector('textarea[name=question]').value = '';
  document.querySelector('textarea[name=answer]').value = '';
  document.querySelector('input[name=tags]').value = '';
});
bookmark1.addEventListener('click', function () {
  bookmark1.classList.toggle('card__bookmark--active');
  bookmark1.classList.toggle('card__bookmark--inactive');
});
bookmark2.addEventListener('click', function () {
  bookmark2.classList.toggle('card__bookmark--active');
  bookmark2.classList.toggle('card__bookmark--inactive');
});
bookmark3.addEventListener('click', function () {
  bookmark3.classList.toggle('card__bookmark--active');
  bookmark3.classList.toggle('card__bookmark--inactive');
}); // bookmarkButtons.forEach((bookmark) => {
//   bookmark.addEventListener('click', () => {
//     if (bookmark.classList.contains('card__bookmark--active')) {
//       bookmark.classList.remove('card__bookmark--active')
//       bookmark.classList.add('card__bookmark--inactive')
//     } else {
//       bookmark.classList.add('card__bookmark--active')
//       bookmark.classList.remove('card__bookmark--inactive')
//     }
//   })
// })