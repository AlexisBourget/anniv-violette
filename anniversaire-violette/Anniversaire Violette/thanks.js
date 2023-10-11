document.addEventListener('DOMContentLoaded', function () {
    // Récupérez la note depuis l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const note = urlParams.get('note');
  
    // Affichez la note
    if (note) {
      const scoreElement = document.querySelector('.score');
      scoreElement.textContent = `You selected ${note} out of 5`;
    }
  
    // Rechargez la page après un délai (par exemple, 3 secondes)
    setTimeout(() => {
      location.reload();
    }, 3000); // 3000 millisecondes (3 secondes)
  });
  