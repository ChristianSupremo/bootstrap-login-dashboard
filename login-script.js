document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");
        const usernameValue = usernameInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        if (usernameValue === "admin@email.com" && passwordValue === "admin") {
            const successModal = new bootstrap.Modal(document.getElementById("successModal"));
            successModal.show();
            setTimeout(function() {
                window.location.href = "dashboard.html";
            }, 2000);
        } else if (usernameValue !== "admin@email.com") {
            const invalidEmailModal = new bootstrap.Modal(document.getElementById("invalidEmailModal"));
            document.getElementById("invalidEmailMessage").innerText = "Email is not associated with an account, consider Registering.";
            invalidEmailModal.show();
        } else if (passwordValue !== "admin") {
            const invalidPasswordModal = new bootstrap.Modal(document.getElementById("invalidPasswordModal"));
            document.getElementById("invalidPasswordMessage").innerText = "The password you’ve entered is incorrect.";
            invalidPasswordModal.show();
        } else {
            const invalidPasswordModal = new bootstrap.Modal(document.getElementById("invalidPasswordModal"));
            invalidPasswordModal.show();
        }
    });
});
