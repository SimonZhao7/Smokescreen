// Initialize the array
let hiddenWords = [];

let form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    let inputValue = document.getElementById('myInput').value;
    hiddenWords.push(inputValue);
    document.getElementById('myInput').value = '';
    document.getElementById('arrayDisplay').innerText = hiddenWords.join(', ');
});
