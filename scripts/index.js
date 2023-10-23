const text = document.querySelector(".second");

const sliders = document.querySelectorAll(".slide-in");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Student"
    }, 0);
    setTimeout(() => {
        text.textContent = "Teacher"
    }, 4000);
    setTimeout(() => {
        text.textContent = "Engineer"
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    })
},
appearOptions);

sliders.forEach( slider => {
    appearOnScroll.observe(slider);
});
