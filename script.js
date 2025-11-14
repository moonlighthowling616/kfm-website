document.body.style.opacity = 0;
window.onload = () => {
    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = 1;
};

document.getElementById("preRegBtn").addEventListener("click", () => {
    window.open("https://forms.gle/YOUR_GOOGLE_FORM_LINK", "_blank");
});