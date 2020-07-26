export default {
  title: 'Buttons',
}

export const Bookmark_Active = () => /*html*/ `
  <div style="position: fixed;
  top: 50%;
  left: 50%;
 
  /* bring your own prefixes */
  transform: translate(-50%, -50%);">
  <button class="card__bookmark--active"></button>
  </div>`
export const Bookmark_InActive = () => /*html*/ `
  <div style="position: fixed;
  top: 50%;
  left: 50%;
 
  /* bring your own prefixes */
  transform: translate(-50%, -50%);">
  <button class="card__bookmark--inactive"></button>
  </div>`

export const Show_Hide_Answer = () => /*html*/ `
  <div style="position: fixed;
  top: 50%;
  left: 50%;
  width: 305px;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);">
  <section class="card__button">
            <button class="card__button--show-answer"></button>
          </section>
  </div>`

export const Submit = () => /*html*/ `
  <div style="position: fixed;
  top: 50%;
  left: 50%;
  width: 305px;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);">
  <section class="card__button">
  <button class="card__button--submit"></button>
</section>
  </div>`

export const Logout = () => /*html*/ `
  <div style="position: fixed;
  top: 50%;
  left: 50%;
 
  /* bring your own prefixes */
  transform: translate(-50%, -50%);">
  
          <button class="logout__button">
            <span>Logout</span>
          </button>
       
  </div>`
