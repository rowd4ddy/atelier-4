// Remplir les pays au chargement
$.get('pays.php', function(data) {
    data.forEach(pays => {
        $('#pays').append(`<option value="${pays.id}">${pays.nom}</option>`);
    });
});

// Événement pour les régions
$('#pays').change(function() {
    const paysId = $(this).val();
    $.get('regions.php', { pays_id: paysId }, function(data) {
        $('#region').empty().append('<option value="">Choisir une région</option>');
        data.forEach(region => {
            $('#region').append(`<option value="${region.id}">${region.nom}</option>`);
        });
    });
});

// Événement pour les villes
$('#region').change(function() {
    const regionId = $(this).val();
    $.get('villes.php', { region_id: regionId }, function(data) {
        $('#ville').empty().append('<option value="">Choisir une ville</option>');
        data.forEach(ville => {
            $('#ville').append(`<option value="${ville.id}">${ville.nom}</option>`);
        });
    });
});