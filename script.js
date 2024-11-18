const body = document.body;
const hamburger = document.getElementById("hamburger-btn")
const settingsButton = document.getElementById("settings-btn");
const closeButton = document.getElementById("close-btn");
const modalContainer = document.getElementById("modal-container");
const fontOptions = document.getElementById("font-options");
const increaseButton = document.getElementById("increase-btn");
const decreaseButton = document.getElementById("decrease-btn");
const fontSizeResetButton = document.getElementById("font-size-reset-btn");
const themeLight = document.getElementById("light-theme");
const themeDark = document.getElementById("dark-theme");
const blackWhiteTheme = document.getElementById("black-white-theme");
const resetButton = document.getElementById("reset-btn");
const logo = document.getElementById('logo-img');

// HAMBURGER MENU

hamburger.addEventListener("click", function () {
  const navMenu = document.querySelector(".nav-left ul");
  navMenu.classList.toggle("active");
});

/* HERO - CAROUSEL */

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide-image");

  let currentIndex = 0;

  function nextSlide() {
    //remove
    slides[currentIndex].classList.remove("active");

    //update
    currentIndex = (currentIndex + 1) % slides.length;

    //add
    slides[currentIndex].classList.add("active");
  }

  setInterval(nextSlide, 3000);
});

/* MODAL */

// open modal
const openModal = () => {
  modalContainer.style.display = "flex";
};

//close modal
const closeModal = () => {
  modalContainer.style.display = "none";
};

// settings button listener
settingsButton.addEventListener("click", openModal);

// close button listener
closeButton.addEventListener("click", closeModal);

//close click outside
window.onclick = (e) => {
  if (e.target === modalContainer) {
    closeModal();
  }
};

/* CHANGE FONT */

// update font function
function changeFont(fontValue) {
  if (fontValue === "regular") {
    body.style.fontFamily = "Funnel Display, sans-serif";
  } else if (fontValue === "Verdana") {
    body.style.fontFamily = "Verdana, sans-serif";
  } else if (fontValue === "Bionic Reading") {
    body.style.fontFamily = "FastFont, sans-serif";
  } else if (fontValue === "Dyslexic") {
    body.style.fontFamily = "OpenDyslexic, sans-serif";
  }
}

// event listener on change
fontOptions.addEventListener("change", () => {
  const selectedValue = fontOptions.value;

  changeFont(selectedValue);
  localStorage.setItem("userFont", selectedValue); // save to local
});

/* FONT SIZE */

const increase = () => {
  const currentFontSize = parseFloat(window.getComputedStyle(body).fontSize);
  const newFontSize = currentFontSize + 4;
  body.style.fontSize = `${newFontSize}px`;
  localStorage.setItem("userFontSize", newFontSize);
};

const decrease = () => {
  const currentFontSize = parseFloat(window.getComputedStyle(body).fontSize);
  const newFontSize = currentFontSize - 4;
  body.style.fontSize = `${newFontSize}px`;
  localStorage.setItem("userFontSize", newFontSize);
};

const resetFontSize = () => {
  body.style.fontSize = "16px";
};

// button listeners
increaseButton.addEventListener("click", increase);
decreaseButton.addEventListener("click", decrease);
fontSizeResetButton.addEventListener("click", resetFontSize);

/* CHANGE THEME COLOURS */

const changeTheme = (theme) => {
    body.className = '';
    body.classList.add(theme); // selected theme

    if (theme === 'light-theme') {
      logo.src = './assets/coffeeLogoWhite.png';
    } else if (theme === 'dark-theme' || theme === 'black-white-theme') {
      logo.src = './assets/coffeeLogoBlack.png';
    }
    // save
    localStorage.setItem('userTheme', theme);
  };
  
  // button listeners
  themeLight.addEventListener('click', () => changeTheme('light-theme'));
  themeDark.addEventListener('click', () => changeTheme('dark-theme'));
  blackWhiteTheme.addEventListener('click', () => changeTheme('black-white-theme'));
  
  // rest all button - modal
  const resetStyles = () => {
    changeTheme('light-theme');
    body.style.fontSize = '16px';
    body.style.fontFamily = "Funnel Display, sans-serif";
    localStorage.clear();
  }
  resetButton.addEventListener('click', resetStyles);
  
/* LOCAL STORAGE */

// font family
window.addEventListener("DOMContentLoaded", () => {
    const userFont = localStorage.getItem("userFont");
    if (userFont) {
      changeFont(userFont);
      fontOptions.value = userFont; // dropdown value
    }
  
  });
  
  // font size
  window.addEventListener("DOMContentLoaded", () => {
    const userFontSize = localStorage.getItem('userFontSize');
    if (userFontSize) {
      body.style.fontSize = `${userFontSize}px`; //selected size
    } else {
      body.style.fontSize = '16px'; //default
    }
  });
  
  // theme change
  window.addEventListener("DOMContentLoaded", () => {
    const userTheme = localStorage.getItem('userTheme');
    if (userTheme) {
      changeTheme(userTheme);
    } else {
      changeTheme('light-theme');
    }
  });

// https://placehold.co/600x400
