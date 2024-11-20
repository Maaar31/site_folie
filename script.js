// Récupérer tous les éléments d'image
const images = document.querySelectorAll('.open-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentIndex = 0;
let imageArray = [];

// Fonction pour ouvrir l'image dans le lightbox
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.getAttribute('data-src');
        currentIndex = index;
        imageArray = Array.from(images).map(image => image.getAttribute('data-src'));
    });
});

// Fermer le lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Navigation dans le lightbox
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? imageArray.length - 1 : currentIndex - 1;
    lightboxImg.src = imageArray[currentIndex];
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === imageArray.length - 1) ? 0 : currentIndex + 1;
    lightboxImg.src = imageArray[currentIndex];
});
