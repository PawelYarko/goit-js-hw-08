import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';


const gallery = document.querySelector('.gallery');


function createGallery(galleryItems){
  return galleryItems.map((img, index) =>
    `<div class="gallery__item">
    <a class="gallery__link" href="${img.original}">
      <img
        class="gallery__image"
        src="${img.preview}"
        data-source="${img.original}"
        data-index="${index}"
        alt="${img.description}"
        title="${img.description}"
      />
    </a>
  </div>`
  ).join("");
}

const createGalleryElements = createGallery(galleryItems);
gallery.innerHTML = createGalleryElements;

gallery.addEventListener('click', onImageClick);

let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'title' ,captionPosition:'bottom', captionDelay: 250, });

function onImageClick(e){
  e.preventDefault();  
}
