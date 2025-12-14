const gerneList = document.querySelector('#gerneList');
const movies = document.querySelector('.movies');
const movieDetailShow = document.querySelector('#movieDetailShow');
let cGerne = 0;
let currentMovie;

gerneList.innerHTML = '';
for(let i=0; i<allMovies.length; i++){
    gerneList.innerHTML += `
        <option value="${i}">${allMovies[i].gerne}</option>
    `;
}

loadMovies(cGerne);


function loadMovies(b){
    cGerne = b;
    let currentGerne = allMovies[b].movies;
    movies.innerHTML = '';

    for(let i=0; i<currentGerne.length; i++){
        movies.innerHTML +=`
            <li onclick="movieDetail(this, ${i})">
                <div><img src="img/${currentGerne[i].thumb}" alt=""></div>
                <h3>${currentGerne[i].title}</h3>
                <div class="datetime">
                    <p>${currentGerne[i].date}</p>
                    <p>Length: ${currentGerne[i].length} mins</p>
                </div>
            </li>
        `;
    }
}

gerneList.addEventListener('change', (obj)=>{
    loadMovies(obj.target.value);
});

function movieDetail(li, e){
    if(currentMovie){ currentMovie.classList.remove('activeMovie'); }
    li.classList.add('activeMovie');
    let holdMovie = allMovies[cGerne].movies[e];
    movieDetailShow.innerHTML = '';
    movieDetailShow.innerHTML = `
        <div>
            <p>${holdMovie.date}</p>
            <p>Length: ${holdMovie.length} mins</p>
        </div>
        <h1>${holdMovie.title}</h1>
        ${holdMovie.trailer}
        <p>${holdMovie.desc}</p>
        <h4>${holdMovie.actors}</h4>
    `
    currentMovie = li;
    
}