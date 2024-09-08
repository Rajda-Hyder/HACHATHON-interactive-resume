
const skillsList = document.querySelectorAll('.skill') as NodeListOf<HTMLLIElement>;
const highlightSkillButton = document.getElementById('highlight-skill-button') as HTMLButtonElement;



// Event listener for highlighting a random skill

highlightSkillButton.addEventListener('click', () => {
   
    // Remove highlight from all skills first

    skillsList.forEach(skill => {
        skill.style.backgroundColor = '';  // Reset background color
    });

    // Select a random skill to highlight
    const randomIndex = Math.floor(Math.random() * skillsList.length);
    const randomSkill = skillsList[randomIndex];
    randomSkill.style.backgroundColor = 'green';  // Highlight the selected skill
});
