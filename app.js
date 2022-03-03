// import functions
import { people } from './data.js';
console.log(people, 'people')

// grab DOM elements

///<select class="select" id="select"></select> located in our index.html
const selectElement = document.querySelector('.select');

///<select class="name" id="name"></select> located in our index.html

const name = document.getElementById('name');

const divContainer = document.querySelector('.contain');

const pronouns = document.querySelector('.pronouns');

const favPlace = document.querySelector('.fav-place');

const hobbies = document.querySelector('.hobbies');

console.log(pronouns);




// set event listeners 
    // get user input
selectElement.addEventListener('change', (e) => {
    console.log('user click');
});
    // use user input to update state 
function renderPerson(index) {
        //inside here will do something to the dom
    divContainer.classList.add(`${people[index].name}`);
    name.textContent = 'Name: ' + people[index].name;
    pronouns.textContent = 'Pronouns: ' + people[index].pronouns;
    favPlace.textContent = 'Favorite Place: ' + people[index].fav-place;

    for (let hobby of people[index].hobbies) {
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbies.appendChild(li);
    }
}

    // update DOM to reflect the new state
