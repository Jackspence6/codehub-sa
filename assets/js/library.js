document.addEventListener("DOMContentLoaded", function () {
  /******************************************/
  /* External dependencies */
  /******************************************/
  var searchEl = document.getElementById("search");
  var libraryCards = document.querySelectorAll(".library-card");
  var libraryContentsContainerEl = document.getElementById(
    "library-contents-container"
  );
  /******************************************/
  /* Global variables and constants */
  /******************************************/

  /******************************************/
  /* Function and class declarations */
  /******************************************/
  // Function to search for library cards based on card titles
  function searchLibrary() {
    var searchInput = searchEl.value.toLowerCase();

    // Flag to track if any match is found in the library cards
    var matchFound = false;

    // Looping through library cards
    for (var i = 0; i < libraryCards.length; i++) {
      var libraryCard = libraryCards[i];
      var cardTitle = libraryCard.querySelector(".card-title");
      var shouldDisplay = false;

      // Checking if card title matches the user search input
      if (cardTitle.textContent.toLowerCase().includes(searchInput)) {
        shouldDisplay = true;
        // A match is found
        matchFound = true;
      }

      // Setting the display property of the card based on the shouldDisplay variable
      libraryCard.style.display = shouldDisplay ? "block" : "none";
    }

    // Display "No Match Found!" below search bar if no match is found
    if (!matchFound) {
      var searchResultEl = document.createElement("h2");
      searchResultEl.textContent = "No Match Found!";
      //   Appending searchResultEl to libraryContentsContainerEl
      libraryContentsContainerEl.appendChild(searchResultEl);
    }
  }
  /******************************************/
  /* Event listeners */
  /******************************************/

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
