const original_password = document.querySelector("#password");
const checked_password = document.querySelector("#confirmation");
const message = document.querySelector("#message")

passwords = [original_password, checked_password];

passwords.forEach(field => {
    field.addEventListener("keyup", e => {
        if (original_password.value != checked_password.value) {
            original_password.classList.add("error");
            checked_password.classList.add("error");

            message.classList.remove("hidden");
        } else {
            original_password.classList.remove("error");
            checked_password.classList.remove("error");

            message.classList.add("hidden");
        }
    });
});
