// variables
// var name = "";
var scene1 = roller;
var whichAttribute = 0; // Which one are we on?
var roll = -1;
var attribute = "Undefined";
/* Global Variables */
// attributes = attribute, current value
var attributes = [["Strength",0],["Intelligence",0],["Wisdom",0],["Constitution",0],["Dexterity",0],["Charisma",0]];
// classReq = attributes[index], minimum value to qualify, classes[index]
var classReq = [[0,11,0],[1,11,1],[2,11,2],[3,11,3],[4,11,4],[5,11,5]];
var classes = [["Christian Bale",["Batman Begins, The Dark Night"],"One Punch Knockout"],[]];
var classReq = [[0,13,0],[1,14,1],[2,9,2],[3,11,3],[4,10,4],[5,12,5]];
var classes = [["Christian Bale",["Batman Begins", "The Dark Night"],"One Punch Knockout"],["Robert Pattinson",["The Batman 2020"],"Knows All The Answers"],["Michael Keaton",["Batman 1989"],"Predicts Villain Behaviors"],["Will Arnett",["Lego Batman: The Movie"],"No Fall Damage"],["Ben Affleck",["Batman vs. Superman"],"Can Escape Any Room"],["Kevin Conroy",["Batman: The Killing Joke"],"Soul Catching Voice"]];
var choices = [];
var maxRolls = 3; // how many rerolls? Default = 3
var rollCount = 0; // which reroll are we on?

function checkAnswers(answer) {
  switch(answer) {
    case "Confront Him":
      round();
      break;
    case "Wait and then Attack":
      wait();
      break;
    case "Ask Robin":
      robinJoker();
      break;
    case "Ouch":
      playerInit();
      break;
    }
}

function roller(){
  roll = random();
  attribute = attributes[whichAttribute][0];
  story("You rolled a "+roll+" for "+attribute+".");
  choices = ["Keep", "Reroll"];
  answer = setOptions(choices);
}


function random(){
  let sum = 0;
  for (let roll = 1; roll <= 3; roll ++){
    let rolled = Math.floor(Math.random()*6)+1;
    sum += rolled;
  }
  return sum;
}

function hideModal() {
  let statsBox = document.getElementById("modalBox");
  statsBox.removeChild(statsBox.lastChild);
  statsBox.style.display = "none";
}

function restart(){
  story("Sorry, you don't get to keep restarting until you get great rolls!");
  choices = ["Go into the forest", "Ignore it and go home"];
  answer = setOptions(choices);
}

function toMelee(){
  document.location = 'melee.html';
  story("You are on the top of Gotham Funland and you see the Joker planning something.");
  choices = ["Confront Him","~Wait then Attack","~Ask Robin"];
  answer = setOptions(choices);
}

function wait(){
  story("You sat on the rafters with Robin undetected and listened to the Joker's plan.");
  choices = ["~Chase Him","~Leave him","~Ask Robin"];
  answer = setOptions(choices);
}

function robinJoker(){
  alert("Robin: Hey Batman, I would wait and see what the Joker is up to, then we can fight him.")
}


// variables
// var name = "";
var scene1 = roller;
var whichAttribute = 0; // Which one are we on?
var roll = -1;
var attribute = "Undefined";
/* Global Variables */
// attributes = attribute, current value
var attributes = [["Strength",0],["Intelligence",0],["Wisdom",0],["Constitution",0],["Dexterity",0],["Charisma",0]];
// classReq = attributes[index], minimum value to qualify, classes[index]
var classReq = [[0,11,0],[1,11,1],[2,11,2],[3,11,3],[4,11,4],[5,11,5]];
var classes = [["Christian Bale",["Batman Begins, The Dark Night"],"One Punch Knockout"],[]];
var classReq = [[0,13,0],[1,14,1],[2,9,2],[3,11,3],[4,10,4],[5,12,5]];
var classes = [["Christian Bale",["Batman Begins", "The Dark Night"],"One Punch Knockout"],["Robert Pattinson",["The Batman 2020"],"Knows All The Answers"],["Michael Keaton",["Batman 1989"],"Predicts Villain Behaviors"],["Will Arnett",["Lego Batman: The Movie"],"No Fall Damage"],["Ben Affleck",["Batman vs. Superman"],"Can Escape Any Room"],["Kevin Conroy",["Batman: The Killing Joke"],"Soul Catching Voice"]];
var choices = [];
var maxRolls = 3; // how many rerolls? Default = 3
var rollCount = 0; // which reroll are we on?
var inventory = [[["Batarang",3],["First-Aid Kit",5],["Smoke Pellets",2],["Impact Mines",3],["Sticky Glue Balls",2]],["Gold",50]]; //Stub array for now, but I made it so that it would take the gadget from the "attack" choices to show "Batarang: (inventory[0][1] Remaining)"
var turn = 0;
var hp = [25,20];

function checkAnswers(answer) {
  switch(answer) {
    case "Keep":
      keep();
      break;
    case "Reroll":
      reroll();
      break;
    case "See Stats and Pick Character":
      stats();
      break;
    case "Start Over":
      restart();
      break;
    case "Just let me see the stats":
      stats();
      break;
    case "Restart Anyways":
      stats();
      break;
    case "Christian Bale":
      toMelee();
      break;
    case "Ben Affleck":
      toMelee();
      break;
    case "Kevin Conroy":
      toMelee();
      break;
    case "Will Arnett":
      toMelee();
      break;
    case "Robert Pattinson":
      toMelee();
      break;
    case "Michael Keaton":
      toMelee();
      break;
    case "Confront Him":
      round();
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

function roller(){
  roll = random();
  attribute = attributes[whichAttribute][0];
  story("You rolled a "+roll+" for "+attribute+".");
  choices = ["Keep", "Reroll"];
  answer = setOptions(choices);
}


/* Function Keep
 * Pulls dice roll value from page to save in array.
 * Then rolls next attribute. 
 * @param none
 * @return random integer 3 to 18
 */
function random(){
  let sum = 0;
  for (let roll = 1; roll <= 3; roll ++){
    let rolled = Math.floor(Math.random()*6)+1;
    sum += rolled;
  }
  return sum;
}

/* Function Keep
 * Pulls dice roll value from page to save in array.
 * Then rolls next attribute. 
 * @param none
 * @return none
 */
function keep(){
  let add2Story = "Your "+attribute+" is now "+roll+".\n<br>";
  attributes[whichAttribute][1]=roll;
  roll = random();
  if (whichAttribute < 5) {
    whichAttribute++;
    attribute = attributes[whichAttribute][0];
    add2Story+=("You rolled a "+roll+" for "+attribute+".");
    story(add2Story);
    choices = ["Keep", "Reroll"];
    answer = setOptions(choices);
  }
  else {
    story("Your character rolls are complete.  Let's see what they were.");
    choices = ["See Stats and Pick Character", "Start Over"];
    answer = setOptions(choices);
  }
}

function reroll(){
  rollCount++;
  let rollsLeft = maxRolls - rollCount;
  if (rollsLeft<1){
    story("You rolled a "+ roll+". You have no rerolls left.  Select KEEP.");
    choices = ["Keep","No Rerolls Left"];
  }
  else {
    roll = random();
    console.log(roll);
    story("You rolled a "+roll+" for "+attribute+". You have "+rollsLeft+" rerolls left.");
    choices = ["Keep","Reroll"];
  }
  answer = setOptions(choices);
}

function stats(){
  story("Here are your stats.");
  let statsBox = document.getElementById("modalBox");
  let statsText = document.getElementById("modalText");
  statsText.innerHTML="<h1>Your Character Stats</h1>"
  var statTable = document.createElement("table");
  var labels = statTable.insertRow();
  for (let thead = 0; thead < 6; thead++){
    var th1 = document.createElement("th");
    th1.innerHTML = attributes[thead][0];
    labels.appendChild(th1);
  }
  var values = statTable.insertRow();
  for (let tcell = 0; tcell < 6; tcell++){
    var Cell = values.insertCell();
    Cell.innerHTML = attributes[tcell][1];
  }
  statsText.appendChild(statTable);
  let close = document.createElement("button");
  close.setAttribute("onClick","hideModal()");
  close.innerHTML="Close";
  statsBox.appendChild(close);
  statsBox.style.display = "block";
  picker();
}

function picker(){
  let addStory="Go pick your class! Here's what to know about your options:<br><ul style=\"text-align:left;\">";
  choices = classOptions();
  for (let choice=0; choice < choices.length; choice++){
    addStory+="<li>If you choose "+choices[choice]+ " you .... FILL IN HERE</li>";
  }
  addStory+="<ul";
  story(addStory);
  answer = setOptions(choices);
}

/* Function Class Options
 * @param none (attributes is global)
 * @return classList array
 * This function references a list of classes
 * And selects those that match the requirements
 * Based on the player's rolled attributes
 * attributes = attribute, current value
 * classReq = attributes[index], minimum value to qualify, classes[index]
 */
function classOptions(){
  let classList = []; 
  for (let att6 = 0; att6 < attributes.length; att6++ ){
    if (attributes[att6][1] >= classReq[att6][1]){
      classList.push(classes[classReq[att6][2]][0]);
    }
  }
  return classList;
}

function hideModal() {
  let statsBox = document.getElementById("modalBox");
  statsBox.removeChild(statsBox.lastChild);
  statsBox.style.display = "none";
}

function toMelee(){
  document.location = 'melee.html';
  story("You are on the top of Gotham Funland and you see the Joker planning something.");
  choices = ["Confront Him","Wait then Attack","Ask Robin"];
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

function enemyTurn(){
  let attackType = Math.floor(Math.random()*20+1);
  let damage = 0;
  if (attackType < 7) {
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
    if (turn % 2 == 0) pcTurn();
    else enemyTurn();
  }
}

function victory(){
  story("The Joker has been defeated. Justice is served.");
}

function defeat(){
  story("Batman fainted. The Joker is free to continue his plan.");
}