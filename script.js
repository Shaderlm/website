document.getElementById('send').addEventListener('click', function(e) 
    {

            var nom = document.getElementById("Nom").value;
            var verifNom ;
        if(  nom =="" || nom.length < 5 || nom.length > 25  ){
            document.getElementById("Nom").style.border = "solid red 1px";
            document.getElementById("Nom").style.background = "rgba(255, 0, 0, 0.1)";
            document.getElementById('erreurNom').style.display = "block";
            verifNom = false ;
        }
        else{
            document.getElementById("Nom").style.border = "solid #603D07 1px";
            document.getElementById("Nom").style.background = "rgba(255, 255, 255, 1)";
            document.getElementById('erreurNom').style.display = "none";
            verifNom = true ; 
        }


        var prenom = document.getElementById("Prenom").value;
        var verifPrenom ; 
        if(prenom=="" || prenom.length < 5 || prenom.length > 25  ){
            document.getElementById("Prenom").style.border = "solid red 1px";
            document.getElementById("Prenom").style.background = "rgba(255, 0, 0, 0.1)";
            document.getElementById('erreurPrenom').style.display = "block";
            verifPrenom = false ;
        }
        else{
            document.getElementById("Prenom").style.border = "solid #603D07 1px";
            document.getElementById("Prenom").style.background = "rgba(255, 255, 255, 1)";
            document.getElementById('erreurPrenom').style.display = "none";
            verifPrenom = true ; 
        }

        var message = document.getElementById("message").value;
        var verifMessage ; 
        if(message=="" || message.length < 25 || message.length > 500  ){
            document.getElementById("message").style.border = "solid red 1px";
            document.getElementById("message").style.background = "rgba(255, 0, 0, 0.1)";
            document.getElementById('erreurMessage').style.display = "block";
            verifMessage = false ;
        }
        else{
            document.getElementById("message").style.border = "solid #603D07 1px";
            document.getElementById("message").style.background = "rgba(255, 255, 255, 1)";
            document.getElementById('erreurMessage').style.display = "none";
            verifMessage = true ; 
        }

        var mail = document.getElementById('mail').value;
        var verifMail ; 
        if (((mail.indexOf('.') !== -1)) && ((mail.indexOf('@') !== -1)) && ((mail.length > 4) && (mail.length < 26))){
            document.getElementById("mail").style.border = "solid #603D07 1px";
            document.getElementById("mail").style.background = "rgba(255, 255, 255, 1)";
            document.getElementById('erreurMail').style.display = "none";
            verifNom = true ; 
        }
        else {
            document.getElementById("mail").style.border = "solid red 1px"
            document.getElementById("mail").style.background = "rgba(255, 0, 0, 0.1)";
            document.getElementById('erreurMail').style.display = "block";
            verifMail = false ; 
        }

        var num = document.getElementById('num').value;
        var numPoint = num.indexOf('.');
        var numE = num.indexOf('e');
        var verifNum ;
        if(!isNaN(num) && num.length == 10 && numPoint == -1 && numE == -1){
            document.getElementById('num').style.border = 'solid 1px #603D07';
            document.getElementById("num").style.background = "rgba(255, 255, 255, 1)";
            document.getElementById('erreurNum').style.display = "none";
            verfiNum = true ; 
        } else {
            document.getElementById('num').style.border = 'solid 1px red';
            document.getElementById("num").style.background = "rgba(255, 0, 0, 0.1)";
            document.getElementById('erreurNum').style.display = "block";
            verifNum = false ;
        };
        var sujet = document.getElementById('sujet').value;
        var verifSujet ;
        if(sujet=="" || sujet.length < 5 || sujet.length > 25 ) {
            document.getElementById('sujet').style.border = 'solid 1px red';
            document.getElementById("sujet").style.background = "rgba(255, 0, 0, 0.1)";
            document.getElementById('erreurSujet').style.display = "block";
            verifSujet = false ; 
        } else {
            document.getElementById('sujet').style.border = 'solid 1px #603D07';
            document.getElementById("sujet").style.background = "rgba(255, 255, 255, 1)";
            document.getElementById('erreurSujet').style.display = "none";
            verfiNom = true ; 
        };

        if ( !verifNom && !verifPrenom && !verifMessage && !verifMail && !verifNum && !verifSujet){
            document.getElementById('erreurGlobale').innerHTML = "Verifier les informations saisies, puis réessayer.";
            e.preventDefault();      
        } else {
            document.getElementById('erreurGlobale').innerHTML = "";
        };

    });





















    // $( function () {
    
    //     var charts = $( ".chart" );
        
    //     /* FUNCTIONS */
        
    //     // Return boolean when an element is partially visible on screen
    //     function isPartialVisible ( element ) {
    //         var
    //             viewPortHeight = $( window ).height(), // Viewport Height
    //             scrollTop = $( window ).scrollTop(), // Scroll Top
    //             currElementPosY = $( element ).offset().top,
    //             elementHeight = $( element ).height();
            
    //         return ( ( currElementPosY + elementHeight + elementHeight ) > scrollTop && currElementPosY < ( viewPortHeight + scrollTop ) );
    //     }
        
    //     // Return boolean when an element is wholly visible on screen
    //     function isWholeVisible( element ) { 
    //         var 
    //             viewPortHeight = $( window ).height(), // Viewport Height
    //             scrollTop = $( window ).scrollTop(), // Scroll Top
    //             currElementPosY = $( element ).offset().top,
    //             elementHeight = $( element ).height();
            
    //         return ( currElementPosY > scrollTop && currElementPosY + elementHeight < ( viewPortHeight + scrollTop ) );
    //     }
        
    //     // Animate chart only when you see it
    //     function animateChartWhenVisible ( chart ) {
    //         for ( var i = 0, count = chart.length; i < count; i++ ) {
    //             if ( isWholeVisible( chart[ i ] )  ) {
    //                 $( chart[ i ] ).addClass("mymove-animation");
    //             }
    //         }
    //     }
        
    //     /* FUNCTIONS END */
        
    //     // On scroll
    //     $( window ).scroll( function () {  
    //         animateChartWhenVisible( charts );
    //     } );
        
    //     /* On load */    
    //     animateChartWhenVisible( charts );
        
    // } );