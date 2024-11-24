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
    var wordElement = function toggleTooltip(event, word) {
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

    // Toggle the tolet activeBoxId = null; // Track the currently active box

function toggleDefinition(boxId) {
    const selectedBox = document.getElementById(`${boxId}-box`);
    
    // Check if the clicked box is already active
    if (activeBoxId === boxId) {
        // If active, hide it and reset the tracker
        selectedBox.classList.remove('active');
        activeBoxId = null;
    } else {
        // Hide any currently active box
        const boxes = document.querySelectorAll('.definition-box');
        boxes.forEach(box => box.classList.remove('active'));
        
        // Show the clicked box and update the tracker
        selectedBox.classList.add('active');
        activeBoxId = boxId;
    }
}oltip visibility and opacity
    tooltipContainer.classList.toggle('show');
}
// Function to toggle definition visibility
function toggleDefinition(id) {
    var definition = document.getElementById(id);
    definition.classList.toggle('show'); // Toggle the 'show' class to show/hide the definition
}

}
event.target;

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
