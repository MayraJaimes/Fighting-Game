$(document).ready(function() {

	var heroHead = $('.hero .subheading');
	var villainHead = $('.enemy .subheading');

    var gameOver = false;
 	var villainHP = 0;
 	var heroeHP = 0;

    $('.card1').click(function() {
        $(this).animate({
            top: '+=200px'
        }, 500);
        $(this).animate({
            left: '+=220px'
        }, {duration: 500, queue: false}); 
        heroHead.animate({
            top: '+=200px'
        }, {duration: 500, queue: false});    
        heroHead.html("This is your Character! Now pick the first villain to fight");   
        $(".card2, .card3, .card4").fadeOut(500);
    });

    $('.card2').click(function() {
 		$(this).animate({
            top: '+=200px'
        }, 500);
        $(this).animate({
            left: '+=70px'
        }, {duration: 500, queue: false}); 
        heroHead.animate({
            top: '+=200px'
        }, {duration: 500, queue: false});    
        heroHead.html("This is your Character! Now pick the first villain to fight");
        $(".card1, .card3, .card4").fadeOut(500);
    });

    $('.card3').click(function() {
     	$(this).animate({
            top: '+=200px'
        }, 500);
        $(this).animate({
            left: '-=70px'
        }, {duration: 500, queue: false}); 
        heroHead.animate({
            top: '+=200px'
        }, {duration: 500, queue: false});    
        heroHead.html("This is your Character! Now pick the first villain to fight!");
        $(".card1, .card2, .card4").fadeOut(500);
    });

    $('.card4').click(function() {
         $(this).animate({
            top: '+=200px'
        }, 500);
        $(this).animate({
            left: '-=220px'
        }, {duration: 500, queue: false}); 
        heroHead.animate({
            top: '+=200px'
        }, {duration: 500, queue: false});    
        heroHead.html("This is your Character! Now pick the first villain to fight!");
        $(".card1, .card2, .card3").fadeOut(500);
    });

    $('.card5').click(function() {
        $(this).animate({
            top: '+=200px'
        }, 500);
        $(this).animate({
            left: '+=220px'
        }, {duration: 500, queue: false});  
        $(".enemy .subheading").animate({
            top: '+=200px'
        }, {duration: 500, queue: false});    
        villainHead.html("Current villain you are fighting");       
        heroHead.html("Fight the villain!");   
    });

    $('.card6').click(function() {
        $(this).animate({
            top: '+=200px'
        }, 500);
        $(this).animate({
            left: '+=70px'
        }, {duration: 500, queue: false});  
        villainHead.html("Current villain you are fighting");           
        heroHead.html("Fight the villain!");   
    });

    $('.card7').click(function() {
        $(this).animate({
            top: '+=200px'
        }, 500);
        $(this).animate({
            left: '-=70px'
        }, {duration: 500, queue: false});
        villainHead.html("Current villain you are fighting");             
        heroHead.html("Fight the villain!");   
    });

    $('.card8').click(function() {
        $(this).animate({
            top: '+=200px'
        }, 500);
        $(this).animate({
            left: '-=220px'
        }, {duration: 500, queue: false}); 
        villainHead.html("Current villain you are fighting");            
        heroHead.html("Fight the villain!");   
    });

    $("#singlebutton").click(function(){ 
    	heroeHP++;
    	villainHP ++; 
    	$('.heroeHP').html(heroeHP);
    	$('.villainHP').html(villainHP);

    });


/*

    if (hpHeroe <= 0) {
    	gameOver == true;
    	//show reset button
    	}
    }

    if (hpVillain <=0){
    	//click on another villain
    }



    function startGame () {

    }

    function reset (){

    }

    */

});


