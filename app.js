document.addEventListener('DOMContentLoaded', function () {
  const submitButton = document.getElementById('submit-button');
  const noteButton1 = document.getElementById('choice-1');
  const noteButton2 = document.getElementById('choice-2');
  const noteButton3 = document.getElementById('choice-3');
  const closeButton = document.getElementById("close-button");
  const music = document.getElementById('music');

  noteButton1.addEventListener('click', () => {

      window.location.href = `massage.html`;
    }
  );

  noteButton2.addEventListener('click', () => {
  
      window.location.href = `photos-vannes.html`;
    }
  );

  noteButton3.addEventListener('click', () => {
 
      window.location.href = `restau.html`;
    }
  );

  
  closeButton.addEventListener('click', () => {
    window.location.href = `return.html`;
  }
);

  

submitButton.addEventListener('click', () => {
  startParty();
  music.play(); // Jouer la musique
});


  // Fonction pour déclencher les confettis
  function startParty() {
    particlesJS('confetti-container', {
      particles: {
        number: {
          value: 239, // Le nombre de confettis
        },
        color: {
          value: "#ff0000", // La couleur des confettis
        },
        shape: {
          type: "circle", // La forme des confettis (peut être "circle", "triangle", etc.)
        },
      },
    });
  }



});

