// A. Theme Toggle (Dark Mode / Light Mode)
const themeBtn = document.getElementById("themeBtn");
if (themeBtn) {
    themeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        themeBtn.textContent = document.body.classList.contains("dark-mode") 
            ? "Light Mode" 
            : "Dark Mode";
    });
}

// B. Edit Job Title
const editJobBtn = document.getElementById("editJobBtn");
if (editJobBtn) {
    editJobBtn.addEventListener("click", function () {
        const jobTitleEl = document.querySelector(".job-title");
        const newTitle = prompt("Enter new job title:", jobTitleEl.textContent);
        if (newTitle !== null && newTitle.trim() !== "") {
            jobTitleEl.textContent = newTitle;
        }
    });
}

// D. Live Character Counter
const msgBox = document.getElementById("msgBox");
const counter = document.getElementById("counter");
if (msgBox && counter) {
    msgBox.addEventListener("keyup", function () {
        const remaining = 200 - msgBox.value.length;
        counter.textContent = remaining;
    });
}

// E. Form Validation Before Sending
function validateForm() {
    const nameField = document.getElementById("nameField");
    const emailField = document.getElementById("emailField");
    
    if (nameField.value.trim() === "" || emailField.value.trim() === "") {
        alert("Name and Email fields cannot be empty!");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}

// F. Automatically Display Today's Date in Footer
function displayDate() {
    const dateDisplay = document.getElementById("dateDisplay");
    if (dateDisplay) {
        const today = new Date();
        dateDisplay.textContent = "Today: " + today.toDateString();
    }
}

// G. Greeting Based on Time
function displayGreeting() {
    const greeting = document.getElementById("greeting");
    if (greeting) {
        const hour = new Date().getHours();
        let greetMsg = "";
        if (hour < 12) {
            greetMsg = "Good morning!";
        } else if (hour < 18) {
            greetMsg = "Good afternoon!";
        } else {
            greetMsg = "Good evening!";
        }
        greeting.textContent = greetMsg;
    }
}

// H. Color Picker for Background
const colorPicker = document.getElementById("colorPicker");
if (colorPicker) {
    colorPicker.addEventListener("change", function () {
        document.body.style.backgroundColor = this.value;
        localStorage.setItem("bgColor", this.value);
    });
    
    // Load saved color on page load
    window.addEventListener("DOMContentLoaded", function () {
        const savedColor = localStorage.getItem("bgColor");
        if (savedColor) {
            document.body.style.backgroundColor = savedColor;
            colorPicker.value = savedColor;
        }
    });
}

// Initialize on page load
window.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded");
    displayDate();
    displayGreeting();
    
    // C. Show/Hide Skills - Dynamic Button Creation
    const skillsBox = document.querySelector(".skills-box");
    if (skillsBox) {
        const toggleSkillsBtn = document.createElement("button");
        toggleSkillsBtn.id = "toggleSkillsBtn";
        toggleSkillsBtn.textContent = "Hide Skills";
        
        skillsBox.parentNode.insertBefore(toggleSkillsBtn, skillsBox);
        
        toggleSkillsBtn.addEventListener("click", function () {
            if (skillsBox.style.display === "none") {
                skillsBox.style.display = "block";
                toggleSkillsBtn.textContent = "Hide Skills";
            } else {
                skillsBox.style.display = "none";
                toggleSkillsBtn.textContent = "Show Skills";
            }
        });
    }
});

