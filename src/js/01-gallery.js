// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
const galleryMarkUp = galleryItems.map(({preview, original, description})=> {
  return `<a
      class="gallery__link"
      href="${original}"      
    >
      <img
        class="gallery__image"
        src="${preview}"       
        alt="${description}"
      />
   </a>`;
}).join("");

galleryEl.insertAdjacentHTML("afterbegin", galleryMarkUp);


  let gallery = new SimpleLightbox('.gallery a', {  /*options */captions:'true', captionsData: 'alt', captionDelay:250, captionPosition:'bottom' });