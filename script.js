//your JS code here. If required.

// Function to generate random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to create 800 boxes and append them to the container
function createBoxes() {
    const board = document.getElementById('board');
    for (let i = 0; i < 800; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        // Add hover event to change color
        square.addEventListener('mouseover', () => {
            const newColor = getRandomColor();
            square.style.backgroundColor = newColor;

            // Set timeout to revert color after 1 second
            setTimeout(() => {
                square.style.backgroundColor = '';
            }, 1000);
        });

        board.appendChild(square);
    }
}

// Call the function to create the boxes
createBoxes();