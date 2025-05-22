<?php
header('Content-Type: application/json');
$pdo = new PDO('mysql:host=localhost;dbname=nom_base_de_donnees;charset=utf8', 'utilisateur', 'mot_de_passe');

if (isset($_GET['region_id'])) {
    $regionId = filter_input(INPUT_GET, 'region_id', FILTER_SANITIZE_NUMBER_INT);
    
    try {
        $query = "SELECT * FROM ville WHERE region_id = :region_id ORDER BY nom";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':region_id', $regionId, PDO::PARAM_INT);
        $stmt->execute();
        $villes = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($villes);
    } catch (PDOException $e) {
        echo json_encode([]);
    }
} else {
    echo json_encode([]);
}
?>