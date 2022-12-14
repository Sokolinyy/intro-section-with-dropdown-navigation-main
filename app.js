function display__hide__elements(button_id, element_id) {
  // Function for display and hide elements: first click - show element,
  // second click - hide element.
  document.getElementById(button_id).addEventListener("click", function () {
    // addEventLister for onclick. Then you have button id for targeting
    // some button
    if (document.getElementById(element_id).style.display === "none") {
      // Etc: button id will be "<button id='show-me'>Show me!"</button>
      // and some div in html - "<div id='#text'>Hello</div>"
      // When you call this function and in parameters you will pass
      // ("show-me", "text"), then creates clickable button, that show/hide #text
      document.getElementById(element_id).style.display = "block";
    } else {
      document.getElementById(element_id).style.display = "none";
    }
  });
}

window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width: 722px)").matches) {
    this.document.getElementById("container").style.display = "";
  } else {
    this.document.getElementById("container").style.display = "none";
    this.document.querySelector("#overlay").style.display = "none";
  }
});

display__hide__elements("feature-button", "arrow-feature-elements");

display__hide__elements("company-button", "arrow-company-element");

display__hide__elements("hamburger-menu", "container");

display__hide__elements("hamburger-menu", "overlay");
