

function display__hide__elements(button_id, element_id) {
  // Function for display and hide elements: first click - show element,
  // second click - hide element. 
  document.getElementById(button_id).addEventListener('click', function() {
    // addEventLister for onclick. Then you have button id for targeting
    // some button
    if (document.getElementById(element_id).style.display === "none") {
      // Etc: button id will be "<button id='show-me'>Show me!"</button>
      // and some div in html - "<div id='#text'>Hello</div>"
      // When you call this function and in parameters you will pass 
      // ("show-me", "text"), then creates clickable button, that show/hide #text
      (document.getElementById(element_id).style.display = "block"
    )}
    else {
      (document.getElementById(element_id).style.display = "none"
    )}
  })
}

display__hide__elements (

  "feature-button",
  "hover-elements"
)

display__hide__elements (
  "company-button",
  "hover-element-company-button"
)