let observer = new IntersectionObserver((e) => {
  e.forEach((박스) => {
    if (박스.isIntersecting) {
      박스.target.style.opacity = 1;
    } else {
      박스.target.style.opacity = 0;
    }
  });
});
let div = document.querySelectorAll("h2");

observer.observe(div[0]);
observer.observe(div[1]);

console.log(박스);
