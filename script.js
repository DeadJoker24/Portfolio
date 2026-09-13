const themeButton = document.querySelector("#themebutton");
themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

});

const projectfilter =document.querySelector("#projectfilter");
const projects = document.querySelectorAll("#projects article");

projectfilter.addEventListener("change", function () {
    const selectedCategory = projectfilter.value;

    projects.forEach(function (project) {
        if (
            selectedCategory === "all" ||
            project.dataset.category === selectedCategory
        ) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });
});
const contactForm = document.querySelector("#contactForm");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const formMessage = document.querySelector("#formMessage");

contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (
        nameInput.value.trim() === "" ||
        emailInput.value.trim() === "" ||
        messageInput.value.trim() === ""
    ) {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.className = "error";
        return;
    }

    formMessage.textContent = "Sending...";
    formMessage.className = "";

    const formData = new FormData(contactForm);

    try {
        const response = await fetch(contactForm.action, {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json"
            }
        });

        if (response.ok) {
            formMessage.textContent = "Message sent successfully!";
            formMessage.className = "success";
            contactForm.reset();
        } else {
            formMessage.textContent = "Something went wrong. Please try again.";
            formMessage.className = "error";
        }
    } catch (error) {
        formMessage.textContent = "Network error. Please try again.";
        formMessage.className = "error";
    }
});
