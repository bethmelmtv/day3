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
    // use user input to update state 
    // update DOM to reflect the new state
