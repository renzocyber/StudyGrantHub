document.addEventListener("DOMContentLoaded",()=>{

const input=document.getElementById("searchInput");

if(!input) return;

input.addEventListener("input",()=>{

const value=input.value.toLowerCase();

document.querySelectorAll(".card").forEach(card=>{

const text=card.innerText.toLowerCase();

card.style.display=text.includes(value)?"flex":"none";

});

});

});
