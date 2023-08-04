/******************************************/
/* External dependencies */
/******************************************/
// Mentorship Program Variables
var mentorBodyEl = document.getElementById("mentorship-body");
var mentorCardContainerEl = document.getElementsByClassName(
  "mentor-card-container"
);
var mentorFormEl = document.getElementById("mentor-form");
var mentorBtnEl = document.getElementById("mentor-btn");
var submitMentorBtnEl = document.getElementById("submit-mentor-btn");

var mentorNameEl = document.getElementsByClassName("mentor-name");
var mentorLanguageEl = document.getElementsByClassName("mentor-language");
var mentorCountryEl = document.getElementsByClassName("mentor-country");

var mentorNameInputEl = document.getElementById("name");
var mentorLanguageInputEl = document.getElementById("language");
var mentorCountryInputEl = document.getElementById("country");
/******************************************/
/* Global variables and constants */
/******************************************/
// Mentorship Program Global variables and constants

/******************************************/
/* Function and class declarations */
/******************************************/
function becomeMentor() {
  // Create the mentor card elements
  var mentorCardEl = document.createElement("div");
  mentorCardEl.classList.add("row", "mentor-card");

  var cols12El = document.createElement("div");
  cols12El.classList.add("col", "s12");

  var cardEl = document.createElement("div");
  cardEl.classList.add("card");

  var cardContentEl = document.createElement("div");
  cardContentEl.classList.add("card-content", "white-text");

  var mentorNameEl = document.createElement("span");
  mentorNameEl.classList.add("card-title", "mentor-name");
  mentorNameEl.textContent = mentorNameInputEl.value;

  var mentorLanguageEl = document.createElement("span");
  mentorLanguageEl.classList.add("mentor-language");
  mentorLanguageEl.textContent = mentorLanguageInputEl.value;

  var mentorCountryEl = document.createElement("span");
  mentorCountryEl.classList.add("mentor-country");
  mentorCountryEl.textContent = mentorCountryInputEl.value;

  var contactEl = document.createElement("div");
  contactEl.classList.add("card-action");

  var contactBtnEl = document.createElement("a");

  // Appending elements to each other
  contactEl.appendChild(contactBtnEl);

  cardContentEl.appendChild(mentorNameEl);
  cardContentEl.appendChild(mentorLanguageEl);
  cardContentEl.appendChild(mentorCountryEl);

  cardEl.appendChild(cardContentEl);
  cardEl.appendChild(contactEl);

  cols12El.appendChild(cardEl);

  mentorCardEl.appendChild(cols12El);

  // Append the mentor card to the container
  mentorCardContainerEl.appendChild(mentorCardEl);
}
/******************************************/
/* Event listeners */
/******************************************/
// Mentorship Program Event Listeners
$(document).ready(function () {
  $(".modal").modal();
});

submitMentorBtnEl.addEventListener("click", becomeMentor);
/******************************************/
/* Document manipulation */
/******************************************/

/******************************************/
/* Initialization code */
/******************************************/

/******************************************/
/* Main logic */
/******************************************/
