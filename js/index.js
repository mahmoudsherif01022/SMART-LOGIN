document.addEventListener("DOMContentLoaded", () => {
  const signinEmail = document.querySelector("#signinEmail")
  const signinPassword = document.querySelector("#signinPassword")
  const validlogin = document.querySelector("#validlogin")
  const loginn = document.querySelector(".loginn")
  const massageValidEmail = document.querySelector("#massageValidEmail")
  const massageValidPassword = document.querySelector("#massageValidPassword")


  let KEY = "info";
  let signuplist = JSON.parse(localStorage.getItem(KEY)) || []


  loginn.addEventListener("click", () => {
    if (signinEmail.value && signinPassword.value) {
      const uesr = signuplist.find(uesr => uesr.email === signinEmail.value)
      if (!uesr) {
        validlogin.textContent = "Email not registered.";
        validlogin.className = "text-danger";
      } else if (uesr.password !== signinPassword.value) {
        validlogin.textContent = "Password is incorrect.";
        validlogin.className = "text-danger";
      } else {
        localStorage.setItem("currentUser", uesr.name)
        window.location.href = "./home.html"
      }
    } else {
      validlogin.textContent = "All fields are required.";
      validlogin.className = "text-danger";
    }
  })

  let validationFlag = {

    isEmailValid: false,
    isPasswordValid: false,
  }


  function checkValidation(inputElement, regex, massageValidElement, flag) {
    let isValid = regex.test(inputElement.value)

    massageValidElement.classList.toggle("d-none", isValid)
    massageValidElement.classList.toggle("d-block", !isValid)
    if (isValid) {
      validationFlag[flag] = true
    } else {
      validationFlag[flag] = false
    }
  }

  signinEmail.addEventListener("input", function () {
    checkValidation(signinEmail, /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, massageValidEmail, " isEmailValid")
  })


  signinPassword.addEventListener("input", function () {
    checkValidation(signinPassword, /^.{8,}$/, massageValidPassword, "isPasswordValid")

  })
})
