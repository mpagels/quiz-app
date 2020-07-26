export default {
  title: 'Card',
}

export const Card_complete_Bookmark_active = () => /*html*/ `
<div style="position: fixed;
top: 50%;
left: 50%;
/* bring your own prefixes */
transform: translate(-50%, -50%);">
<section class="card">
  <button class="card__bookmark--active"></button>
  <section class="card__content">
    <section class="card__question">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
      vitae!
      <span>
        <ul>
          <li class="tags">HTML</li>
          <li class="tags">CSS</li>
          <li class="tags">Basics</li>
          <li class="tags">SASS</li>
        </ul>
      </span>
    </section>
    <section class="answer hidden">
      Lorem ipsum dolor sit, amet consectetur adipisicing.
    </section>
    <section class="card__button">
      <button class="card__button--show-answer"></button>
    </section>
  </section>
</section>
</div>`

export const Card_complete_Bookmark_inactive = () => /*html*/ `
<div style="position: fixed;
top: 50%;
left: 50%;
/* bring your own prefixes */
transform: translate(-50%, -50%);">
<section class="card">
  <button class="card__bookmark--inactive"></button>
  <section class="card__content">
    <section class="card__question">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
      vitae!
      <span>
        <ul>
          <li class="tags">HTML</li>
          <li class="tags">CSS</li>
          <li class="tags">Basics</li>
          <li class="tags">SASS</li>
        </ul>
      </span>
    </section>
    <section class="answer hidden">
      Lorem ipsum dolor sit, amet consectetur adipisicing.
    </section>
    <section class="card__button">
      <button class="card__button--show-answer"></button>
    </section>
  </section>
</section>
</div>`

export const Create_Card = () => /*html*/ `
<div style="position: fixed;
top: 50%;
left: 50%;
/* bring your own prefixes */
transform: translate(-50%, -50%);">
<section class="card">
        <!-- class card can be found in card.scss -->
        <form class="create__form">
          <section class="create__title">New Card</section>
          <section class="create__question">
            <label for="question">Add Question:</label><br />
            <textarea
              name="question"
              rows="5"
              placeholder="E.g.: Which hotkeys are for up and down in vim?"
            ></textarea>
          </section>
          <section class="create__answer">
            <label for="answer">Add Answer:</label><br />
            <textarea name="answer" rows="5" placeholder="Answer"></textarea>
          </section>
          <section class="create__tags">
            <label for="tags">Add Tags:</label><br />
            <input
              type="text"
              id="tags"
              name="tags"
              placeholder="Tags, comma seperated"
            />
          </section>
          <section class="card__button">
            <button class="card__button--submit"></button>
          </section>
        </form>
      </section>
</div>`
