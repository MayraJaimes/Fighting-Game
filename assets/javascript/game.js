$(document).ready(function() {

	var chosenHero;
	var chosenVillain;
	var isHeroChosen = false;
	var isVillainChosen = false;
	var villainsToFight = 4;
	var gameOver = false;
	var villainsGameSubheading= "";
	var heroesGameSubheading = "";
	var heroes = {};
	var villains = {};

	var currentVillain;

function initializeGame() {

	var Character = function(name, ap, isHero) {
		this.name = name;
		this.ap = ap;
		this.hp = Math.floor(Math.random()*200) + 100;
		this.isHero = isHero || false;
	}
	
	var heroesList = [
	{name: 'Captain America', ap: 20, isHero: true}, 
	{name: 'Spiderman', ap: 15, isHero: true}, 
	{name: 'Thor', ap: 5, isHero: true}, 
	{name: 'Batman', ap: 10, isHero: true}];
	
	var villList = [
	{name: 'Red Skull', ap: 20}, 
	{name: 'Joker', ap: 15}, 
	{name: 'Loki', ap: 5}, 
	{name: 'Green Goblin', ap: 10}];

	for (i=1; i<heroesList.length+1; i++) {
		heroes['hero' + i] = new Character(heroesList[i-1].name, heroesList[i-1].ap, heroesList[i-1].isHero);
		$('#hero' + i + ' .HP').html(heroes['hero' + i].hp);
	}

	for (i=1; i<villList.length+1; i++) {
			villains['villain' + i] = new Character(villList[i-1].name, villList[i-1].ap);
			$('#villain' + i + ' .HP').html(villains['villain' + i].hp);
		}

//Click Hero

    $(".hero").on("click", function() {
    	if (!isHeroChosen){
    		var heroId = $(this).attr('id');
    		chosenHero = heroes[heroId];
			$(this).clone().appendTo(".heroPicked");
			$(".heroesContent").addClass("heroesRemaining");
			heroesGameSubheading =`<p class="heroesSubheading">You are ${chosenHero.name}!</p>`; 
			$(".heroPickedSubheading").append(heroesGameSubheading);
			isHeroChosen = true;
		}
	});

//Click Villain

	$(".villain").on("click", function() {
		currentVillain = $(this);

		if (!isVillainChosen) {
			villainsToFight --;
			var villainId = $(this).attr('id');
			chosenVillain = villains[villainId];
			$(this).clone().appendTo(".villainPicked");
			$(".villainsContent").addClass("villainsRemaining");
			var villainsGameSubheading =`<p class="villainsSubheading">You are fighting ${chosenVillain.name}! </p>`; 
			$(".villainPickedSubheading").append(villainsGameSubheading);
			$(".attackButton").css("visibility", "visible");
			isVillainChosen = true;
		}
	});

//Attack button
		
	$(".attackButton").on("click", function() {
		if (isVillainChosen && isHeroChosen && chosenHero.hp > 0 && chosenVillain.hp > 0 && villainsToFight >= 0 ) {
			chosenVillain.hp -= chosenHero.ap;
			chosenHero.hp -= chosenVillain.ap;

			$(".villainPickedResults p").css("visibility", "visible");
			$(".heroPickedResults p").css("visibility", "visible");
			
			$('.villainPickedResults p').html(`${chosenVillain.name} attacked ${chosenHero.name} for damage of ${chosenHero.ap}`); 		
	 		$('.heroPickedResults p').html(`${chosenVillain.name} attacked you back for damage of ${chosenVillain.ap}`); 

			$('.villainPicked .HP').html(chosenVillain.hp); 
			$('.heroPicked .HP').html(chosenHero.hp); 
		}

		if (chosenVillain.hp <= 0 && villainsToFight > 0){
			$('.villainPickedResults p').html(`${chosenVillain.name} lost.`); 
			$('.heroPickedResults p').html(`You won this round against ${chosenVillain.name}. Pick a new villain to fight!`); 		
			$(".villainsContent").removeClass("villainsRemaining");

	 		$('.heroPickedResults p').empty(); 
			$(".villainPicked").empty();
			$(".villainPickedSubheading").empty();
			$(".villainPickedResults p").empty();

			currentVillain.addClass('defeated');
			isVillainChosen = false;
		}

		if (chosenVillain.hp <= 0 && villainsToFight === 0) {
			gameOver = true;
			$(".attackButton").css("visibility", "hidden");
			$(".resetButton").css("visibility", "visible");
			$('.villainPickedResults p').html(`${chosenVillain.name} you lost.`); 		
		 	$('.heroPickedResults p').html(`You defeated all of the villains! Click "restart" to play again!`); 
		}

		if (chosenHero.hp <= 0) {
			gameOver = true;
			$(".attackButton").css("visibility", "hidden");
			$(".resetButton").css("visibility", "visible");
			$('.villainPickedResults p').html(`${chosenVillain.name} won!`); 		
		 	$('.heroPickedResults p').html(`${chosenHero.name} was defeated. You lost! Click "restart" to play again!`); 
		}

		// if (gameover) {
		// 	//display restart button
		// }
	});

		$(".resetButton").on("click", function() {
			isHeroChosen = false;
			isVillainChosen = false;
			villainsToFight = 4;
			gameOver = false;
			heroes = {};
			villains = {};

			Character = function(name, ap, isHero) {
				this.name = name;
				this.ap = ap;
				this.hp = Math.floor(Math.random()*200) + 100;
				this.isHero = isHero || false;
			}
			
			heroesList = [
			{name: 'Captain America', ap: 20, isHero: true}, 
			{name: 'Spiderman', ap: 15, isHero: true}, 
			{name: 'Thor', ap: 5, isHero: true}, 
			{name: 'Batman', ap: 10, isHero: true}];
			
			villList = [
			{name: 'Red Skull', ap: 20}, 
			{name: 'Joker', ap: 15}, 
			{name: 'Loki', ap: 5}, 
			{name: 'Green Goblin', ap: 10}];

			for (i=1; i<heroesList.length+1; i++) {
				heroes['hero' + i] = new Character(heroesList[i-1].name, heroesList[i-1].ap, heroesList[i-1].isHero);
				$('#hero' + i + ' .HP').html(heroes['hero' + i].hp);
			}

			for (i=1; i<villList.length+1; i++) {
				villains['villain' + i] = new Character(villList[i-1].name, villList[i-1].ap);
				$('#villain' + i + ' .HP').html(villains['villain' + i].hp);
			}

			$(".villainPicked").empty();
			$(".heroPicked").empty();
			$(".villainPickedSubheading").empty();
			$(".heroPickedSubheading").empty();
			$('.heroPickedResults p').empty(); 
			$(".villainPickedResults p").empty();
			$(".heroesContent").removeClass("heroesRemaining");
			$(".villain").removeClass('defeated');
			$(".villainsContent").removeClass("villainsRemaining");
			$(".resetButton").css("visibility", "hidden");

	});

};	

			initializeGame();


});

	//Hide the villain
	//Restart function
			