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

window.onload = function() {
    setTimeout(function() {
        document.getElementById('fhpopup').classList.add('show');
    }, 4000);
};

document.getElementById('fhclose-btn').onclick = function() {
    document.getElementById('fhpopup').classList.remove('show');
};


document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const info = entry.target.querySelector('.info');
            if (entry.isIntersecting) {
                info.classList.add('visible');
            } else {
                info.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.7 // Quando 50% do elemento estiver visível
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
