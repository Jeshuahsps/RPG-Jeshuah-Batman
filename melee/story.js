/* NOTE: This file is only for handling the content of the story pane. */

var choices = [];

/* The canonical checkAnswers */
function checkAnswers(answer) {
  switch(answer) {
    case "Confront Him":
      determineInitiative();
      break;
    case "Move":
      move();
      break;
    case "Move + Attack":
      moveAttack();
      break;
    case "Attack":
      attack();
      break;
    case "Special":
      special();
      break;
    case "Run Away":
      runAway();
      break;
    case "Wait and then Attack":
      wait();
      break;
    case "Ask Robin":
      robinJoker();
      break;
    case "Use First-Aid Kit: ("+inventory[0][1][1]+" Remaining)":
      heal();
      break;
    case "Ok":
      turnChange();
      break;
    case "Ouch":
      turnChange();
      break;
    }
}

function toMelee(){
  document.location = 'melee.html';
  story("You are on the top of Gotham Funland and you see the Joker planning something.");
  choices = ["Confront Him","~Wait then Attack","~Ask Robin"];
  answer = setOptions(choices);
}

function wait(){
  story("You sat on the rafters with Robin undetected and listened to the Joker's plan.");
  choices = ["Chase Him","Leave him","Ask Robin"];
  answer = setOptions(choices);
}

function robinJoker(){
  alert("Robin: Hey Batman, I would wait and see what the Joker is up to, then we can fight him.")
}

function playerInit(){
  turn = 0;
  story("You got the Initiative, what would you like to do");
  choices = moves;
  answer = setOptions(choices);
}

function npcInit(){
  turn = 1;
  story(npcs[0][0] + " attacks with a " + npcs[0][2] + " and does "+ roller(npcs[0][3],1) + " damage");
  choices = ["Ouch"];
  answer = setOptions(choices)
}

function critical(){
  story("You and "+npcs[0][0]+" clash as if both of you expected an attack, You have to play a game of nim to settle this.");
  choices = ["Lets Settle This"];
  answer = setOptions(choices);
}

function pcTurn(){
  story("It is your turn, what would you like to do?");
  choices = moves;
  answer = setOptions(choices);
}

function move(){ // find in 5/24[1]
  story("You moved to a new spot");
  choices = ["Ok"];
  answer = setOptions(choices);
}

function moveAttack(){//Find in 5/24[2]
  let damage = roller(npcs[0][3],1);
  story("You punched "+npcs[0][0]+" and did "+damage+ " damage. Then you moved out of the way");
  hp[1] -= damage
  choices = ["Ok"];
  answer = setOptions(choices);
}

function attack(){//Find in 5/24[3]
  story("What would you like to attack with?");
  choices = ["Batarang: ("+inventory[0][0][1]+" Remaining)","Smoke Pellets: ("+inventory[0][2][1]+" Remaining)","Impact Mines: ("+inventory[0][3][1]+" Remaining)","Sticky Glue Balls: ("+inventory[0][4][1]+" Remaining)","First-Aid Kit: ("+inventory[0][1][1]+" Remaining)"];
  answer = setOptions(choices);
}

function special(){ //Find in 5/24[4]
  story("You rammed the batmobile through "+npcs[0][0]+" and did CRITICAL damage.");
  choices = ["Ok"];
  answer = setOptions(choices);
}

function runAway(){
  story("You decided that it you weren't ready to fight "+npcs[0][0]+" and chickened out");
}

function heal(){
  story("You used a First-Aid Kit and healed "+(Math.floor(Math.random()*6)+1)+" hit points.");
  choices = ["Ok"];
  answer = setOptions(choices);
}

function victory(){
  story("The Joker has been defeated. Justice is served.");
}

function defeat(){
  story("Batman fainted. The Joker is free to continue his plan.");
}