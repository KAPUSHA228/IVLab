let div1 = document.createElement('div');
div1.style.top = '68%';
div1.style.left = '50%';
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
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
ctx.lineWidth=0.5;
ctx.strokeStyle = 'black';
ctx.moveTo(30, canvas.height); // Начальная точка шкалы
ctx.lineTo(30,0); // Конечная точка шкалы
ctx.moveTo(0, 10); // Начальная точка шкалы
ctx.lineTo(100, 10); // Конечная точка шкалы
ctx.stroke();