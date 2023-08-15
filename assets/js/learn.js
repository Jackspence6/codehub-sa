document.addEventListener("DOMContentLoaded", function () {
  /******************************************/
  /* External dependencies */
  /******************************************/
  var questionContainerEl = document.querySelector("#QuestionsContainer");
  var submitQuestionBtnEl = document.querySelector("#submit-question");
  var submitAnswerBtn = document.getElementById("submit-answer-btn");
  var stackSearchEl = document.getElementById("search");
  var stackSearchBtnEl = document.getElementById("search-btn");
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
  // Function to decode HTML special characters
  function decodeHtmlEntities(str) {
    var textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }

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
    var searchTerm = stackSearchEl.value;
    fetch(
      `https://api.stackexchange.com/2.3/search?order=desc&sort=votes&intitle=${searchTerm}&site=stackoverflow&pagesize=6`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var items = data.items;
        // Looping through items
        for (let i = 0; i < items.length; i++) {
          // Assigning question elements to variables
          // Using decodeHtmlEntities function to handle special characters
          var title = decodeHtmlEntities(items[i].title);
          var ownerName = items[i].owner.display_name;
          var ownerAcceptRate = items[i].owner.accept_rate || "N/A";
          var questionScore = items[i].score;
          var link = items[i].link;

          // Calling the createStackCard function to create a card for this question
          createStackCard(
            title,
            ownerName,
            ownerAcceptRate,
            questionScore,
            link
          );
        }
      });
  }

  // Function to create a Stack Overflow card
  function createStackCard(
    title,
    ownerName,
    ownerAcceptRate,
    questionScore,
    link
  ) {
    var stackContainer = document.getElementById("stack-container");

    var colDiv = document.createElement("div");
    colDiv.className = "col s12 m6";

    var cardDiv = document.createElement("div");
    cardDiv.id = "stack-card";
    cardDiv.className = "card blue-grey darken-1";

    var contentDiv = document.createElement("div");
    contentDiv.id = "stack-content";
    contentDiv.className = "card-content white-text";

    var titleSpan = document.createElement("span");
    titleSpan.id = "stack-title";
    titleSpan.className = "card-title";
    titleSpan.textContent = title;

    var ul = document.createElement("ul");
    ul.id = "stack-ul";

    // Adding question owner name
    var ownerLi = document.createElement("li");
    ownerLi.className = "stack-list";
    ownerLi.innerHTML = `Owner Name: <span>${ownerName}</span>`;
    ul.appendChild(ownerLi);

    // Adding question owner accept rate
    var acceptRateLi = document.createElement("li");
    acceptRateLi.className = "stack-list";
    acceptRateLi.innerHTML = `Owner Accept Rate: <span>${ownerAcceptRate}</span>`;
    ul.appendChild(acceptRateLi);

    // Adding question score
    var scoreLi = document.createElement("li");
    scoreLi.className = "stack-list";
    scoreLi.innerHTML = `Question Score: <span>${questionScore}</span>`;
    ul.appendChild(scoreLi);

    contentDiv.appendChild(titleSpan);
    contentDiv.appendChild(ul);
    cardDiv.appendChild(contentDiv);

    var actionDiv = document.createElement("div");
    actionDiv.id = "stack-card-action";
    actionDiv.className = "card-action";
    var aLink = document.createElement("a");
    aLink.classList.add("stack-view-btn");
    aLink.href = link;
    aLink.textContent = "View Question";
    actionDiv.appendChild(aLink);
    cardDiv.appendChild(actionDiv);

    colDiv.appendChild(cardDiv);
    stackContainer.appendChild(colDiv);
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

  // Event Listener to search stack overflow.
  stackSearchBtnEl.addEventListener("click", searchQuestion);

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
