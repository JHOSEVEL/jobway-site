// This file exports a custom navbar component for the JobWay project.

class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="bg-white shadow">
                <div class="container mx-auto px-6 py-4">
                    <div class="flex justify-between items-center">
                        <div class="text-2xl font-bold text-blue-600">
                            JobWay
                        </div>
                        <div class="space-x-4">
                            <a href="#hero" class="text-gray-700 hover:text-blue-600">Home</a>
                            <a href="#form" class="text-gray-700 hover:text-blue-600">Agendar</a>
                            <a href="#testimonials" class="text-gray-700 hover:text-blue-600">Depoimentos</a>
                            <a href="#how-it-works" class="text-gray-700 hover:text-blue-600">Como Funciona</a>
                        </div>
                    </div>
                </div>
            </nav>
        `;
    }
}

customElements.define('custom-navbar', CustomNavbar);