$(document).ready(function() {
    console.log("ready");
    var monhtml = "";
     $.ajax({
        url: '/harry_potter.json',
        method: 'GET',
        dataType: 'json',
        success: function(response) {
            console.log(response);

            $.each(response, function(_, post) {
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

                monhtml += "<div class='details-wrapper grid-item " + post.house +' '+ post.gender + " min-h-[130px]'>";
                monhtml += "<div class='img-box " + post.house + "'>";
                monhtml += "  <img class ='' src='" + post.image + "' alt='" + post.id + "'>";
                monhtml += "</div>";
                monhtml += "<div class='details-des'>";
                monhtml += "<h6 class ='my-2'>" + post.name + "</h6>";
                monhtml += "<div class='hidden-info'style='display: none;'>"; // Conteneur d'infos caché
                monhtml += "<ul class='text-white'>";
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
                $(this).closest(".details-wrapper").toggleClass("details-wrapper-active");
            });

       console.log('hello')
            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                layoutMode: 'fitRows'
            });
    //         $('.filter button').on("click", function () {
    //             var value = $(this).attr('data-name');
              
    //             $grid.isotope({
    //               filter: value
    //             });
    //           });
    var filters = {};
    $('.button-group').on( 'click', 'button', function() {
        var $this = $(this);
        // get group key
        var $buttonGroup = $this.parents('.button-group');
        var filterGroup = $buttonGroup.attr('data-filter-group');
        // set filter for group
        filters[ filterGroup ] = $this.attr('data-filter');
        // combine filters
        var filterValue = concatValues( filters );
        $grid.isotope({ filter: filterValue });
      });
      
      // flatten object by concatting values
      function concatValues( obj ) {
        var value = '';
        for ( var prop in obj ) {
          value += obj[ prop ];
        }
        return value;
      }
        
        }
    });
});

