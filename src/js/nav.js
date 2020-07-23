import { get } from './utility'

import HOME_ACTIVE from './../../images/buttons/round_home_black_48dp.png'
import HOME_INACTIVE from './../../images/buttons/round_home_outline_48dp.png'
import SAVED_ACTIVE from './../../images/buttons/round_bookmarks_black_48dp.png'
import SAVED_INACTIVE from './../../images/buttons/round_bookmarks_outline_48dp.png'
import ADD_ACTIVE from './../../images/buttons/round_add_box_black_48dp.png'
import ADD_INACTIVE from './../../images/buttons/round_add_box_outline_48dp.png'
import PROFILE_ACTIVE from './../../images/buttons/round_account_box_black_48dp.png'
import PROFILE_INACTIVE from './../../images/buttons/round_account_box_outline_48dp.png'

export default function () {
  // main elements
  const mainIndex = get('.main__index')
  const mainBookmark = get('.main__bookmark')
  const mainCreate = get('.main__create')
  const mainProfile = get('.main__profile')

  // button__nav
  const navButtonHome = get('[class*="btn-home--"]')
  const navButtonSaved = get('[class*="btn-bookmarks--"]')
  const navButtonAdd = get('[class*="btn-add--"]')
  const navButtonProfile = get('[class*="btn-profile--"]')

  // site headline
  const headerTitle = get('.header__title')

  // EVENTS
  navButtonHome.addEventListener('click', navigateTo('QUIZ - APP'))
  navButtonSaved.addEventListener('click', navigateTo('BOOKMARKS'))
  navButtonAdd.addEventListener('click', navigateTo('CREATE'))
  navButtonProfile.addEventListener('click', navigateTo('PROFILE'))

  // LOGIC

  function navigateTo(site) {
    if (site === 'QUIZ - APP') {
      return () => {
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
      return () => {
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
      return () => {
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
      return () => {
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
}
