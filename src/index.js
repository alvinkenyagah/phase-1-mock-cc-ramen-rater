document.addEventListener("DOMContentLoaded", function() {



let form = document.querySelector('form');

let name=document.getElementById('new-name');
let restaurant = document.getElementById('new-restaurant');
let image = document.getElementById('new-image');
let rating = document.getElementById('new-rating');
let comment = document.getElementById('new-comment');





form.addEventListener('submit', function(event){
    event.preventDefault();

    fetch('http://localhost:3001/ramens')
    .then(response => response.json())
    .then(data => {

        for(let i = 0 ;i < data.length;i++) {

let image = document.createElement('img');
image.src = data[]



        }






    })



})


})