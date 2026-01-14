// Run code after the page fully loads
window.addEventListener("load", function () {

    // Get popup elements
    const popup = document.getElementById("announcementPopup");
    const closeBtn = document.getElementById("closePopup");

    // Show popup automatically
    popup.style.display = "flex";

    // Hide popup when the button is clicked
    closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
    });
});
