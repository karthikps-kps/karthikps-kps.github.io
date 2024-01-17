// Open the pop-up when the page is loaded
document.addEventListener('DOMContentLoaded', function() {
    showPopup();
});

function showPopup() {
    document.getElementById("popupContainer").style.display = "block";
}

function closePopup() {
    document.getElementById("popupContainer").style.display = "none";
}
