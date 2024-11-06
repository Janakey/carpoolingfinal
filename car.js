// Function to calculate savings based on the user's input
function calculateSavings() {
    // Get the input values
    const distance = document.getElementById("distance").value;
    const carMileage = document.getElementById("carMileage").value;
    const fuelPrice = document.getElementById("fuelPrice").value;
    const passengers = document.getElementById("passengers").value;

    // Validate inputs
    if (distance && carMileage && fuelPrice && passengers) {
        // Calculate the cost of the trip for one person
        const tripCost = (distance / carMileage) * fuelPrice;
        
        // Calculate the savings per person with carpooling
        const savings = (tripCost * (passengers - 1)) / passengers;

        // Display the savings result
        document.getElementById("savingsResult").textContent = `You could save ₹${savings.toFixed(2)} per person with carpooling!`;
    } else {
        document.getElementById("savingsResult").textContent = "Please fill in all fields.";
    }
}

// Validate and handle the registration form submission (if required)
document.getElementById("carpoolForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Registration successful!");
});
