// ul ko select karo
const list = document.getElementById("list");

// button ko select karo
const btn = document.getElementById("btn");

// button click hone par
btn.addEventListener("click", () => {

    // naya li banao
    const li = document.createElement("li");

    // uska text set karo
    li.textContent = "Banana";

    // li ko ul ke andar add karo
    list.appendChild(li);
});