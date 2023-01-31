
const bar = document.getElementById("togglebtn");
const sidebar= document.getElementById("sidebar");
const close = document.getElementById("closebtn");
bar.onclick = function() {
    
    sidebar.style.display = "block";
}

close.onclick= function() {
    sidebar.style.display = "none";
}