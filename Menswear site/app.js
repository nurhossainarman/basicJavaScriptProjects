var images = [
    "cover.jpg",
    "cover2.jpg",
  ];
  
  var currentImageIndex = 0;
  
  var sliderImage = document.getElementById("slider-image");
  
  setInterval(function() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    sliderImage.src = images[currentImageIndex];
  }, 3000);

  document.getElementById("shop-btn").addEventListener("click", function(){
    document.getElementById("boxes-container").scrollIntoView({behavior: "smooth"});
  });