document.addEventListener('DOMContentLoaded', () => {
    const marqueeElement = document.getElementById('randomText');
    
    // Fetch the text file
    fetch('/scripts/quote.txt')
        .then(response => response.text())
        .then(text => {
            // Split the file into lines
            const lines = text.split('\n').filter(line => line.trim() !== '');
            // Pick a random line
            const randomLine = lines[Math.floor(Math.random() * lines.length)];
            
            // Check if the line has more than however many characters
            if (randomLine.length > 50) {
                // Wrap the text in a <marquee> element
                marqueeElement.innerHTML = `<marquee>${randomLine}</marquee>`;
            } else {
                // Set the text as normal
                marqueeElement.textContent = randomLine;
            }
        })
        .catch(error => console.error('Error fetching the file:', error));
});
