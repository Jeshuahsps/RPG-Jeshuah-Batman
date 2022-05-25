window.onload = start;

var options=[];
var buttonElement = document.getElementById("button1");
var currentStoryElement = document.getElementById("currentStory");
var dropdown = document.getElementById("choices");
var messages = [];
var choices;
var answer;
var hasImage = false;

function start() {
  setup();
  scene1();
}

function addImage(imageURL){
  let image = document.createElement("img");
  image.src = imageURL;
  image.setAttribute("width", "400px");
  var storyBox = document.getElementById("storybox");
  if (hasImage == true) {
      storyBox.innerHTML="";
  }
  storyBox.style.textAlign = "center";
  storyBox.appendChild(image);
  hasImage = true;
}

function setup() {
  story("Game Loading");
  options=["test 1", "test 2", "test3"];
  setOptions(options); 
  buttonElement.innerHTML = "What will you do?"; 
  buttonElement.setAttribute("onclick", "checkAnswers(dropdown.value)");
}

function setOptions(options) {
  while (dropdown.options.length) {
    dropdown.remove(0);
  }
  for (var i = 0; i < options.length; i++) {
    var option = new Option(options[i]);
    dropdown.options.add(option);
  }
}

function story(text) {
  currentStoryElement.innerHTML = text;
}

function delayText(text, delay) {
  var index = 0;
  story("");
  var callback = function (text) {
    story(currentStoryElement.innerHTML  + text[index]+ "<br />"+ "<br />");
    index += 1;
    if (index >text.length-1){
      clearInterval(timer);
    }
  }
  var timer = setInterval(function () {
    callback(text);
  }, delay);
}


function showModal(htmlData){
  let statsBox = document.getElementById("modalBox");
  let statsText = document.getElementById("modal-content");
  statsText.innerHTML = htmlData;
  statsBox.style.display = "block";
}

function hideModal() {
  let statsBox = document.getElementById("modalBox");
  statsBox.style.display = "none";
}