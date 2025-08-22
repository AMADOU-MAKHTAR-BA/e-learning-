
    const conteneur = document.querySelector("#conteneur");
    const statut = document.querySelector(".statut");

    function afficher_classes(e) {
      e.preventDefault()
      conteneur.classList.toggle("afficher_classe");
    }

    statut.onclick = afficher_classes;
  
