let ecran = $("#ecran");

$(".btn").click(function() {
  const val = $(this).text();

  if (val === "C") {
    ecran.val("");
  } else if (val === "=") {
    try {
      ecran.val(eval(ecran.val()));
    } catch {
      ecran.val("Erreur");
    }
  } else {
    ecran.val(ecran.val() + val);
  }
});
