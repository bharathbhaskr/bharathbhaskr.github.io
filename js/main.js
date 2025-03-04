// Backend API Base URL (Replace with your actual Render backend URL)
const BACKEND_URL = "https://portfolio-backend-72el.onrender.com";  // Change this to your actual Render backend URL

/** ======================== Fetch & Display Projects ======================== */
async function fetchProjects() {
    try {
        const response = await fetch(`${BACKEND_URL}/api/projects/`);
        const projects = await response.json();

        let projectContainer = document.querySelector("#project .row"); // Ensure this selector matches your HTML structure
        projectContainer.innerHTML = ""; // Clear existing content

        projects.forEach(project => {
            let projectHTML = `
                <div class="col-md-6">
                    <div class="img-wrapper">
                        <img style="border-radius: 10px;" src="${project.thumbnail}" class="img-fluid" alt="project image">
                    </div>
                    <div class="card" style="background-color: #29494e; border-radius: 4px; border:none">
                        <div style="min-height: 200px;">
                            <br>
                            <a style="color:white; font-size: 1.6rem; font-weight: 600;" href="${project.live}">
                                ${project.title}
                            </a>
                            <p style="color:rgb(206, 206, 206); font-size: 1rem;">${project.description}</p>
                        </div>
                        <div class="d-flex justify-content-end" style="padding-bottom: 20px;">
                            <a href="${project.github}" style="color:#cecece; margin-right:10px;">View Code</a>
                            <a href="${project.live}" style="color:#ffec42;">Live Demo</a>
                        </div>
                    </div>
                </div>
            `;
            projectContainer.innerHTML += projectHTML;
        });
    } catch (error) {
        console.error("Error fetching projects:", error);
    }
}

/** ======================== Fetch & Display Skills ======================== */
async function fetchSkills() {
    try {
        const response = await fetch(`${BACKEND_URL}/api/skills/`);
        const skills = await response.json();

        let skillsContainer = document.querySelector("#skills .row"); // Make sure this selector is correct
        skillsContainer.innerHTML = ""; // Clear existing content

        skills.forEach(skill => {
            let skillHTML = `
                <div class="col-md-4">
                    <div class="card skill-card">
                        <img src="${skill.thumbnail}" alt="${skill.name}" class="skill-icon">
                        <h4>${skill.name}</h4>
                        <p>${skill.description}</p>
                    </div>
                </div>
            `;
            skillsContainer.innerHTML += skillHTML;
        });
    } catch (error) {
        console.error("Error fetching skills:", error);
    }
}

/** ======================== Handle Contact Form Submission ======================== */
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", async (event) => {
            event.preventDefault(); // Prevent default form submission

            let formData = new FormData(contactForm);
            let formObject = Object.fromEntries(formData.entries());

            try {
                const response = await fetch(`${BACKEND_URL}/api/contact/`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formObject)
                });

                if (response.ok) {
                    alert("Message sent successfully!");
                    contactForm.reset();
                } else {
                    alert("Error sending message. Please try again.");
                }
            } catch (error) {
                console.error("Error sending message:", error);
            }
        });
    }
});

/** ======================== On Page Load ======================== */
// Load Projects and Skills on Page Load
document.addEventListener("DOMContentLoaded", () => {
    fetchProjects();
    fetchSkills();
});

function myFunction(){
  let more_description = document.getElementById("more-description");
  let less_description = document.getElementById("less-description");

  if (more_description.style.display === "none"){
    more_description.style.display = "block";
    less_description.style.display = "none";
  }else{
    more_description.style.display = "none";
    less_description.style.display = "block";
  }
}


function myFunction(id) {
  let more_description = document.getElementById("more-description" + id);
  let less_description = document.getElementById("less-description" + id);

  let more_btn = document.getElementById("more_btn" + id);
  let less_btn = document.getElementById("less_btn" + id);

  if (more_description.style.display === "none") {
    more_description.style.display = "block";
    less_description.style.display = "none";
    less_btn.style.display = "block"
    more_btn.style.display = "none"

  } else {
    more_description.style.display = "none";
    less_description.style.display = "block";
    less_btn.style.display = "none"
    more_btn.style.display = "block"
  }
}

function skillsFunction(id) {
  let more_skill_description = document.getElementById("more" + id)
  let less_skill_description = document.getElementById("less" + id)

  let read_more_btn = document.getElementById("read_more_skill" + id)
  let read_less_btn = document.getElementById("read_less_skill" + id)

  if (more_skill_description.style.display == "none") {
    more_skill_description.style.display = "block";
    less_skill_description.style.display = "none";
    read_more_btn.style.display = "none";
    read_less_btn.style.display = "block";

  } else {
    more_skill_description.style.display = "none";
    less_skill_description.style.display = "block";
    read_less_btn.style.display = "none"
    read_more_btn.style.display = "block"
  }

}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})




// ************************************* Typwriter effect *****************


var dataText = ["Fullstack developer", "DevOps Engineer", "Tennis Player", "Beatboxer", "Data Enthusiast", "Web Designer"];

function typeWriter(text, i, fnCallback) {
  if (i < (text.length)) {
    document.getElementById("animation").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
    setTimeout(function () {
      typeWriter(text, i + 1, fnCallback)
    }, 100);
  } else if (typeof fnCallback == 'function') {
    setTimeout(fnCallback, 700);
  }
}

function StartTextAnimation(i) {

  if (dataText[i] == undefined) {
    StartTextAnimation(0);
  }

  if (i < dataText.length ) {

    typeWriter(dataText[i], 0, function () {
      StartTextAnimation(i + 1);
    });
  }
}

StartTextAnimation(0);

// *********************************** Delay Navigation *********************



