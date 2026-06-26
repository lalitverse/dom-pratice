// input select karo
const input = document.getElementById("username");

// button select karo
const btn = document.getElementById("btn");

// paragraph select karo
const output = document.getElementById("output");

// button click hone par
btn.addEventListener("click", () => {

    // input ki value paragraph me dikhao
    output.textContent = input.value;
});