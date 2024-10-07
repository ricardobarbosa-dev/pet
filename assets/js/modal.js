//DOM
const modal = document.getElementById("searchModal");
const searchIcon = document.getElementById("searchIcon");
const closeBtn = document.getElementsByClassName("close")[0];

searchIcon.onclick = function() {
    modal.style.display = "block";
}
closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
