// paragraph select karo
const message = document.getElementById("message");

// button select karo
const btn = document.getElementById("btn");

// button click hone par
btn.addEventListener("click", () => {

    // agar paragraph hidden hai
    if (message.style.display === "none") {

        // dobara show karo
        message.style.display = "block";
    }
    else {

        // paragraph ko hide karo
        message.style.display = "none";
    }
});