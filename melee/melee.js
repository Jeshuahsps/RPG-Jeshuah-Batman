/* Global Variables */
var modalText = "Houston, we have a problem defining modalText";

//Attributes
var attributes = [["Strength",0],["Intelligence",0],["Wisdom",0],["Constitution",0],["Dexterity",0],["Charisma",0]];
var classReq = [[0,13,0],[1,14,1],[2,9,2],[3,11,3],[4,10,4],[5,12,5]];
var classes = [["Christian Bale",["Batman Begins", "The Dark Night"],"One Punch Knockout"],["Robert Pattinson",["The Batman 2020"],"Knows All The Answers"],["Michael Keaton",["Batman 1989"],"Predicts Villain Behaviors"],["Will Arnett",["Lego Batman: The Movie"],"No Fall Damage"],["Ben Affleck",["Batman vs. Superman"],"Can Escape Any Room"],["Kevin Conroy",["Batman: The Killing Joke"],"Soul Catching Voice"]];

/* Bonus only applies on move or attack, not move+attack */
var moves=["Move","Move + Attack","Attack","Special"];

/* Attribute, Threshold, Bonus, Move Applied */
var classBonus = [[0,14,+2,2],[4,12,+2,0]];
var npcs = [["Joker",20,"punch",6,2]];
var initiative = ["player","opponent","critical"];

function roller(dice,numDice){
  let sum = 0;
  for (let roll = 1; roll <= numDice; roll ++){
    let rolled = Math.floor(Math.random()*dice)+1;
    sum += rolled;
  }
  return sum;
}

function determineInitiative(){
  let roll = roller(6,1);
  modalText=("You rolled a "+roll+".<br>");
  let turn = "player";
  switch(true){
    case (roll < 4):
      turn = 0;
      modalText+="You have the initiative!";
      showModal(modalText);
      playerInit();
      break;
    case (roll > 3 && roll < 6):
      turn = 1;
      modalText+="Your opponent has the initiative!";
      showModal(modalText);
      npcInit();
      //playerTurn();
      break;
    default:
      turn = 2;
      modalText+="Whoa! Critical incident.";
      critical();
      showModal(modalText);
      //nim();
      break;  
  } 
  //Go to Notes for description
  //alert(npcs[0][0] + " attacks with a " + npcs[0][2] + " and does "+ roller(npcs[0][3],1) + " damage");
}


/* function userCalculation
@params none
@return damage
This function takes stats into consideration and calculates damage and applies it to the NPC opponent*/
function userCalculation(){
  if(strength >= 14){
    fistDamage = fistDamage + 2;
  }
  if(constitution >= 4){
    punches = punches + 2
  }
  else if(constitution >= 8){
    punches = punches + 3;
  }
  else{
    punches = punches + 4;
  }
}

function playerInit(){
  story("You got the Initiative, what would you like to do");
  choices = moves;
  answer = setOptions(choices);
}

function npcInit(){
  story(npcs[0][0] + " attacks with a " + npcs[0][2] + " and does "+ roller(npcs[0][3],1) + " damage");
  choices = ["Ouch"];
  answer = setOptions(choices);
}

/* Not Implemented */
function playerTurn(){
  story("It is your turn, what would you like to do?");
  choices = moves;
  answer = setOptions(choices);
}

/* Not Implemented */
function critical(){
  story("You and "+npcs[0][0]+" clash as if both of you expected an attack, You have to play a game of nim to settle this.");
  choices = ["Lets Settle This. (Note: not implemented - reload page.)"];
  answer = setOptions(choices);
}

/* Not Implemented */
function nim(){
  story("You won Nim");
  choices = ["Great"];
  answer = setOptions(choices);
}


function setup() {
  story("You are on the top of Gotham Funland and you see the Joker planning something.");
  options=["Confront Him", "~Wait and then Attack", "~Ask Robin"];
  setOptions(options); 
  buttonElement.innerHTML = "What will you do?"; 
  buttonElement.setAttribute("onclick", "checkAnswers(dropdown.value)");
}