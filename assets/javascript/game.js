$(document).ready(function() {

	var Hero = function(name) {
		this.name = name;
		this.attackPower = 20;
		this.hp = Math.floor(Math.random()*200) + 100;
	}

	var heroes = {
		hero1: new Hero('Captain America'),
		hero2: new Hero('Spiderman'),
		hero3: new Hero('Thor'),
		hero4: new Hero('Batman')
	}

	var Villain = function(name, counterAttackPower) {
		this.name = name;
		this.counterAttackPower = counterAttackPower;
		this.hp = Math.floor(Math.random()*200) + 100;
	}

	var villains = {
		villain1: new Villain("Red Skull", 20),
		villain2: new Villain("Joker", 15),
		villain3: new Villain("Loki", 5),
		villain4: new Villain("Green Goblin", 10)
	}

	var chosenHero;
	var chosenVillain;

	function displayHP () {
		$('#hero1 .HP').html(heroes.hero1.hp); 
		$('#hero2 .HP').html(heroes.hero2.hp); 
		$('#hero3 .HP').html(heroes.hero3.hp); 
		$('#hero4 .HP').html(heroes.hero4.hp); 
		$('#villain1 .HP').html(villains.villain1.hp); 
		$('#villain2 .HP').html(villains.villain2.hp); 
		$('#villain3 .HP').html(villains.villain3.hp); 
		$('#villain4 .HP').html(villains.villain4.hp); 
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

	isHeroChosen = false;
	isVillainChosen = false;

    $(".hero").on("click", function() {
    	if (isHeroChosen) return;
    	else {
    		var heroId = $(this).attr('id');
    		chosenHero = heroes[heroId];
			$(this).appendTo(".heroPicked");
			$(".heroes").addClass("heroesRemaining");
			var newHtml =`<p class="heroesSubheading">You are ${chosenHero.name}! Now pick the first villain to fight </p>`; 
			$(".heroPickedSubheading").append(newHtml);
			isHeroChosen = true;
		}
	});

	$(".villain").on("click", function() {
		if (isVillainChosen) return;
			else {
			$(this).appendTo(".villainPicked");
			isVillainChosen = true;
		}
	});






    




});


