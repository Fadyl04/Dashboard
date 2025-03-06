document.getElementById("togglePassword").addEventListener("click", function() {
    let passwordField = document.getElementById("password");
    let toggleIcon = this;

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.classList.remove("bx-hide");
        toggleIcon.classList.add("bxs-show"); // Changer l'icône
    } else {
        passwordField.type = "password";
        toggleIcon.classList.remove("bxs-show");
        toggleIcon.classList.add("bx-hide"); // Revenir à l'icône cachée
    }
});
