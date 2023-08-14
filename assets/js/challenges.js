document.addEventListener("DOMContentLoaded", function () {
  /******************************************/
  /* External dependencies */
  /******************************************/
  var topicsEl = document.getElementsByClassName("topics");
  var searchEl = document.getElementById("search");
  var challengeCards = document.querySelectorAll(".challenge-card");
  var challengeSearchContainerEl = document.getElementById("challenge-search");
  /******************************************/
  /* Global variables and constants */
  /******************************************/

  /******************************************/
  /* Function and class declarations */
  /******************************************/
  // Function to search for challenge card based on challenge topics
  function searchChallenges() {
    var searchInput = searchEl.value.toLowerCase();

    // Flag to track if any match is found in the challenges
    var matchFound = false;

    // Looping through challenge cards
    for (var i = 0; i < challengeCards.length; i++) {
      var challengeCard = challengeCards[i];
      var challengeTopics = challengeCard.querySelectorAll(".topics");
      var shouldDisplay = false;

      // Checking if any challenge topic matches the user search input
      for (var j = 0; j < challengeTopics.length; j++) {
        if (
          challengeTopics[j].textContent.toLowerCase().includes(searchInput)
        ) {
          shouldDisplay = true;
          // A match is found
          matchFound = true;
          break;
        }
      }

      // Setting the display property of the card based on the shouldDisplay variable
      challengeCard.style.display = shouldDisplay ? "block" : "none";
    }

    // Display "No Matches!" below search bar if no match is found
    if (!matchFound) {
      var searchResultEl = document.createElement("h2");
      searchResultEl.textContent = "No Matches!";
      //   Appending searchResultEl to challengeSearchContainerEl
      challengeSearchContainerEl.appendChild(searchResultEl);
    }
  }
  /******************************************/
  /* Event listeners */
  /******************************************/
  //   Event Listener to activate the searchChallenges function when a user starts typing
  searchEl.addEventListener("input", searchChallenges);
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
