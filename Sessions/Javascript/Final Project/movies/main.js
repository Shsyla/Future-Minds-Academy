let allData = [
    {
        year: "2024",
        name: "Inside Out 2",
        thumb: "findOut.PNG",
        reviews: "104"
    },
    {
        year: "2023",
        name: "The Taste of Things",
        thumb: "thetaste.jpg",
        reviews: "303"
    }
];

const allMovies = document.querySelector("#allMovies");
const addBTN = document.querySelector("#addBTN");
const moviesModal = document.querySelector("#moviesModal");
const cancelBTN = document.querySelector("#cancelBTN");
const submitBTN = document.querySelector("#submitBTN");
const year = document.querySelector("#year");
const movieTitle = document.querySelector("#movieTitle");
const thumb = document.querySelector("#thumb");
const reviews = document.querySelector("#reviews");
const modalTitle = document.querySelector("#modalTittle");

let editAction = false;
let currentMovieIndex = null;

listTable();

function listTable() {
    let recordsHTML = '';
    for (let i = 0; i < allData.length; i++) {
        recordsHTML += `<tr>
            <td>${allData[i].year}</td>
            <td>${allData[i].name}</td>
            <td><img width="50" src="${allData[i].thumb}" alt=""></td>
            <td>${allData[i].reviews}</td>
            <td>
                <button onclick="editMovie(${i})">Edit</button> 
                <button onclick="removeMovie(${i})">Remove</button>
            </td>
        </tr>`;
    }
    allMovies.innerHTML = recordsHTML;
}

addBTN.addEventListener("click", () => {
    openModal("Add Movie");
});

cancelBTN.addEventListener("click", removeModal);
submitBTN.addEventListener('click', submitForm);

function openModal(title) {
    modalTitle.textContent = title;
    moviesModal.style.display = "block";
}

function removeModal() {
    year.value = "";
    movieTitle.value = "";
    reviews.value = "";
    editAction = false;
    modalTitle.textContent = "Add Movie";
    moviesModal.style.display = "none";
}

function submitForm() {
    if (year.value !== '' && movieTitle.value !== '' && reviews.value !== '') {
        let movieData = {
            year: year.value,
            name: movieTitle.value,
            thumb: thumb.value,
            reviews: reviews.value
        };
    
        if (!editAction) {
            allData.push(movieData);
        } else {
            allData[currentMovieIndex] = movieData;
            editAction = false;
        }
    
        removeModal();
        listTable();
    }
}

function editMovie(index) {
    currentMovieIndex = index;
    editAction = true;
    openModal("Edit Movie");
    
    year.value = allData[index].year;
    movieTitle.value = allData[index].name;
    reviews.value = allData[index].reviews;
    thumb.value = allData[index].thumb;
}

function removeMovie(index) {
        allData.splice(index, 1);
        listTable();

}
