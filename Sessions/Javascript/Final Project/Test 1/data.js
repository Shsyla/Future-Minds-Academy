const games = [
    {
        id: 1,
        name: "Adventure Quest",
        thumbnail: "images/adventure-quest.png",
        plays: 1500,
        description: 1
    },
    {
        id: 2,
        name: "Space Invaders",
        thumbnail: "images/space-invaders.png",
        plays: 1200,
        description: 2
    },
    {
        id: 3,
        name: "Zombie Apocalypse",
        thumbnail: "images/zombie-apocalypse.png",
        plays: 900,
        description: 14
    },
];



const container = document.querySelector('#container');
const sidebar = document.querySelector('#sidebar');
const gameList = document.querySelector('#game-list');

const mainContent = document.querySelector('main-content');
const gameInfo = document.querySelector('#game-info');



LoadGames();
function LoadGames(){
gameList.innerHTML = '';
for(let i=0; i < games.length; i++){
    gameList.innerHTML +=`
                <div class="game-item" ${games[i].id}>
                    <img src="${games[i].thumbnail}" alt="Adventure Quest">
                    <div class="details">
                        <h4>${games[i].name}</h4>
                        <p>${games[i].plays}
                        </p>
                    </div>
                    <button onclick="loadGameDetails(${i})">Play Game</button>
                </div>
    `
}
};


function loadGameDetails(index) {
    const game = games[index];
    gameInfo.innerHTML = `
        <div class="game-details" ${games.id}>
            <h2>${game.name}</h2>
            <img src="${game.thumbnail}" alt="${game.name}">
            <p><strong>${game.plays}</strong> </p>
            <p>${'Enjoy the thrilling adventure of Avdenture Quest'}</p>
            
        </div>
    `;
};

