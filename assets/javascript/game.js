$(document).ready(function() {

	var Hero = function(name) {
		this.name = name;
		this.attackPower = 20;
		this.hp = Math.floor(Math.random()*200) + 100;
	}

	var hero1 = new Hero('Captain American');
	var hero2 = new Hero('Spiderman');
	var hero3 = new Hero('Thor');
	var hero4 = new Hero('Batman');

	var Villain = function(name, counterAttackPower) {
		this.name = name;
		this.counterAttackPower = counterAttackPower;
		this.hp = Math.floor(Math.random()*200) + 100;
	}

	var villain1 = new Villain("Red Skull", 20);
	var villain2 = new Villain("Joker", 15);
	var villain3 = new Villain("Loki", 5);
	var villain4 = new Villain("Green Goblin", 10);

	function displayHP () {
		$('#heroe1 .HP').html(hero1.hp); 
		$('#heroe2 .HP').html(hero2.hp); 
		$('#heroe3 .HP').html(hero3.hp); 
		$('#heroe4 .HP').html(hero4.hp); 
		$('#villain1 .HP').html(villain1.hp); 
		$('#villain2 .HP').html(villain2.hp); 
		$('#villain3 .HP').html(villain3.hp); 
		$('#villain4 .HP').html(villain4.hp); 
	};

	function heroePos() {

	};

	function villainPos() {

	};

	function resetGame() {
		
	};

	function startGame() {
	};	

	displayHP();

	$(".card").click(function() {
   // Hides all images.
    	$(".card").hide();
   // Shows appropriate one.
		var imageId = $(this).data("imageId"); // Fetches the value of the data-imageId attribute.
		$(".image[data-imageId="+imageId+"]").show();
	});


	$(".thumbnail").click(function() {
   // Hides all images.
   $(".image").hide();

   // Shows appropriate one.
   var imageId = $(this).data("imageId"); // Fetches the value of the data-imageId attribute.
   $(".image[data-imageId="+imageId+"]").show();
});

});


