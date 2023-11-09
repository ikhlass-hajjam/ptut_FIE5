document.getElementById("ajouterDemande").addEventListener("click", function() {
    window.location.href = "page_demande.html";
});

document.querySelectorAll(".etape .save").forEach(function(button) {
    button.addEventListener("click", function() {
        var etapeActuelle = this.parentElement;
        var prochaineEtape = etapeActuelle.nextElementSibling;

        if (prochaineEtape) {
            etapeActuelle.style.display = "none";
            prochaineEtape.style.display = "block";
        }
    });
});

