document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.quartoFLA');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const info = entry.target.querySelector('.info');
            if (entry.isIntersecting) {
                info.style.display = 'flex'; // Garante que o card esteja no fluxo
                requestAnimationFrame(() => {
                    info.classList.add('visible'); // Adiciona a classe para mostrar
                });
            } else {
                info.classList.remove('visible'); // Remove a classe para esconder
                setTimeout(() => {
                    info.style.display = 'none'; // Esconde o card
                }, 500); // Aguarda o tempo da transição antes de esconder
            }
        });
    }, {
        threshold: 0.5 // Ajuste conforme necessário
    });

    sections.forEach(section => {
        observer.observe(section); // Observa cada seção
    });
});
