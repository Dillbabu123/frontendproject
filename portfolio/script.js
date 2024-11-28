// Basic alert on form submission (optional)
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Message submitted! Thank you for reaching out.");
});
