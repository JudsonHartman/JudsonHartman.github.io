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


document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
  
    links.forEach(link => {
    link.addEventListener("click", smoothScroll);
});
  
function smoothScroll(event) {
    event.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const duration = 1000; // Adjust the duration as needed (in milliseconds)
    let startTime = null;
  
    function scrollAnimation(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
        }
        const timeElapsed = currentTime - startTime;
        const scrollY = easeInOut(timeElapsed, startPosition, targetPosition - startPosition, duration);
        window.scrollTo(0, scrollY);
        
        if (timeElapsed < duration) {
            requestAnimationFrame(scrollAnimation);
        }
    }
  
    function easeInOut(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(scrollAnimation);
    }
});


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
