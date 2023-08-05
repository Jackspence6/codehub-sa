$(document).ready(function () {
  /******************************************/
  /* External dependencies */
  /******************************************/
  // Mentorship Program Variables
  var mentorFormEl = document.getElementById("mentor-form");
  var submitMentorBtnEl = document.getElementById("mentor-btn");
  var mentorModalEl = document.getElementById("modal1");
  // Learning Spaces Variables
  var questionContainerEl = document.querySelector("#questionsContainer");
  var submitQuestionBtnEl = document.querySelector("#submit-question");
  /******************************************/
  /* Global variables and constants */
  /******************************************/
  // Mentorship Program Global variables and constants

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

  // function to add user question from form to card
  function addQuestion(event) {
    event.preventDefault();

    var questionInputEl = document.getElementById("question-input").value;

    // Creating Question and answer elements
    var questionCardEl = document.createElement("div");
    questionCardEl.classList.add("card", "questionCard");

    var questionCardContentEl = document.createElement("div");
    questionCardContentEl.classList.add("card-content");

    var questionCardHeadingEl = document.createElement("span");
    questionCardHeadingEl.classList.add(
      "question-card-heading",
      "card-title",
      "activator",
      "white-text"
    );
    questionCardHeadingEl.textContent = "Question:";

    var questionCardIconEl = document.createElement("i");
    questionCardIconEl.classList.add("material-icons", "right");
    questionCardIconEl.textContent = "more_vert";

    var questionOutputContainerEl = document.createElement("span");

    var questionOutputEl = document.createElement("p");
    questionOutputEl.setAttribute("id", "question-output");
    questionOutputEl.classList.add("white-text");
    questionOutputEl.textContent = questionInputEl;

    var answerRevealEl = document.createElement("div");
    answerRevealEl.classList.add("card-reveal");

    var answerTitleEl = document.createElement("span");
    answerTitleEl.classList.add("card-title", "grey-text", "text-darken-4");
    answerTitleEl.textContent = "Answer:";

    var answerIconEl = document.createElement("i");
    answerIconEl.classList.add("material-icons", "right");
    answerIconEl.textContent = "close";

    var answerOutputEl = document.createElement("p");
    answerOutputEl.setAttribute("id", "answer-output");

    var answerQuestionBtnContainerEl = document.createElement("div");
    answerQuestionBtnContainerEl.classList.add("card-action");

    var answerQuestionBtnEl = document.createElement("a");
    answerQuestionBtnEl.textContent = "Answer Question";

    // Appending elements to each other
    questionContainerEl.appendChild(questionCardEl);

    questionCardEl.appendChild(questionCardContentEl);
    questionCardEl.appendChild(answerRevealEl);
    questionCardEl.appendChild(answerQuestionBtnContainerEl);

    questionCardContentEl.appendChild(questionCardHeadingEl);
    questionCardContentEl.appendChild(questionOutputContainerEl);

    questionCardHeadingEl.appendChild(questionCardIconEl);

    questionOutputContainerEl.appendChild(questionOutputEl);

    answerRevealEl.appendChild(answerTitleEl);
    answerRevealEl.appendChild(answerOutputEl);

    answerTitleEl.appendChild(answerIconEl);

    answerQuestionBtnContainerEl.appendChild(answerQuestionBtnEl);
  }
  /******************************************/
  /* Event listeners */
  /******************************************/
  // Mentorship Program Event Listeners
  $(document).ready(function () {
    $(".modal").modal();
  });

  submitMentorBtnEl.addEventListener("click", becomeMentor);
  submitQuestionBtnEl.addEventListener("click", addQuestion);
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
