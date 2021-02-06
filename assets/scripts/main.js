// Volume Functionality -------------------------------------------------
// volume DOM variables
const volume_number = document.getElementById("volume-number");
const volume_slider = document.getElementById("volume-slider");
const volume_image = document.getElementById("volume-image");

// volume event listeners
volume_number.addEventListener("input", updateSlider);
volume_slider.addEventListener("change", updateNumber);

// volume functions
function updateSlider() {
    volume_slider.value = volume_number.value;
    horn_sound.volume = volume_slider.value / 100;
    updateVolumeImage();
}

function updateNumber() {
    volume_number.value = volume_slider.value;
    horn_sound.volume = volume_slider.value / 100;
    updateVolumeImage();
}

function updateVolumeImage() {
    if (volume_number.value == 0) {
        volume_image.src = "./assets/media/icons/volume-level-0.svg";
        alt = "No Volume";
        honk_button.disabled = true;
    } else if (volume_number.value <= 33) {
        volume_image.src = "./assets/media/icons/volume-level-1.svg";
        alt = "Low Volume";
        honk_button.disabled = false;
    } else if (volume_number.value <= 66) {
        volume_image.src = "./assets/media/icons/volume-level-2.svg";
        alt = "Medium Volume";
        honk_button.disabled = false;
    } else if (volume_number.value < 100) {
        alt = "High Volume";
        honk_button.disabled = false;
    } 
}

// Audio Functionality ---------------------------------------------------
// audio DOM variables
const audio_selection = document.getElementById("audio-selection");
const radio_air_horn = document.getElementById("radio-air-horn");
const radio_car_horn = document.getElementById("radio-car-horn");
const radio_party_horn = document.getElementById("radio-party-horn");
const sound_image = document.getElementById("sound-image");

// audio event listener
audio_selection.addEventListener("change", updateImage);

// audio function
function updateImage() {
    if (radio_air_horn.checked == true) {
        sound_image.src = "./assets/media/images/air-horn.svg";
        sound_image.alt = "Air Horn";
        horn_sound.src = "./assets/media/audio/air-horn.mp3";
    } else if (radio_car_horn.checked == true) {
        sound_image.src = "./assets/media/images/car.svg";
        sound_image.alt = "Car Horn";
        horn_sound.src = "./assets/media/audio/car-horn.mp3";
    } else if (radio_party_horn.checked == true) {
        sound_image.src = "./assets/media/images/party-horn.svg";
        sound_image.alt = "Party Horn";
        horn_sound.src = "./assets/media/audio/party-horn.mp3";
    }
}

// Form/Sound Functionality ----------------------------------------------------
// form/sound DOM variables
const party_horn_form = document.getElementById("party-horn-form");
const horn_sound = document.getElementById("horn-sound");
const honk_button = document.getElementById("honk-btn");
const honk_btn_container = document.getElementById("honk-btn-container");

// form/sound event listener
party_horn_form.addEventListener("submit", playAudio);

// form/sound function
function playAudio(event) {
    event.preventDefault();
    horn_sound.play();
}