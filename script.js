document.addEventListener('DOMContentLoaded', () => {
    // --- Reveal Items on Scroll ---
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.1
    });

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // --- Dynamic Header Button Reveal ---
    const navCta = document.getElementById('nav-cta');
    const heroSection = document.querySelector('.hero');

    if (navCta && heroSection) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > (heroSection.offsetHeight / 2)) {
                navCta.classList.add('visible');
            } else {
                navCta.classList.remove('visible');
            }
        });
    }

    // --- Mobile Menu Toggle Logic ---
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Animate hamburger → X
            mobileToggle.classList.toggle('open');
        });

        // Close menu and reset hamburger icon when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('open');
            }
        });
    }
});