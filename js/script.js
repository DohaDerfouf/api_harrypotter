$(document).ready(function() {
    console.log("ready");
    var monhtml = "";

    $.ajax({
        url: 'harry_potter.json',
        method: 'GET',
        dataType: 'json',
        success: function(response) {
            console.log(response);

            $.each(response, function(index, post) {
                if (post.image == "") {
                    post.image = 'img/def.png';
                } 
                if ( post.patronus == "") {
                    post.patronus = 'None';
                  
                }
                if ( post.house == "") {
                    post.house = 'None';
                  
                }
                if ( post.alive == false) {
                    post.alive = 'Dead';
                }else{
                    post.alive = 'Alive';
                }

                monhtml += "<div class='details-wrapper'>";
                monhtml += "<div class='img-box " + post.house + "'>";
                monhtml += "  <img src='" + post.image + "' alt='" + post.id + "'>";
                monhtml += "</div>";
                monhtml += "<div class='details-des'>";
                monhtml += "<h6>" + post.name + "</h6>";
                monhtml += "<div class='hidden-info' style='display: none;'>"; // Conteneur d'infos caché
                monhtml += "<ul>";
                monhtml += "<li>Specie: <span>" + post.species + "</span></li>";
                monhtml += "<li>Maison: <span>" + post.house + "</span></li>";
                monhtml += "<li>Patronus: <span>" + post.patronus + "</span></li>";
                monhtml += "<li>Alive: <span>" + post.alive + "</span></li>";
                monhtml += "</ul>";
                monhtml += "</div>";
                monhtml += "</div>";
                monhtml += "</div>";
            });
            $("#contenu").html(monhtml);

            // Ajouter un gestionnaire de clic sur les h3
            $(".details-des h6").click(function() {
                // Trouver le conteneur d'informations associé et le faire glisser vers le bas
                $(this).siblings(".hidden-info").slideToggle();
            });
        }
    });
});
