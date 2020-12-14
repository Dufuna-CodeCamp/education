let className = document.querySelector('#className');
let btnAdd = document.querySelector('#addButton');
let addedRooms = document.querySelector('#addedRooms');

btnAdd.addEventListener('click',() =>{
    addedRooms.innerText = className.value;
    event.preventDefault();
});
