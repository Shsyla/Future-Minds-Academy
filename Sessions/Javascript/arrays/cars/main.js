console.log(allcars[0] [2]);


const carList = document.querySelector('#carList');
const carheader = document.querySelector('#carheader');

console.log(allcars[0]);

let fetchHeaders = allcars[0];
let fetchAllCars = allcars[1].cars;

carheader.innerHTML = '';
for(let j=0; j<fetchHeaders.length; j++){
    carheader.innerHTML +=`
        <th>${fetchHeaders[j]}</th>
    `;
}

for(let i=0; i<fetchAllCars.length; i++){
    carList.innerHTML += `
        <tr>
            <td>${fetchAllCars[i].category}</td>
            <td>${fetchAllCars[i].brand}</td>
            <td>${fetchAllCars[i].model}</td>
            <td>${fetchAllCars[i].year}</td>
        </tr>
    `;
}