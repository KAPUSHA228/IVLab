class Sensor {
    static counter = 0;
    constructor(isOn) {
        this.logs = 0;
        this.isOn = isOn;
        this.hasMenu = false;
        this.switcher = true;
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
        // setInterval(() => this.toSwitch(), 4000);
    }
    toSwitch() {
        this.isOn = !this.isOn;
        this.LED.classList.toggle('white');
    }
    updateRandomValue() {
        if (this.isOn === true) {
            this.logs = Math.floor(Math.random() * 100);
            this.Info.textContent = this.logs;
        }
    }
    switchColor() {
        if (this.isOn === true) {
            this.LED.classList.toggle('red');
            this.switcher = (this.switcher) ? false : true;
        }
        else {
            this.LED.classList.add('white');
        }
    }
    render() {
        this.Info.textContent = this.logs;
        this.field.append(this.LED);
        this.field.append(this.Info);
        this.Parent.append(this.field);
    }
}
const mas = [];
const person = new Sensor(true);
mas.push(person);
const person2 = new Sensor(false);
mas.push(person2);
const el = document.querySelector('#sensors');
const el2 = document.querySelectorAll('#inf');
el.addEventListener('mouseover', function (event) {
    el.style.backgroundColor = 'grey';
});
el.addEventListener('mouseleave', function (event) {
    el.style.backgroundColor = 'dimgrey';
});
el2.forEach(element => {
    element.addEventListener('click', function () {
        if (this.hasMenu === true) {
            document.querySelector('#menushka').remove();
        }
        else {
            // const menu = document.createElement('div');
            const button = document.createElement('button');
            button.id = 'menushka';
            button.innerText = 'Врубить';
            //menu.append(button);
            element.parentElement.insertAdjacentElement('afterend', button);
            const sensorInstance = mas[element.parentElement.id];
            button.onclick = function () {
                sensorInstance.toSwitch();
                // button.innerText('Вырубить');
            };
        }
        this.hasMenu = !this.hasMenu;
    });
});
const canvas = document.querySelector('#myChart');
const ctx = canvas.getContext('2d');
const canvasStyles = getComputedStyle(canvas);
const canvasHeight = parseInt(canvasStyles.getPropertyValue('height'), 10);
canvas.height += 50;
console.log(canvas.height);
const maxValue = 200;
const barWidth = canvas.width / mas.length / 20;//ширина палочек
const barSpacing = 10;//расстояние между палочками
ctx.fillStyle = 'rgb(96,130,192)';

function doGrafik() {
    let i = 0.5;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText('Колебания жопы:', 40, 20);
    //Пример меток на оси Y
    ctx.fillText('0', 5, canvas.height);
    ctx.fillText('25-', 1, canvas.height - 25);
    ctx.fillText('50-', 1, canvas.height - 50);
    ctx.fillText('75-', 1, canvas.height - 75);
    ctx.fillText('100-', 1, canvas.height - 100);
    ctx.moveTo(0, canvas.height); // Начальная точка шкалы
    ctx.lineTo(0, 50); // Конечная точка шкалы
    ctx.stroke();
    let average = 0;
    mas.forEach((value) => { average += value.logs; });
    const barHeight = average;
    const x = ++i * (barWidth + barSpacing);
    const y = canvas.height - barHeight;
    ctx.fillRect(x, y, barWidth, barHeight);
    //console.log(average/mas.length);
}
setInterval(doGrafik, 2000);


