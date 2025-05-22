$("#corriger").click(function() {
  let score = 0;
  let total = $(".question").length;
  let incompletes = 0;

  $(".question").each(function() {
    const correct = $(this).data("correct");
    const selected = $(this).find("input:checked");

    $(this).find("label").css("color", "black");

    if (selected.length === 0) {
      $(this).css("background", "orange");
      incompletes++;
      return;
    }

    if (selected.val() == correct) {
      $(this).css("background", "lightgreen");
      selected.parent().css("color", "green");
      score++;
    } else {
      $(this).css("background", "lightcoral");
      selected.parent().css("color", "red");
      $(this).find("input[value=" + correct + "]").parent().css("color", "green");
    }
  });

  if (incompletes === 0) {
    $("#note").html("Note : " + score + " / " + total);
  } else {
    $("#note").html("Veuillez répondre à toutes les questions.");
  }
});
