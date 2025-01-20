const btn = document.getElementById('click-me')


let state = "light"

btn.addEventListener("click", () => {
    if (state === "light") {
        document.body.style.backgroundColor = "black"
        document.getElementById("first-section-title").style.color = "white"

        console.log("its dark now!")
        state = "dark"
    }
    else {
        document.body.style.backgroundColor = "white"
        document.getElementById("first-section-title").style.color = "black"
        console.log("its light now!")
        state = "light"
    }
})