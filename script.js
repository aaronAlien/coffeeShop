const body = document.body;
const hamburger = document.getElementById("hamburger-btn")
const settingsButton = document.getElementById("settings-btn");
const closeButton = document.getElementById("close-btn");
const loginButton = document.getElementById('login-btn');
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
const palette = document.getElementById('colour-palette');
const extraElements = document.querySelectorAll('.section-cards, .ul-cards, cards-item');


// HAMBURGER MENU
hamburger.addEventListener("click", function () {
  const navMenu = document.querySelector(".nav-left ul");
  navMenu.classList.toggle("active");
});

/* HERO - CAROUSEL */

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide-image");

  if (slides.length === 0) return;

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

/* ABOUT - CAROUSEL */

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".about-slide-image");

  if (slides.length === 0) return;

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

const openModal = () => {
  modalContainer.style.display = "flex";
};

const closeModal = () => {
  modalContainer.style.display = "none";
};

settingsButton.addEventListener("click", openModal);

closeButton.addEventListener("click", closeModal);

//close click outside
window.onclick = (e) => {
  if (e.target === modalContainer) {
    closeModal();
  }
};

/* CHANGE FONT */

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
  localStorage.setItem("userFont", selectedValue); 
});

/* FONT SIZE */

const increase = () => {
  const currentFontSize = parseFloat(window.getComputedStyle(body).fontSize);
  const newFontSize = currentFontSize + 4;
  body.style.fontSize = `${newFontSize}px`;
  localStorage.setItem("userFontSize", newFontSize);

  extraElements.forEach(element => {
    element.fontSize = `${newFontSize}`;
  });
};

const decrease = () => {
  const currentFontSize = parseFloat(window.getComputedStyle(body).fontSize);
  const newFontSize = currentFontSize - 4;
  body.style.fontSize = `${newFontSize}px`;
  localStorage.setItem("userFontSize", newFontSize);

  extraElements.forEach(element => {
    element.fontSize = `${newFontSize}`;
  });
};

const resetFontSize = () => {
  body.style.fontSize = "16px";
};

increaseButton.addEventListener("click", increase);
decreaseButton.addEventListener("click", decrease);
fontSizeResetButton.addEventListener("click", resetFontSize);

/* CHANGE THEME COLOURS */

const changeTheme = (theme) => {
    body.className = '';
    body.classList.add(theme); 

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
  

/* LOGIN FORM */

loginButton.addEventListener('click', (e) => {
  e.preventDefault();

  alert('Login Successful. Welcome back, Coffee Lover!');
  window.location.href = '/index.html';
  
});


/* LOCAL STORAGE */

// font family
window.addEventListener("DOMContentLoaded", () => {
    const userFont = localStorage.getItem("userFont");
    if (userFont) {
      changeFont(userFont);
      fontOptions.value = userFont;
    }
  
  });
  
  // font size
  window.addEventListener("DOMContentLoaded", () => {
    const userFontSize = localStorage.getItem('userFontSize');
    if (userFontSize) {
      body.style.fontSize = `${userFontSize}px`; 
      section.style.fontSize = `${userFontSize}px`;
    } else {
      body.style.fontSize = '16px'; 
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

/* COLOUR PALETTE IMAGE */

palette.addEventListener('click', () => {
  const paletteImage = './assets/colours.png';
  const newTab = window.open(paletteImage, '_blank');

  if (!newTab) {
    alert('Popup blocked. Image opens in new tab.');
  }
});