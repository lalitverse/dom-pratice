// count variable
let count = 0;

// elements select karo
const heading = document.getElementById("count");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

// plus button click
plus.addEventListener("click", () => {

    // count badhao
    count++;

    // screen update karo
    heading.textContent = count;
});

// minus button click
minus.addEventListener("click", () => {

    // count ghatao
    count--;

    // screen update karo
    heading.textContent = count;
});