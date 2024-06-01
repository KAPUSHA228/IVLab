i=0;
let per=JSON.parse(localStorage.getItem('mas'));
let div1 = document.createElement('div');
div1.id=++i;
console.log(div1.id);
div1.style.top = '440px';
div1.style.left = '760px';
document.querySelector('body').append(div1);
let div2 = document.createElement('div');
div2.id=++i;
div2.style.top = '320px';
div2.style.left = '1040px';
document.querySelector('body').append(div2);
let div3 = document.createElement('div');
div3.id=++i;
div3.style.top = '320px';
div3.style.left = '1180px';
document.querySelector('body').append(div3);
let div4 = document.createElement('div');
div4.id=++i;
div4.style.top = '460px';
div4.style.left = '1040px';
document.querySelector('body').append(div4);
let div5 = document.createElement('div');
div5.id=++i;
div5.style.top = '400px';
div5.style.left = '1220px';
document.querySelector('body').append(div5);
let div6 = document.createElement('div');
div6.id=++i;
div6.style.top = '380px';
div6.style.left = '1270px';
document.querySelector('body').append(div6);
let div7 = document.createElement('div');
div7.id=++i;
div7.style.top = '400px';
div7.style.left = '1320px';
document.querySelector('body').append(div7);
let div8 = document.createElement('div');
div8.id=++i;
div8.style.top = '460px';
div8.style.left = '1380px';
document.querySelector('body').append(div8);
let div9 = document.createElement('div');
div9.id=++i;
div9.style.top = '540px';
div9.style.left = '1340px';
document.querySelector('body').append(div9);

let in2 = document.querySelector('#in2');
let button = document.querySelector('button');
button.onclick=function(){
    let in1 = document.querySelector('#in1');
    if(in1.value==="On"){

    } else if (in1.value==="Off"){

    }else{ 
        in1.value="";
        return;
    }
}
document.querySelectorAll('div').forEach(element => {
    element.onclick = function (event) {
        localStorage.setItem('id',per[event.target.id].isOn);
        window.location.href = './third.html';
    };
});
//проставление ориентиров
for (let grid = 89; grid < window.innerHeight-20; grid+=100) {
    const klmn=document.createElement('section');
    klmn.id='sec2';
    klmn.style.top=grid+'px';
    klmn.style.left = '9px';
    document.querySelector('body').append(klmn);
}
for (let grid = 289; grid < window.innerWidth - 20; grid += 100) {
    const klmn = document.createElement('section');
    klmn.id = 'sec2';
    klmn.style.top = '9px';
    klmn.style.left = grid + 'px'; 
    document.querySelector('body').append(klmn);
}
//отрисовка самого канваса
function setup() {
    createCanvas(window.innerWidth, window.innerHeight); // Создание Canvas
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