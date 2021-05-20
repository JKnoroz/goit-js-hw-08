import images from "./gallery-items.js";

console.log(images);

const gallery = document.querySelector(".js-gallery");

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
    console.log(evt.target);
    
    if(!)
}
