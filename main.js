const switcher = 1;

// Функция для обновления случайного значения в указанном элементе
function updateRandomValue() {
     const randomNum = Math.floor(Math.random() * 100); // Генерируем случайное число от 0 до 99
     document.getElementById('randomValue').textContent = randomNum; // Обновляем текст в HTML-элементе
}
function switchColor(){
    document.getElementById('button1').classList.toggle('red');
    switcher = (switcher===1)?0:1;
}
// Вызываем функцию обновления случайного значения каждую секунду с помощью setInterval
setInterval(updateRandomValue, 2000);
setInterval(switchColor, 1000);