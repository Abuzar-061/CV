
        /* // <!-- ---------------Scroll Reveal Script/js---------------------- --> */
        ScrollReveal({
            reset: true,
            distance: '200px',
            duration: 2000,
            delay: 200
        });
        ScrollReveal().reveal('.water-animation , .about-page, .experience-page, .scroll', { origin: 'left' });


        // <!-- --------------Title/JS-------------- -->
        var title = document.title;
        window.addEventListener("blur", () => {
            document.title = "Come Back :(";
        })
        window.addEventListener("focus", () => {
            document.title = "Professional PortFolio-Website";
        });
        // <!-- --------------TYPED-TEXT-ANIMATION/JS-------------- -->
        var typed = new Typed(".typed-text-animation", {
            strings: ["UI/UX DESIGNER", "FULL STACK WEB DEVELOPER"],
            typeSpeed: 150,
            backSpeed: 150,
            loop: true,
        })
        // <!-- --------------Let's Talk/JS-------------- -->
        var chat = document.getElementById('chat');
        chat.addEventListener("click", () => {
            var URL = "https://wa.me/923457886992?";
            window.open(URL, "_blank");
        });
        var chatbot = document.getElementById('whatschat');
        chatbot.addEventListener("click", () => {
            var URL = "https://wa.me/923457886992?";
            window.open(URL, "_blank");
        });
        // <!-- --------------Smoothly Scrolling/JS-------------- -->
        // JavaScript code for smooth scrolling

        // Select all the navbar links
        const navbarLinks = document.querySelectorAll('ul li a');

        // Loop through each navbar link and add a click event listeners
        navbarLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                // Prevent the default behavior of anchor links
                event.preventDefault();

                // Get the target section's ID from the link's href attribute
                const targetId = link.getAttribute('href');

                // Get the target section element using its ID
                const targetElement = document.querySelector(targetId);

                // Calculate the target section's offset from the top of the page
                const targetOffset = targetElement.offsetTop;

                // Scroll smoothly to the target section
                window.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });
            });
        });


    // <!-- --------------/JS-------------- -->
    // <!-- --------------/JS-------------- -->
    // <!-- --------------/JS-------------- -->