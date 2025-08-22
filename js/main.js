const classe = document.querySelector("#conteneur");
const statut = document.querySelector(".statut");

function afficher_classes() {
  classe.classList.toggle("afficher_classe");
  
  if (classe.classList.contains("afficher_classe")) {
    classe.style.display = "block"
  }
  else {
    classe.style.display = "none"
  }
}

statut.onclick = afficher_classes
