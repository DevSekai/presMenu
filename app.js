let currentIndex = 0;

function testNav() {
  if (currentIndex !== 0) { // Si tu a deja selectionner un item alors je desactive l'ancien item (Ici représenter par un background color)
    let lastButton = document.getElementById(currentIndex);
    lastButton.style.transform = "scale(1)";
    lastButton.style.boxShadow = "0 4px 8px rgba(66, 66, 66, 0.137)";
  };
  currentIndex++; // Jajoute +1 a mon index
  let selectecButton = document.getElementById(currentIndex);
  if (selectecButton) { // Si l'item avec mon currentIndex existe alors je le selection (Ici montrer par le bckground color)
    selectecButton.style.transform = "scale(1.05)";
    selectecButton.style.boxShadow = "0 4px 8px rgba(0, 255, 0, 0.137)";
  } else { // sinon je revien a mon index de depart
    currentIndex = 0;
    testNav(); 
  }
}

function testSel() {
  if (currentIndex !== 0) { // Si currentIndex est différent de 0 (donc qu'un item est sélectionné)
    const selectecButton = document.getElementById(currentIndex);
    if (selectecButton) { // par sécurité on verifie que le bouton existe bien
      selectecButton.onclick(); // j'effectue l'action defini pour mon bouton
    }
  }
}

function onClickitem(buttonId) {
  console.log("tu vien d'appuyer sur le bouton avec pour id "+buttonId)
}

document.addEventListener('keyup', function(event) {
    console.log("tu a appuyer sur la touche "+event.key)
});