class HeaderSection extends HTMLElement {
    constructor() {
      super();
      this.#render();
    }
  
    connectedCallback() {}
  
    #render() {
      this.innerHTML = `
            <header>
                <ul>
                  <li>
                    <div class="dropdown">
                      <button class="dropbtn"><h2>MENU</h2></button>
                      <div class="drop-content">
                        <a href="hotel.html">Home</a>
                        <a href="payment.html">Ticket</a>
                      <a href="line.html">Line up</a>
                      <a href="hotel.html">Захиалга</a>
                    </div>
                  </div>
                </li>
                <article>
                  <li><a href="index.html"><img src="img/main page/logo.png" alt="" id="main-logo" ></a></li>
                  <li><H3>MUTE</H3></li>
                </article>
                <li><a href="sign up.html">CONNECT</a></li>
                <li><a href="sign up.html">ABOUT</a></li>
                <li><a href="sign up.html">ACCOUNT</a></li>
              </ul>         
            </header>
      `;
    }
  }
  
  window.customElements.define("header-section", HeaderSection);