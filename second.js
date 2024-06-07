let i = 0;
let per = JSON.parse(localStorage.getItem('mas'));
let masOfOn = [];
per.forEach(element => {
    masOfOn.push(element.isOn);
});
//console.log(masOfOn);
let div1 = document.createElement('div');
div1.style.top = '440px';
div1.style.left = '1360px';
div1.classList.add("sens");
document.querySelector('body').append(div1);
let div2 = document.createElement('div');
div2.style.top = '280px';
div2.style.left = '1740px';
div2.classList.add("sens");

document.querySelector('body').append(div2);
let div3 = document.createElement('div');
div3.style.top = '280px';
div3.style.left = '1960px';
div3.classList.add("sens");

document.querySelector('body').append(div3);
let div4 = document.createElement('div');
div4.style.top = '460px';
div4.style.left = '1740px';
div4.classList.add("sens");

document.querySelector('body').append(div4);
let div5 = document.createElement('div');
div5.style.top = '380px';
div5.style.left = '2040px';
div5.classList.add("sens");

document.querySelector('body').append(div5);
let div6 = document.createElement('div');
div6.style.top = '380px';
div6.style.left = '2120px';
div6.classList.add("sens");

document.querySelector('body').append(div6);
let div7 = document.createElement('div');
div7.style.top = '380px';
div7.style.left = '2200px';
div7.classList.add("sens");

document.querySelector('body').append(div7);
let div8 = document.createElement('div');
div8.style.top = '460px';
div8.style.left = '2300px';
div8.classList.add("sens");

document.querySelector('body').append(div8);
//document.querySelector('body').removeChild(div1);
let div9 = document.createElement('div');
div9.style.top = '560px';
div9.style.left = '2200px';
div9.classList.add("sens");
document.querySelector('body').append(div9);
div1.id = i++;
div2.id = i++;
div3.id = i++;
div4.id = i++;
div5.id = i++;
div6.id = i++;
div7.id = i++;
div8.id = i++;
div9.id = i++;
document.querySelectorAll(".sens").forEach(value => {
    value.style.display = "none";
});
window.addEventListener('popstate', (event) => {
    event.preventDefault();
    // Пользователь нажал кнопку "Назад"
    console.log('User pressed the back button');
});
document.querySelectorAll('.sect').forEach(element => {
    element.addEventListener("click", function () {
        const styleSheet = document.styleSheets[0];
        // Получаем первый CSS стиль на странице
        const rules = styleSheet.cssRules || styleSheet.rules;
            for (let i = 0; i < rules.length; i++) {
                if (rules[i].selectorText === '.vis') {
                    rules[i].style.removeProperty('display');
                    break;
                }
            }
            document.querySelector('#reverser').style.removeProperty('display');
            document.querySelector('#sec1').style.display = 'none';
            document.querySelector('#sec2').style.display = 'none';
            document.querySelector('#sec3').style.display = 'none';
            document.querySelectorAll("#sens").forEach((value) => {
                value.style.display = "none";
            }); 
    });
});
let btn = document.createElement('button');
btn.style.position = "absolute;"
btn.id = "reverser";
btn.style.display = "none";
btn.style.height = "100px";
btn.style.width = "200px";
btn.style.position = "absolute";
btn.style.left = "50px";
btn.style.top = "150px";
btn.innerText = 'Назад к секциям';
document.querySelector('body').append(btn);
let button = document.querySelector('#creater');
if (button !== null) {
    button.onclick = function (event) {
        event.preventDefault(); //на всякий пожарный чтоб форма не обновлялась
        let ch = document.querySelector('#check');
        let in2 = document.querySelector('#in2');
        let in3 = document.querySelector('#in3');
        if (in2.value !== "" && in3.value !== "" &&
            !isNaN(in3.value) && !isNaN(in2.value)) {
            if (ch.checked) {
                masOfOn.push(true);
                let div = document.createElement('div');
                div.style.top = in3.value + 'px';
                div.style.left = in2.value + 'px';
                document.querySelector('body').append(div);
                div.id = i++;
            } else {
                masOfOn.push(false);
                let div = document.createElement('div');
                div.style.top = in3.value + 'px';
                div.style.left = in2.value + 'px';
                document.querySelector('body').append(div);
                div.id = i++;
            }
            //ch.focus();
        }
        else {
            return;
        }
    }
}
const reverser = document.querySelector("#reverser");
if (reverser !== null) {
    reverser.onclick = function () {
        const styleSheet = document.styleSheets[0];
        // Получаем первый CSS стиль на странице
        const rules = styleSheet.cssRules || styleSheet.rules;
        for (let i = 0; i < rules.length; i++) {
            if (rules[i].selectorText === '.vis') {
                rules[i].style.display = "none";
                break;
            }
        }
        document.querySelector('#reverser').style.display = "none";
        document.querySelector('#sec1').style.removeProperty('display');
        document.querySelector('#sec2').style.removeProperty('display');
        document.querySelector('#sec3').style.removeProperty('display');
    };
}
setInterval(() => {
    document.querySelectorAll('.sens').forEach(element => {
        element.onclick = function (event) {
            localStorage.setItem('isOn', masOfOn[event.target.id]);
            window.location.href = './third.html';
        };
    })
}, 1000);
//проставление ориентиров
for (let grid = 89; grid < window.innerHeight - 20; grid += 100) {
    const klmn = document.createElement('section');
    klmn.id = 'sec2';
    klmn.style.top = grid + 'px';
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