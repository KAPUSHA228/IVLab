class Sensor {
    static counter = 0;
    constructor(isOn, type) {
        this.type=type;
        this.logs = 0;
        this.isOn = isOn;
        this.hasMenu = false;
        this.Parent = document.querySelector('#sensors');
        this.Parent.classList.add('container');
        this.field = document.createElement('div');
        this.field.classList.add('pedestal');
        this.field.id = Sensor.counter++;
        this.LED = document.createElement('div');
        this.LED.classList.add('LED');
        this.Info = document.createElement('div');
        this.Info.classList.add('Info');
        this.Info.id = 'inf';
        this.render();
        setInterval(() => this.switchColor(), 1000);
        setInterval(() => this.updateRandomValue(), 2000);
    }
    toSwitch() {
        this.isOn = !this.isOn;
        this.LED.classList.toggle('white');
    }
    updateRandomValue() {
        if (this.isOn) {
            switch (this.type) {
                case "temp":
                    this.logs = Math.floor(Math.random()*(30-0)+0);
                    break;
                case "oxygen":
                    this.logs = Math.floor(Math.random()*(10-0)+0);
                    break;
                case "electro":
                    this.logs = Math.floor(Math.random()*(50-0)+0);
                    break;
                case "water":
                    this.logs = Math.floor(Math.random()*(1-0)+0);
                    break;
                default:
                    break;
            }
            this.Info.textContent = this.logs;
        }
    }
    switchColor() {
        if (this.isOn) {
            this.LED.classList.toggle('orange');
        }
        else {
            this.logs = 0;
            this.Info.innerHTML = this.logs;
            this.LED.classList.remove('orange');
            this.LED.classList.add('white');
        }
    }
    render() {
        //console.log(this.type);
        this.Info.textContent = this.logs;
        this.field.append(this.LED);
        this.field.append(this.Info);
        this.Parent.append(this.field);
    }
}
const mas = [];
const person = new Sensor(true,"temp");
mas.push(person);
const person2 = new Sensor(false,"temp");
mas.push(person2);
const person3 = new Sensor(true,"temp");
mas.push(person3);
const person4 = new Sensor(true,"temp");
mas.push(person4);
const person5 = new Sensor(true,"temp");
mas.push(person5);
const person6 = new Sensor(true,"temp");
mas.push(person6);
const person7 = new Sensor(false,"temp");
mas.push(person7);
const person8 = new Sensor(true,"temp");
mas.push(person8);
const person9 = new Sensor(true,"temp");
mas.push(person9);
document.getElementById('creater').onclick = function () {
    if (document.querySelector('input').value === "On") {
            mas.push(new Sensor(true, "temp"));
    } else if (document.querySelector('input').value === "Off") {
            mas.push(new Sensor(false, "temp"));
    } else {
        document.querySelector('input').value = "";
        return; 
    }
    document.querySelector('input').value = "";

    el2 = document.querySelectorAll('#inf');
    el2.forEach((element, index) => {
        element.addEventListener('click', function () {
            let curr=mas[index];
            if (curr.hasMenu === true) {
                document.querySelector('#menushka').remove();
            }
            else {
                const button = document.createElement('button');
                button.id = 'menushka';
                //button.innerText = curr.isOn ? 'Вырубить' : 'Врубить';   
                element.parentElement.insertAdjacentElement('afterend', button);
                button.onclick = function () {
                    curr.toSwitch();
                    button.innerText = curr.isOn ? 'Вырубить' : 'Врубить';
                };
            }
            curr.hasMenu = !curr.hasMenu;
        });
    });
};
let el = document.querySelector('#sensors');
let el2 = document.querySelectorAll('#inf');
el.addEventListener('mouseover', function (event) {
    el.style.backgroundColor = 'grey';
});
el.addEventListener('mouseleave', function (event) {
    el.style.backgroundColor = 'dimgrey';
});

el2.forEach(element => {
    element.addEventListener('click', function () {
        if (element.hasMenu === true) {
            document.querySelector('#menushka').remove();
        }
        else {
            const button = document.createElement('button');
            button.id = 'menushka';
            button.innerText = 'Врубить';
            element.parentElement.insertAdjacentElement('afterend', button);
            const sensorInstance = mas[element.parentElement.id];
            button.onclick = function () {
                sensorInstance.toSwitch();
                button.innerText = sensorInstance.isOn?'Вырубить':'Врубить';
            };
        }
        element.hasMenu = !element.hasMenu;
    });
});
const canvas = document.querySelector('#myChart');
const ctx = canvas.getContext('2d');
const canvasStyles = getComputedStyle(canvas);
const canvasHeight = parseInt(canvasStyles.getPropertyValue('height'), 10);
canvas.style.height += 50;
const maxValue = 200;
const barWidth = canvas.width /40;//ширина палочек
const barSpacing = 10;//расстояние между палочками
ctx.fillStyle = 'rgb(96,130,192)';
let nums = [];
function doGrafik() {
    let i = 0.5;
    if (nums.length === 16) { nums.shift(); }
    let mas2 = [];
    mas.forEach((value) => {
        if (value.isOn) {
            mas2.push(value);
        }
    });
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText('Колебания всех сенсоров в целом (в пределах 30):', 40, 20);
    //метки на оси Y
    ctx.fillText('0', 5, canvas.height);
    ctx.fillText('10-', 1, canvas.height - 25);
    ctx.fillText('20-', 1, canvas.height - 50);
    ctx.fillText('30-', 1, canvas.height - 75);
    ctx.fillText('40-', 1, canvas.height - 100);
    ctx.moveTo(0, canvas.height); // Начальная точка шкалы
    ctx.lineTo(0, 50); // Конечная точка шкалы
    ctx.stroke();
    let average = 0;
    mas2.forEach((value) => { average += value.logs; });
    const barHeight = 2.6*average / mas2.length;
    nums.push(barHeight);
    nums.forEach((value) => {
        const x = ++i * (barWidth + barSpacing);
        const y = canvas.height - value;
        ctx.fillRect(x, y, barWidth, value);
    })
}
setInterval(doGrafik, 2000);
//отслеживание кнопок undo, reload, другая вкладка не на форме а в целом браузере
 window.addEventListener('popstate', (event) => {
     event.preventDefault();
     // Пользователь нажал кнопку "Назад"
    console.log('User pressed the back button');
 });
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Пользователь переключился на другую вкладку
        console.log('User switched to a different tab');
    } else {
        // Пользователь вернулся на текущую вкладку
        console.log('User returned to the tab');
    }
});
//window.addEventListener('beforeunload', (event) => {

//     // Пользователь пытается перезагрузить страницу
//     console.log('User is trying to reload the page');

//     // Отменить перезагрузку (для показа диалогового окна)
//     event.preventDefault();
//     event.returnValue = '';
// });
setInterval(()=>{
    localStorage.setItem('mas',JSON.stringify(mas));
},1000);
// function printer(){console.log(mas);}
// setInterval(printer,4000);
localStorage.setItem('sensor',JSON.stringify(Sensor));

