const cssObj = window.getComputedStyle(element, null);

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

function render(var1, var2) {
  document.getElementById(var1).addEventListener('click', function() {
    let x = document.getElementById(var2)
    if ( window.getComputedStyle(x, null).getPropertyValue("display") === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  })
}

render('hamburger-menu', 'overlay')

window.addEventListener("resize", function() {
  if (window.matchMedia("(min-width: 722px)").matches) {
    this.document.getElementById("container").style.display = ''
  } else {
    this.document.querySelector("#overlay").style.display = 'none'
    this.document.getElementById("container").style.display = 'none'
  }
})

display__hide__elements (
  "feature-button",
  "hover-elements"
)

display__hide__elements (
  "company-button",
  "hover-element-company-button"
)

display__hide__elements (
  "hamburger-menu",
  "container"
)

display__hide__elements(
  "hamburger-menu",
  "overlay"
)