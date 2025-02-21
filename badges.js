// Badge Data
let allBadges = [
    { name: "First Workout!", earned: true, image:longest.png"},
    { name: "5000 Steps Champion", earned: false, image: "2nd.png" },
    { name: "Workout Streak (7 Days)", earned: false, image: "100workout.png" },
    { name: "Fitness Master (30 Days)", earned: false, image: "Calories.png" },
    { name: "100 Exercises Completed", earned: true, image: "7days.png" },
    { name: "Calorie Burner (10,000 kcal)", earned: false, image: "30days.png" }
];

// Function to Display Badges
function displayBadges() {
    let earnedContainer = document.getElementById("earned-badges");
    let lockedContainer = document.getElementById("locked-badges");

    allBadges.forEach(badge => {
        let badgeElement = document.createElement("div");
        badgeElement.classList.add("badge");

        let img = document.createElement("img");
        img.src = badge.image;
        img.alt = badge.name;

        let name = document.createElement("p");
        name.textContent = badge.name;

        badgeElement.appendChild(img);
        badgeElement.appendChild(name);

        if (badge.earned) {
            earnedContainer.appendChild(badgeElement);
        } else {
            lockedContainer.appendChild(badgeElement);
        }
    });
}

// Call function when page loads
window.onload = displayBadges;
