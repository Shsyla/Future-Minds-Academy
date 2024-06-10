const seasonImage = document.querySelector('#seasonImage');
const seasonTitle = document.querySelector('#seasonTitle');

function loadPage(season) {
    if (season === 'spring') {
        seasonImage.src = 'assets/images/spring.png';
        seasonTitle.textContent = 'Welcome to Spring';
    } else if (season === 'summer') {
        seasonImage.src = 'assets/images/summer.png';
        seasonTitle.textContent = 'Welcome to Summer';
    } else if (season === 'fall') {
        seasonImage.src = 'assets/images/fall.png';
        seasonTitle.textContent = 'Welcome to Fall';
    } else if (season === 'winter') {
        seasonImage.src = 'assets/images/winter.png';
        seasonTitle.textContent = 'Welcome to Winter';
    }
    
}

const navLinks = document.querySelectorAll('.navbar-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

const seasonsImg = {
    'spring': {
        image: 'assets/images/spring.png'
    },
    'summer': {
        image: 'assets/images/summer.png'
    },
    'fall': {
        image: 'assets/images/fall.png'
    },
    'winter': {
        image: 'assets/images/winter.png'
    }
};

function showAllSeasons() {
    const seasonImageContainer = document.getElementById('seasonImageContainer');
    seasonImageContainer.innerHTML = '';
   
    for (const key in seasonsImg) {
        const seasonData = seasonsImg[key];
        const img = document.createElement('img');
        img.src = seasonData.image;
        img.alt = key;
        img.classList.add('img-xxl');
        seasonImageContainer.appendChild(img);
    }

    const seasonTitle = document.getElementById('seasonTitle');
    if (seasonTitle) {
        seasonTitle.textContent = 'All Seasons';
    } 
}
