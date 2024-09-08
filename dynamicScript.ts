// Get form and output elements
let form = document.getElementById('resume-form') as HTMLFormElement;
let resumeOutput = document.getElementById('generated-resume') as HTMLDivElement;

// Form submission handler
form.addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent the default form submission

    // Get form values
    let name = (document.getElementById('name') as HTMLInputElement).value;
    let email = (document.getElementById('email') as HTMLInputElement).value;
    let phone = (document.getElementById('phone') as HTMLInputElement).value;
    let education = (document.getElementById('education') as HTMLInputElement).value;
    let skills = (document.getElementById('skills') as HTMLInputElement).value;
    let experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    // Generate dynamic resume content
    let resumeHTML = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Skills</h3>
        <ul>
            ${skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}
        </ul>
        <h3>Work Experience</h3>
        <p>${experience}</p>
    `;

    // Display the generated resume
    resumeOutput.innerHTML = resumeHTML;
});