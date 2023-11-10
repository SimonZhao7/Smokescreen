// Initialize the array
let hiddenWords = [];

// Get the form element
let form = document.getElementById('myForm');

// Add an event listener for form submission
form.addEventListener('submit', function(event) {
    // Prevent the form from being submitted
    event.preventDefault();

    // Get the input field value
    let inputValue = document.getElementById('myInput').value;

    // Add the input value to the array
    hiddenWords.push(inputValue);

    // Clear the input field
    document.getElementById('myInput').value = '';

    // Update the array display
    document.getElementById('arrayDisplay').innerText = hiddenWords.join(', ');
});
