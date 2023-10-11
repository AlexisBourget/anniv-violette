document.addEventListener('DOMContentLoaded', function () {
    const returnButton = document.getElementById('return-button');
    const closeButton = document.getElementById("close-button");
  
    closeButton.addEventListener('click', () => {
        window.location.href = `https://www.coupdepouce.com/vie-perso/couple/article/couple-28-idees-a-essayer-pour-une-vie-amoureuse-ole-ole`;
      }
    );
    
    returnButton.addEventListener('click', () => {
      window.location.href = `index.html`;
    }
  );


  });

  