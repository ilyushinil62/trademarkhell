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
            // Set the marquee text
            marqueeElement.textContent = randomLine;
        })
        .catch(error => console.error('Error fetching the file:', error));
});