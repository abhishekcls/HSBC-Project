//document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://localhost:3000/api/items'; // Adjust the API URL as needed

    const fetchData = async () => {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            displayData(data);
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    };

    const displayData = (data) => {
        //const resultContainer = document.getElementById('result');
        //resultContainer.innerHTML = ''; // Clear previous results

        /*data.forEach(item => {
            const div = document.createElement('div');
            div.textContent = JSON.stringify(item); // Display the item as a JSON string
            resultContainer.appendChild(div);
        });*/

        data.forEach(item => console.log(item)); // Log each item to the console};
    }
    // Call the fetchData function to load data when the page is ready
//});