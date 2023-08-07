document.addEventListener("DOMContentLoaded", function () {
  /******************************************/
  /* External dependencies */
  /******************************************/
  var mentorFormEl = document.getElementById("mentor-form");
  var submitMentorBtnEl = document.getElementById("mentor-btn");
  var mentorModalEl = document.getElementById("modal1");
  /******************************************/
  /* Global variables and constants */
  /******************************************/

  /******************************************/
  /* Function and class declarations */
  /******************************************/
  // function to add user details from form to mentor card
  function becomeMentor(event) {
    event.preventDefault();

    var mentorNameInputEl = document.getElementById("name").value;
    var mentorLanguageInputEl = document.getElementById("language").value;
    var mentorCountryInputEl = document.getElementById("country").value;
    var mentorEmailEl = document.getElementById("email").value;
    // Checking if function is called
    console.log("becomeMentor() called");

    // Creating mentor card elements
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
    mentorNameEl.textContent = mentorNameInputEl;
    console.log(mentorNameInputEl);

    var mentorLanguageEl = document.createElement("span");
    mentorLanguageEl.classList.add("mentor-language");
    mentorLanguageEl.textContent = mentorLanguageInputEl;
    console.log(mentorLanguageInputEl);

    var mentorCountryEl = document.createElement("span");
    mentorCountryEl.classList.add("mentor-country");
    mentorCountryEl.textContent = mentorCountryInputEl;
    console.log(mentorCountryInputEl);

    var contactEl = document.createElement("div");
    contactEl.classList.add("card-action");

    var contactBtnEl = document.createElement("a");
    contactBtnEl.href = "mailto:" + mentorEmailEl;
    var contactBtn = document.createElement("button");
    contactBtn.textContent = "Contact Me";

    // Appending elements to each other
    contactBtnEl.appendChild(contactBtn);
    contactEl.appendChild(contactBtnEl);

    cardContentEl.appendChild(mentorNameEl);
    cardContentEl.appendChild(mentorLanguageEl);
    cardContentEl.appendChild(mentorCountryEl);

    cardEl.appendChild(cardContentEl);
    cardEl.appendChild(contactEl);

    cols12El.appendChild(cardEl);

    mentorCardEl.appendChild(cols12El);

    // Appending the mentor card to the container
    var mentorCardContainerEl = document.querySelector(
      ".mentor-card-container"
    );
    mentorCardContainerEl.appendChild(mentorCardEl);

    // Closing the modal
    var modalInstance = M.Modal.getInstance(mentorModalEl);
    modalInstance.close();

    // Clearing the form after 100 milliseconds
    setTimeout(function () {
      mentorFormEl.reset();
    }, 100);
  }
  /******************************************/
  /* Event listeners */
  /******************************************/
  // Event listener to open modal
  $(document).ready(function () {
    $(".modal").modal();
  });

  // Event listener to activate tooltip
  $(".tooltipped").tooltip({ delay: 50 });

  // Event listener to add a new mentor
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
});
