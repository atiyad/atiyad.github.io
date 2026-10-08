const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.2
    }
);


fadeElements.forEach(function(element) {

    observer.observe(element);

});
