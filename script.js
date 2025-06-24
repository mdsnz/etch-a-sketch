const changeSizeBtn = document.querySelector(".change-size-btn");

const sizeText = document.querySelector(".size-text");

const containerDiv = document.querySelector(".container-div");

changeSizeBtn.addEventListener("click", () => {
  let chosenSize = prompt("Type the new size for the grid (1-100)", 8);
  sizeText.innerHTML = `Current display size: ${chosenSize}x${chosenSize}`;
  renderGrid(chosenSize);
  let correctPixelSize = (500/chosenSize) - 2;
  console.log(correctPixelSize)
  changePixelsSize(correctPixelSize);
});

renderGrid(8);

function renderGrid(size) {
  containerDiv.innerHTML = ``;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const pixel = document.createElement("div");
      pixel.setAttribute("class", "pixel");
      containerDiv.appendChild(pixel);
    }
  }
  const pixels = document.querySelectorAll(".pixel");

  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
      pixel.setAttribute("class", "pixel pixel-painted");
    });
  });
}

function changePixelsSize(correctPixelSize) {

    const pixels = document.querySelectorAll(".pixel");

    pixels.forEach((pixel) => {
        pixel.style.width = `${correctPixelSize}px`;
        pixel.style.height = `${correctPixelSize}px`
    })
}