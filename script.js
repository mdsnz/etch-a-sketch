const changeSizeBtn = document.querySelector(".change-size-btn");

const sizeText = document.querySelector(".size-text");

const containerDiv = document.querySelector(".container-div");

changeSizeBtn.addEventListener("click", () => {
  let chosenSize = prompt("Type the new size for the grid (1-100)", 8);
  sizeText.innerHTML = `Current display size: ${chosenSize}x${chosenSize}`;
  renderGrid(chosenSize);
  let correctPixelSize = 500 / chosenSize;
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

  changeColorPixel();
}

let isDragging = false;

function changeColorPixel() {
  const pixels = document.querySelectorAll(".pixel");

  pixels.forEach((pixel) => {
    pixel.addEventListener("mousedown", (e) => {
      isDragging = true;

      e.preventDefault();
    });

    pixel.addEventListener("mousemove", () => {
      if (isDragging) {
        if (!pixel.classList.contains("pixel-painted")) {
          pixel.setAttribute("class", "pixel pixel-painted");
          let r = Math.floor(Math.random() * 256);
          let g = Math.floor(Math.random() * 256);
          let b = Math.floor(Math.random() * 256);
          pixel.style.backgroundColor = `rgb(${r},${g},${b})`;
          pixel.style.opacity = "0.1";
        } else {
          let atualOpacity = Number(pixel.style.opacity);
          atualOpacity = atualOpacity + 0.1;
          pixel.style.opacity = atualOpacity;
        }
      }
    });

    pixel.addEventListener('mouseup', () => {
      isDragging = false;
    })

  });
}

function changePixelsSize(correctPixelSize) {
  const pixels = document.querySelectorAll(".pixel");

  pixels.forEach((pixel) => {
    pixel.style.width = `${correctPixelSize}px`;
    pixel.style.height = `${correctPixelSize}px`;
  });
}

/* 
TODO: 
[x] Paint square only if click or click and drag
[] Make the rainbow mode optional
[] Make the transparency mode an easter egg
[] Add eraser
[] Add Clear
[] Add a box for the user choose the color
[] Add sizeSlider (<input type="range">)

*/
