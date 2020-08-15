console.log(gallery);
const list = document.querySelector(".js-gallery");
const div1 = document.querySelector(".js-lightbox");
const div2 = document.querySelector(".lightbox__overlay");
const div3 = document.querySelector(".lightbox__content");
const image = document.querySelector(".lightbox__image");
const button = document.querySelector(".lightbox__button");
// console.log(list, div1, div2, div3, image, button);

// const generateItem = function (src, ds, alt) {
//   const item = document.createElement("li");
//   const link = document.createElement("a");
//   link.classList.add("gallery__link");
//   link.setAttribute("href", "");
//   const img = document.createElement("img");
//   img.classList.add("gallery__image");
//   img.setAttribute("src", src);
//   img.setAttribute("data-source", ds);
//   img.setAttribute("alt", alt);

//   link.appendChild(img);
//   //   console.log(link);
//   item.appendChild(link);
//   list.appendChild(item);
//   return list;
// };
// generateItem();

const generateGallery = function (array, place) {
  return array.map((elem) => {
    let keys = Object.keys(elem);
    const item = document.createElement("li");
    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.setAttribute("href", "");
    const img = document.createElement("img");
    img.classList.add("gallery__image");
    img.setAttribute("src", elem[keys[0]]);
    img.setAttribute("data-source", elem[keys[1]]);
    img.setAttribute("alt", elem[keys[2]]);

    link.appendChild(img);
    //   console.log(link);
    item.appendChild(link);
    place.appendChild(item);
    // console.log(elem);
    // callback(elem[keys[0]], elem[keys[1]], elem[keys[2]]);
    // let a = callback(elem[keys[0]], elem[keys[1]], elem[keys[2]]);
    // console.log(a);
    // return list.insertAdjacentElement("afterbegin", a);
  });
};
generateGallery(gallery, list);

// МОДАЛЬНОЕ ОКНО

list.addEventListener("click", (event) => {
  // console.log("click", event.target.nodeName);
  // console.log("click", event.target.value);
  toOpenModal(event);
});

function toOpenModal(event) {
  if (event.target.nodeName === "IMG") {
    div1.classList.add("is-open");
    let path = event.target.getAttribute("data-source");
    image.src = path;
  }
  return;
}

function toCloseModal() {
  div1.classList.remove("is-open");
  image.src = "";
}
button.addEventListener("click", toCloseModal);
