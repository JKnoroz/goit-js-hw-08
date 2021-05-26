import images from "./gallery-items.js";

console.log(images);

const gallery = document.querySelector("ul.js-gallery");
const bigImg = document.querySelector("img.lightbox__image");

console.log(gallery);

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

gallery.addEventListener("click", imageEnlarge);

function imageEnlarge(evt) {
  evt.preventDefault();

  const imgClick = evt.target;
  if (imgClick.nodeName !== "IMG") {
    return;
  }
  modalOpen(imgClick.dataset.sourse, imgClick.alt);
}

function modalOpen(source, alt) {
  bigImg.classlist.add("is-open");
  bigImg.src = source;
  bigImg.alt = alt;
}
