// Sample admin credentials
const credentials = {
    username: 'admin',
    password: 'admin123'
};

// Sample game data
let games = [
    {
        name: 'CG FC 24',
        thumbnail: 'images/cgfc.avif',
        url: 'https://www.crazygames.com/game/cg-fc-24',
        likes: 150,
        views: 2000
    },
    {
        name: 'Supermarket sort',
        thumbnail: 'images/supermarket.avif',
        url: 'https://www.crazygames.com/game/supermarket-sort-grocery-game',
        likes: 250,
        views: 5000
    },
    {
        name: 'Gun Strike Runner',
        thumbnail: 'images/gun-strike-runner.avif',
        url: 'https://www.crazygames.com/game/gun-strike-runner',
        likes: 188,
        views: 4800
    }
];

let isAddingNewGame = false; // This flag will tell us whether we are adding or editing a game
let currentGameIndex = null; // Holds the index of the game being edited

//Add your code below

const loginPage = document.querySelector('#login-page');
const dashboardPage = document.querySelector('#dashboard-page');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const loginError = document.querySelector('#login-error');
const gameList = document.querySelector('#game-list');
const editModal = document.querySelector('#edit-modal');
const closeEditModal = document.querySelector('#close-edit-modal');
const editName = document.querySelector('#edit-name');
const editUrl = document.querySelector('#edit-url');
const editLikes = document.querySelector('#edit-likes');
const editViews = document.querySelector('#edit-views');
const GameName = document.querySelector('#GameName');
const GameUrl = document.querySelector('#GameUrl');
const GameLikes = document.querySelector('#GameLikes');
const GameViews = document.querySelector('#GameViews');
const addNewGameBtn = document.querySelector('#add-new-game-btn');
const NewGameInfo = document.querySelector('#NewGameInfo');
const modalTitle = document.querySelector('#modal-title');
const editThumbnail = document.querySelector('#edit-thumbnail');
const removeModal = document.querySelector('#remove-modal');
const cancelRemove = document.querySelector('#cancel-remove');
const confirmRemove = document.querySelector('#confirm-remove');
const closeRemoveModal = document.querySelector('#close-remove-modal');


const LogInBtn = document.querySelector('#LogInBtn');


LoadGames();

LogInBtn.addEventListener('click', () => {
    if (username.value == credentials.username && password.value == credentials.password) {
        loginPage.style.display = 'none';
        dashboardPage.style.display = 'block';
    }
    else {
        loginError.textContent = 'Wrong Credentsials'
    }
})

function LoadGames() {
    gameList.innerHTML = '';
    for (let i = 0; i < games.length; i++) {
        gameList.innerHTML += `
    <tr>
    <td id="GameName">${games[i].name}</td>
    <td><img src="${games[i].thumbnail}" alt=""></td>
    <td id="GameUrl"><a href="${games[i].url}" target="_blank">Play Game</a></td>
    <td id="GameLikes">${games[i].likes}</td>
    <td id="GameViews">${games[i].views}</td>
    <td><button class="edit" onclick="openEditModel(${i})">Edit</button></td>
    <td><button class="remove" onclick="openRemovleModel(${i})">Remove</button></td>
    </tr>
    `
    }
}

function openEditModel(index = null) {
    currentGameIndex = index;

    if (index === null) {
        isAddingNewGame = true;
        modalTitle.textContent = 'Add New Game';
        editName.value = '';
        editThumbnail.value = 'images/cgfc.avif';
        editUrl.value = '';
        editLikes.value = '';
        editViews.value = ''
    }
    else {
        isAddingNewGame = false;
        modalTitle.textContent = 'Edit Game';
        const game = games[index];
        editName.value = game.name;
        editUrl.value = game.url;
        editThumbnail.value = game.thumbnail;
        editLikes.value = game.likes;
        editViews.value = game.views;
    }

    editModal.style.display = 'block';
}

function openRemovleModel(n) {


    games.splice(n, 1);
    LoadGames()

}



SubmitEditBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const newGame = {
        name: editName.value,
        thumbnail: editThumbnail.value,
        url: editUrl.value,
        likes: parseInt(editLikes.value),
        views: parseInt(editViews.value)
    }

    if (isAddingNewGame) {
        games.push(newGame)
    }
    else {
        games[currentGameIndex] = newGame;
    }

    editModal.style.display = 'none';
    LoadGames()
})

closeEditModal.addEventListener('click', () => {
    editModal.style.display = 'none'
})


addNewGameBtn.addEventListener('click', () => {
    editModal.style.display = 'block';
    const newGame = {
        name: editName.value,
        thumbnail: editThumbnail.value,
        url: editUrl.value,
        likes: parseInt(editLikes.value),
        views: parseInt(editViews.value)
    }

    games.push(newGame);
    LoadGames();
})


cancelRemove.addEventListener('click', () => {
    removeModal.display = 'none'
})