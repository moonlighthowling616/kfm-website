const eventsToggle = document.getElementById("eventsToggle");
const dropdown = document.querySelector(".dropdown");
const eventsMenu = document.getElementById("eventsMenu");
const mobileNavigationMenu = document.getElementById('mobile-navigation')
const mobileNavigationLinks = document.getElementById('mobile-navigation-links')


document.addEventListener('DOMContentLoaded', () => {

    mobileNavigationMenu.addEventListener('click', () => {
        // mobileNavigationLinks.classList.toggle('active')

        if (mobileNavigationLinks.classList.contains('active')) {
            hide()
        } else {
            show();
        }

    })

    function show() {
        mobileNavigationLinks.classList.add('active')
        mobileNavigationLinks.classList.remove('animate__slideOutLeft')
        mobileNavigationLinks.classList.add('animate__slideInLeft')
    }

    function hide() {
        mobileNavigationLinks.classList.remove('animate__slideInLeft')
        mobileNavigationLinks.classList.add('animate__slideOutLeft')

        mobileNavigationLinks.addEventListener('animationend', () => {
            mobileNavigationLinks.classList.remove('active')

        }, { once: true })

    }


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
})
