const eventsToggle = document.getElementById("eventsToggle");
const dropdown = document.querySelector(".dropdown");
const eventsMenu = document.getElementById("eventsMenu");

function setDropdown(open) {
    if (!dropdown || !eventsToggle || !eventsMenu) return;
    dropdown.classList.toggle("active", open);
    eventsToggle.setAttribute("aria-expanded", open ? "true" : "false");
    eventsMenu.setAttribute("aria-hidden", open ? "false" : "true");
}

if (eventsToggle && dropdown) {
    eventsToggle.addEventListener("click", function (e) {
        e.preventDefault();
        setDropdown(!dropdown.classList.contains("active"));
    });

    document.addEventListener("click", function (e) {
        if (!dropdown.contains(e.target)) {
            setDropdown(false);
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') setDropdown(false);
    });
}