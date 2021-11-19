const h2 = document.createElement('h2');
h2.textContent = `This content added by Javascript`;

document.querySelector(`body`).appendChild(h2);

const clickMe = document.getElementById(`clickMe`);
const body = document.getElementsByTagName(`body`);

clickMe.addEventListener(`click`, function(){
    clickMe.style.textAlign = `center`;
    h2.style.background = `black`;
})



