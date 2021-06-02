import images from "./gallery-items.js";

const gallery = document.querySelector("ul.js-gallery");
const bigImg = document.querySelector("img.lightbox__image");

// make gallery

const makeGalleryItemMarkup = (image) => {
  const { description, original, preview } = image;
  return `
  <li class="gallery__item">
  <a
    class="gallery__link"
    href= ${original}
  >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>`;
};

const makeGalleryMarkup = images.map(makeGalleryItemMarkup).join("");

gallery.insertAdjacentHTML("beforeend", makeGalleryMarkup);

// open and close modal

const modal = document.querySelector(".js-lightbox");
const button = document.querySelector(".lightbox__button");
const openModal = () => modal.classList.add("is-open");
const closeModal = () => modal.classList.remove("is-open");
const overlay = document.querySelector(".lightbox__overlay");

gallery.addEventListener("click", imageEnlarge);

function imageEnlarge(evt) {
  evt.preventDefault();

  const imgClick = evt.target;
  if (imgClick.nodeName !== "IMG") {
    return;
  }
  console.log("Img clicked");
  openModal();
  console.log(imgClick.src);
  bigImg.src = imgClick.dataset.source;
  bigImg.alt = imgClick.dataset.alt;
}

button.addEventListener("click", imageClose);

function imageClose() {
  closeModal();
  bigImg.src = "";
}

overlay.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    imageClose();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    imageClose();
  }
  // if (e.key === "ArrowLeft") {
  //   imageMove(-1);
  // }
  // if (e.key === "ArrowRight") {
  //   imageMove(+1);
  // }
});

// function imageMove(arrow) {
// }
