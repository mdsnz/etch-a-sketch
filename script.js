
const containerDiv = document.querySelector('.container-div');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const pixel = document.createElement('div');
        pixel.setAttribute('class', 'pixel');
        containerDiv.appendChild(pixel);
    }
}

const pixels = document.querySelectorAll('.pixel');

pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', () => {
        pixel.setAttribute('class', 'pixel pixel-painted')
    })
} )