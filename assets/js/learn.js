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
  //  Initializing an empty object to save questions, answers and indexes.
  var questionCardData = {
    question: questionInputEl,
    answer: answerInputEl,
    index: questionIndex,
  };
  /******************************************/
  /* Function and class declarations */
  /******************************************/
  // function to add user question from form to card
  function addQuestion(event) {
    event.preventDefault();
    questionInputEl = document.getElementById("question-input").value;
    // pushing question & index to object
    questionsAndAnswersArray.push({
      question: questionInputEl,
      // No answer yet so assigning null to answer value
      answer: null,
      index: questionContainerEl.children.length,
    });

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
      // Assigning question answer
      questionsAndAnswersArray[questionIndex].answer = answerInputEl;
      // Saving objects to local storage with the key, "questionCards".
      localStorage.setItem(
        "questionCards",
        JSON.stringify(questionsAndAnswersArray)
      );
      answerOutputEl = selectedQuestionCardEl.querySelector("#answer-output");
      answerOutputEl.textContent = answerInputEl;
      console.log("Adding Answer");
      // Clearing the Answer input field after submission
      answerInputEl.value = "";
      document.getElementById("answer-text").value = "";
      // Closing the answer modal after submission
      $("#modal2").modal("close");
    }
    // logging questionsAndAnswersArray to console
    console.log(questionsAndAnswersArray);
  }

  // Function to generate cards from local storage data
  function generateCardsFromSavedData() {
    // Getting the saved card data from local storage
    var savedDataString = localStorage.getItem("questionCards");
    // checking to see if there is card data saved to local storage
    if (savedDataString) {
      // If there is, assigning the data to the variable savedData and parsing it back from a string
      var savedData = JSON.parse(savedDataString);
    }
    // Logging the saved data to the console
    console.log(savedData);
  }
  // Calling the generateCardsFromSavedData function on page load
  generateCardsFromSavedData();
  /******************************************/
  /* Event listeners */
  /******************************************/
  // Event listener to add a new Question
  submitQuestionBtnEl.addEventListener("click", addQuestion);

  // Event Listener to assign the target question card to the selectedQuestionCardEl variable
  questionContainerEl.addEventListener("click", handleAnswerClick);

  // Event Listener to add answer to back of question card.
  submitAnswerBtn.addEventListener("click", addAnswer);

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
