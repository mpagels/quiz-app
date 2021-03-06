export default {
  title: 'Final SPA iPhone 6',
}

export const Final_SPA = () => /*html*/ `
<div style="position: fixed;
top: 50%;
left: 50%;
heigth: 50px;
width: 375px;
/* bring your own prefixes */
transform: translate(-50%, -50%);">
<body>
<header class="header">
      <span class="header__title">QUIZ - APP</span>
    </header>
    <!-- HOME / INDEX-->
    <main class="main__index">
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

      <section class="card">
        <button class="card__bookmark--inactive"></button>
        <section class="card__content">
          <section class="card__question">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            vitae!!!
            <span>
              <ul>
                <li class="tags">HTML</li>
                <li class="tags">CSS</li>
                <li class="tags">Basics</li>
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
    </main>

    <!-- BOOKMARKS / SAVED -->
    <main class="main__bookmark hidden">
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
    </main>
    <!-- CREATE / ADD -->
    <main class="main__create hidden">
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
    </main>
    <!-- PROFILE -->
    <main class="main__profile hidden">
      <section class="profil">
        <section class="profil__header">
          <img class="profil__foto" src="images/martin-profil.png" />
          <span class="profil__name">Martin</span>
        </section>
        <section class="profil__about">
          Inselbegabt. Gutes Filmwissen. Erfindet auch mal glaubwürdige
          Antworten.
        </section>
        <section class="profil__skills">
          <h4>Skills:</h4>
          <ul class="skill__liste">
            <li class="tags">Schnelligkeit</li>
            <li class="tags">Spezialwissen</li>
            <li class="tags">Glück</li>
            <li class="tags">Kampfgeist</li>
          </ul>
        </section>
        <section class="profil__logout">
          <button class="logout__button">
            <span>Logout</span>
          </button>
        </section>
      </section>
    </main>
    <footer>
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
    </body>
    </div>
    
`
