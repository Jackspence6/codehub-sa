document.addEventListener("DOMContentLoaded", function () {
  /******************************************/
  /* External dependencies */
  /******************************************/
  var topicsEl = document.getElementsByClassName("topics");
  /******************************************/
  /* Global variables and constants */
  /******************************************/

  /******************************************/
  /* Function and class declarations */
  /******************************************/
  function topicList() {
    // Looping through the card topics and logging their text content
    for (var i = 0; i < topicsEl.length; i++) {
      console.log(topicsEl[i].textContent);
    }
  }
  topicList();
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
