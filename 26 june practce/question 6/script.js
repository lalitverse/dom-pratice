// delete button select karo
const btn = document.getElementById("btn");

// button click hone par
btn.addEventListener("click", () => {

    // parent card remove karo
    btn.parentElement.remove();
});