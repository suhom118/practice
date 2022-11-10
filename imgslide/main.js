let images = [
  "https://images.unsplash.com/photo-1496440543089-3d0eb669f6f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=788&q=80",
  "https://images.unsplash.com/photo-1619961310056-1f5c8df685d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1503001831666-8f3cf3a24544?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1526306063970-d5498ad00f1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
  "https://images.unsplash.com/photo-1552694477-2a18dd7d4de0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
];

function imageSlider(parent, images) {
  let currentImage = 0;
  let slider = {
    parent: parent,
    images: parent.querySelector(".images"),
    thumbnails: parent.querySelector(".thumbnails"),
    backBtn: parent.querySelector(".back-btn"),
    nextBtn: parent.querySelector(".next-btn"),
  };

  slider.images.innerHTML = images
    .map(function (image) {
      return `<img src="${image}"/>`;
    })
    .join("");

  let imageNodes = slider.images.querySelectorAll("img");
  imageNodes[currentImage].classList.add("active");

  slider.thumbnails.innerHTML = slider.images.innerHTML;

  let thumbnailNodes = slider.thumbnails.querySelectorAll("img");
  thumbnailNodes[currentImage].classList.add("active");
  for (let i = 0; i < thumbnailNodes.length; i++) {
    thumbnailNodes[i].addEventListener("click", function () {
      slider.thumbnails.querySelector("img.active").classList.remove("active");
      thumbnailNodes[i].classList.add("active");
      imageNodes[currentImage].classList.remove("active");
      currentImage = i;
      imageNodes[currentImage].classList.add("active");
    });
  }

  slider.backBtn.addEventListener("click", function () {
    imageNodes[currentImage].classList.remove("active");
    currentImage--;
    if (currentImage < 0) {
      currentImage = images.length - 1;
    }
    imageNodes[currentImage].classList.add("active");
    slider.thumbnails.querySelector("img.active").classList.remove("active");
    thumbnailNodes[currentImage].classList.add("active");
  });

  slider.nextBtn.addEventListener("click", function () {
    imageNodes[currentImage].classList.remove("active");
    currentImage = (currentImage + 1) % images.length;
    imageNodes[currentImage].classList.add("active");
    slider.thumbnails.querySelector("img.active").classList.remove("active");
    thumbnailNodes[currentImage].classList.add("active");
  });
}

imageSlider(document.querySelector(".image-slider"), images);
