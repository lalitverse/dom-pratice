// elements select karo
const nameInput = document.getElementById("name");
const courseInput = document.getElementById("course");
const btn = document.getElementById("btn");
const students = document.getElementById("students");
const total = document.getElementById("total");

// total students count
let count = 0;

// button click
btn.addEventListener("click", () => {

    const name = nameInput.value.trim();
    const course = courseInput.value.trim();

    // empty input mat lo
    if (name === "" || course === "") {
        return;
    }

    // student card banao
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${name}</h3>
        <p>${course}</p>
        <button>Delete</button>
    `;

    // delete button
    const deleteBtn = card.querySelector("button");

    deleteBtn.addEventListener("click", () => {
        card.remove();

        count--;

        total.textContent = `Total Students: ${count}`;
    });

    // card ko page me add karo
    students.appendChild(card);

    // total update karo
    count++;

    total.textContent = `Total Students: ${count}`;

    // input clear karo
    nameInput.value = "";
    courseInput.value = "";
});