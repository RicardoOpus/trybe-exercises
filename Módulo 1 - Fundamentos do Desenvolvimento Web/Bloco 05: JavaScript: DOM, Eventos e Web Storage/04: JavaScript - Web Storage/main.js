function initialize() {
  let backgroundColor = localStorage.getItem("backgroundColor")
  if (backgroundColor) trocaCorFundo2 () 
}
initialize()



function createDiv() {
const createDiv1 = document.createElement('div');
createDiv1.classList.add('escolhas')
const afterSettings = document.getElementById('settings');
afterSettings.appendChild(createDiv1);
}

createDiv();

function fazEscolhaCores() {
  const fundos = document.querySelector('.escolhas');
    for (let i = 1; i <= 3; i += 1) {
      const createDiv2 = document.createElement('div');
      createDiv2.classList.add('cores' + i)
      fundos.appendChild(createDiv2);
    } 
}
fazEscolhaCores()

function trocaCorFundo1 () {
  document.body.style.removeProperty('color')
  document.body.style.backgroundColor='white';
  let color = document.body.style.backgroundColor;
  localStorage.setItem("backgroundColor", color);
}
function trocaCorFundo2 () {
  document.body.style.color='lightgray';
  document.body.style.backgroundColor='black';
  let color = document.body.style.backgroundColor;
  localStorage.setItem("backgroundColor", color);
}
function trocaCorFundo3 () {
  document.body.style.removeProperty('color')
  document.body.style.backgroundColor='wheat';
  let color = document.body.style.backgroundColor;
  localStorage.setItem("backgroundColor", color)
}
const cor1 = document.querySelector('.cores1');
const cor2 = document.querySelector('.cores2');
const cor3 = document.querySelector('.cores3');
cor1.addEventListener('click', trocaCorFundo1);
cor2.addEventListener('click', trocaCorFundo2);
cor3.addEventListener('click', trocaCorFundo3);

