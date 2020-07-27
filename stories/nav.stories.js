// import navInit from '../src/js/nav.js'

// setTimeout(() => {
//   navInit()
//   console.log('test')
// }, 100)

export default {
  title: 'Navigation',
}

export const Navigation_complete = () => /*html*/ `
<div style="position: fixed;
top: 50%;
left: 50%;
max-width: 375px;

/* bring your own prefixes */
transform: translate(-50%, -50%);">
  <footer style =" height: 75px;align-items: center; flex-direction: row" >
      <nav class="nav__liste">
        <div class="nav__button-name">
          <img
            src="images/buttons/round_home_black_48dp.png"
            class="btn-home--active"
          />
          <span>Home</span>
        </div>
        <div class="nav__button-name">
          <img
            src="images/buttons/round_bookmarks_outline_48dp.png"
            class="btn-bookmarks--deactive"
          />
          <span>Saved</span>
        </div>
        <div class="nav__button-name">
          <img
            src="images/buttons/round_add_box_outline_48dp.png"
            class="btn-add--deactive"
          />
          <span>Add</span>
        </div>
        <div class="nav__button-name">
          <img
            src="images/buttons/round_account_box_outline_48dp.png"
            class="btn-profile--deactive"
          />
          <span>Profile</span>
        </div>
      </nav>
    </footer>
    </div>`
