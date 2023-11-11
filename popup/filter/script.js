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

    // Add the input value to the array only if it's not empty and not already in the array
    if (inputValue.trim() !== '' && !hiddenWords.includes(inputValue)) {
        hiddenWords.push(inputValue);
    }

    // Clear the input field
    document.getElementById('myInput').value = '';

    // Create a bullet point list with a remove button for each item
    updateList();
});

// Function to remove an item from the array
const removeItem = function(index) {
    // Remove the item at the specified index
    hiddenWords.splice(index, 1);

    // Update the array display
    updateList();
}

// Function to update the list display
function updateList() {
    let list = document.createElement('ul');
    for(let i = 0; i < hiddenWords.length; i++) {
        let listItem = document.createElement('li');
        
        let wordSpan = document.createElement('span');
        wordSpan.textContent = hiddenWords[i];
        wordSpan.style.marginRight = '20px';
        listItem.appendChild(wordSpan);
        
        let removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.style.color = 'red';
        removeButton.style.background = 'transparent';
        removeButton.style.border = 'thin solid black';
        removeButton.addEventListener('click', function() {
            removeItem(i);
        });
        
        listItem.appendChild(removeButton);
        list.appendChild(listItem);
    }
    document.getElementById('arrayDisplay').innerHTML = '';
    document.getElementById('arrayDisplay').appendChild(list);
}
