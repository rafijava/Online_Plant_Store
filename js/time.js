// Function to display current date and time
    function displayDateTime() {
        const datetimeDisplayElement = document.getElementById('datetime-display');

        // Create a new Date object
        const currentDateTime = new Date();

        // Extract the date and time components
        const date = currentDateTime.toDateString();
        const time = currentDateTime.toLocaleTimeString();

        // Display the date and time in the span element
        datetimeDisplayElement.textContent = ` ${date} || ${time}`;
    }

    // Call the displayDateTime function to update the display immediately
    displayDateTime();

    // Update the display every second using setInterval
    setInterval(displayDateTime, 1000);