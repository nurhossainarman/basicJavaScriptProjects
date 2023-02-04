const toggleButton = document.getElementById("toggle");
const sidebar = document.getElementById("sidebar");

toggleButton.onclick = function() {
  
  sidebar.classList.toggle("active");  
};



document.getElementById("element1").addEventListener("click", function() {
  document.getElementById("details1").scrollIntoView({behavior: "smooth"});
});
document.getElementById("element2").addEventListener("click", function() {
  document.getElementById("details2").scrollIntoView({behavior: "smooth"});
});
document.getElementById("element3").addEventListener("click", function() {
  document.getElementById("details3").scrollIntoView({behavior: "smooth"});
});
