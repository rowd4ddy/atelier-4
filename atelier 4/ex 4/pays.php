<?php
header('Content-Type: application/json');
$pdo = new PDO('mysql:host=localhost;dbname=nom_base_de_donnees;charset=utf8', 'utilisateur', 'mot_de_passe');

try {
    $query = "SELECT * FROM pays ORDER BY nom";
    $stmt = $pdo->query($query);
    $pays = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($pays);
} catch (PDOException $e) {
    echo json_encode([]);
}
?>