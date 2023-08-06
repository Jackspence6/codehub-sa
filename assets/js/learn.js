document.addEventListener("DOMContentLoaded", function () {
  /******************************************/
  /* External dependencies */
  /******************************************/
  var questionContainerEl = document.querySelector("#QuestionsContainer");
  var submitQuestionBtnEl = document.querySelector("#submit-question");
  /******************************************/
  /* Global variables and constants */
  /******************************************/

  /******************************************/
  /* Function and class declarations */
  /******************************************/
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
    answerOutputEl.classList.add("black-text");

    var answerQuestionBtnContainerEl = document.createElement("div");
    answerQuestionBtnContainerEl.classList.add("card-action");

    // Modal Trigger
    var answerQuestionBtnEl = document.createElement("a");
    answerQuestionBtnEl.classList.add("modal-trigger");
    answerQuestionBtnEl.href = "#modal2";
    answerQuestionBtnEl.textContent = "Answer Question";

    // Appending elements to each other
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

    questionContainerEl.appendChild(questionCardEl);

    // Resetting the form inputs after submission
    document.getElementById("first_name").value = "";
    document.getElementById("last_name").value = "";
    document.getElementById("question_language").value = "";
    document.getElementById("question-input").value = "";
    document.getElementById("email").value = "";
  }
  /******************************************/
  /* Event listeners */
  /******************************************/
  // Event listener to add a new Question
  submitQuestionBtnEl.addEventListener("click", addQuestion);

  $("#modal2").modal();
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
