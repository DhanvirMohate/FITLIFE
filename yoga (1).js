let progress = 0;

// Function to move to the next question
function nextStep(currentStep, nextStep) {
    document.getElementById(currentStep).classList.add("hidden");
    document.getElementById(nextStep).classList.remove("hidden");

    // Update progress bar
    progress += 20;
    document.getElementById("progress").style.width = progress + "%";
}

// Function to handle form submission
function submitForm() {
    alert("🎉 Your responses have been recorded! We'll generate a personalized yoga plan for you.");
    location.reload(); // Refresh the page after submission
}