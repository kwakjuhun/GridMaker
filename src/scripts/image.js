
export default function ImageAnalysis(imageElement){
    var canvas = document.createElement('canvas'),
    context = canvas.getContext && canvas.getContext('2d'),
        imgData, width, height, length,
        rgb = { r: 0, g: 0, b: 0 },
        count = 0;
    height = canvas.height =
        imageElement.naturalHeight ||
        imageElement.offsetHeight ||
        imageElement.height;
    width = canvas.width =
        imageElement.naturalWidth ||
        imageElement.offsetWidth ||
        imageElement.width;

    context.drawImage(imageElement, 0, 0);
    imgData = context.getImageData(0, 0, width, height);

    // Get the length of image data object
    length = imgData.data.length;

    for (var i = 0; i < length; i += 4) {
        rgb.r += imgData.data[i];
        rgb.g += imgData.data[i + 1];
        rgb.b += imgData.data[i + 2];
        count++;
    }

    rgb.r = Math.floor(rgb.r / count);
    rgb.g = Math.floor(rgb.g / count);
    rgb.b = Math.floor(rgb.b / count);
    return rgb;
}


// setTimeout(() => {
//     rgb = averageColor(
//         document.getElementById('img'));

//     // Select the element and set its
//     // background color
//     document
//         .getElementById("block")
//         .style.backgroundColor =
//         'rgb(' + rgb.r + ','
//         + rgb.g + ','
//         + rgb.b + ')';
// }, 500)
// }