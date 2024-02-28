const header = document.querySelector(".navbar");
const main = document.querySelector("main");

window.addEventListener("scroll", () => {
  header.style.position = window.scrollY > 36 ? "fixed" : "relative";
  header.style.top = window.scrollY > 36 ? "0" : "";
  main.classList.toggle("margin", window.scrollY > 36);
});

function toggleIcon(clickedElement) {
  document.querySelectorAll(".menu-item").forEach(function (element) {
    if (element !== clickedElement) {
      const icon = element.querySelector(".icon");
      icon.classList.remove("rotate-icon");
    }
  });
  const clickedIcon = clickedElement.querySelector(".icon");
  clickedIcon.classList.toggle("rotate-icon");
}

const slides = document.querySelector(".slides");
const buttons = document.querySelectorAll(".button");

let currentSlide = 0;

function changeSlide(index) {
  currentSlide = index;
  updateSlider();
  clearInterval(interval); // Clear existing interval
  startInterval(); // Restart the interval after manual button click
}

function updateSlider() {
  const translateValue = -currentSlide * 100 + "%";
  slides.style.transform = `translateX(${translateValue})`;

  // Update button states
  buttons.forEach((button, index) => {
    button.classList.toggle("active", index === currentSlide);
  });
}

function startInterval() {
  interval = setInterval(() => {
    currentSlide = (currentSlide + 1) % 5; // Assuming 5 slides
    updateSlider();
  }, 3800); // Change slide every 2000 milliseconds (2 seconds)
}

startInterval(); // Start the initial interval

document.addEventListener("DOMContentLoaded", function () {
  const paginationSymbols = document.querySelectorAll(".pagination-symbol");
  const customButtons = document.querySelectorAll(".custom-button");
  const customButtonContainer = document.querySelector(
    ".custom-button-container"
  );
  const customSlider = document.getElementById("custom-slider");
  const leftButton = document.querySelector(".scroll-button1");
  const rightButton = document.querySelector(".scroll-button2");

  let currentSlide = 0;

  function updatePagination(activeIndex) {
    paginationSymbols.forEach((symbol, index) => {
      if (index === activeIndex) {
        symbol.classList.add("active");
      } else {
        symbol.classList.remove("active");
      }
    });
  }

  function changeSlide(index) {
    currentSlide = index;
    updateSliders();
  }

  function updateSliders() {
    const translateValue = -currentSlide * 100 + "%";
    customSlider.style.transform = `translateX(${translateValue})`;

    paginationSymbols.forEach((symbol, index) => {
      symbol.classList.toggle("active", index === currentSlide);
    });

    customButtons.forEach((button, index) => {
      button.classList.toggle("active", index === currentSlide);
    });
  }

  function scrollSlider(direction) {
    const totalSlides = 9; // Assuming 9 slides
    const increment = direction === "left" ? -1 : 1;
    currentSlide = (currentSlide + increment + totalSlides) % totalSlides;
    updateSliders();
  }

  leftButton.addEventListener("click", function () {
    scrollSlider("left");
    customButtonContainer.scrollLeft -= 50; // Adjust the scroll amount as needed
  });

  rightButton.addEventListener("click", function () {
    customButtonContainer.scrollLeft += 50; // Adjust the scroll amount as needed
    scrollSlider("right");
  });

  customButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      changeSlide(index);
      updatePagination(index);
    });
  });

  // Add event listeners for your pagination buttons if needed
  paginationSymbols.forEach((symbol, index) => {
    symbol.addEventListener("click", function () {
      changeSlide(index);
      updatePagination(index);
    });
  });
});

// Toggle button

function toggleButton(selectedId) {
  const buttons = document.querySelectorAll(".toggle-button");
  buttons.forEach((btn) => {
    btn.classList.remove("selected");
  });

  document.getElementById("new-releases").style.display = "none";
  document.getElementById("coming-soon").style.display = "none";

  document.getElementById(selectedId).style.display = "flex";

  event.target.classList.add("selected");
}

// page 4

  const customButtonContainer = document.querySelector('.custom-button-container4');
  const paginationSymbols = document.querySelectorAll('.pagination-symbol4');

  function scrollCustomSlider1(direction) {
    const currentSlideIndex = getCurrentSlideIndex();
    let newSlideIndex;

    if (direction === 'left') {
      newSlideIndex = Math.max(0, currentSlideIndex - 1);
    } else {
      newSlideIndex = Math.min(paginationSymbols.length - 1, currentSlideIndex + 1);
    }

    scrollCustomSlider1To(newSlideIndex);
  }

  function scrollCustomSlider1To(index) {
    const slideWidth = customButtonContainer.offsetWidth;
    customButtonContainer.scroll({
      left: index * slideWidth,
      behavior: 'smooth',
    });
    updatePagination(index);
  }

  function getCurrentSlideIndex() {
    const slideWidth = customButtonContainer.offsetWidth;
    return Math.round(customButtonContainer.scrollLeft / slideWidth);
  }

  function updatePagination(activeIndex) {
    paginationSymbols.forEach((symbol, index) => {
      if (index === activeIndex) {
        symbol.classList.add('active');
      } else {
        symbol.classList.remove('active');
      }
    });
  }

  document.querySelector('.scroll-button1_1').addEventListener('click', () => {
    scrollCustomSlider1('left');
  });

  document.querySelector('.scroll-button2_2').addEventListener('click', () => {
    scrollCustomSlider1('right');
  });

  paginationSymbols.forEach((symbol, index) => {
    symbol.addEventListener('click', () => {
      scrollCustomSlider1To(index);
    });
  });

