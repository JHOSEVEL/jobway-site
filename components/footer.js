class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #0A2540;
          color: white;
          padding: 4rem 2rem;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
        }
        .logo span {
          color: #09f24bff;
        }
        .footer-section h3 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-links a {
          color: #CBD5E0;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: white;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .social-links a {
          color: white;
          background: rgba(255, 255, 255, 0.1);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .social-links a:hover {
          background: #3B82F6;
        }
        .copyright {
          grid-column: 1 / -1;
          text-align: center;
          padding-top: 2rem;
          margin-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: #A0AEC0;
          font-size: 0.875rem;
        }
        @media (max-width: 768px) {
          .container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <footer>
        <div class="container">
          <div class="footer-section">
            <div class="logo">Job<span>Way</span></div>
            <p class="text-gray-400">A solução definitiva para a ineficiência crônica do recrutamento.</p>
          </div>
          <div class="footer-section">
            <h3>Empresa</h3>
            <div class="footer-links">
              <a href="#">Sobre Nós</a>
              <a href="#">Carreiras</a>
              <a href="#">Blog</a>
              <a href="#">Contato</a>
            </div>
          </div>
          <div class="footer-section">
            <h3>Legal</h3>
            <div class="footer-links">
              <a href="#">Termos de Uso</a>
              <a href="#">Política de Privacidade</a>
              <a href="#">Cookies</a>
            </div>
          </div>
          <div class="footer-section">
            <h3>Conecte-se</h3>
            <div class="footer-links">
              <a href="mailto:Jobwayrh@gmail.com">jobwayrh@gmail.com</a>
              <a href="tel:+55119999999">(85) 98950-0747</a>
            </div>
            <div class="social-links">
              <a href="#"><i data-feather="facebook"></i></a>
              <a href="#"><i data-feather="instagram"></i></a>
              <a href="#"><i data-feather="linkedin"></i></a>
              <a href="#"><i data-feather="twitter"></i></a>
            </div>
          </div>
          <div class="copyright">
            <p>&copy; 2024 JobWay. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);