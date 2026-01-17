const mobileNavigationMenu = document.getElementById('mobile-navigation')
const mobileNavigationLinks = document.getElementById('mobile-navigation-links')
const closeMobileNavBtn = document.getElementById('close-mobile-nav')

// There may be two toggles (desktop + mobile) with the same id in the markup.
// Select all toggles and handle each dropdown independently.
const eventToggles = document.querySelectorAll('#eventsToggle');


document.addEventListener('DOMContentLoaded', () => {

    closeMobileNavBtn.addEventListener('click', () => {
        mobileNavigationLinks.classList.remove('active')
    })

    mobileNavigationMenu.addEventListener('click', () => {
        // mobileNavigationLinks.classList.toggle('active')

        if (mobileNavigationLinks.classList.contains('active')) {
            hide()
            mobileNavigationLinks.classList.remove('active')
        } else {
            mobileNavigationLinks.classList.add('active')
            show();
        }

    })

    function show() {
        // mobileNavigationLinks.classList.add('active')
        // mobileNavigationLinks.classList.remove('animate__slideOutLeft')
        // mobileNavigationLinks.classList.add('animate__slideInLeft')
    }

    function hide() {
        // mobileNavigationLinks.classList.remove('animate__slideInLeft')
        // mobileNavigationLinks.classList.add('animate__slideOutLeft')

        // mobileNavigationLinks.addEventListener('animationend', () => {
        //     mobileNavigationLinks.classList.remove('active')

        // }, { once: true })

    }


    function setDropdownFor(dropdownEl, open) {
        if (!dropdownEl) return;
        const toggle = dropdownEl.querySelector('#eventsToggle');
        const menu = dropdownEl.querySelector('.dropdown-menu');
        dropdownEl.classList.toggle('active', open);
        if (toggle) toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (menu) menu.setAttribute('aria-hidden', open ? 'false' : 'true');
    }

    if (eventToggles && eventToggles.length) {
        eventToggles.forEach(toggle => {
            const dd = toggle.closest('.dropdown');
            toggle.addEventListener('click', function (e) {
                e.preventDefault();
                setDropdownFor(dd, !dd.classList.contains('active'));
            });
        });

        document.addEventListener('click', function (e) {
            eventToggles.forEach(toggle => {
                const dd = toggle.closest('.dropdown');
                if (!dd.contains(e.target)) setDropdownFor(dd, false);
            });
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                eventToggles.forEach(toggle => {
                    const dd = toggle.closest('.dropdown');
                    setDropdownFor(dd, false);
                });
            }
        });
    }
})
