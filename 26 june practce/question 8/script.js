// textarea select karo
const text = document.getElementById("text");

// paragraph select karo
const count = document.getElementById("count");

// user jab type kare
text.addEventListener("input", () => {

    // characters count karo
    const total = text.value.length;

    // paragraph update karo
    count.textContent = `Characters: ${total}`;
});