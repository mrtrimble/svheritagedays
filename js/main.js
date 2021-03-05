// Image Gallery JS:
const galleries = document.querySelectorAll(".image-gallery");

if (galleries) {
  galleries.forEach(gallery => {
    const images = gallery.querySelectorAll(".image-gallery__image");
    images.forEach((image, index) => {
      const thumbBtn = image.querySelector(".image-gallery__thumbnail");
      const closeBtn = image.querySelector(".image-gallery__close-btn");
      const nextBtn = image.querySelector(".image-gallery__next-btn");
      const prevBtn = image.querySelector(".image-gallery__prev-btn");
      thumbBtn.addEventListener("click", () => image.classList.add("active"));
      closeBtn.addEventListener("click", () => image.classList.remove("active"));
      nextBtn.addEventListener("click", () => nextImage(images, index));
      prevBtn.addEventListener("click", () => prevImage(images, index));
    });
  });
}

const nextImage = (images, currentIndex) => {
  let index = currentIndex;
  images[currentIndex].classList.remove("active");

  if (index < images.length - 1) {
    index++;
  } else if (index == images.length - 1) {
    index = 0;
  }

  images[index].classList.add("active");
};

const prevImage = (images, currentIndex) => {
  let index = currentIndex;
  images[currentIndex].classList.remove("active");

  if (index === 0) {
    index = images.length - 1;
  } else if (index > 0) {
    index--;
  }

  images[index].classList.add("active");
};

document.onkeydown = function (evt) {
  evt = evt || window.event;
  var isEscape = false;

  if ("key" in evt) {
    isEscape = evt.key === "Escape" || evt.key === "Esc";
  } else {
    isEscape = evt.keyCode === 27;
  }

  if (isEscape) {
    const activeItems = document.querySelectorAll(".active");

    if (activeItems) {
      activeItems.forEach(active => {
        active.classList.remove("active");
      });
    }
  }
};