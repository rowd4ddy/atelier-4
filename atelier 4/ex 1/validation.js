$(document).ready(function() {
  $("#inscriptionForm").submit(function(e) {
    e.preventDefault();
    let erreurs = "";

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phoneRegex = /^[0-9]{8,14}$/;

    $("input, select").each(function() {
      if (!$(this).val()) {
        erreurs += "Le champ " + $(this).attr("id") + " est obligatoire.<br>";
      }
    });

    if (!emailRegex.test($("#email").val())) {
      erreurs += "Email invalide.<br>";
    }

    if (!phoneRegex.test($("#telephone").val())) {
      erreurs += "Numéro de téléphone invalide.<br>";
    }

    if ($("#password").val() !== $("#confirmPassword").val()) {
      erreurs += "Les mots de passe ne correspondent pas.<br>";
    }

    $("#erreurs").html(erreurs);
    if (erreurs === "") {
      alert("Formulaire envoyé avec succès !");
    }
  });
});
