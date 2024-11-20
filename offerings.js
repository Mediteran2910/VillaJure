const carouselTrack = document.querySelector(".carousel-track");
const carouselItems = Array.from(document.querySelectorAll(".carousel-item"));
const prevButton = document.querySelector("#prev-btn");
const nextButton = document.querySelector("#next-btn");

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const closeButton = document.querySelector(".close-btn");

let currentIndex = 0;

// Update the carousel display
function updateCarousel() {
  carouselItems.forEach((item, index) => {
    item.classList.remove(
      "center",
      "left",
      "right",
      "far-left",
      "far-right",
      "hidden"
    );

    if (index === currentIndex) {
      item.classList.add("center");
    } else if (
      index ===
      (currentIndex - 1 + carouselItems.length) % carouselItems.length
    ) {
      item.classList.add("left");
    } else if (index === (currentIndex + 1) % carouselItems.length) {
      item.classList.add("right");
    } else if (
      index ===
      (currentIndex - 2 + carouselItems.length) % carouselItems.length
    ) {
      item.classList.add("far-left");
    } else if (index === (currentIndex + 2) % carouselItems.length) {
      item.classList.add("far-right");
    } else {
      item.classList.add("hidden");
    }
  });
}

// Move to the previous image
prevButton.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  updateCarousel();
});

// Move to the next image
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  updateCarousel();
});

// Initialize the carousel
updateCarousel();

// Handle clicking on carousel item to enlarge the image
carouselItems.forEach((item) => {
  item.addEventListener("click", () => {
    modal.style.display = "flex"; // Show the modal
    modalImage.src = item.src; // Set the clicked image to the modal
  });
});

// Close the modal when the close button is clicked
closeButton.addEventListener("click", () => {
  modal.style.display = "none"; // Hide the modal
});