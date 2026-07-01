const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const pergunta = item.querySelector('.pergunta');

    pergunta.addEventListener('click', () => {
        // Alterna a classe 'ativa' no item clicado
        item.classList.toggle('ativa');

        // Opcional: Fecha as outras perguntas se quiser deixar apenas uma aberta por vez
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('ativa');
            }
        });
    });
});