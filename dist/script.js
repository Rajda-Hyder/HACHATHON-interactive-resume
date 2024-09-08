var skillsList = document.querySelectorAll('.skill');
var highlightSkillButton = document.getElementById('highlight-skill-button');
// Event listener for highlighting a random skill
highlightSkillButton.addEventListener('click', function () {
    // Remove highlight from all skills first
    skillsList.forEach(function (skill) {
        skill.style.backgroundColor = ''; // Reset background color
    });
    // Select a random skill to highlight
    var randomIndex = Math.floor(Math.random() * skillsList.length);
    var randomSkill = skillsList[randomIndex];
    randomSkill.style.backgroundColor = 'green'; // Highlight the selected skill
});
