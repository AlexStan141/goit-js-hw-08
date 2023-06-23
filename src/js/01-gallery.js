// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

var ul = document.getElementsByClassName('gallery')[0];
ul.style.listStyle = 'none';

galleryItems.forEach(function (image) {
  var img = document.createElement('img');
  img.classList.add('gallery__image');
  img.setAttribute('src', image.preview);
  img.setAttribute('alt', image.description);
  var a = document.createElement('a');
  a.classList.add('gallery__link');
  a.setAttribute('href', image.original);
  a.append(img);
  var li = document.createElement('li');
  li.classList.add('gallery__item');
  li.append(a);
  ul.append(li);
});

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
gallery.on('show.simplelightbox', function () {});

// Change code below this line

console.log(galleryItems);
