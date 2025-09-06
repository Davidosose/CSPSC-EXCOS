        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        function toggleMenu() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        }

        function closeMenu() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Toggle menu when hamburger is clicked
        hamburger.addEventListener('click', toggleMenu);

        // Close menu when a nav link is clicked (mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    closeMenu();
                }
            });
        });

        // Close menu when clicking outside (mobile)
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && 
                navMenu.classList.contains('active') && 
                !navMenu.contains(e.target) && 
                !hamburger.contains(e.target)) {
                closeMenu();
            }
        });

        // Close menu on window resize if it's open
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        });

        // Smooth scrolling for anchor links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ 
                            behavior: 'smooth' 
                        });
                    }
                }
            });
        });

        
        // Handle Read More dropdown
document.querySelectorAll(".read-more").forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const moreText = button.nextElementSibling;

    moreText.classList.toggle("active");

    // Change button text depending on state
    if (moreText.classList.contains("active")) {
      button.textContent = "Read Less ▲";
    } else {
      button.textContent = "Read More ▼";
    }
  });
});
