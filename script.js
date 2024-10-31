const toggleButton = document.querySelectorAll(".faq-toggle");

toggleButton.forEach(button => {
    button.addEventListener("click", () => {
        button.parentNode.classList.toggle("active");
    })
})