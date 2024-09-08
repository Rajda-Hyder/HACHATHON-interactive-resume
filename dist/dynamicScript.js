// Get form and output elements
var form = document.getElementById('resume-form');
var resumeOutput = document.getElementById('generated-resume');
// Form submission handler
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    // Generate dynamic resume content
    var resumeHTML = "\n        <h2>".concat(name, "</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Skills</h3>\n        <ul>\n            ").concat(skills.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n        </ul>\n        <h3>Work Experience</h3>\n        <p>").concat(experience, "</p>\n    ");
    // Display the generated resume
    resumeOutput.innerHTML = resumeHTML;
});
