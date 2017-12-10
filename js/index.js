// animations library
AOS.init();


// navbar menu dropdown
$(".navbar__hamburger").on("click", () => {
    $(".navbar__dropdown").fadeToggle();
})


// slideshow
function cycleBackgrounds() {
    var index = 0;
 
    $imageEls = $('.slideshow .slide'); // Get the images to be cycled.
 
    setInterval(function () {
        // Get the next index.  If at end, restart to the beginning.
        index = index + 1 < $imageEls.length ? index + 1 : 0;
        
        // Show the next
        $imageEls.eq(index).addClass('show');
        
        // Hide the previous
        $imageEls.eq(index - 1).removeClass('show');
    }, 5000);
};

cycleBackgrounds();

$(".about-btn").on("click", (e) => {
    e.preventDefault();
    $(".navbar__dropdown").fadeOut();
    document.querySelector('#about').scrollIntoView({ block: "start", behavior: 'smooth' });
});

$(".menu-btn").on("click", (e) => {
    e.preventDefault();
    $(".navbar__dropdown").fadeOut();
    document.querySelector('#menu').scrollIntoView({ block: "start", behavior: 'smooth' });
});

$(".logo-btn").on("click", (e) => {
    e.preventDefault();
    document.querySelector('.slideshow').scrollIntoView({ behavior: 'smooth' });
});

$(".restaurants-btn").on("click", (e) => {
    e.preventDefault();
    $(".navbar__dropdown").fadeOut();
    document.querySelector('#restaurants').scrollIntoView({ block: "start", behavior: 'smooth' });
});

$(".contact-btn").on("click", (e) => {
    e.preventDefault();
    $(".navbar__dropdown").fadeOut();
    document.querySelector('#contact').scrollIntoView({ block: "start", behavior: 'smooth' });
});
