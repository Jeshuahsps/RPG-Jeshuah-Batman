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
var turn = 0;

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
      pcTurn();
      break;
    case (roll > 3 && roll < 7):
      turn = 1;
      modalText+="Your opponent has the initiative!";
      showModal(modalText);
      enemyTurn();
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

function enemyTurn(){
  if (turn < 1){
    turn = 1;
  }
  let attackType = Math.floor(Math.random()*20+1);
  let damage = 0;
  if (attackType < 7){
    damage = Math.floor(Math.random()*3+3);
    story(npcs[0][0]+" punched. You take "+damage+" damage.");
  }
  else if (attackType > 6 && attackType < 11) {
    damage = Math.floor(Math.random()*4+4);
    story(npcs[0][0]+" shot his gun. You take "+damage+" damage.");
  }
  else if (attackType > 9 && attackType < 15) {
    damage = Math.floor(Math.random()*2+6);
    story(npcs[0][0]+" used his tazer. You take "+damage+" damage.");
  }
  else if (attackType > 14 && attackType < 18) {
    story(npcs[0][0]+" threw laughing gas. You take put on a gas mask and take no effect.");
  }
  else {
    story(npcs[0][0]+" tried to run. You chase him down, and the fight continues.");
  }
  hp[0]= hp[0]-damage;
  choices = ["Ok"];
  setOptions(choices);
}

function turnChange(){
  turn++;
  if (hp[1]<1) {
    victory();
  }
  else if(hp[0]<1){
    defeat();
  }
  else {
    if (turn % 2 == 0){
      pcTurn();
    } 
    else{
      enemyTurn();
    }
  }
}

function victory(){
  story("The Joker has been defeated. Justice is served.");
}

function defeat(){
  story("Batman fainted. The Joker is free to continue his plan.");
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