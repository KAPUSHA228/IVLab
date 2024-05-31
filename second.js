let div1 = document.createElement('div');
div1.style.top = '440px';
div1.style.left = '360px';
document.querySelector('body').append(div1);
let div2 = document.createElement('div');
div2.style.top = '50%';
div2.style.left = '69%';
document.querySelector('body').append(div2);
let div3 = document.createElement('div');
div3.style.top = '50%';
div3.style.left = '78%';
document.querySelector('body').append(div3);
let div4 = document.createElement('div');
div4.style.top = '70%';
div4.style.left = '68%';
document.querySelector('body').append(div4);
let div5 = document.createElement('div');
div5.style.top = '70%';
div5.style.left = '91.5%';
document.querySelector('body').append(div5);
let div6 = document.createElement('div');
div6.style.top = '80%';
div6.style.left = '88%';
document.querySelector('body').append(div6);
let div7 = document.createElement('div');
div7.style.top = '60%';
div7.style.left = '84%';
document.querySelector('body').append(div7);
let div8 = document.createElement('div');
div8.style.top = '60%';
div8.style.left = '80%';
document.querySelector('body').append(div8);
let div9 = document.createElement('div');
div9.style.top = '60%';
div9.style.left = '88%';
document.querySelector('body').append(div9);
document.querySelectorAll('div').forEach(element => {
    element.onclick = function () {
        window.location.href = './third.html';
    };
});
function setup() {
    createCanvas(1470, 700); // Создание Canvas
     }

function draw() {
    background(0, 0, 0, 0); // Установка фона

    let gridSize = 20; // Размер сетки
    stroke(120); // Цвет линий сетки
    for (let x = 0; x < width; x += gridSize) {
        line(x, 0, x, height); // Вертикальные линии
    }
    for (let y = 0; y < height; y += gridSize) {
        line(0, y, width, y); // Горизонтальные линии
    } // Начальные и конечные координаты линии
}
// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');
// ctx.lineWidth=2;
// ctx.fillStyle = 'rgba(0, 0, 0, 0)'; // Прозрачный цвет
// ctx.fillRect(0, 0, canvas.width, canvas.height);
// const gridSize = 7;

// for (let x = 0; x < canvas.width; x += gridSize) {
//     ctx.beginPath();
//     ctx.moveTo(x, 0);
//     ctx.lineTo(x, canvas.height);
//     ctx.stroke();
// }

// for (let y = 0; y < canvas.height; y += gridSize) {
//     ctx.beginPath();
//     ctx.moveTo(0, y);
//     ctx.lineTo(canvas.width, y);
//     ctx.stroke();
// }
// ctx.strokeStyle = 'black';
// ctx.moveTo(10, canvas.height); // Начальная точка шкалы
// ctx.lineTo(10,0); // Конечная точка шкалы
// ctx.moveTo(0, 10); // Начальная точка шкалы
// ctx.lineTo(canvas.width, 10); // Конечная точка шкалы
// ctx.stroke();