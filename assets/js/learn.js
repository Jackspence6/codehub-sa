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
  var selectedQuestionCardEl;
  var questionInputEl;
  var questionIndex;
  var answerInputEl;
  var answerOutputEl;
  var questionsAndAnswersArray = [];
  /******************************************/
  /* Function and class declarations */
  /******************************************/
  // Function to add user question from form to card
  function addQuestion(event) {
    event.preventDefault();
    questionInputEl = document.getElementById("question-input").value;

    // Creating a new question object
    var newQuestion = {
      question: questionInputEl,
      // No answer yet so assigning null to answer value
      answer: null,
      index: questionContainerEl.children.length,
    };

    // Pushing the question object to the array
    questionsAndAnswersArray.push(newQuestion);

    // Saving questions & indexes to local storage with the key, "questionCards".
    localStorage.setItem(
      "questionCards",
      JSON.stringify(questionsAndAnswersArray)
    );

    // Calling the function to create and populate the question card
    createAndPopulateQuestionCard(newQuestion);

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
    selectedQuestionCardEl = event.target.closest(".questionCard");
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
      // Saving answers to local storage with the key, "questionCards".
      localStorage.setItem(
        "questionCards",
        JSON.stringify(questionsAndAnswersArray)
      );
      answerOutputEl = selectedQuestionCardEl.querySelector("#answer-output");
      answerOutputEl.textContent = answerInputEl;
      console.log(answerInputEl);
      // Clearing the Answer input field after submission
      document.getElementById("answer-text").value = "";
      // Closing the answer modal after submission
      $("#modal2").modal("close");
    }
    // Logging questionsAndAnswersArray to console
    console.log(questionsAndAnswersArray);
  }

  // Function to generate cards from local storage data
  function generateCardsFromSavedData() {
    // Getting the saved card data from local storage
    var savedDataString = localStorage.getItem("questionCards");
    // Checking to see if there is card data saved to local storage
    if (savedDataString) {
      // If there is, assigning the data to the variable savedData and parsing it back from a string
      var savedData = JSON.parse(savedDataString);

      // Updating the questionsAndAnswersArray with the savedData
      questionsAndAnswersArray = savedData;

      // Looping through the saved data to create and populate cards
      for (var i = 0; i < savedData.length; i++) {
        createAndPopulateQuestionCard(savedData[i]);
      }
    }
  }

  // Function to create and populate a question card
  function createAndPopulateQuestionCard(cardData) {
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
    // Setting the question data from cardData
    questionOutputEl.textContent = cardData.question;

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
    if (cardData.answer !== null) {
      // Setting the answer data from cardData if available
      answerOutputEl.textContent = cardData.answer;
    }

    var answerQuestionBtnContainerEl = document.createElement("div");
    answerQuestionBtnContainerEl.classList.add("card-action");

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
  }

  // Function to search questions on stack overflow
  function searchQuestion(searchTerm) {
    var searchTerm = "timeout function";
    fetch(
      `https://api.stackexchange.com/2.3/search?order=desc&sort=relevance&intitle=${searchTerm}&site=stackoverflow`
    )
      .then(function (response) {
        return response.json();
      })

      .then(function (data) {
        console.log(data);
      });
  }
  searchQuestion();
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
  /* Initialization code */
  /******************************************/
  // Calling the generateCardsFromSavedData function on page load to generate cards that were previously created
  generateCardsFromSavedData();
  /******************************************/
  /* Main logic */
  /******************************************/
});
