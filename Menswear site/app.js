var images = [
    "cover.jpg",
    "cover1.jpg",
    "cover2.jpg",
  ];
  
  var currentImageIndex = 0;
  const shopBtn = document.getElementById("shop-btn");
  var sliderImage = document.getElementById("slider-image");

const textContainer = document.getElementById("text-container");
const textElements = textContainer.querySelectorAll(".text");
let currentText = 0;

function swapText() {
  textElements[currentText].classList.remove("fadeIn");
  currentText = (currentText + 1) % textElements.length;
  textElements[currentText].classList.add("fadeIn");
}

setInterval(swapText, 2000);

  
  setInterval(function() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    sliderImage.src = images[currentImageIndex];
  }, 3000);

  shopBtn.addEventListener("click", function(){
    document.getElementById("boxes-container").scrollIntoView({behavior: "smooth"});
  });