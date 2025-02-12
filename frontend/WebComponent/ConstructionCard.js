class AankTools extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.data = []; // Store fetched data
  }

  async fetchData() {
    try {
      const response = await fetch('/api/product/1'); // Fetch from same host
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      this.data = await response.json();
      this.render();
    } catch (error) {
      console.error('Error fetching data:', error);
      this.shadowRoot.innerHTML = `<p>Error loading data.</p>`;
    }
  }

  connectedCallback() {
    this.fetchData();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: Arial, sans-serif;
        }
        .tool-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }
        .tool-card {
          padding: 10px;
          border-radius: 8px;
          border: 1px solid #ddd;
          background: #fff;
          text-align: center;
        }
        .tool-card img {
          max-width: 100%;
          height: auto;
        }
      </style>

      <section>
        <h2>Цахилгаан багаж</h2>
        <div class="tool-grid">
          ${this.data.map(tool => `
            <div class="tool-card">
              <img src="${tool.image}" alt="${tool.name}">
              <figcaption>${tool.name}<br>${tool.price} ₮</figcaption>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }
}

customElements.define('aank-tools', AankTools);
