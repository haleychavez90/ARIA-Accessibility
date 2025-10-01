console.log ("Hello, world!");
// HTML Selector
const main = document.getElementById("main-form");
// HTML Selectors
const mainForm = document.getElementById("main-form");
const outputDiv = document.getElementById("output");

mainForm.addEventListener("submit", formHandler(event));
// Get the variables of the inputs
// (Removed duplicate declarations)

// Create form handler function
function formHandler(event) {
    event.preventDefault();
    console.log(event);
}
  // Prevent the action from the form to refresh the page
  event.preventDefault();

// Variables of inputs
// Variables of inputs
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
// The output
outputDiv.innerHTML = `
  <p>My first name is: ${firstNameInput.value}</p>
  <p>My last name is: ${lastNameInput.value}</p>
`
console.log('First Name: ${firstNameInput.value}');
console.log('Last Name: ${lastNameInput.value}');
  outputDiv.style.display = 'block';

// Output to the DOM
outputDiv.innerHTML = `
  <p>First Name: ${firstNameInput.value}</p>
  <p>Last Name: ${lastNameInput.value}</p>
`;

outputDiv.style.display = "block";

// Clear the form
firstNameInput.value = "";
lastNameInput.value = "";
// Clear the inputs
firstNameInput.value = '';
lastNameInput.value = '';