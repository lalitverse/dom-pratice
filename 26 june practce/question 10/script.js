// image urls ka array
const images = [
    "https://picsum.photos/300?1",
    "https://picsum.photos/300?2",
    "https://picsum.photos/300?3"
];

// current image index
let index = 0;

// elements select karo
const image = document.getElementById("image");
const btn = document.getElementById("btn");

// first image show karo
image.src = images[index];

// button click
btn.addEventListener("click", () => {

    // next image par jao
    index++;

    // last image ke baad first image
    if (index >= images.length) {
        index = 0;
    }

    // image change karo
    image.src = images[index];
});