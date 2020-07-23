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
  navButtonHome.addEventListener(
    'click',
    navigateTo('QUIZ - APP', mainIndex, navButtonHome)
  )
  navButtonSaved.addEventListener(
    'click',
    navigateTo('BOOKMARKS', mainBookmark, navButtonSaved)
  )
  navButtonAdd.addEventListener(
    'click',
    navigateTo('CREATE', mainCreate, navButtonAdd)
  )
  navButtonProfile.addEventListener(
    'click',
    navigateTo('PROFILE', mainProfile, navButtonProfile)
  )

  // LOGIC

  function navigateTo(site, mainSection, navButton) {
    return () => {
      headerTitle.textContent = site

      mainIndex.classList.add('hidden')
      mainBookmark.classList.add('hidden')
      mainCreate.classList.add('hidden')
      mainProfile.classList.add('hidden')
      mainSection.classList.remove('hidden')

      navButtonHome.src = HOME_INACTIVE
      navButtonSaved.src = SAVED_INACTIVE
      navButtonAdd.src = ADD_INACTIVE
      navButtonProfile.src = PROFILE_INACTIVE

      if (navButton === navButtonHome) {
        navButton.src = HOME_ACTIVE
      } else if (navButton === navButtonSaved) {
        navButton.src = SAVED_ACTIVE
      } else if (navButton === navButtonAdd) {
        navButton.src = ADD_ACTIVE
      } else if (navButton === navButtonProfile) {
        navButton.src = PROFILE_ACTIVE
      }
    }
  }
}
