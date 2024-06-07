// document.addEventListener("DOMContentLoaded", function () {
//     navLinks = document.querySelectorAll("nav a");

//     summer = document.querySelector(".summer");
//     spring = document.querySelector(".spring");
//     autumn = document.querySelector(".autumn");
//     winter = document.querySelector(".winter");

//     // Function to hide all sections
//     function hideAllSections() {
//         summer.style.display = "none";
//         spring.style.display = "none";
//         autumn.style.display = "none";
//         winter.style.display = "none";
//     }

//     // Function to show all sections
//     function showAllSections() {
//         summer.style.display = "block";
//         spring.style.display = "block";
//         autumn.style.display = "block";
//         winter.style.display = "block";
//     }

//     // Hide all sections initially
//     hideAllSections();
//     summer.style.display = "block";

//     // Add event listeners to navigation links
//     navLinks.forEach(function (link) {
//         link.addEventListener("click", function (e) {
//             e.preventDefault();

//             hideAllSections();

//             var allseasons = this.getAttribute("href").slice(1);

//             document.querySelector("." + allseasons).style.display = "block";

//             // Remove active class from all links
//             navLinks.forEach(function (link) {
//                 link.classList.remove("active");
//             });

//             // Add active class to the clicked link
//             this.classList.add("active");
//         });
//     });

//     // Show all sections when clickMeBtn is clicked
//     clickMeBtn = document.querySelector(".clickMeBtn");
//     clickMeBtn.addEventListener("click", function () {
//         showAllSections();

//         // Add active class to all navigation links except summerLink
//         navLinks.forEach(function (link) {
//             if (link !== summerLink) {
//                 link.classList.add("active");
//             }
//         });
//     });

//     // Initially set the "summer" link as active
//     summerLink = document.querySelector(".summerLink");
//     summerLink.classList.add("active");

// });



document.addEventListener("DOMContentLoaded", function () {
    navLinks = document.querySelectorAll("nav a");
    seasons = {
        "summer": document.querySelector(".summer"),
        "spring": document.querySelector(".spring"),
        "autumn": document.querySelector(".autumn"),
        "winter": document.querySelector(".winter")
    };

    function hideAllSections() {
        for (season in seasons) {
            seasons[season].style.display = "none";
        }
    }

    function showAllSections() {
        for (season in seasons) {
            seasons[season].style.display = "block";
        }
    }

    hideAllSections();
    seasons["summer"].style.display = "block";

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            hideAllSections();
            allSeasons = this.getAttribute("href").slice(1);
            seasons[allSeasons].style.display = "block";

            navLinks.forEach(function (link) {
                link.classList.remove("active");
            });
            this.classList.add("active");
        });
    });

    const clickMeBtn = document.querySelector(".clickMeBtn");

    clickMeBtn.addEventListener("click", function () {
        showAllSections();
        navLinks.forEach(function (link) {
            if (link !== document.querySelector(".summerLink")) {
                link.classList.add("active");
            }
        });
    });

    document.querySelector(".summerLink").classList.add("active");
});