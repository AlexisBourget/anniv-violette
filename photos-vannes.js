document.addEventListener('DOMContentLoaded', function () {
  const imageCarousel = document.querySelector('.image-carousel');
  const images = document.querySelectorAll('.image-carousel img');
  let currentIndex = 0;

  // Fonction pour afficher une image en fonction de l'indice
  function showImage(index) {
    images.forEach((image, i) => {
      image.style.display = i === index ? 'block' : 'none';
    });
  }

  imageCarousel.addEventListener('click', (event) => {
    const halfWidth = imageCarousel.offsetWidth / 2;
    const clickX = event.clientX - imageCarousel.getBoundingClientRect().left;

    if (clickX < halfWidth) {
      // Clic sur la moitié gauche (image précédente)
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    } else {
      // Clic sur la moitié droite (image suivante)
      currentIndex = (currentIndex + 1) % images.length;
    }

    showImage(currentIndex);
  });

  // Afficher la première image par défaut
  showImage(currentIndex);
});
