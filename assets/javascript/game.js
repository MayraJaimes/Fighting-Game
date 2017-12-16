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

	var heroPickedSubheading = $(".heroPickedSubheading");
	var heroPickedResultsP = $('.heroPickedResults p');
	var villainPickedResultsP = $(".villainPickedResults p");
	var attackButton = $(".attackButton");
	var resetButton = $(".resetButton");
	var villainsContent = $(".villainsContent");
	var heroesContent = $(".heroesContent");
	var currentVillain;

	class Character {
		constructor(name, ap, isHero) {
			this.name = name;
			this.ap = ap;
 			this.baseAtk = ap;
			this.hp = Math.floor(Math.random()*200) + 100;
			this.isHero = isHero || false;
		}
		attack(enemy) {
			if (this.isHero) {
				enemy.hp = enemy.hp - this.ap;
				this.ap = this.ap + this.baseAtk ;
			} else {
				enemy.hp -= this.ap;
			}
		}
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

	function defeatedHero(){
		gameOver = true;
		attackButton.css("visibility", "hidden");
		resetButton.css("visibility", "visible");
		villainPickedResultsP.html(`${chosenVillain.name} won!`); 		
		heroPickedResultsP.html(`${chosenHero.name} was defeated. You lost! Click "restart" to play again!`);
	}

	function defeatedVillain(){
		villainPickedResultsP.html(`${chosenVillain.name} lost.`); 
		heroPickedResultsP.html(`You won this round against ${chosenVillain.name}. Pick a new villain to fight!`); 		
		villainsContent.removeClass("villainsRemaining");
 		heroPickedResultsP.empty(); 
		$(".villainPicked").empty();
		$(".villainPickedSubheading").empty();
		villainPickedResultsP.empty();
		currentVillain.addClass('defeated');
		isVillainChosen = false;
	}

	function resetGame(){
		isHeroChosen = false;
		isVillainChosen = false;
		villainsToFight = 4;
		gameOver = false;
		heroes = {};
		villains = {};

		class Character {
			constructor(name, ap, isHero) {
				this.name = name;
				this.ap = ap;
	 			this.baseAtk = ap;
				this.hp = Math.floor(Math.random()*200) + 100;
				this.isHero = isHero || false;
			}
			attack(enemy) {
				if (this.isHero) {
					enemy.hp = enemy.hp - this.ap;
					this.ap = this.ap + this.baseAtk ;
				} else {
					enemy.hp -= this.ap;
				}
			}
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
		heroPickedResultsP.empty(); 
		villainPickedResultsP.empty();
		heroesContent.removeClass("heroesRemaining");
		$(".villain").removeClass('defeated');
		villainsContent.removeClass("villainsRemaining");
		resetButton.css("visibility", "hidden");
	}

	function initializeGame() {
	    $(".hero").on("click", function() {
	    	if (!isHeroChosen){
	    		var heroId = $(this).attr('id');
	    		chosenHero = heroes[heroId];
				$(this).clone().appendTo(".heroPicked");
				heroesContent.addClass("heroesRemaining");
				heroesGameSubheading =`<p class="heroesSubheading">You are ${chosenHero.name}!</p>`; 
				heroPickedSubheading.append(heroesGameSubheading);
				isHeroChosen = true;
			}
		});

//Click Villain
		$(".villain").on("click", function() {
			currentVillain = $(this);
			if (!isVillainChosen && isHeroChosen) {
				villainsToFight --;
				var villainId = $(this).attr('id');
				chosenVillain = villains[villainId];
				$(this).clone().appendTo(".villainPicked");
				villainsContent.addClass("villainsRemaining");
				var villainsGameSubheading =`<p class="villainsSubheading">You are fighting ${chosenVillain.name}! </p>`; 
				$(".villainPickedSubheading").append(villainsGameSubheading);
				attackButton.css("visibility", "visible");
				isVillainChosen = true;
			}
		});

//Attack button
		attackButton.on("click", function() {
			if (isVillainChosen && isHeroChosen && chosenHero.hp > 0 && chosenVillain.hp > 0 && villainsToFight >= 0 ) {
				chosenHero.attack(chosenVillain);
				chosenVillain.attack(chosenHero);
				villainPickedResultsP.css("visibility", "visible");
				heroPickedResultsP.css("visibility", "visible");			
				villainPickedResultsP.html(`${chosenHero.name} attacked ${chosenVillain.name} for damage of ${chosenHero.ap}`); 		
		 		heroPickedResultsP.html(`${chosenVillain.name} attacked you back for damage of ${chosenVillain.ap}`); 
				$('.villainPicked .HP').html(chosenVillain.hp); 
				$('.heroPicked .HP').html(chosenHero.hp); 
			}

			if (chosenVillain.hp <= 0 && villainsToFight > 0){
				defeatedVillain();
			}

			if (chosenVillain.hp <= 0 && villainsToFight === 0) {
				gameOver = true;
				attackButton.css("visibility", "hidden");
				resetButton.css("visibility", "visible");
				villainPickedResultsP.html(`${chosenVillain.name} you lost.`); 		
			 	heroPickedResultsP.html(`You defeated all of the villains! Click "restart" to play again!`); 
			}

			if (chosenHero.hp <= 0) {
				defeatedHero(); 
		 	}
		});

//Reset Button
		resetButton.on("click", function() {
			resetGame();	
		});
	};	

	initializeGame();

});
			