document.addEventListener("DOMContentLoaded", () => {
    const username = document.querySelector("#username")
    const currentUser = localStorage.getItem("currentUser")

    if (currentUser) {
        username.textContent = ` Welcome  ${currentUser}`

    } else {
        window.location.href = "./index.html"
    }

    document.querySelector("#loginout").addEventListener("click", function () {
        localStorage.removeItem("currentUser")
        window.location.href = "./index.html"
    })

})