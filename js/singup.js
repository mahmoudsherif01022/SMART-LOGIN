document.addEventListener("DOMContentLoaded", () => {
    const signupName = document.querySelector("#signupName")
    const signupEmail = document.querySelector("#signupEmail")
    const signupPassword = document.querySelector("#signupPassword")
    const validMessage = document.querySelector("#validMessage")
    const massageValidName = document.querySelector("#massageValidName")
    const massageValidEmail = document.querySelector("#massageValidEmail")
    const massageValidPassword = document.querySelector("#massageValidPassword")
    // const vaild = document.querySelector("#vaild")
    const singUp = document.querySelector("button")

    let KEY = "info";
    let signuplist = JSON.parse(localStorage.getItem(KEY)) || []

    singUp.addEventListener("click", () => {

        if (signupName.value && signupEmail.value && signupPassword.value) {

            const emailExists = signuplist.some(user => user.email === signupEmail.value)
            if (emailExists) {
                validMessage.textContent = "Email already exists.";
                validMessage.className = "text-danger";
            }
            else {
                signuplist.push({ name: signupName.value, email: signupEmail.value, password: signupPassword.value })
                localStorage.setItem(KEY, JSON.stringify(signuplist))
                validMessage.textContent = "Registration successful!";
                validMessage.classList = "text-success"
                signupName.value = signupEmail.value = signupPassword.value = "";
                signupName.classList.remove("is-valid")
                signupEmail.classList.remove("is-valid")
                signupPassword.classList.remove("is-valid")
            }


        } else {
            validMessage.textContent = "All fields are required.";
            validMessage.className = "text-danger";

        }
    })
    let validationFlag = {
        isNameValid: false,
        isEmailValid: false,
        isPasswordValid: false,
    }


    function checkValidation(inputElement, regex, errorElement, flag) {
        let isValid = regex.test(inputElement.value)
        inputElement.classList.toggle("is-valid", isValid)
        inputElement.classList.toggle("is-invalid", !isValid)
        errorElement.classList.toggle("d-none", isValid)
        errorElement.classList.toggle("d-block", !isValid)
        if (isValid) {
            validationFlag[flag] = true
        } else {
            validationFlag[flag] = false
        }
    }

    signupName.addEventListener("input", function () {
        checkValidation(signupName, /^[a-zA-z0-9]{3,}$/, massageValidName, "isNameValid")
    })


    signupEmail.addEventListener("input", function () {
        checkValidation(signupEmail, /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, massageValidEmail, " isEmailValid")
    })


    signupPassword.addEventListener("input", function () {
        checkValidation(signupPassword, /^.{8,}$/, massageValidPassword, "isPasswordValid")
    })
})

