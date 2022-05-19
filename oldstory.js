/* Uses Case Statements */

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
    case "Keep":
      keep();
      break;
    case "Reroll":
      reroll();
      break;
    /* case "Next Attribute":
      next();
      break;*/
    /* case "Start Over":
      restart();
      break;*/
    case "Think some more":
      thinkSomeMore();
      break;
    case "Go into the forest":
      forest();
      break;
    case "Ignore it and go home":
      homeEarly();
      break;
    case "Knock on door":
      houseKnock();
      break;
    case "Buy fruit":
      fruitKnock();
      break;
    case "Enter glade":
      gladeKnock();
      break;
    case "Listen":
      knockKnockGod();
      break;
    }
}

function roller(){
  roll = random();
  attribute = attributes[whichAttribute][0];
  story("You rolled a "+roll+" for "+attributes[whichAttribute][0]+".");
  choices = ["Keep", "Reroll"];
  answer = setOptions(choices);
}

function keep(){
  let add2Story = "Your "+attribute+" is now "+roll+".\n<br>";
  attributes[whichAttribute][1]=roll;
  roll = random();
  whichAttribute++;
  attribute = attributes[whichAttribute][0];
  add2Story+=("You rolled a "+roll+" for "+attribute+".");
  story(add2Story);
  choices = ["Keep", "Reroll"];
  answer = setOptions(choices);
}

function reroll(){
  rollCount++;
  roll = random();
  let rollsLeft = maxRolls - rollCount;
  story("You rolled a "+roll+" for "+attribute+". You have "+rollsLeft+" rerolls left.");
  if (rollsLeft<1){
    choices = ["Keep","No Rerolls Left"];
  }
  else {
    choices = ["Keep","Reroll"];
  }
  answer = setOptions(choices);
}

function picker(){
  story("");
  choices = classes.slice();
  answer = setOptions(choices);
}

function reStart(){
  story("Sorry, you don't get to keep restarting until you get great rolls!");
  choices = ["Go into the forest", "Ignore it and go home"];
  answer = setOptions(choices);
}
function town(){
  // var name = prompt("what is your name?");
  story("One day you are on your way home from school and you hear a whisper coming from a dark forest you never remember seeing before.\
  \n\"Come here Come here!\"\
  \nit says. You can't place the voice, but there is something familiar about it. What do you do?");
  choices = ["Think some more", "Go into the forest", "Ignore it and go home"];
  answer = setOptions(choices);
}

// Places
function thinkSomeMore() {
  story("You think about it some more and are sure this forest was not here yesterday.  \
  \nWhere did it come from and how does it know your name?\
  \nWhat do you want to do?");
  choices = ["Go into the forest", "Ignore it and go home"];
  answer = setOptions(choices);
}


function forest() {
  addImage("https://www.weprepper.com/wp-content/uploads/2018/07/nature-2569214_960_720-1280x720.jpg");
  story("You enter the forest and soon become hopefully lost.\
  \nWhile you can't find your way out you do see a few places of interest.\
  \nThere is a house made of candy.\
  \nThere is a fruit vender.\
  \nThere is a small opening in the trees with a ring of mushroom in the middle.");
  choices = ["Knock on door","Buy fruit", "Enter glade"];
  answer = setOptions(choices);
}

function homeEarly() {
  var messages = ['You ignore it and walk home.',
    'Nothing exciting happens to you one the way.',
    "That was a very boring story, but you must be a boring person for having chosen to go home.",
    "If it was me there is no way I am passing up the chance to check out a new forest that just happens over night.",
    "To each his own I guess."
  ];
  delayText(messages, 1000);
}

function houseKnock() {
  addImage("https://recipes.net/wp-content/uploads/2020/10/hauntedgingerbreadhouserecipe.jpg");
  knockKnock();
}

function fruitKnock() {
  addImage("https://img.freepik.com/free-photo/waist-up-portrait-bearded-man-wearing-apron-smiling-while-selling-fresh-fruit-vegetable-farmers-market_236854-22932.jpg");
  knockKnock();
}

function gladeKnock() {
  addImage("https://cdn3.vectorstock.com/i/1000x1000/43/42/glade-in-magic-forest-vector-2474342.jpg");
  knockKnock();
}

function knockKnock(){
  story("You hear a loud voice that seems to come from the sky.");
  choices = ["Listen"];
  answer = setOptions(choices);
}

function knockKnockGod(){
  var response = prompt("Knock knock!");
  if (response != "Who's there?") {
    alert("You were supposed to say \"Who\'s there?\"");
    knockKnock();
  }
  else {
    prompt("Nobel");
    alert("No bell. That's why I knocked!");
  }
}
