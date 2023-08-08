document.addEventListener("DOMContentLoaded", function () {
  /******************************************/
  /* External dependencies */
  /******************************************/
  var questionContainerEl = document.querySelector("#QuestionsContainer");
  var submitQuestionBtnEl = document.querySelector("#submit-question");
  var submitAnswerBtn = document.getElementById("submit-answer-btn");
  /******************************************/
  /* Global variables and constants */
  /******************************************/
  var answerOutputEl;
  // Storing the selected question card as a variable
  var selectedQuestionCardEl;
  var questionInputEl;
  var questionIndex;
  var answerInputEl;
  var answerOutputEl;
  // Initializing an empty array to save questions, answers and indexes.
  var questionsAndAnswersArray = [];
  /******************************************/
  /* Function and class declarations */
  /******************************************/
  // function to add user question from form to card
  function addQuestion(event) {
    event.preventDefault();

    questionInputEl = document.getElementById("question-input").value;

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

    answerOutputEl = document.createElement("p");
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

  // Function to handle which question is being answered
  function handleAnswerClick(event) {
    event.preventDefault();
    // determining which question is being answered
    selectedQuestionCardEl = event.target.closest(".questionCard");
    console.log(selectedQuestionCardEl);
  }

  // Function to add answer to back of selected question card.
  function addAnswer(event) {
    event.preventDefault();
    if (selectedQuestionCardEl) {
      answerInputEl = document.getElementById("answer-text").value;
      // Finding the index of the question being answered
      questionIndex = Array.from(questionContainerEl.children).indexOf(
        selectedQuestionCardEl
      );
      answerOutputEl = selectedQuestionCardEl.querySelector("#answer-output");
      answerOutputEl.textContent = answerInputEl;
      console.log("Adding Answer");
      // Clearing the Answer input field after submission
      answerInputEl.value = "";
      // Closing the answer modal after submission
      $("#modal2").modal("close");
    }
  }

  // Function to save questions, answers and indexes to an array of objects
  function saveQuestionsAndAnswers() {
    var questionCardData = {
      question: questionInputEl,
      answer: answerInputEl,
      index: questionIndex,
    };
    // Pushing the questionCardData to the questionsAndAnswersArray
    questionsAndAnswersArray.push(questionCardData);
    // Logging questionsAndAnswersArray to the console
    console.log(questionsAndAnswersArray);
  }
  /******************************************/
  /* Event listeners */
  /******************************************/
  // Event listener to add a new Question
  submitQuestionBtnEl.addEventListener("click", addQuestion);

  // Event Listener to assign the target question card to the selectedQuestionCardEl variable
  questionContainerEl.addEventListener("click", handleAnswerClick);

  // Event Listener to add answer to back of question card.
  submitAnswerBtn.addEventListener("click", addAnswer);
  // Event Listener to save questions,answers and indexes to an array of objects.
  submitAnswerBtn.addEventListener("click", saveQuestionsAndAnswers);

  // Event to open modal on click
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
