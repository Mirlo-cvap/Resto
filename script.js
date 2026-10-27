// ==================================
// 1. MENU HAMBURGER
// ==================================

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", function () {

    // Ajoute ou retire la classe active.
    const isOpen = navigation.classList.toggle("active");

    // Met à jour l'état du bouton.
    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fermer le menu" : "Ouvrir le menu"
    );

    // Change le symbole du bouton.
    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// ==================================
// 2. FERMETURE DU MENU
// ==================================

navigation.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Ouvrir le menu"
        );

        menuToggle.textContent = "☰";

    });

});


// ==================================
// 3. ANNÉE AUTOMATIQUE
// ==================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ==================================
// 4. FORMULAIRE DE CONTACT
// ==================================

const contactForm = document.getElementById("contact-form");

const formStatus = document.getElementById("form-status");


contactForm.addEventListener("submit", function (event) {

    // Empêche la page de se recharger.
    event.preventDefault();

    // Vérifie les champs obligatoires.
    if (!contactForm.reportValidity()) {
        return;
    }

    // Récupère les informations.
    const nom = document.getElementById("nom").value.trim();

    const email = document.getElementById("email").value.trim();

    const sujet = document.getElementById("sujet").value;

    const message = document.getElementById("message").value.trim();


    // Prépare le contenu du message.
    const texte =
        "Bonjour Le Bon Goût !\n\n" +
        "Nom : " + nom + "\n" +
        "Email : " + email + "\n" +
        "Sujet : " + sujet + "\n\n" +
        "Message :\n" + message;


    // Encode le message pour une URL.
    const texteEncode = encodeURIComponent(texte);


    // Numéro WhatsApp au format international.
    const numeroWhatsApp = "2250564661552";


    // Construit le lien WhatsApp.
    const lienWhatsApp =
        "https://wa.me/" +
        numeroWhatsApp +
        "?text=" +
        texteEncode;


    // Informe le visiteur.
    formStatus.textContent =
        "Ouverture de WhatsApp. Vérifiez votre message, puis appuyez sur Envoyer.";


    // Ouvre WhatsApp.
    const nouvelleFenetre = window.open(
        lienWhatsApp,
        "_blank"
    );


    // Solution de secours si le navigateur bloque l'ouverture.
    if (!nouvelleFenetre) {
        window.location.href = lienWhatsApp;
    }

});