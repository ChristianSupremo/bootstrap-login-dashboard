document.addEventListener("DOMContentLoaded", function() {
    const greetingElement = document.getElementById("greeting");
    const darkModeToggle = document.getElementById("darkModeToggle");
    const hamburgerMenu = document.querySelector(".hamburger-menu"); // Changed to querySelector
    const sideNav = document.getElementById("sideNav");

    // Function to set greeting based on time
    function setGreeting() {
        const hour = new Date().getHours();
        let greeting = "";
        if (hour >= 5 && hour < 12) {
            greeting = "Good morning";
        } else if (hour >= 12 && hour < 18) {
            greeting = "Good afternoon";
        } else {
            greeting = "Good evening";
        }
        greetingElement.textContent = greeting;
    }

    setGreeting();

    // Toggle dark mode
    darkModeToggle.addEventListener("change", function() {
        if (darkModeToggle.checked) {
            document.body.classList.add("dark-mode");
            document.querySelector("nav").classList.add("dark-mode");
            document.querySelector("nav ul").classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
            document.querySelector("nav").classList.remove("dark-mode");
            document.querySelector("nav ul").classList.remove("dark-mode");
        }
    });

    // Toggle side nav
    hamburgerMenu.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent the click event from bubbling up
        sideNav.classList.toggle("open");
        hamburgerMenu.classList.toggle("hidden");
    });

    // Close side nav when clicking anywhere on the webpage
    document.body.addEventListener("click", function() {
        if (sideNav.classList.contains("open")) {
            sideNav.classList.remove("open");
            hamburgerMenu.classList.remove("hidden");
        }
    });
});
