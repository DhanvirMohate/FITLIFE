// Initialize Points & Badges
let points = 0;
const pointsDisplay = document.getElementById("points");
const badgesDisplay = document.getElementById("badges");

// Function: Complete Workout
function completeWorkout() {
    points += 50;
    updatePoints();
    checkBadges();
}

// Function: Track Progress
function trackProgress() {
    let steps = document.getElementById("steps").value;
    let calories = document.getElementById("calories").value;
    
    if (steps > 0 || calories > 0) {
        points += 20;
        updatePoints();
        checkBadges();
        alert("Progress Tracked! Keep Going! 🚀");
    } else {
        alert("Enter valid steps or calories burned!");
    }
}

// Function: Set Goal
function setGoal() {
    let goalText = document.getElementById("goal").value;
    if (goalText.trim() !== "") {
        document.getElementById("goal-message").innerText = "🎯 Goal Set: " + goalText;
    } else {
        alert("Enter a fitness goal!");
    }
}

// Function: Upgrade Character
function upgradeCharacter() {
    if (points >= 100) {
        points -= 100;
        updatePoints();
        document.getElementById("upgrade-message").innerText = "🎮 Character Upgraded!";
    } else {
        alert("Not enough points! Earn more by working out!");
    }
}

// Function: Update Points Display
function updatePoints() {
    pointsDisplay.innerText = points;
}

// Function: Check & Add Badges
function checkBadges() {
    if (points >= 100 && !document.querySelector(".badge-100")) {
        let badge = document.createElement("span");
        badge.classList.add("badge", "badge-100");
        badge.innerText = "🏅 100 Points!";
        badgesDisplay.appendChild(badge);
    }
    if (points >= 200 && !document.querySelector(".badge-200")) {
        let badge = document.createElement("span");
        badge.classList.add("badge", "badge-200");
        badge.innerText = "🥇 200 Points!";
        badgesDisplay.appendChild(badge);
    }
}
