/* Fonction d'initialisation de la carte */
function initialiserCarte() {

    /* Test pour savoir si le navigateur supporte l'API de géolocalisation (W3C) */
    if (!navigator.geolocation) {
        /* Message d'alerte */
        alert("Votre navigateur ne gère pas la géolocalisation");
        /* Valeur de retour */
        return false
    }

    /* Définition de la position de centrage de la carte (centrée sur la ville de Montpellier) */
    var centreGoogleMap = new google.maps.LatLng(43.6121918, 3.8741607);

    /* Définition des options de la carte */
    var optionsGoogleMap = {
        /* Facteur de zoom */
        zoom : 16,
        /* Point de centrage */
        center : centreGoogleMap,
        /* Mode d'affichage de la carte (vue carte routière )*/
        /* NB : google.maps.mapTypeId.ROADMAP   -> Affichage en mode Plan */
        /*      google.maps.mapTypeId.SATELLITE -> Affichage en mode Satellite */
        /*      google.maps.mapTypeId.HYBRID    -> Affichage en mode Mixte (Plan/Satellite) */
        /*      google.maps.mapTypeId.TERRAIN   -> Affichage en mode Relief */
        mapTypeId : google.maps.MapTypeId.ROADMAP
    }

    /* Mise en place de la carte dans la division maCarte */
    var maCarte = new google.maps.Map(document.getElementById("maCarte"), optionsGoogleMap);

    /* Ajout d'un marqueur sur la ville de Mopntpellier*/
    var marqueurLPJ = new google.maps.Marker({
        position : new google.maps.LatLng(43.6121918, 3.8741607), 
        map : maCarte,
        title : "Montpellier, la plus grande ville de l'Hérault"
    });

    var commentairesLPJ = "<div id='marqueur'><div><img src='images/facade.jpg' alt='photo de la façade Le Petit Jardin'></div><div><h1>Restaurant Montpellier</h1><h2>Le Petit Jardin</h2><p>Bistronomie & terrasse ombragée</p></div></div>";

    var fenetreMontpellier = new google.maps.InfoWindow({
        content : commentairesLPJ
    });

    google.maps.event.addListener(marqueurLPJ, "click", function(){
        fenetreMontpellier.open(maCarte, marqueurLPJ);
    });

}