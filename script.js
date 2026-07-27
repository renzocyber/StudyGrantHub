document.addEventListener("DOMContentLoaded", () => {

const search = document.getElementById("searchInput");

if(search){

search.addEventListener("keyup", () => {

const value = search.value.toLowerCase().trim();

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

const text = card.innerText.toLowerCase();

card.style.display = text.includes(value) ? "block" : "none";

});

});

}

});document.addEventListener("DOMContentLoaded", () => {

const search = document.getElementById("searchInput");

if(search){

search.addEventListener("keyup", () => {

const value = search.value.toLowerCase().trim();

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

const text = card.innerText.toLowerCase();

card.style.display = text.includes(value) ? "block" : "none";

});

});

}

});
