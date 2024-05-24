const switcher = 1;

// Функция для обновления случайного значения в указанном элементе
function updateRandomValue() {
     const randomNum = Math.floor(Math.random() * 100); 
     document.getElementById('randomValue').textContent = randomNum; 
}
function switchColor(){
    document.getElementById('button1').classList.toggle('red');
    switcher = (switcher===1)?0:1;
}

setInterval(updateRandomValue, 2000);
setInterval(switchColor, 1000);