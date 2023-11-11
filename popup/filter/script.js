// Initialize the array
let hiddenWords = [];

// Load any saved words from chrome storage
chrome.storage.sync.get(['hiddenWords'], function(result) {
    if(result.hiddenWords !== undefined) {
        hiddenWords = result.hiddenWords;
        updateList();
    }
});

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
        hiddenWords.push(inputValue.trim());

        // Save the updated array to chrome storage
        chrome.storage.sync.set({'hiddenWords': hiddenWords}, function() {
            console.log('Value is set to ' + hiddenWords);
        });
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

    // Save the updated array to chrome storage
    chrome.storage.sync.set({'hiddenWords': hiddenWords}, function() {
        console.log('Value is set to ' + hiddenWords);
    });

    // Update the array display
    updateList();
}

// Function to update the list display
function updateList() {
    let list = document.createElement('ul');
    for(let i = 0; i < hiddenWords.length; i++) {
        let listItem = document.createElement('li');
        listItem.style.color ='white'
        listItem.style.background = '#96C291';
        listItem.style.border = 'thin solid black';
        listItem.style.borderRadius = '10px'; // Reduced borderRadius
        listItem.style.padding = 'auto'; // Added padding
        listItem.addEventListener('mouseover', function(){
            listItem.style.background = '#BB2525';
        });
        listItem.addEventListener('mouseout', function() {
            listItem.style.background = '#96C291'; // Reset to the original color
        });
        listItem.addEventListener('click', function() {
            removeItem(i);
        });

        // Display only 20 characters and add "..." if the item is longer
        let displayedText = hiddenWords[i].length > 15 ? hiddenWords[i].substring(0, 15) + "..." : hiddenWords[i];

        let wordSpan = document.createElement('span');
        wordSpan.textContent = displayedText;
        listItem.appendChild(wordSpan);

        list.appendChild(listItem);
    }
    document.getElementById('arrayDisplay').innerHTML = '';
    document.getElementById('arrayDisplay').appendChild(list);
}
