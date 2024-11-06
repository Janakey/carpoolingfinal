// Function to handle the form submission and provide feedback
document.getElementById("busPoolForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get the values from the form fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const route = document.getElementById("route").value;
    const date = document.getElementById("date").value;
    
    // Simple form validation
    if (name && email && route && date) {
        // Provide feedback for successful form submission
        document.getElementById("formFeedback").textContent = `Thank you, ${name}! You've successfully joined the bus pool for the route: ${route} on ${date}.`;
        document.getElementById("busPoolForm").reset(); // Reset the form after submission
    } else {
        // Provide error feedback if any field is missing
        document.getElementById("formFeedback").textContent = "Please fill in all the fields.";
    }
});
