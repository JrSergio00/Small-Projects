const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');

function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn(){
    if( !isLampBroken() ){
    lamp.src = "images/ligada.jpg";
    body.style.backgroundImage = "linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)";
    h1.style.color = "white";
    }
}
function lampOff(){
    if( !isLampBroken() ){
    lamp.src = "images/desligada.jpg"
    body.style.backgroundImage = "linear-gradient(to right, #434343 0%, black 100%)";
    h1.style.color = "black";
    }
}
function lampBroken(){
    lamp.src = "images/quebrada.jpg"
    body.style.backgroundImage = "linear-gradient(to right, #434343 0%, black 100%)";
    h1.style.color = "black";
}

turnOn.addEventListener('click', lampOn);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseout', lampOff);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('dblclick', lampBroken)