const imageElements = document.querySelectorAll(".project-gif img");
const imageTgt = document.getElementById("project-pics");

let imgSrc = [];
imageElements.forEach((img) => {
  const imageSrc = img.getAttribute("src");
  imgSrc.push(imageSrc);
});

let i = 0;

function changeImage() {
  setTimeout(() => {
    imageTgt.src = imgSrc[i];
    i++;

    if (i === imgSrc.length) {
      i = 0;
    }
    changeImage();
  }, 3000);
}

changeImage();
