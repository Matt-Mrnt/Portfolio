const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * carousel.offsetWidth;
    carousel.style.transform = `translateX(${offset}px)`;
    carousel.style.transition = 'transform 0.5s ease';
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < carousel.children.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

// === Gestion des projets ===
const card = document.querySelectorAll('.card');
const closeBtns = document.querySelectorAll('.close-btn');

card.forEach((box) => {
    box.addEventListener('click', () => {
        const projectId = box.id;
        const detailBox = document.getElementById(`${projectId}-detail`);
        detailBox.style.display = 'block';
    });
});

closeBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const detailBox = btn.closest('.project-detail');
        detailBox.style.display = 'none';
        event.stopPropagation();
    });
});

// Fermer les détails en cliquant à l'extérieur
window.addEventListener('click', (event) => {
    const detailBoxes = document.querySelectorAll('.project-detail');
    detailBoxes.forEach((detail) => {
        if (event.target === detail) {
            detail.style.display = 'none';
        }
    });
});