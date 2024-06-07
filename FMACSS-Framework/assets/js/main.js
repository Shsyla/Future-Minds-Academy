// Nav
// Get the menu image element
const menuImage = document.querySelector('.menu-container img');

// Get the dropdown menu element
const dropdownMenu = document.querySelector('.dropdown-menu');

// Add click event listener to the menu image
menuImage.addEventListener('click', function (event) {
    // Toggle the visibility of the dropdown menu
    dropdownMenu.classList.toggle('d-none');
    // Prevent click event from propagating to the document body
    event.stopPropagation();
});

// Add click event listener to the document body
document.body.addEventListener('click', function (event) {
    // Check if the clicked element is not inside the dropdown or the menu image
    if (!dropdownMenu.contains(event.target) && !menuImage.contains(event.target)) {
        // Hide the dropdown menu
        dropdownMenu.classList.add('d-none');
    }
});


// Get the menu image element
const cartImage = document.querySelector('.shopping-cart-container img');

// Get the dropdown menu element
const dropdownCart = document.querySelector('.dropdown-shopping-cart');

// Add click event listener to the menu image
cartImage.addEventListener('click', function (event) {
    // Toggle the visibility of the dropdown menu
    dropdownCart.classList.toggle('d-none');
    // Prevent click event from propagating to the document body
    event.stopPropagation();
});

// Add click event listener to the document body
document.body.addEventListener('click', function (event) {
    // Check if the clicked element is not inside the dropdown
    if (!dropdownCart.contains(event.target) && !cartImage.contains(event.target)) {
        // Hide the dropdown menu
        dropdownCart.classList.add('d-none');
    }
});


// Statistics Section
function drawHalfColoredCircle(canvasId, color, fillPercentage, text1, text2) {
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");

    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 100; // Adjust the radius here to make the circles smaller

    var startAngle = -Math.PI / 2; // Start angle
    var endAngle = startAngle + (2 * Math.PI * fillPercentage); // End angle based on fill percentage

    var animationDuration = 5000; // Animation duration in milliseconds
    var animationStartTime = null;

    function animate(timestamp) {
        if (!animationStartTime) animationStartTime = timestamp;
        var progress = timestamp - animationStartTime;

        // Calculate the current fill angle based on animation progress
        var currentFillAngle = startAngle + ((endAngle - startAngle) * (progress / animationDuration));

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the whole circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.strokeStyle = "#ccc"; // Gray color
        ctx.lineWidth = 20; // Adjust the line width to maintain proportion
        ctx.stroke();

        // Draw the colored arc
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, currentFillAngle);
        ctx.strokeStyle = color;
        ctx.stroke();

        // Draw text inside the circle
        ctx.fillStyle = "#000"; // Black color
        ctx.font = "22px Arial"; // Adjust font size here
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(text1, centerX, centerY - 15); // Adjust position for text1
        ctx.font = "30px Arial"; // Adjust font size for the second text
        ctx.fillText(text2, centerX, centerY + 20); // Adjust position for the second text

        // Continue the animation until duration is reached
        if (progress < animationDuration) {
            requestAnimationFrame(animate);
        }
    }

    // Start the animation
    requestAnimationFrame(animate);
}

// Intersection Observer to trigger animation when scrolling to the statistics section
var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            // Start animations when the statistics section is in view
            drawHalfColoredCircle("canvas1", "#1C274C", 0.9, "Super-Senior", "90%");
            drawHalfColoredCircle("canvas2", "#54aa2c", 0.53, "Senior", "53%");
            drawHalfColoredCircle("canvas3", "#1C274C", 0.25, "Pro", "25%");
            drawHalfColoredCircle("canvas4", "#54aa2c", 0.72, "Junior", "72%");
            observer.unobserve(entry.target); // Stop observing once animation starts
        }
    });
}, { threshold: 0.5 });

// Observe the statistics section
var statisticsSection = document.getElementById('statistics');
observer.observe(statisticsSection);



// Testimonials Section
const testimonials = document.querySelectorAll('.testimonials-container > div');

let currentTestimonialIndex = 0;

function showTestimonial(index) {
    // Hide all testimonials
    testimonials.forEach(testimonial => {
        testimonial.classList.add('d-none');
    });

    // Show the testimonial at the specified index
    testimonials[index].classList.remove('d-none');
}

// Initial display (only the first testimonial is active)
showTestimonial(currentTestimonialIndex);

document.getElementById('nextBtn').addEventListener('click', function () {
    // If there's another testimonial to show
    if (currentTestimonialIndex < testimonials.length - 1) {
        currentTestimonialIndex++;
    } else {
        currentTestimonialIndex = 0; // Start from the first testimonial again
    }
    showTestimonial(currentTestimonialIndex);
});

document.getElementById('prevBtn').addEventListener('click', function () {
    // If there's a previous testimonial to show
    if (currentTestimonialIndex > 0) {
        currentTestimonialIndex--;
    } else {
        currentTestimonialIndex = testimonials.length - 1; // Show the last testimonial
    }
    showTestimonial(currentTestimonialIndex);
});