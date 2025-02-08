class AankTools extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
  
          header {
            background: #f8f8f8;
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
  
          header h1 {
            margin: 0;
            font-size: 1.5rem;
          }
  
          header nav {
            margin-left: 2rem;
          }
  
          header nav a {
            margin: 0 1rem;
            text-decoration: none;
            color: #333;
          }
  
          header nav a:hover {
            text-decoration: underline;
          }
  
          main {
            padding: 1rem;
          }
  
          section {
            margin-bottom: 2rem;
          }
  
          section img {
            width: 100%;
            max-width: 800px;
            display: block;
            margin: 0 auto;
          }
  
          article {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem;
          }
  
          .button-figure {
            display: inline-block;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            padding: 10px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: center;
            border: 1px solid #ddd;
            background: #fff;
          }
  
          .button-figure:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
          }
  
          .button-figure img {
            max-width: 100%;
            height: auto;
          }
  
          .locations {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
          }
  
          .location-card {
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
          }
  
          .location-card img {
            width: 50%;
            height: 100px;
            object-fit: cover;
          }
  
          .location-details {
            padding: 1rem;
            flex-grow: 1;
          }
  
          .coming-soon {
            background: #f8f8f8;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
          }
  
          footer {
            background: #f8f8f8;
            padding: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
  
          .social-icons a {
            margin: 0 0.5rem;
            text-decoration: none;
          }
  
          @media (max-width: 768px) {
            article {
              grid-template-columns: repeat(2, 1fr);
            }
  
            .locations {
              grid-template-columns: 1fr 1fr;
            }
  
            footer {
              flex-direction: column;
              text-align: center;
            }
  
            .footer-logo {
              margin-bottom: 1rem;
            }
  
            .footer-nav, .footer-contact {
              text-align: center;
            }
  
            .social-icons {
              justify-content: center;
            }
          }
  
          @media (max-width: 480px) {
            article {
              grid-template-columns: 1fr;
            }
  
            .locations {
              grid-template-columns: 1fr;
            }
  
            header {
              flex-direction: column;
              align-items: flex-start;
            }
  
            header nav {
              display: flex;
              flex-wrap: wrap;
            }
          }
        </style>
  
        <header>
          <h1>Aank Tools</h1>
          <nav>
            <a href="../pages/main.html">Цахилгаан багаж</a>
            <a href="../pages/furniture.html">Тавилгын хэрэгсэл</a>
            <a href="../pages/construction.html">Барилгын материал</a>
            <a href="#">Холбогдох</a>
          </nav>
        </header>
  
        <main>
          <section>
            <img src="../pictures/power tool background copy.jpg" alt="Banner showing tools">
          </section>
  
          <section>
            <h2>Цахилгаан багаж</h2>
            <article>
              <figure class="button-figure">
                <img src="../pictures/tsagaan emulis.png" alt="Furniture 1">
                <figcaption>Launch<br>29,900 ₮</figcaption>
              </figure>
              <figure class="button-figure">
                <img src="../pictures/oboinii tsavuu jijig.png" alt="Furniture 2">
                <figcaption>Ураашва<br>39,900 ₮</figcaption>
              </figure>
              <figure class="button-figure">
                <img src="../pictures/oboinii tsavuu.png" alt="Furniture 3">
                <figcaption>Патагонка<br>49,900 ₮</figcaption>
              </figure>
              <figure class="button-figure">
                <img src="../pictures/oboinii tsavuu jijig.png" alt="Furniture 4">
                <figcaption>Үсгэн багаж<br>39,900 ₮</figcaption>
              </figure>
            </article>
          </section>
  
          <section>
            <h2>Худалдаалах буй байршил</h2>
            <section class="locations">
              <article class="location-card">
                <img src="../pictures/location1.jpg" alt="Ikh Nayad Plaza">
                <section class="location-details">
                  <h3>Ikh Nayad Plaza</h3>
                  <p>Хаяг: Улаанбаатар хот, Сүхбаатар дүүрэг</p>
                  <p>Салбар: TOWER-1, 2 давхар</p>
                  <p>Ажиллах цаг: 08:00 - 21:00</p>
                  <p>Утас: 7772-4422</p>
                </section>
              </article>
              <article class="location-card">
                <img src="../pictures/location2.jpg" alt="Uran Gan">
                <section class="location-details">
                  <h3>Uran Gan</h3>
                  <p>Хаяг: Улаанбаатар хот, Хан-Уул дүүрэг</p>
                  <p>Салбар: VISTA хороолол</p>
                  <p>Ажиллах цаг: 08:00 - 21:00</p>
                  <p>Утас: 7772-4422</p>
                </section>
              </article>
              <article class="location-card coming-soon">
                <img src="../pictures/location3.jpg" alt="Coming soon">
                <section class="location-details">
                  <p>COMING SOON...</p>
                </section>
              </article>
            </section>
          </section>
        </main>
  
        <footer>
          <section class="footer-logo">Aank tools</section>
          <nav class="footer-nav">
            <a href="#">Цахилгаан багаж</a>
            <a href="#">Тавилгын хэрэгсэл</a>
            <a href="#">Барилгын тусгах материал</a>
            <a href="#">Нөөц</a>
          </nav>
          <section class="footer-contact">
            <p>Холбоо барих</p>
            <p>Утас: 95533564</p>
            <p>Email: Aanktols@email.com</p>
            <section class="social-icons">
              <a href="#" class="facebook">F</a>
              <a href="#" class="twitter">T</a>
              <a href="#" class="instagram">I</a>
            </section>
          </section>
        </footer>
      `;
    }
  }
  
  customElements.define('aank-tools', AankTools);