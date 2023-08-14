document.addEventListener("DOMContentLoaded", function () {
  /******************************************/
  /* External dependencies */
  /******************************************/
  var topicsEl = document.getElementsByClassName("topics");
  var searchEl = document.getElementById("search");
  var challengeCards = document.querySelectorAll(".challenge-card");
  /******************************************/
  /* Global variables and constants */
  /******************************************/

  /******************************************/
  /* Function and class declarations */
  /******************************************/
  // Function to search for challenge card based on challenge topics
  function searchChallenges() {
    // Converting search input to lowercase for comparison
    var searchInput = searchEl.value.toLowerCase();

    // looping through challenge cards
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
          break;
        }
      }

      // Setting the display property of the card based on the shouldDisplay variable
      challengeCard.style.display = shouldDisplay ? "block" : "none";
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
