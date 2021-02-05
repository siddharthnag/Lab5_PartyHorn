// main.js

// TODO
const volume_number = document.getElementById("volume-number");
const volume_slider = document.getElementById("volume-slider");
const volume_image = document.getElementById("volume-image");
const sound_image = document.getElementById("sound-image");

volume_number.addEventListener("input", updateSlider);
volume_slider.addEventListener("change", updateNumber);

function updateSlider() {
    volume_slider.value = volume_number.value;
    updateVolumeImage();
}

function updateNumber() {
    volume_number.value = volume_slider.value;
    updateVolumeImage();
}


function updateVolumeImage() {
    if (volume_number.value == 0) {
        volume_image.src = "./assets/media/icons/volume-level-0.svg";
        alt = "No Volume";
    } else if (volume_number.value <= 33) {
        volume_image.src = "./assets/media/icons/volume-level-1.svg";
        alt = "Low Volume";
    } else if (volume_number.value <= 66) {
        volume_image.src = "./assets/media/icons/volume-level-2.svg";
        alt = "Medium Volume";
    } else if (volume_number.value < 100) {
        alt = "High Volume";
    } 
}
