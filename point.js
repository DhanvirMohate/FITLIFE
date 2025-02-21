// Initialize Points
let points = 0;
document.getElementById("points").innerText = points;

// Function to Add 50 Points for Completing Workout
function completeWorkout() {
    points += 50;
    updatePoints();
}

// Function to Track Progress and Add 20 Points
function trackProgress() {
    let steps = parseInt(document.getElementById("steps").value) || 0;
    let workoutTime = parseInt(document.getElementById("workout-time").value) || 0;
    let exercises = parseInt(document.getElementById("exercises").value) || 0;

    points += 20; // Regular tracking points

    // Bonus 20 points if conditions met
    if (steps > 2000 && workoutTime > 45 && exercises > 5) {
        points += 20;
        alert("🎉 Bonus +20 Points Earned for a Great Workout!");
    }

    updatePoints();
}

// Function to Update Points on Screen
function updatePoints() {
    document.getElementById("points").innerText = points;
}

// Function to Set a Fitness Goal
function setGoal() {
    let goal = document.getElementById("goal").value;
    document.getElementById("goal-message").innerText = `🎯 Goal Set: ${goal}`;
}

// Function to Upgrade Character
function upgradeCharacter() {
    if (points >= 100) {
        points -= 100;
        updatePoints();
        document.getElementById("upgrade-message").innerText = "🎮 Avatar Upgraded!";
    } else {
        alert("Not enough points to upgrade!");
    }
}
