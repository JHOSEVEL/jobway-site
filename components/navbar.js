class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: white;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
        }
        .logo {
          color: #78f9bdff;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
        }
        .logo span {
          color: #07f527ff;
        }
        ul {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
          margin-right: 3rem;
        }
        a {
          color: #4A5568;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        a:hover {
          color: #3B82F6;
        }
        .cta {
          background: #3B82F6;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          transition: background 0.2s;
        }
        .cta:hover {
          background: #2563EB;
          color: white;
        }
        @media (max-width: 768px) {
          nav {
            padding: 1rem;
            flex-direction: column;
            align-items: flex-start;
          }
          ul {
            margin-top: 1rem;
            width: 100%;
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }
          .cta {
            width: 100%;
            text-align: center;
          }
        }
      </style>
      <nav>
        <a href="#" class="logo">
          Job<span>Way</span>
        </a>
        <ul>
          <li><a href="#how-it-works">Como Funciona</a></li>
          <li><a href="#testimonials">Depoimentos</a></li>
          <li><a href="#form" class="cta">Diagnóstico Gratuito</a></li>
        </ul>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);