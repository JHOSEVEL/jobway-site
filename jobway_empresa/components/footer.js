const customFooter = () => {
    return `
        <footer class="bg-gray-800 text-white py-6">
            <div class="container mx-auto text-center">
                <p class="mb-4">© 2023 JobWay. Todos os direitos reservados.</p>
                <div class="flex justify-center space-x-4">
                    <a href="#" class="text-gray-400 hover:text-white">Termos de Serviço</a>
                    <a href="#" class="text-gray-400 hover:text-white">Política de Privacidade</a>
                    <a href="#" class="text-gray-400 hover:text-white">Contato</a>
                </div>
            </div>
        </footer>
    `;
};

customElements.define('custom-footer', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = customFooter();
    }
});