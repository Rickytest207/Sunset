function toggleTooltip(event, word) {
    // Get the tooltip container
    var tooltipContainer = document.getElementById(word + '-tooltip');
    
    // Get the word element (clicked word)
    var wordElement = event.target;

    // Get the position of the word element on the page
    var rect = wordElement.getBoundingClientRect();

    // Get the tooltip box inside the container
    var tooltipBox = tooltipContainer.querySelector('.tooltip-box');

    // Position the tooltip relative to the clicked word
    tooltipContainer.style.top = (rect.top + window.scrollY + rect.height) + 'px'; // Position below the word
    tooltipContainer.style.left = (rect.left + window.scrollX) + 'px'; // Position aligned with the word

    // Toggle the tooltip visibility and opacity
    tooltipContainer.classList.toggle('show');
}
function toggleTooltip(event, word) {
    // Get the tooltip container
    var tooltipContainer = document.getElementById(word + '-tooltip');
    
    // Get the word element (clicked word)
    var wordElement = event.target;

    // Get the position of the word element on the page
    var rect = wordElement.getBoundingClientRect();

    // Get the tooltip box inside the container
    var tooltipBox = tooltipContainer.querySelector('.tooltip-box');

    // Position the tooltip relative to the clicked word
    tooltipContainer.style.top = (rect.top + window.scrollY + rect.height) + 'px'; // Position below the word
    tooltipContainer.style.left = (rect.left + window.scrollX) + 'px'; // Position aligned with the word

    // Toggle the tooltip visibility and opacity
    tooltipContainer.classList.toggle('show');
}
// Function to toggle definition visibility
function toggleDefinition(id) {
    var definition = document.getElementById(id);
    definition.classList.toggle('show'); // Toggle the 'show' class to show/hide the definition
}

}
