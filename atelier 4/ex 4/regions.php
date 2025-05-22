<?php
header('Content-Type: application/json');
$pdo = new PDO('mysql:host=localhost;dbname=nom_base_de_donnees;charset=utf8', 'utilisateur', 'mot_de_passe');

if (isset($_GET['pays_id']) {
    $paysId = filter_input(INPUT_GET, 'pays_id', FILTER_SANITIZE_NUMBER_INT);
    
    try {
        $query = "SELECT * FROM region WHERE pays_id = :pays_id ORDER BY nom";
        $stmt = $pdo->prepare($query);
        $stmt->bindParam(':pays_id', $paysId, PDO::PARAM_INT);
        $stmt->execute();
        $regions = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($regions);
    } catch (PDOException $e) {
        echo json_encode([]);
    }
} else {
    echo json_encode([]);
}
?>