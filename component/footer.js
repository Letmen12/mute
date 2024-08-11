class FooterSection extends HTMLElement {
    constructor() {
        super();
        this.#render();
    }

    connectedCallback() {

    }

    #render() {
        this.innerHTML =`
       <footer>
      <nav>
        <section>
          <article>
            <menu>
              <h3>FESTIVAL</h3>
              <li>Tickets</li>
              <li>Lineup</li>
            </menu>
          </article>
          <article>
            <menu>
              <h3>HELP</h3>
              <li>Contact Us</li>
              <li>Help Center</li>
              <li>Safety</li>
              <li>Accessibility</li>
            </menu>
          </article>
          <article>
            <menu>
              <h3>SOCIAL</h3>
              <li><i class="fa-brands fa-instagram"></i>Instagram</li>
              <li><i class="fa-brands fa-facebook"></i>Facebook</li>
              <li><i class="fa-brands fa-twitter"></i>Twitter</li>
            </menu>
          </article>
          <article>
            <menu>
              <h3>SUBSCRIBE</h3>
              <button>sign in</button>
            </menu>
          </article>
        </section>
        <article>
          <nav>
            <li>© ACL</li>
            <li>Privacy Policy</li>
            <li>Terms And Conditions<</li>
          </nav>
        </article>
      </nav>
    </footer>
        `
    }
}

window.customElements.define('footer-section', FooterSection);