// dark mode ki state
let dark = false;

// button select karo
const btn = document.getElementById("btn");

// click event
btn.addEventListener("click", () => {

    // state ulta karo
    dark = !dark;

    // dark mode
    if (dark) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        btn.textContent = "☀️ Light Mode";
    }
    // light mode
    else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        btn.textContent = "🌙 Dark Mode";
    }
});