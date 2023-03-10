<?php

?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 03</title>
    <script src="script.js"></script>
</head>
<body>
    <form action="" method="post">
        <input type="number" name="id" id="id" min="1" max="151" placeholder="id">
        <input type="text" name="name" id="name" placeholder="nom">
        <select name="type" id="type">
            <option value="">--type--</option>
            <option value="Steel">Acier</option>
            <option value="Fighting">Combat</option>
            <option value="Dragon">Dragon</option>
            <option value="Water">Eau</option>
            <option value="Electric">Électrique</option>
            <option value="Fée">Fée</option>
            <option value="Fire">Feu</option>
            <option value="Ice">Glace</option>
            <option value="Bug">Insecte</option>
            <option value="Normal">Normal</option>
            <option value="Grass">Plante</option>
            <option value="Poison">Poison</option>
            <option value="Psychic">Psy</option>
            <option value="Rock">Roche</option>
            <option value="Ground">Sol</option>
            <option value="Ghost">Spectre</option>
            <option value="Flying">Vol</option>
        </select>
        <input type="button" id="filter" value="filtrer">
    </form>
    <table id="pkmn-list" >
        <thead>
            <th>Id</th>
            <th>Nom</th>
            <th>Type</th>
            <th>PV</th>
            <th>ATQ</th>
            <th>DEF</th>
            <th>ATQ SP</th>
            <th>DEF SP</th>
            <th>VIT</th>
        </thead>
        <tbody></tbody>
    </table>
</body>
</html>