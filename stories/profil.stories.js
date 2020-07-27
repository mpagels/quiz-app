export default {
  title: 'Profil',
}

export const Profil_Complete = () => /*html*/ `
      <div style="position: fixed;
      top: 50%;
      left: 50%;
     
      /* bring your own prefixes */
      transform: translate(-50%, -50%);">
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
      </div>`
