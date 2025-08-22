
    const conteneur = document.querySelector("#conteneur");
    const statut = document.querySelector(".statut");
    const message_email = document.querySelector('.card')
    const newsletter = document.querySelector('.Newsletter')


    function afficher_classes(e) {
      e.preventDefault()
      conteneur.classList.toggle("afficher_classe");
      message_email.classList.remove("afficher_classe");
    }

function afficher_lettre(e) {
  e.preventDefault()
  message_email.classList.toggle("afficher_classe");
  conteneur.classList.remove("afficher_classe");
}



    statut.onclick = afficher_classes;
  

newsletter.onclick = afficher_lettre;






  const form = document.getElementById('contactForm');
  const ok = document.getElementById('ok');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('message').value.trim();
    const terms = document.getElementById('terms').checked;
    
    if (!email || !msg || !terms) return;
    
    const dest = form.getAttribute('action').replace('mailto:', '').trim();
    const subject = encodeURIComponent('E‑learning Sénégal – Message de contact');
    const body = encodeURIComponent(`De : ${email}\n\n${msg}`);
    
    ok.style.display = 'inline';
    window.location.href = `mailto:${dest}?subject=${subject}&body=${body}`;
    
  });
  
  
  
  