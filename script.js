document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to your server
            alert('Obrigado pelo seu interesse! Entraremos em contato em breve para agendar seu diagnóstico.');
            form.reset();
        });
    }
});

// Track form interactions
document.querySelectorAll('input, select').forEach(element => {
    element.addEventListener('focus', function() {
        console.log(`Field ${this.id} focused`);
    });
});

// codgo whatsapp
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Pegando os valores dos campos
    const nome = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const empresa = document.getElementById("company").value.trim();
    const cargo = document.getElementById("role").value.trim();
    const funcionarios = document.getElementById("employees").value;

    // Número do WhatsApp (adicione o seu número abaixo com DDI e DDD)
    const phoneNumber = "5585989500747"; // Exemplo: 55 + DDD + número

    // Monta a mensagem
    const mensagem = `
    *Novo cadastro JobWay - Diagnóstico Empresarial*
    👤 *Nome:* ${nome}
    🏢 *Empresa:* ${empresa}
    💼 *Cargo:* ${cargo}
    👥 *Funcionários:* ${funcionarios}
    📧 *Email:* ${email}
        `.trim();

    // Converte para URL codificada
    const texto = encodeURIComponent(mensagem);

    // Cria o link do WhatsApp
    const link = `https://wa.me/${phoneNumber}?text=${texto}`;

    // Abre o WhatsApp Web ou app
    window.open(link, "_blank");
});
