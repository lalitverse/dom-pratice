// elements select karo
const task = document.getElementById("task");
const btn = document.getElementById("btn");
const list = document.getElementById("list");

// button click hone par
btn.addEventListener("click", () => {

    // empty task add mat karo
    if (task.value.trim() === "") {
        return;
    }

    // naya li banao
    const li = document.createElement("li");

    // task ko li me dalo
    li.textContent = task.value;

    // list me add karo
    list.appendChild(li);

    // input clear karo
    task.value = "";
});