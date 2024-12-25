const url = "https://jsonplaceholder.typicode.com/posts/1";

// Async function with callback parameter
async function fetchData(callback) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        callback(data.title); // Pass the title from the API to the callback
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Callback function to display the title
function displayTitle(title) {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = title; // Display the title in the output div
}

// Event listener for button click
document.getElementById('btn').addEventListener('click', () => {
    fetchData(displayTitle); // Call fetchData with the displayTitle callback
});
